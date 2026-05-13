import { useEffect, useRef, useState, useCallback } from "preact/hooks";
import { getMessageUrl } from "../api/chat-jid";

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

/** Sanitize SVG string — allow only safe SVG elements and attributes. */
function sanitizeSvg(raw: string): string {
  if (!raw || typeof raw !== "string") return "";
  // Strip script tags, event handlers, and non-SVG elements
  const cleaned = raw
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/on\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/on\w+\s*=\s*'[^']*'/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "");
  return cleaned;
}


interface StatusHint {
  key: string;
  icon_svg: string;
  label: string;
  title?: string;
}

interface ToolCall {
  id: string;
  name: string;
  title: string;
  status: "running" | "done" | "error";
  hints: StatusHint[];    // "repo • branch"
}

export function AgentStatusPanel() {
  const prefs = loadPanelPrefs();
  const [draft, setDraftState] = useState<PanelState>({ text: "", expanded: prefs.draftExpanded });
  const [thought, setThoughtState] = useState<PanelState>({ text: "", expanded: prefs.thoughtExpanded });
  const [status, setStatus] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("");
  const [tools, setTools] = useState<ToolCall[]>([]);
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [elapsed, setElapsed] = useState({ draft: 0, thought: 0, tools: 0 });

  // #320 Recovery substates
  type RecoveryState = null | "recovering" | "compacting" | "retrying" | "blocked" | "error";
  const [recoveryState, setRecoveryState] = useState<RecoveryState>(null);
  const [recoveryDetail, setRecoveryDetail] = useState("");

  // #323 Watchdog
  type WatchdogState = null | "warning" | "hung";
  const [watchdogState, setWatchdogState] = useState<WatchdogState>(null);
  const [watchdogElapsed, setWatchdogElapsed] = useState(0);
  const lastProgressTimeRef = useRef<number | null>(null);
  const agentRunningRef = useRef(false);

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
        lastProgressTimeRef.current = Date.now();
        agentRunningRef.current = true;
        const id = detail.title || detail.tool_name || "unknown";
        setTools((prev) => {
          if (prev.some((t) => t.id === id && t.status === "running")) return prev;
          return [...prev, {
            id,
            name: detail.tool_name || "tool",
            title: detail.title || detail.tool_name || "Running tool...",
            status: "running" as const,
            hints: Array.isArray(detail.status_hints) ? detail.status_hints : [],
          }];
        });
      } else if (detail.type === "tool_status") {
        lastProgressTimeRef.current = Date.now();
        const id = detail.title || detail.tool_name || "unknown";
        setTools((prev) => prev.map((t) =>
          t.id === id ? { ...t, status: "done" as const, title: detail.title || t.title } : t
        ));
      }
      if (detail.type && detail.type !== "context_usage" && detail.type !== "done") {
        setStatus(detail.type);
        if (detail.type !== "done") {
          lastProgressTimeRef.current = Date.now();
          agentRunningRef.current = true;
        }
      }
      if (detail.text || detail.message) setStatusText(detail.text || detail.message || "");

      // #320 Recovery substates
      if (detail.type === "intent") {
        const key = detail.intent_key;
        if (key === "recovery") {
          const strategy = detail.recovery_strategy || "";
          setRecoveryState("recovering");
          setRecoveryDetail(strategy ? `Recovering — ${strategy.replace(/_/g, " ")}` : "Recovering…");
        } else if (key === "compaction") {
          setRecoveryState("compacting");
          setRecoveryDetail("Auto-compacting…");
        } else if (key === "retry") {
          const attempt = detail.attempt;
          const total = detail.total;
          const delay = detail.delay_seconds;
          setRecoveryState("retrying");
          let txt = "Retrying";
          if (attempt != null && total != null) txt += ` (attempt ${attempt}/${total}`;
          if (delay != null) txt += `, ${delay}s delay`;
          if (attempt != null && total != null) txt += ")";
          setRecoveryDetail(txt);
        }
      } else if (detail.type === "error") {
        const classifier = detail.classifier;
        if (classifier === "auth_config" || classifier === "provider_auth") {
          setRecoveryState("blocked");
          setRecoveryDetail("Authentication required — reconfigure provider");
        } else {
          setRecoveryState("error");
          setRecoveryDetail(detail.message || detail.text || "Recovery exhausted");
        }
      }
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
      setToolsExpanded(false);
      // Reset recovery and watchdog state
      setRecoveryState(null);
      setRecoveryDetail("");
      setWatchdogState(null);
      setWatchdogElapsed(0);
      lastProgressTimeRef.current = null;
      agentRunningRef.current = false;
    };

    let mounted = true;

    window.addEventListener("piclaw:agent-draft", handleDraft);
    window.addEventListener("piclaw:agent-thought", handleThought);
    window.addEventListener("piclaw:agent-status", handleStatus);
    window.addEventListener("piclaw:agent-turn-end", handleTurnEnd);

    return () => {
      mounted = false;
      window.removeEventListener("piclaw:agent-draft", handleDraft);
      window.removeEventListener("piclaw:agent-thought", handleThought);
      window.removeEventListener("piclaw:agent-status", handleStatus);
      window.removeEventListener("piclaw:agent-turn-end", handleTurnEnd);
      if (draftRafRef.current) cancelAnimationFrame(draftRafRef.current);
      if (thoughtRafRef.current) cancelAnimationFrame(thoughtRafRef.current);
    };
  }, [flushDraft, flushThought]);

  // #323 Watchdog interval
  useEffect(() => {
    const watchdogInterval = setInterval(() => {
      if (!agentRunningRef.current || lastProgressTimeRef.current === null) return;
      const secs = Math.floor((Date.now() - lastProgressTimeRef.current) / 1000);
      setWatchdogElapsed(secs);
      if (secs > 60) {
        setWatchdogState("hung");
      } else if (secs > 30) {
        setWatchdogState("warning");
      }
    }, 10000);
    return () => clearInterval(watchdogInterval);
  }, []);

  // #319 Abort handler
  const handleAbort = async () => {
    try {
      await fetch(getMessageUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: "/abort" }),
      });
    } catch {}
    window.dispatchEvent(new CustomEvent("piclaw:agent-turn-end"));
    window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: { type: "done" } }));
  };

  const hasContent = draft.text || thought.text || tools.length > 0 || (status && status !== "idle" && status !== "done") || recoveryState || watchdogState;
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
        <div className="agent-status-card agent-status-card--tools">
          <div className="agent-status-card__header" onClick={() => setToolsExpanded(prev => !prev)}>
            <span className="agent-status-card__dot agent-status-card__dot--tools" />
            <span className="agent-status-card__title">Tools ({tools.length})</span>
            {elapsed.tools > 0 && (
              <span className="agent-status-card__timer">{elapsed.tools}s</span>
            )}
            <span className="agent-status-card__toggle">{!toolsExpanded && tools.length > 3 && <span className="agent-status-card__toggle-label">more…</span>}{toolsExpanded ? "▾" : (tools.length > 3 ? "▸" : "")}</span>
          </div>
          <div className={`agent-status-card__content${toolsExpanded ? "" : " agent-status-card__content--collapsed"}`}>
            {(toolsExpanded ? tools : tools.slice(-3)).map((tool) => (
              <div key={tool.id} className={`agent-status-card__tool-item agent-status-card__tool-item--${tool.status}`}>
                <div className="agent-status-card__tool-indicator">
                  {tool.status === "running" ? (
                    <span className="agent-status-card__tool-spinner" />
                  ) : (
                    <span className="agent-status-panel__tool-check">✓</span>
                  )}
                </div>
                <div className="agent-status-panel__tool-info">
                  <span className="agent-status-panel__tool-title">{tool.title}</span>
                  {tool.hints.length > 0 && (
                    <span className="agent-status-panel__tool-context">
                      {tool.hints.map((hint) => (
                        <span key={hint.key} className="agent-status-panel__tool-hint" title={hint.title || hint.label}>
                          <span className="agent-status-panel__tool-hint-icon" dangerouslySetInnerHTML={{ __html: sanitizeSvg(hint.icon_svg) }} />
                          <span>{hint.label}</span>
                        </span>
                      ))}
                    </span>
                  )}
                </div>
                <span className={`agent-status-card__tool-badge agent-status-card__tool-badge--${tool.status}`}>
                  {tool.status === "running" ? "working" : "done"}
                </span>
              </div>
            ))}
            {!toolsExpanded && tools.length > 3 && (
              <button type="button" className="agent-status-card__more-btn" onClick={() => setToolsExpanded(true)}>
                +{tools.length - 3} more…
              </button>
            )}
          </div>
        </div>
      )}

      {/* #320 Recovery substates pill */}
      {recoveryState && (
        <div className={`agent-status__recovery-pill agent-status__recovery-pill--${recoveryState}`}>
          <span aria-hidden="true">
            {recoveryState === "compacting" ? "🟡" :
             recoveryState === "retrying" ? "🟡" :
             recoveryState === "recovering" ? "🟠" :
             recoveryState === "blocked" ? "🔴" :
             recoveryState === "error" ? "🔴" : ""}
          </span>
          <span>{recoveryDetail}</span>
          {(watchdogState === "hung" || recoveryState === "blocked" || recoveryState === "error") && (
            <button className="agent-status__abort-btn" onClick={handleAbort}>Abort</button>
          )}
        </div>
      )}

      {/* #323 Watchdog notification */}
      {watchdogState && (
        <div className={`agent-status__recovery-pill agent-status__recovery-pill--${watchdogState === "hung" ? "error" : "retrying"}`}>
          <span aria-hidden="true">{watchdogState === "hung" ? "🔴" : "⚠️"}</span>
          <span>
            {watchdogState === "hung"
              ? `Possible hung run (${Math.floor(watchdogElapsed / 60)}m ${watchdogElapsed % 60}s)`
              : `No progress for ${watchdogElapsed}s`}
          </span>
          {watchdogState === "hung" && !recoveryState && (
            <button className="agent-status__abort-btn" onClick={handleAbort}>Abort</button>
          )}
        </div>
      )}

      {thought.text && (
        <AgentPanel
          title="Thoughts"
          type="thought"
          text={thought.text}
          expanded={thought.expanded}
          elapsed={elapsed.thought}
          onToggle={toggleThoughtExpand}
        />
      )}

      {draft.text && (
        <AgentPanel
          title="Draft"
          type="draft"
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
  type: "draft" | "thought";
  text: string;
  expanded: boolean;
  elapsed?: number;
  onToggle: () => void;
}

function AgentPanel({ title, type, text, expanded, elapsed = 0, onToggle }: AgentPanelProps) {
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
    <div className={`agent-status-card agent-status-card--${type}`}>
      <div className="agent-status-card__header" onClick={onToggle}>
        <span className={`agent-status-card__dot agent-status-card__dot--${type}`} aria-hidden="true" />
        <span className="agent-status-card__title">{title}</span>
        {elapsed > 0 && (
          <span className="agent-status-card__timer">{elapsed}s</span>
        )}
        <span className="agent-status-card__toggle" aria-label={`${expanded ? "Collapse" : "Expand"} ${title}`}>
          {!expanded && truncated && <span className="agent-status-card__toggle-label">more…</span>}{expanded ? "▾" : (!expanded && truncated ? "▸" : "")}
        </span>
      </div>
      <div
        className={`agent-status-card__content${expanded ? "" : " agent-status-card__content--collapsed"}`}
        ref={contentRef}
      />
      {!expanded && truncated && (
        <button type="button" className="agent-status-panel__more" onClick={onToggle}>
          <span className="agent-status-card__more">more…</span>
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
