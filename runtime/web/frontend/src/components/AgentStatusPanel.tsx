import { useEffect, useRef, useState, useCallback } from "preact/hooks";

interface PanelState {
  text: string;
  expanded: boolean;
}

const COLLAPSED_MAX_CHARS = 800;

/** Truncate text for collapsed view. */
function truncate(text: string, maxChars: number): { visible: string; truncated: boolean } {
  if (text.length <= maxChars) return { visible: text, truncated: false };
  return { visible: text.slice(0, maxChars), truncated: true };
}

export function AgentStatusPanel() {
  const [draft, setDraftState] = useState<PanelState>({ text: "", expanded: false });
  const [thought, setThoughtState] = useState<PanelState>({ text: "", expanded: false });
  const [status, setStatus] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("");

  const draftBufferRef = useRef("");
  const thoughtBufferRef = useRef("");
  const draftRafRef = useRef<number | null>(null);
  const thoughtRafRef = useRef<number | null>(null);

  const flushDraft = useCallback(() => {
    draftRafRef.current = null;
    setDraftState((prev) => ({ ...prev, text: draftBufferRef.current }));
  }, []);

  const flushThought = useCallback(() => {
    thoughtRafRef.current = null;
    setThoughtState((prev) => ({ ...prev, text: thoughtBufferRef.current }));
  }, []);

  useEffect(() => {
    const handleDraft = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.delta) {
        draftBufferRef.current += detail.delta;
      } else if (detail.text !== undefined) {
        draftBufferRef.current = detail.text;
      }
      if (!draftRafRef.current) {
        draftRafRef.current = requestAnimationFrame(flushDraft);
      }
    };

    const handleThought = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.delta) {
        thoughtBufferRef.current += detail.delta;
      } else if (detail.text !== undefined) {
        thoughtBufferRef.current = detail.text;
      }
      if (!thoughtRafRef.current) {
        thoughtRafRef.current = requestAnimationFrame(flushThought);
      }
    };

    const handleStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.type) setStatus(detail.type);
      if (detail.text || detail.message) setStatusText(detail.text || detail.message || "");
    };

    const handleTurnEnd = () => {
      draftBufferRef.current = "";
      thoughtBufferRef.current = "";
      if (draftRafRef.current) cancelAnimationFrame(draftRafRef.current);
      if (thoughtRafRef.current) cancelAnimationFrame(thoughtRafRef.current);
      draftRafRef.current = null;
      thoughtRafRef.current = null;
      setDraftState({ text: "", expanded: false });
      setThoughtState({ text: "", expanded: false });
      setStatus(null);
      setStatusText("");
    };

    window.addEventListener("piclaw:agent-draft", handleDraft);
    window.addEventListener("piclaw:agent-thought", handleThought);
    window.addEventListener("piclaw:agent-status", handleStatus);
    window.addEventListener("piclaw:agent-turn-end", handleTurnEnd);

    return () => {
      window.removeEventListener("piclaw:agent-draft", handleDraft);
      window.removeEventListener("piclaw:agent-thought", handleThought);
      window.removeEventListener("piclaw:agent-status", handleStatus);
      window.removeEventListener("piclaw:agent-turn-end", handleTurnEnd);
      if (draftRafRef.current) cancelAnimationFrame(draftRafRef.current);
      if (thoughtRafRef.current) cancelAnimationFrame(thoughtRafRef.current);
    };
  }, [flushDraft, flushThought]);

  const hasContent = draft.text || thought.text || (status && status !== "idle" && status !== "done");
  if (!hasContent) return null;

  const toggleDraftExpand = () => setDraftState((prev) => ({ ...prev, expanded: !prev.expanded }));
  const toggleThoughtExpand = () => setThoughtState((prev) => ({ ...prev, expanded: !prev.expanded }));

  return (
    <div className="agent-status-panel">
      {status && status !== "idle" && status !== "done" && (
        <div className="agent-status-panel__status">
          <div className="agent-status-panel__spinner" />
          <span className="agent-status-panel__status-text">
            {statusText || status}
          </span>
        </div>
      )}

      {thought.text && (
        <AgentPanel
          title="Thoughts"
          titleClass="agent-status-panel__title--thought"
          text={thought.text}
          expanded={thought.expanded}
          onToggle={toggleThoughtExpand}
        />
      )}

      {draft.text && (
        <AgentPanel
          title="Draft"
          titleClass="agent-status-panel__title--draft"
          text={draft.text}
          expanded={draft.expanded}
          onToggle={toggleDraftExpand}
        />
      )}
    </div>
  );
}

interface AgentPanelProps {
  title: string;
  titleClass?: string;
  text: string;
  expanded: boolean;
  onToggle: () => void;
}

function AgentPanel({ title, titleClass, text, expanded, onToggle }: AgentPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { visible, truncated } = expanded
    ? { visible: text, truncated: false }
    : truncate(text, COLLAPSED_MAX_CHARS);

  // Write content via ref to avoid Preact dangerouslySetInnerHTML reconciliation issues
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.textContent = "";
      const pre = document.createElement("div");
      pre.className = "agent-status-panel__body-text";
      pre.textContent = visible;
      contentRef.current.appendChild(pre);
    }
  }, [visible]);

  return (
    <div className="agent-status-panel__section">
      <div className={`agent-status-panel__title ${titleClass || ""}`} onClick={onToggle} style={{ cursor: "pointer" }}>
        <button
          type="button"
          className="agent-status-panel__toggle"
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${title}`}
        >
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {expanded
              ? <polyline points="4 6 8 10 12 6" />
              : <polyline points="6 4 10 8 6 12" />
            }
          </svg>
        </button>
        <span className="agent-status-panel__dot" aria-hidden="true" />
        <span>{title}</span>
      </div>
      <div
        className={`agent-status-panel__body ${expanded ? "agent-status-panel__body--expanded" : ""}`}
        ref={contentRef}
      />
      {!expanded && truncated && (
        <button type="button" className="agent-status-panel__more" onClick={onToggle}>
          ▸ more
        </button>
      )}
      {expanded && text.length > COLLAPSED_MAX_CHARS && (
        <button type="button" className="agent-status-panel__more" onClick={onToggle}>
          ▴ show less
        </button>
      )}
    </div>
  );
}
