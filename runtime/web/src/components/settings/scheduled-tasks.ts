import { html, useState, useEffect, useCallback, useMemo } from '../../vendor/preact-htm.js';
import { getScheduledTasks, updateScheduledTask } from '../../api.js';

const STATUS_OPTIONS = ['all', 'active', 'paused', 'completed'];

function formatDateTime(iso) {
    if (!iso) return '—';
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function formatDuration(ms) {
    const value = Number(ms);
    if (!Number.isFinite(value)) return '—';
    if (value < 1000) return `${Math.round(value)}ms`;
    return `${(value / 1000).toFixed(value < 10_000 ? 1 : 0)}s`;
}

function labelForSchedule(task) {
    if (!task) return '—';
    if (task.schedule_type === 'once') return `once · ${formatDateTime(task.schedule_value)}`;
    if (task.schedule_type === 'interval') return `interval · ${task.schedule_value}`;
    if (task.schedule_type === 'cron') return `cron · ${task.schedule_value}`;
    return `${task.schedule_type || 'schedule'} · ${task.schedule_value || '—'}`;
}

function kindLabel(task) {
    const kind = task?.task_kind || 'agent';
    return kind === 'internal' ? 'internal/protected' : kind;
}

function isProtectedTask(task) {
    return (task?.task_kind || 'agent') === 'internal';
}

function summarizeError(error) {
    if (!error) return '';
    const normalized = String(error).replace(/\s+/g, ' ').trim();
    return normalized.length > 180 ? `${normalized.slice(0, 179)}…` : normalized;
}

function TaskPill({ children, type = 'neutral' }) {
    return html`<span class=${`settings-task-pill settings-task-pill-${type}`}>${children}</span>`;
}

function TaskRunLogList({ task }) {
    const logs = Array.isArray(task?.recent_run_logs) ? task.recent_run_logs : [];
    if (!logs.length) return html`<p class="settings-hint">No run logs recorded yet.</p>`;
    return html`
        <div class="settings-task-run-list">
            ${logs.map(log => html`
                <div class=${`settings-task-run-row settings-task-run-${log.status || 'unknown'}`}>
                    <div class="settings-task-run-meta">
                        <${TaskPill} type=${log.status === 'error' ? 'error' : 'success'}>${log.status || 'unknown'}<//>
                        <span>${formatDateTime(log.run_at)}</span>
                        <span>${formatDuration(log.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${log.error_summary || summarizeError(log.error) || log.result_summary || log.result || 'No summary'}
                    </div>
                </div>
            `)}
        </div>
    `;
}

function TaskDetail({ task, onAction }) {
    if (!task) return html`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;
    const protectedTask = isProtectedTask(task);
    return html`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${task.summary || task.id}</h4>
                    <code>${task.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${task.status === 'active' && html`<button onClick=${() => onAction('pause', task)}>Pause</button>`}
                    ${task.status === 'paused' && html`<button onClick=${() => onAction('resume', task)}>Resume</button>`}
                    <button class="danger" onClick=${() => onAction('delete', task)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${task.status || '—'}</strong>
                <span>Kind</span><strong>${kindLabel(task)}</strong>
                <span>Schedule</span><strong>${labelForSchedule(task)}</strong>
                <span>Next run</span><strong>${formatDateTime(task.next_run)}</strong>
                <span>Last run</span><strong>${formatDateTime(task.last_run)}</strong>
                <span>Last result</span><strong>${task.latest_run_log?.status || task.last_result || '—'}</strong>
                <span>Chat</span><code>${task.chat_jid || '—'}</code>
                <span>Model</span><code>${task.model || 'default'}</code>
                ${task.cwd && html`<span>CWD</span><code>${task.cwd}</code>`}
                ${task.timeout_sec && html`<span>Timeout</span><strong>${task.timeout_sec}s</strong>`}
                ${protectedTask && html`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${task.task_kind === 'shell' ? 'Command' : 'Prompt'}</strong>
                <pre>${task.command || task.prompt || task.command_summary || task.prompt_summary || task.summary || '—'}</pre>
            </div>
            <h4>Recent runs</h4>
            <${TaskRunLogList} task=${task} />
        </div>
    `;
}

export function ScheduledTasksSection({ filter = '', setStatus }) {
    const [tasks, setTasks] = useState([]);
    const [counts, setCounts] = useState({ active: 0, paused: 0, completed: 0 });
    const [statusFilter, setStatusFilter] = useState('all');
    const [chatFilter, setChatFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    const [acting, setActing] = useState(false);

    const loadTasks = useCallback(async (options: any = {}) => {
        setLoading(true);
        setError(null);
        try {
            const payload = await getScheduledTasks({
                status: statusFilter,
                chatJid: chatFilter.trim() || undefined,
                limit: 50,
                includeRunLogs: true,
                runLogLimit: 5,
            });
            setTasks(payload.tasks || []);
            setCounts(payload.counts || { active: 0, paused: 0, completed: 0 });
            const preferredId = options.selectedId || selectedId;
            const nextSelected = (payload.tasks || []).find(task => task.id === preferredId) || (payload.tasks || [])[0] || null;
            setSelectedId(nextSelected?.id || null);
            setSelectedTask(nextSelected);
        } catch (e) {
            setError(e?.message || 'Failed to load scheduled tasks.');
        } finally {
            setLoading(false);
        }
    }, [statusFilter, chatFilter, selectedId]);

    useEffect(() => { loadTasks(); }, [loadTasks]);

    const lf = String(filter || '').trim().toLowerCase();
    const filteredTasks = useMemo(() => {
        if (!lf) return tasks;
        return tasks.filter(task => [
            task.id,
            task.chat_jid,
            task.status,
            task.task_kind,
            task.schedule_type,
            task.schedule_value,
            task.summary,
            task.prompt_summary,
            task.command_summary,
            task.latest_run_log?.error_summary,
        ].some(value => String(value || '').toLowerCase().includes(lf)));
    }, [tasks, lf]);

    const selectTask = useCallback((task) => {
        setSelectedId(task?.id || null);
        setSelectedTask(task || null);
    }, []);

    const runAction = useCallback(async (action, task) => {
        if (!task || acting) return;
        const protectedTask = isProtectedTask(task);
        const summary = task.summary || task.command_summary || task.prompt_summary || task.id;
        const confirmation = action === 'delete'
            ? `Delete scheduled task ${task.id}?\n\n${summary}`
            : `${action === 'pause' ? 'Pause' : 'Resume'} scheduled task ${task.id}?\n\n${summary}`;
        if (!window.confirm(confirmation)) return;
        if (protectedTask && !window.confirm(`Task ${task.id} is internal/protected. Continue with ${action}?`)) return;

        setActing(true);
        setStatus?.(`${action === 'delete' ? 'Deleting' : action === 'pause' ? 'Pausing' : 'Resuming'} ${task.id}…`, 'info');
        try {
            await updateScheduledTask(action, task.id, { allowInternal: protectedTask });
            setStatus?.(`Scheduled task ${task.id} ${action === 'delete' ? 'deleted' : action === 'pause' ? 'paused' : 'resumed'}.`, 'success');
            await loadTasks({ selectedId: action === 'delete' ? null : task.id });
        } catch (e) {
            setStatus?.(e?.message || `Failed to ${action} task.`, 'error');
        } finally {
            setActing(false);
        }
    }, [acting, loadTasks, setStatus]);

    return html`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${TaskPill} type="active">Active ${counts.active || 0}<//>
                    <${TaskPill} type="paused">Paused ${counts.paused || 0}<//>
                    <${TaskPill} type="completed">Completed ${counts.completed || 0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${statusFilter} onChange=${e => setStatusFilter(e.target.value)}>
                        ${STATUS_OPTIONS.map(option => html`<option value=${option}>${option === 'all' ? 'All statuses' : option}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${chatFilter} onInput=${e => setChatFilter(e.target.value)} />
                    <button onClick=${() => loadTasks()} disabled=${loading}>Refresh</button>
                </div>
            </div>

            ${loading && html`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${error && html`<div class="settings-error-state">${error}</div>`}
            ${!loading && !error && tasks.length === 0 && html`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/tasks`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!loading && !error && tasks.length > 0 && html`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${filteredTasks.map(task => html`
                            <button class=${`settings-task-row ${task.id === selectedId ? 'active' : ''}`} onClick=${() => selectTask(task)}>
                                <span class="settings-task-row-main">
                                    <strong>${task.summary || task.id}</strong>
                                    <span>${labelForSchedule(task)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${TaskPill} type=${task.status || 'neutral'}>${task.status}<//>
                                    <${TaskPill}>${kindLabel(task)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${formatDateTime(task.next_run)} · Last ${formatDateTime(task.last_run)}${task.latest_run_log?.status ? ` · ${task.latest_run_log.status}` : ''}</span>
                            </button>
                        `)}
                        ${filteredTasks.length === 0 && html`<p class="settings-hint">No tasks match “${filter}”.</p>`}
                    </div>
                    <${TaskDetail} task=${selectedTask && filteredTasks.some(task => task.id === selectedTask.id) ? selectedTask : filteredTasks[0]} onAction=${runAction} />
                </div>
            `}
        </div>
    `;
}

export const __scheduledTasksSettingsTest = {
    formatDateTime,
    formatDuration,
    labelForSchedule,
    kindLabel,
    isProtectedTask,
};
