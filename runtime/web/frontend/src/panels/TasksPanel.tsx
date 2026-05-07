import { useState, useEffect, useCallback } from "preact/hooks";
import { getChatJid } from "../api/chat-jid";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ActiveChat {
  jid: string;
  name?: string;
  display_name?: string;
}

interface Branch {
  jid: string;
  name?: string;
  display_name?: string;
  status?: string;
  archived?: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function chatName(entry: { jid: string; name?: string; display_name?: string }): string {
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
  const [sessions, setSessions] = useState<ActiveChat[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [actionBusy, setActionBusy] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

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

      setSessions(Array.isArray(chatsData) ? chatsData : (chatsData.chats ?? []));
      setBranches(Array.isArray(branchesData) ? branchesData : (branchesData.branches ?? []));
      setStatus("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to load sessions.");
      setStatus("error");
    }
  }, [activeChatJid]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleNewSession = useCallback(async () => {
    if (actionBusy) return;
    setActionBusy(true);
    setActionError(null);
    try {
      const res = await fetch("/agent/respond", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "/new-session", chat_jid: activeChatJid }),
      });
      if (!res.ok) {
        console.warn("[tasks] new session failed:", res.status);
        setActionError("Couldn't create session. Please try again.");
        return;
      }
      await loadData();
    } catch (err) {
      console.warn("[tasks] new session failed:", err);
      setActionError("Failed to create session.");
    } finally {
      setActionBusy(false);
    }
  }, [actionBusy, activeChatJid, loadData]);

  const handleRename = useCallback(async () => {
    const newName = prompt("Enter new session name:");
    if (!newName) return;
    setActionBusy(true);
    setActionError(null);
    try {
      const res = await fetch("/agent/respond", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `/session-name ${newName}`, chat_jid: activeChatJid }),
      });
      if (!res.ok) {
        console.warn("[tasks] rename failed:", res.status);
        setActionError("Couldn't rename session. Please try again.");
        return;
      }
      await loadData();
    } catch (err) {
      console.warn("[tasks] rename failed:", err);
      setActionError("Failed to rename session.");
    } finally {
      setActionBusy(false);
    }
  }, [actionBusy, activeChatJid, loadData]);

  if (status === "loading") {
    return (
      <div className="tasks-panel__list">
        <div className="tasks-panel__empty">Loading sessions…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="tasks-panel__list">
        <div className="tasks-panel__error">
          {errorMsg || "Failed to load sessions."}{" "}
          <button className="tasks-panel__retry" onClick={loadData}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="tasks-panel__sessions">
      <div className="tasks-panel__list">
        {sessions.length === 0 && branches.length === 0 && (
          <div className="tasks-panel__empty">No sessions found.</div>
        )}

        {sessions.map((session) => {
          const isCurrent = session.jid === activeChatJid;
          return (
            <button
              key={session.jid}
              type="button"
              className={`tasks-panel__item${isCurrent ? " tasks-panel__item--active" : ""}`}
              onClick={() => {
                window.location.href = `/?chat_jid=${encodeURIComponent(session.jid)}`;
              }}
            >
              <span className="tasks-panel__item-name">@{chatName(session)}</span>
              <span className="tasks-panel__item-sep"> — </span>
              <span className="tasks-panel__item-jid">{session.jid}</span>
              {isCurrent && (
                <span className="tasks-panel__item-badge tasks-panel__item-badge--current">current</span>
              )}
            </button>
          );
        })}

        {branches.map((branch) => {
          const isCurrent = branch.jid === activeChatJid;
          const isArchived = branch.archived || branch.status === "archived";
          return (
            <button
              key={branch.jid}
              type="button"
              className={`tasks-panel__item tasks-panel__item--archived${isCurrent ? " tasks-panel__item--active" : ""}`}
              onClick={() => {
                window.location.href = `/?chat_jid=${encodeURIComponent(branch.jid)}`;
              }}
            >
              <span className="tasks-panel__item-name">@{chatName(branch)}</span>
              <span className="tasks-panel__item-sep"> — </span>
              <span className="tasks-panel__item-jid">{branch.jid}</span>
              <span className={`tasks-panel__item-badge tasks-panel__item-badge--${isArchived ? "archived" : "branch"}`}>
                {isArchived ? "archived" : "branch"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="tasks-panel__actions">
        {actionError && (
          <div className="tasks-panel__error tasks-panel__error--action">{actionError}</div>
        )}
        <button
          type="button"
          className="tasks-panel__action-btn"
          disabled={actionBusy}
          onClick={handleNewSession}
          title="Create a new session"
        >
          New
        </button>
        <button
          type="button"
          className="tasks-panel__action-btn"
          disabled={actionBusy}
          onClick={handleRename}
          title="Rename current session"
        >
          Rename
        </button>
      </div>
    </div>
  );
}

// ─── TasksPanel (root) ────────────────────────────────────────────────────────

type TabId = "tasks" | "sessions";

export function TasksPanel() {
  const [activeTab, setActiveTab] = useState<TabId>("tasks");
  const activeChatJid = getChatJid();

  return (
    <div className="tasks-panel">
      <div className="tasks-panel__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "tasks"}
          className={`tasks-panel__tab${activeTab === "tasks" ? " tasks-panel__tab--active" : ""}`}
          onClick={() => setActiveTab("tasks")}
        >
          Tasks
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "sessions"}
          className={`tasks-panel__tab${activeTab === "sessions" ? " tasks-panel__tab--active" : ""}`}
          onClick={() => setActiveTab("sessions")}
        >
          Sessions
        </button>
      </div>

      <div className="tasks-panel__body">
        {activeTab === "tasks" && <TasksTab />}
        {activeTab === "sessions" && <SessionsTab activeChatJid={activeChatJid} />}
      </div>
    </div>
  );
}
