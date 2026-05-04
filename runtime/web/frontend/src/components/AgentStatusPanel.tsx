import { useEffect, useRef, useState, useCallback } from "preact/hooks";

interface PanelState {
  text: string;
  expanded: boolean;
}

const COLLAPSED_MAX_CHARS = 800;
const STORAGE_KEY = "piclaw:agent-panel-prefs";

function loadPanelPrefs(): { draftExpanded: boolean; thoughtExpanded: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { draftExpanded: false, thoughtExpanded: false };
}

function savePanelPrefs(prefs: { draftExpanded: boolean; thoughtExpanded: boolean }) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {}
}

/** Truncate text for collapsed view. */
function truncate(text: string, maxChars: number): { visible: string; truncated: boolean } {
  if (text.length <= maxChars) return { visible: text, truncated: false };
  return { visible: text.slice(0, maxChars), truncated: true };
}

interface ToolCall {
  id: string;
  name: string;
  title: string;
  status: "running" | "done" | "error";
}

export function AgentStatusPanel() {
  const prefs = loadPanelPrefs();
  const [draft, setDraftState] = useState<PanelState>({ text: "", expanded: prefs.draftExpanded });
  const [thought, setThoughtState] = useState<PanelState>({ text: "", expanded: prefs.thoughtExpanded });
  const [status, setStatus] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("");
  const [tools, setTools] = useState<ToolCall[]>([]);
  const [elapsed, setElapsed] = useState({ draft: 0, thought: 0, tools: 0 });

  const draftBufferRef = useRef("");
  const thoughtBufferRef = useRef("");
  const draftRafRef = useRef<number | null>(null);
  const thoughtRafRef = useRef<number | null>(null);
  const draftStartRef = useRef<number | null>(null);
  const thoughtStartRef = useRef<number | null>(null);
  const toolsStartRef = useRef<number | null>(null);

  const flushDraft = useCallback(() => {
    draftRafRef.current = null;
    setDraftState((prev) => ({ ...prev, text: draftBufferRef.current }));
  }, []);

  const flushThought = useCallback(() => {
    thoughtRafRef.current = null;
    setThoughtState((prev) => ({ ...prev, text: thoughtBufferRef.current }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed({
        draft: draftStartRef.current ? Math.floor((Date.now() - draftStartRef.current) / 1000) : 0,
        thought: thoughtStartRef.current ? Math.floor((Date.now() - thoughtStartRef.current) / 1000) : 0,
        tools: toolsStartRef.current ? Math.floor((Date.now() - toolsStartRef.current) / 1000) : 0,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleDraft = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!draftStartRef.current) draftStartRef.current = Date.now();
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
      if (!thoughtStartRef.current) thoughtStartRef.current = Date.now();
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
      if (detail.type === "tool_call") {
        if (!toolsStartRef.current) toolsStartRef.current = Date.now();
        setTools((prev) => {
          const id = detail.title || detail.tool_name || "unknown";
          if (prev.some((t) => t.id === id && t.status === "running")) return prev;
          return [...prev, {
            id,
            name: detail.tool_name || "tool",
            title: detail.title || detail.tool_name || "Running tool...",
            status: "running",
          }];
        });
      } else if (detail.type === "tool_status") {
        const id = detail.title || detail.tool_name || "unknown";
        setTools((prev) => prev.map((t) =>
          t.id === id ? { ...t, status: "done" as const, title: detail.title || t.title } : t
        ));
      }
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
      draftStartRef.current = null;
      thoughtStartRef.current = null;
      toolsStartRef.current = null;
      const savedPrefs = loadPanelPrefs();
      setDraftState({ text: "", expanded: savedPrefs.draftExpanded });
      setThoughtState({ text: "", expanded: savedPrefs.thoughtExpanded });
      setElapsed({ draft: 0, thought: 0, tools: 0 });
      setStatus(null);
      setStatusText("");
      setTools([]);
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

  const hasContent = draft.text || thought.text || tools.length > 0 || (status && status !== "idle" && status !== "done");
  if (!hasContent) return null;

  const toggleDraftExpand = () => {
    setDraftState((prev) => {
      const next = { ...prev, expanded: !prev.expanded };
      savePanelPrefs({ draftExpanded: next.expanded, thoughtExpanded: thought.expanded });
      return next;
    });
  };
  const toggleThoughtExpand = () => {
    setThoughtState((prev) => {
      const next = { ...prev, expanded: !prev.expanded };
      savePanelPrefs({ draftExpanded: draft.expanded, thoughtExpanded: next.expanded });
      return next;
    });
  };

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

      {tools.length > 0 && (
        <div className="agent-status-panel__tools">
          <div className="agent-status-panel__tools-header">
            <span>Tools</span>
            {elapsed.tools > 0 && (
              <span className="agent-status-panel__elapsed">{elapsed.tools}s</span>
            )}
          </div>
          {tools.map((tool) => (
            <div key={tool.id} className={`agent-status-panel__tool agent-status-panel__tool--${tool.status}`}>
              {tool.status === "running" ? (
                <div className="agent-status-panel__spinner" />
              ) : (
                <span className="agent-status-panel__tool-check">✓</span>
              )}
              <span className="agent-status-panel__tool-title">{tool.title}</span>
            </div>
          ))}
        </div>
      )}

      {thought.text && (
        <AgentPanel
          title="Thoughts"
          titleClass="agent-status-panel__title--thought"
          text={thought.text}
          expanded={thought.expanded}
          elapsed={elapsed.thought}
          onToggle={toggleThoughtExpand}
        />
      )}

      {draft.text && (
        <AgentPanel
          title="Draft"
          titleClass="agent-status-panel__title--draft"
          text={draft.text}
          expanded={draft.expanded}
          elapsed={elapsed.draft}
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
  elapsed?: number;
  onToggle: () => void;
}

function AgentPanel({ title, titleClass, text, expanded, elapsed = 0, onToggle }: AgentPanelProps) {
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
        {elapsed > 0 && (
          <span className="agent-status-panel__elapsed">{elapsed}s</span>
        )}
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
