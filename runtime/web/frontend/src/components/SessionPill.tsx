import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { getChatJid } from "../api/chat-jid";
import {
  chatName,
  extractChatJidFromAction,
  loadMergedSessions,
  sanitizeSessionName,
  type SessionEntry,
} from "../utils/session";

function statusTone(entry: SessionEntry, activeChatJid: string): "current" | "active" | "inactive" | "archived" {
  const isCurrent = entry.jid === activeChatJid;
  const isArchived = entry.archived || entry.status === "archived";
  const isInactive = !isArchived && entry.status === "inactive";
  if (isCurrent) return "current";
  if (isArchived) return "archived";
  if (isInactive) return "inactive";
  return "active";
}

export function SessionPill() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<SessionEntry[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [actionBusy, setActionBusy] = useState<string | null>(null);
  const rootRef = useRef<HTMLSpanElement>(null);
  const activeChatJid = getChatJid();

  const loadSessions = useCallback(async () => {
    setStatus("loading");
    try {
      const { sessions: mergedSessions, unauthorized } = await loadMergedSessions(activeChatJid);
      if (unauthorized) {
        setStatus("error");
        return;
      }
      setSessions(mergedSessions);
      setStatus("idle");
    } catch (err) {
      console.warn("[session-pill] failed to load sessions:", err);
      setStatus("error");
    }
  }, [activeChatJid]);

  useEffect(() => {
    void loadSessions();
  }, [loadSessions]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [isOpen]);

  const activeSession = useMemo(
    () => sessions.find((entry) => entry.jid === activeChatJid),
    [sessions, activeChatJid],
  );

  const goToChat = (chatJid: string) => {
    window.location.href = `/?chat_jid=${encodeURIComponent(chatJid)}`;
  };

  const runAction = useCallback(async (
    actionKey: string,
    endpoint: string,
    body: Record<string, unknown>,
  ) => {
    if (actionBusy) return;
    setActionBusy(actionKey);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        const apiError = typeof errBody?.error === "string" ? errBody.error : `HTTP ${res.status}`;
        throw new Error(apiError);
      }

      const payload = await res.json().catch(() => null);
      await loadSessions();
      const nextChatJid = extractChatJidFromAction(payload);
      if (nextChatJid) {
        goToChat(nextChatJid);
      }
    } catch (err) {
      console.warn(`[session-pill] ${actionKey} failed:`, err);
    } finally {
      setActionBusy(null);
      setIsOpen(false);
    }
  }, [actionBusy, loadSessions]);

  const handleFork = () => {
    void runAction("fork", "/agent/branch-fork", { source_chat_jid: activeChatJid });
  };

  const handleNewRoot = () => {
    const name = sanitizeSessionName(prompt("Enter root session name:"));
    if (!name) return;
    void runAction("root", "/agent/root-session", { agent_name: name });
  };

  const handleMergeParent = () => {
    void runAction("merge", "/agent/branch-merge-parent", { chat_jid: activeChatJid });
  };

  const handleRename = () => {
    const name = sanitizeSessionName(prompt("Enter new session name:"));
    if (!name) return;
    void runAction("rename", "/agent/branch-rename", { chat_jid: activeChatJid, agent_name: name });
  };

  const handleDelete = () => {
    const confirmed = confirm("Delete current session permanently? This cannot be undone.");
    if (!confirmed) return;
    void runAction("delete", "/agent/branch-purge", { chat_jid: activeChatJid });
  };

  const handleRestore = (jid: string) => {
    void runAction("restore", "/agent/branch-restore", { chat_jid: jid });
  };

  return (
    <span ref={rootRef} className="session-pill-wrap">
      <button
        type="button"
        className="session-pill"
        onClick={() => {
          const next = !isOpen;
          setIsOpen(next);
          if (next) void loadSessions();
        }}
        title="Switch session"
      >
        <span className={`session-pill__dot session-pill__dot--${statusTone(activeSession ?? { jid: activeChatJid }, activeChatJid)}`} />
        <span className="session-pill__label">@{chatName(activeSession ?? { jid: activeChatJid })}</span>
        <i className={`codicon ${isOpen ? "codicon-chevron-up" : "codicon-chevron-down"}`} />
      </button>

      {isOpen && (
        <div className="session-pill__dropdown" role="menu">
          <div className="session-pill__section">
            {status === "loading" && <div className="session-pill__empty">Loading sessions…</div>}
            {status === "error" && <div className="session-pill__empty">Failed to load sessions.</div>}
            {status === "idle" && sessions.length === 0 && <div className="session-pill__empty">No sessions</div>}
            {status === "idle" && sessions.map((entry) => {
              const tone = statusTone(entry, activeChatJid);
              const isCurrent = tone === "current";

              return (
                <button
                  type="button"
                  key={entry.jid}
                  className={`session-pill__item${isCurrent ? " session-pill__item--active" : ""}${tone === "archived" ? " session-pill__item--archived" : ""}`}
                  onClick={() => {
                    setIsOpen(false);
                    goToChat(entry.jid);
                  }}
                >
                  <span className={`session-pill__dot session-pill__dot--${tone}`} />
                  <span className="session-pill__item-text">
                    <span className="session-pill__item-name">@{chatName(entry)}</span>
                    <span className="session-pill__item-jid">{entry.jid}</span>
                  </span>
                  {isCurrent && <span className="session-pill__item-badge session-pill__item-badge--current">current</span>}
                  {!entry.archived && (
                    <span className="session-pill__item-icons">
                      <span
                        className="session-pill__item-icon"
                        role="button"
                        tabIndex={0}
                        title="Rename…"
                        onClick={(e) => { e.stopPropagation(); handleRename(); }}
                      >
                        <i className="codicon codicon-edit" />
                      </span>
                      <span
                        className="session-pill__item-icon session-pill__item-icon--danger"
                        role="button"
                        tabIndex={0}
                        title="Delete…"
                        onClick={(e) => { e.stopPropagation(); handleDelete(); }}
                      >
                        <i className="codicon codicon-trash" />
                      </span>
                    </span>
                  )}
                  {tone === "archived" && (
                    <>
                      <span className="session-pill__item-badge">archived</span>
                      <span
                        className="session-pill__item-restore"
                        role="button"
                        tabIndex={0}
                        title="Restore session"
                        onClick={(e) => { e.stopPropagation(); handleRestore(entry.jid); }}
                      >
                        <i className="codicon codicon-history" />
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div className="session-pill__toolbar" role="group" aria-label="Session actions">
            <button type="button" className="session-pill__toolbar-btn" disabled={Boolean(actionBusy)} onClick={handleFork} title="New branch">
              <i className="codicon codicon-repo-forked" /> Fork
            </button>
            <button type="button" className="session-pill__toolbar-btn" disabled={Boolean(actionBusy)} onClick={handleNewRoot} title="New root…">
              <i className="codicon codicon-add" /> New root…
            </button>
            <button type="button" className="session-pill__toolbar-btn" disabled={Boolean(actionBusy)} onClick={handleMergeParent} title="Merge to parent">
              <i className="codicon codicon-git-merge" /> Merge
            </button>
          </div>
        </div>
      )}
    </span>
  );
}
