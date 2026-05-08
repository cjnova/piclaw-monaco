import { useState, useEffect, useCallback } from "preact/hooks";
import { getChatJid } from "../api/chat-jid";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ActiveChat {
  jid: string;
  name?: string;
  display_name?: string;
}

export interface Branch {
  jid: string;
  name?: string;
  display_name?: string;
  status?: string;
  archived?: boolean;
  parent_jid?: string;
}

function normalizeBranchEntry(raw: Record<string, unknown>): Branch {
  return {
    jid: (raw.chat_jid ?? raw.jid ?? "") as string,
    name: (raw.agent_name ?? raw.name) as string | undefined,
    display_name: (raw.display_name ?? raw.session_name) as string | undefined,
    status: raw.archived_at ? "archived" : (raw.status as string | undefined),
    archived: Boolean(raw.archived_at ?? raw.archived),
    parent_jid: (raw.parent_branch_id ?? raw.parent_jid) as string | undefined,
  };
}

interface SessionsTabProps {
  activeChatJid: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function chatName(entry: { jid: string; name?: string; display_name?: string }): string {
  return entry.display_name ?? entry.name ?? entry.jid.split(":").pop() ?? entry.jid;
}

// ─── Tasks Tab ────────────────────────────────────────────────────────────────


// ─── Task Types ───────────────────────────────────────────────────────────────

interface RunLog {
  run_at: string;
  duration_ms: number;
  status: string;
  result?: string | null;
  error?: string | null;
}

interface ScheduledTask {
  id: string;
  task_kind: "agent" | "shell";
  schedule_type: "cron" | "interval" | "once";
  schedule_value: string;
  status: "active" | "paused" | "completed";
  prompt?: string | null;
  prompt_summary?: string | null;
  command?: string | null;
  command_summary?: string | null;
  summary?: string;
  model?: string | null;
  chat_jid?: string;
  cwd?: string | null;
  timeout_sec?: number | null;
  created_at?: string;
  next_run?: string | null;
  last_run?: string | null;
  last_result?: string | null;
  latest_run_log?: RunLog | null;
  recent_run_logs?: RunLog[];
}

interface TaskCounts {
  active: number;
  paused: number;
  completed: number;
}

type StatusFilter = "all" | "active" | "paused" | "completed";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function relativeTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  if (diff < 0) {
    const future = -diff;
    if (future < 60000) return `in ${Math.round(future / 1000)}s`;
    if (future < 3600000) return `in ${Math.round(future / 60000)}m`;
    if (future < 86400000) return `in ${Math.round(future / 3600000)}h`;
    return `in ${Math.round(future / 86400000)}d`;
  }
  if (diff < 60000) return `${Math.round(diff / 1000)}s ago`;
  if (diff < 3600000) return `${Math.round(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.round(diff / 3600000)}h ago`;
  return `${Math.round(diff / 86400000)}d ago`;
}

function cronHuman(expr: string): string {
  const parts = expr.split(/\s+/);
  if (parts.length !== 5) return expr;
  const [min, hour, dom, mon, dow] = parts;
  if (dom === "*" && mon === "*" && dow === "*") {
    if (hour === "*" && min === "*") return "Every minute";
    if (hour === "*") return `Every hour at :${min.padStart(2, "0")}`;
    return `Daily at ${hour.padStart(2, "0")}:${min.padStart(2, "0")}`;
  }
  if (dow !== "*" && dom === "*" && mon === "*") return `Weekly (${dow}) at ${hour}:${min.padStart(2, "0")}`;
  return expr;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  return `${(ms / 60000).toFixed(1)}m`;
}

// ─── Tasks Tab ────────────────────────────────────────────────────────────────

