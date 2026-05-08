import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { getChatJid } from "../api/chat-jid";
import { chatName } from "../panels/TasksPanel";

type SessionEntry = {
  jid: string;
  name?: string;
  display_name?: string;
  archived?: boolean;
  status?: string;
};

/** Normalize API response objects to SessionEntry shape. */
function normalizeEntry(raw: Record<string, unknown>): SessionEntry {
  return {
    jid: (raw.chat_jid ?? raw.jid ?? "") as string,
    name: (raw.agent_name ?? raw.name) as string | undefined,
    display_name: (raw.display_name ?? raw.session_name) as string | undefined,
    archived: Boolean(raw.archived_at ?? raw.archived),
    status: raw.archived_at ? "archived" : (raw.status as string | undefined),
  };
}

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
      const chatsRes = await fetch("/agent/active-chats", { credentials: "same-origin" });
      if (!chatsRes.ok) throw new Error(`active-chats: HTTP ${chatsRes.status}`);
      const chatsData = await chatsRes.json();

      const branchesRes = await fetch(`/agent/branches?chat_jid=${encodeURIComponent(activeChatJid)}`, {
        credentials: "same-origin",
      });
      if (!branchesRes.ok) throw new Error(`branches: HTTP ${branchesRes.status}`);
      const branchesData = await branchesRes.json();

      const chatRows = (Array.isArray(chatsData) ? chatsData : (chatsData.chats ?? [])).map(normalizeEntry);
      const branchRows = (Array.isArray(branchesData) ? branchesData : (branchesData.chats ?? branchesData.branches ?? [])).map(normalizeEntry);

      const merged = new Map<string, SessionEntry>();
      for (const row of chatRows) {
        merged.set(row.jid, row);
      }
      for (const row of branchRows) {
        const existing = merged.get(row.jid);
        merged.set(row.jid, {
          jid: row.jid,
          name: row.name ?? existing?.name,
          display_name: row.display_name ?? existing?.display_name,
          archived: row.archived,
          status: row.status,
        });
      }

      setSessions(Array.from(merged.values()));
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
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const payload = await res.json().catch(() => null);
      await loadSessions();
      const branchChatJid = payload?.branch?.chat_jid;
      const responseChatJid = payload?.chat_jid;
      if (typeof branchChatJid === "string" && branchChatJid) {
        goToChat(branchChatJid);
      } else if (typeof responseChatJid === "string" && responseChatJid) {
        goToChat(responseChatJid);
      }
    } catch (err) {
      console.warn(`[session-pill] ${actionKey} failed:`, err);
    } finally {
      setActionBusy(null);
      setIsOpen(false);
    }
  }, [actionBusy, loadSessions]);

  const handleFork = () => {
    void runAction("fork", "/agent/branch-fork", { chat_jid: activeChatJid });
  };

  const handleNewRoot = () => {
    const name = prompt("Enter root session name:")?.trim();
    if (!name) return;
    void runAction("root", "/agent/root-session", { name });
  };

  const handleMergeParent = () => {
    void runAction("merge", "/agent/branch-merge-parent", { chat_jid: activeChatJid });
  };

  const handleRename = () => {
    const name = prompt("Enter new session name:")?.trim();
    if (!name) return;
    void runAction("rename", "/agent/branch-rename", { chat_jid: activeChatJid, name });
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

          <div className="session-pill__actions" role="group" aria-label="Session actions">
            <button type="button" className="session-pill__action" disabled={Boolean(actionBusy)} onClick={handleFork}>
              <i className="codicon codicon-git-branch" /> New branch
            </button>
            <button type="button" className="session-pill__action" disabled={Boolean(actionBusy)} onClick={handleNewRoot}>
              <i className="codicon codicon-add" /> New root…
            </button>
            <button type="button" className="session-pill__action" disabled={Boolean(actionBusy)} onClick={handleMergeParent}>
              <i className="codicon codicon-git-merge" /> Merge parent
            </button>
            <button type="button" className="session-pill__action" disabled={Boolean(actionBusy)} onClick={handleRename}>
              <i className="codicon codicon-edit" /> Rename…
            </button>
            <button type="button" className="session-pill__action session-pill__action--danger" disabled={Boolean(actionBusy)} onClick={handleDelete}>
              <i className="codicon codicon-trash" /> Delete current…
            </button>
          </div>
        </div>
      )}
    </span>
  );
}
