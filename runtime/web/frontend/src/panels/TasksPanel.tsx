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

interface ScheduledTask {
  id: string;
  task_kind: "agent" | "shell";
  schedule_type: "cron" | "interval" | "once";
  schedule_value: string;
  status: "active" | "paused" | "completed";
  prompt?: string;
  command?: string;
  created_at?: string;
  last_run_at?: string;
  next_run_at?: string;
  run_count?: number;
}

function TasksTab() {
  const [tasks, setTasks] = useState<ScheduledTask[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [actionBusy, setActionBusy] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      const res = await fetch("/agent/scheduled-tasks", { credentials: "same-origin" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setTasks(data.tasks || []);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => { void fetchTasks(); }, [fetchTasks]);

  const handleAction = useCallback(async (taskId: string, action: "pause" | "resume" | "delete") => {
    setActionBusy(taskId);
    try {
      const res = await fetch("/agent/scheduled-tasks/action", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: taskId, action }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await fetchTasks();
    } catch {
      window.dispatchEvent(new CustomEvent("piclaw:status-flash", {
        detail: { message: `Failed to ${action} task`, type: "error" },
      }));
    } finally {
      setActionBusy(null);
    }
  }, [fetchTasks]);

  if (status === "loading") {
    return (
      <div className="tasks-panel__list">
        <div className="tasks-panel__empty">Loading tasks…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="tasks-panel__list">
        <div className="tasks-panel__empty">
          <span>Failed to load tasks</span>
          <button className="tasks-panel__retry-btn" onClick={() => { setStatus("loading"); void fetchTasks(); }}>Retry</button>
        </div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="tasks-panel__list">
        <div className="tasks-panel__empty">
          <i className="codicon codicon-tasklist" />
          <span>No scheduled tasks</span>
          <span className="tasks-panel__hint">Use /schedule in chat to create one.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="tasks-panel__list">
      {tasks.map((task) => (
        <div key={task.id} className={`tasks-panel__item tasks-panel__item--${task.status}`}>
          <div className="tasks-panel__item-header">
            <span className={`tasks-panel__status-dot tasks-panel__status-dot--${task.status}`} />
            <span className="tasks-panel__item-kind">{task.task_kind}</span>
            <span className="tasks-panel__item-schedule">{task.schedule_type}: {task.schedule_value}</span>
          </div>
          <div className="tasks-panel__item-content">
            {task.prompt || task.command || task.id}
          </div>
          {task.last_run_at && (
            <div className="tasks-panel__item-meta">
              Last run: {new Date(task.last_run_at).toLocaleString()}
              {task.run_count != null && ` (×${task.run_count})`}
            </div>
          )}
          <div className="tasks-panel__item-actions">
            {task.status === "active" && (
              <button
                className="tasks-panel__action-icon"
                disabled={actionBusy === task.id}
                onClick={() => handleAction(task.id, "pause")}
                title="Pause"
              >
                <i className="codicon codicon-debug-pause" />
              </button>
            )}
            {task.status === "paused" && (
              <button
                className="tasks-panel__action-icon"
                disabled={actionBusy === task.id}
                onClick={() => handleAction(task.id, "resume")}
                title="Resume"
              >
                <i className="codicon codicon-play" />
              </button>
            )}
            <button
              className="tasks-panel__action-icon tasks-panel__action-icon--delete"
              disabled={actionBusy === task.id}
              onClick={() => handleAction(task.id, "delete")}
              title="Delete"
            >
              <i className="codicon codicon-trash" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Sessions Tab ─────────────────────────────────────────────────────────────

interface SessionsTabProps {
  activeChatJid: string;
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