function TasksTab() {
  const [tasks, setTasks] = useState<ScheduledTask[]>([]);
  const [counts, setCounts] = useState<TaskCounts>({ active: 0, paused: 0, completed: 0 });
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [actionBusy, setActionBusy] = useState<string | null>(null);
  const [expandedLogs, setExpandedLogs] = useState<Set<string>>(new Set());

  const fetchTasks = useCallback(async () => {
    try {
      const params = new URLSearchParams({ include_run_logs: "true", run_log_limit: "5", limit: "50" });
      if (filter !== "all") params.set("status", filter);
      const res = await fetch(`/agent/scheduled-tasks?${params}`, { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setTasks(data.tasks ?? []);
      if (data.counts) setCounts(data.counts);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, [filter]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const handleAction = async (id: string, action: "pause" | "resume" | "delete") => {
    setActionBusy(id);
    try {
      const res = await fetch("/agent/scheduled-tasks/action", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, id, allow_internal: true }),
      });
      if (!res.ok) console.warn("[tasks] action failed:", res.status);
      await fetchTasks();
    } finally {
      setActionBusy(null);
    }
  };

  const toggleLogs = (id: string) => {
    setExpandedLogs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (status === "loading") return <div className="tasks-panel__empty">Loading tasks…</div>;
  if (status === "error") return <div className="tasks-panel__empty tasks-panel__empty--error">Failed to load tasks. <button onClick={fetchTasks}>Retry</button></div>;

  const total = counts.active + counts.paused + counts.completed;

  return (
    <div className="tasks-panel__tasks">
      {/* Status filter tabs */}
      <div className="tasks-panel__filter-tabs">
        {(["all", "active", "paused", "completed"] as StatusFilter[]).map((f) => {
          const count = f === "all" ? total : counts[f];
          return (
            <button
              key={f}
              className={`tasks-panel__filter-tab${filter === f ? " tasks-panel__filter-tab--active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)} ({count})
            </button>
          );
        })}
      </div>

      {tasks.length === 0 ? (
        <div className="tasks-panel__empty">No {filter !== "all" ? filter : ""} tasks</div>
      ) : (
        <div className="tasks-panel__list">
          {tasks.map((task) => (
            <div key={task.id} className="tasks-panel__card">
              {/* Header */}
              <div className="tasks-panel__card-header">
                <span className="tasks-panel__card-id">{task.id}</span>
                <span className={`tasks-panel__badge tasks-panel__badge--${task.status}`}>{task.status}</span>
                <span className="tasks-panel__badge tasks-panel__badge--kind">{task.task_kind}</span>
              </div>

              {/* Schedule */}
              <div className="tasks-panel__card-row">
                <span className="tasks-panel__card-label">Schedule:</span>
                <span className="tasks-panel__card-value">
                  {task.schedule_type === "cron" ? cronHuman(task.schedule_value) : `${task.schedule_type}: ${task.schedule_value}`}
                  <span className="tasks-panel__card-muted"> ({task.schedule_value})</span>
                </span>
              </div>

              {/* Model */}
              {task.model && (
                <div className="tasks-panel__card-row">
                  <span className="tasks-panel__card-label">Model:</span>
                  <span className="tasks-panel__card-value">{task.model}</span>
                </div>
              )}

              {/* Prompt / Command */}
              {(task.prompt_summary || task.prompt) && (
                <div className="tasks-panel__card-row">
                  <span className="tasks-panel__card-label">Prompt:</span>
                  <span className="tasks-panel__card-value tasks-panel__card-mono">{task.prompt_summary || task.prompt}</span>
                </div>
              )}
              {(task.command_summary || task.command) && (
                <div className="tasks-panel__card-row">
                  <span className="tasks-panel__card-label">Command:</span>
                  <span className="tasks-panel__card-value tasks-panel__card-mono">{task.command_summary || task.command}</span>
                </div>
              )}

              {/* Next / Last run */}
              <div className="tasks-panel__card-row">
                <span className="tasks-panel__card-label">Next:</span>
                <span className="tasks-panel__card-value">{relativeTime(task.next_run)}</span>
                <span className="tasks-panel__card-label" style={{ marginLeft: "12px" }}>Last:</span>
                <span className="tasks-panel__card-value">{relativeTime(task.last_run)}</span>
              </div>

              {/* Last result */}
              {task.last_result && (
                <div className="tasks-panel__card-row">
                  <span className="tasks-panel__card-label">Result:</span>
                  <span className="tasks-panel__card-value tasks-panel__card-mono">{task.last_result.slice(0, 120)}</span>
                </div>
              )}

              {/* Run logs (expandable) */}
              {task.recent_run_logs && task.recent_run_logs.length > 0 && (
                <div className="tasks-panel__card-logs">
                  <button className="tasks-panel__logs-toggle" onClick={() => toggleLogs(task.id)}>
                    {expandedLogs.has(task.id) ? "▾" : "▸"} Run history ({task.recent_run_logs.length})
                  </button>
                  {expandedLogs.has(task.id) && (
                    <div className="tasks-panel__logs-list">
                      {task.recent_run_logs.map((log, i) => (
                        <div key={i} className={`tasks-panel__log-entry tasks-panel__log-entry--${log.status}`}>
                          <span>{relativeTime(log.run_at)}</span>
                          <span>{formatDuration(log.duration_ms)}</span>
                          <span className="tasks-panel__log-status">{log.status}</span>
                          {log.error && <span className="tasks-panel__log-error">{log.error.slice(0, 80)}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="tasks-panel__card-actions">
                {task.status === "active" && (
                  <button disabled={actionBusy === task.id} onClick={() => handleAction(task.id, "pause")} title="Pause">⏸ Pause</button>
                )}
                {task.status === "paused" && (
                  <button disabled={actionBusy === task.id} onClick={() => handleAction(task.id, "resume")} title="Resume">▶ Resume</button>
                )}
                <button disabled={actionBusy === task.id} onClick={() => handleAction(task.id, "delete")} title="Delete">🗑 Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


function SessionsTab({ activeChatJid }: SessionsTabProps) {
  const [allSessions, setAllSessions] = useState<Branch[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [actionBusy, setActionBusy] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const navigateToChat = (chatJid: string) => {
    window.location.href = `/?chat_jid=${encodeURIComponent(chatJid)}`;
  };

  const loadData = useCallback(async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const [chatsRes, branchesRes] = await Promise.all([
        fetch("/agent/active-chats", { credentials: "same-origin" }),
        fetch(`/agent/branches?chat_jid=${encodeURIComponent(activeChatJid)}`, { credentials: "same-origin" }),
      ]);

      if (chatsRes.status === 401 || branchesRes.status === 401) {
        setErrorMsg("Authenticate to view sessions.");
        setStatus("error");
        return;
      }
      if (!chatsRes.ok) throw new Error(`active-chats: HTTP ${chatsRes.status}`);
      if (!branchesRes.ok) throw new Error(`branches: HTTP ${branchesRes.status}`);

      const chatsData = await chatsRes.json();
      const branchesData = await branchesRes.json();

      const rawChats: Record<string, unknown>[] = Array.isArray(chatsData) ? chatsData : (chatsData.chats ?? []);
      const rawBranches: Record<string, unknown>[] = Array.isArray(branchesData) ? branchesData : (branchesData.chats ?? branchesData.branches ?? []);

      // Merge into a single deduplicated list, branches data takes priority
      const merged = new Map<string, Branch>();
      for (const raw of rawChats) {
        const entry = normalizeBranchEntry(raw);
        merged.set(entry.jid, entry);
      }
      for (const raw of rawBranches) {
        const entry = normalizeBranchEntry(raw);
        const existing = merged.get(entry.jid);
        merged.set(entry.jid, {
          ...entry,
          name: entry.name ?? existing?.name,
          display_name: entry.display_name ?? existing?.display_name,
        });
      }

      setAllSessions(Array.from(merged.values()));
      setStatus("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to load sessions.");
      setStatus("error");
    }
  }, [activeChatJid]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const runSessionAction = useCallback(async (
    actionKey: string,
    endpoint: string,
    body: Record<string, unknown>,
    errorMessage: string,
  ) => {
    if (actionBusy) return null;
    setActionBusy(actionKey);
    setActionError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        console.warn(`[tasks] ${actionKey} failed:`, res.status);
        setActionError(errorMessage);
        return null;
      }
      const payload = await res.json().catch(() => null);
      await loadData();
      const branchChatJid = payload?.branch?.chat_jid;
      const responseChatJid = payload?.chat_jid;
      return typeof branchChatJid === "string" && branchChatJid
        ? branchChatJid
        : typeof responseChatJid === "string" && responseChatJid
          ? responseChatJid
          : null;
    } catch (err) {
      console.warn(`[tasks] ${actionKey} failed:`, err);
      setActionError(errorMessage);
      return null;
    } finally {
      setActionBusy(null);
    }
  }, [actionBusy, loadData]);

  const handleRenameSession = useCallback(async (chatJid: string) => {
    const name = prompt("Enter new session name:")?.trim();
    if (!name) return;
    await runSessionAction(
      `rename-${chatJid}`,
      "/agent/branch-rename",
      { chat_jid: chatJid, name },
      "Couldn't rename session. Please try again.",
    );
  }, [runSessionAction]);

  const handleDeleteSession = useCallback(async (chatJid: string) => {
    const confirmed = confirm("Delete this session permanently? This cannot be undone.");
    if (!confirmed) return;
    const nextChatJid = await runSessionAction(
      `delete-${chatJid}`,
      "/agent/branch-purge",
      { chat_jid: chatJid },
      "Couldn't delete session. Please try again.",
    );
    if (chatJid === activeChatJid && nextChatJid) {
      navigateToChat(nextChatJid);
    }
  }, [activeChatJid, runSessionAction]);

  const handleNewBranch = useCallback(async () => {
    const nextChatJid = await runSessionAction(
      "fork",
      "/agent/branch-fork",
      { chat_jid: activeChatJid },
      "Couldn't create branch. Please try again.",
    );
    if (nextChatJid) navigateToChat(nextChatJid);
  }, [activeChatJid, runSessionAction]);

  const handleNewRoot = useCallback(async () => {
    const name = prompt("Enter root session name:")?.trim();
    if (!name) return;
    const nextChatJid = await runSessionAction(
      "new-root",
      "/agent/root-session",
      { name },
      "Couldn't create root session. Please try again.",
    );
    if (nextChatJid) navigateToChat(nextChatJid);
  }, [runSessionAction]);

  const handleMergeParent = useCallback(async () => {
    const nextChatJid = await runSessionAction(
      "merge-parent",
      "/agent/branch-merge-parent",
      { chat_jid: activeChatJid },
      "Couldn't merge session into parent. Please try again.",
    );
    if (nextChatJid) navigateToChat(nextChatJid);
  }, [activeChatJid, runSessionAction]);

  const handleRestore = useCallback(async (branchJid: string) => {
    await runSessionAction(
      `restore-${branchJid}`,
      "/agent/branch-restore",
      { chat_jid: branchJid },
      "Couldn't restore branch. Please try again.",
    );
  }, [runSessionAction]);

  if (status === "loading") {
    return (
      <div className="tasks-panel__sessions">
        <div className="tasks-panel__list">
          <div className="tasks-panel__empty">Loading sessions…</div>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="tasks-panel__sessions">
        <div className="tasks-panel__sessions-error">
          <span>{errorMsg || "Failed to load sessions."}</span>
          <button type="button" className="settings-panel__provider-btn" onClick={() => { void loadData(); }}>Retry</button>
        </div>
      </div>
    );
  }

  const currentSession = allSessions.find(s => s.jid === activeChatJid);

  return (
    <div className="tasks-panel__sessions">
      <div className="tasks-panel__list tasks-panel__sessions-list">
        {allSessions.length === 0 && (
          <div className="tasks-panel__empty">No sessions found.</div>
        )}

        {allSessions.map((session) => {
          const isCurrent = session.jid === activeChatJid;
          const isArchived = session.archived || session.status === "archived";
          const isInactive = !isArchived && session.status === "inactive";
          const statusTone = isCurrent ? "current" : isArchived ? "archived" : isInactive ? "inactive" : "active";

          return (
            <div
              key={session.jid}
              className={`tasks-panel__session-row${isCurrent ? " tasks-panel__session-row--current" : ""}${isArchived ? " tasks-panel__session-row--archived" : ""}`}
            >
              <button
                type="button"
                className="tasks-panel__session-main"
                onClick={() => navigateToChat(session.jid)}
                title={session.jid}
              >
                <span className={`tasks-panel__session-dot tasks-panel__session-dot--${statusTone}`} />
                <span className="tasks-panel__session-name">@{chatName(session)}</span>
                <span className="tasks-panel__session-jid">{session.jid}</span>
                <span className="tasks-panel__session-badges">
                  {isCurrent && <span className="tasks-panel__item-badge tasks-panel__item-badge--current">current</span>}
                  {!isArchived && !isInactive && <span className="tasks-panel__item-badge tasks-panel__item-badge--active">active</span>}
                  {isInactive && <span className="tasks-panel__item-badge tasks-panel__item-badge--inactive">inactive</span>}
                  {isArchived && <span className="tasks-panel__item-badge tasks-panel__item-badge--archived">archived</span>}
                </span>
              </button>

              <div className="tasks-panel__session-actions" aria-label={`Actions for ${chatName(session)}`}>
                {isArchived ? (
                  <button
                    type="button"
                    className="tasks-panel__action-icon"
                    disabled={actionBusy === `restore-${session.jid}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      void handleRestore(session.jid);
                    }}
                    title="Restore session"
                  >
                    <i className="codicon codicon-history" />
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="tasks-panel__action-icon"
                      disabled={Boolean(actionBusy)}
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleRenameSession(session.jid);
                      }}
                      title="Rename session"
                    >
                      <i className="codicon codicon-edit" />
                    </button>
                    <button
                      type="button"
                      className="tasks-panel__action-icon tasks-panel__action-icon--delete"
                      disabled={Boolean(actionBusy)}
                      onClick={(event) => {
                        event.stopPropagation();
                        void handleDeleteSession(session.jid);
                      }}
                      title="Delete session"
                    >
                      <i className="codicon codicon-trash" />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="tasks-panel__sessions-footer">
        {actionError && <div className="tasks-panel__sessions-error tasks-panel__sessions-error--inline">{actionError}</div>}
        <div className="tasks-panel__sessions-footer-actions">
          <button type="button" className="settings-panel__provider-btn" disabled={Boolean(actionBusy)} onClick={() => { void handleNewBranch(); }}>
            <i className="codicon codicon-git-branch" /> New branch
          </button>
          <button type="button" className="settings-panel__provider-btn" disabled={Boolean(actionBusy)} onClick={() => { void handleNewRoot(); }}>
            <i className="codicon codicon-add" /> New root…
          </button>
          <button type="button" className="settings-panel__provider-btn" disabled={Boolean(actionBusy)} onClick={() => { void handleMergeParent(); }}
            title={currentSession?.parent_jid ? "Merge this branch into its parent" : "Root sessions cannot be merged"}
          >
            <i className="codicon codicon-git-merge" /> Merge to parent
          </button>
          <button type="button" className="settings-panel__provider-btn" disabled={Boolean(actionBusy)} onClick={() => { void handleRenameSession(activeChatJid); }}>
            <i className="codicon codicon-edit" /> Rename…
          </button>
          <button
            type="button"
            className="settings-panel__provider-btn settings-panel__provider-btn--logout"
            disabled={Boolean(actionBusy)}
            onClick={() => { void handleDeleteSession(activeChatJid); }}
            title="Permanently delete this session"
          >
            <i className="codicon codicon-trash" /> Delete current…
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TasksPanel (root) ────────────────────────────────────────────────────────

type TabId = "tasks" | "sessions";

export function TasksPanel() {
  const [activeTab, setActiveTab] = useState<TabId>("sessions");
  const activeChatJid = getChatJid();

  return (
    <div className="tasks-panel">
      <div className="tasks-panel__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "sessions"}
          className={`tasks-panel__tab${activeTab === "sessions" ? " tasks-panel__tab--active" : ""}`}
          onClick={() => setActiveTab("sessions")}
        >
          Sessions
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "tasks"}
          className={`tasks-panel__tab${activeTab === "tasks" ? " tasks-panel__tab--active" : ""}`}
          onClick={() => setActiveTab("tasks")}
        >
          Tasks
        </button>
      </div>

      <div className="tasks-panel__body">
        {activeTab === "sessions" && <SessionsTab activeChatJid={activeChatJid} />}
        {activeTab === "tasks" && <TasksTab />}
      </div>
    </div>
  );
}
