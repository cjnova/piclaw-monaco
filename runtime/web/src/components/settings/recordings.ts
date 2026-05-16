import { html, useState, useEffect, useCallback, useMemo } from '../../vendor/preact-htm.js';
import {
    deleteSessionRecording,
    getSessionRecording,
    getSessionRecordings,
    previewSessionRecordingRedaction,
    sessionRecordingExportUrl,
    sessionRecordingPlaybackUrl,
    startSessionRecording,
    stopSessionRecording,
} from '../../api.js';

function formatDateTime(iso) {
    if (!iso) return '—';
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return date.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function modeLabel(mode) {
    if (mode === 'full') return 'full / trusted';
    if (mode === 'metadata') return 'metadata only';
    return 'redacted';
}

function RecordingPill({ children, type = 'neutral' }) {
    return html`<span class=${`settings-task-pill settings-task-pill-${type}`}>${children}</span>`;
}

function readCurrentChatJid() {
    if (typeof window === 'undefined') return 'web:default';
    return String((window as any).__piclawCurrentChatJid || 'web:default');
}

function parseList(value) {
    return String(value || '').split('\n').map(item => item.trim()).filter(Boolean);
}

function RecordingDetail({ recording, details, onDelete, onRefresh }) {
    if (!recording) return html`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;
    const meta = details?.meta || recording;
    const events = Array.isArray(details?.events) ? details.events : [];
    const redactionCount = events.reduce((count, event) => count + (Array.isArray(event.redactions) ? event.redactions.length : 0), 0);
    const eventKinds = events.reduce((map, event) => {
        const key = event.kind || 'event';
        map[key] = (map[key] || 0) + 1;
        return map;
    }, {});
    return html`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${meta.title || meta.id}</h4>
                    <code>${meta.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${() => window.open(sessionRecordingPlaybackUrl(meta.id), '_blank', 'noopener,noreferrer')}>Playback</button>
                    <button onClick=${onRefresh}>Refresh</button>
                    <button class="danger" onClick=${() => onDelete(meta)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${meta.status || '—'}</strong>
                <span>Mode</span><strong>${modeLabel(meta.mode)}</strong>
                <span>Chat</span><code>${meta.chatJid || '—'}</code>
                <span>Started</span><strong>${formatDateTime(meta.startedAt)}</strong>
                <span>Ended</span><strong>${formatDateTime(meta.endedAt)}</strong>
                <span>Events</span><strong>${meta.eventCount ?? events.length}</strong>
                <span>Redactions</span><strong>${redactionCount}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${sessionRecordingExportUrl(meta.id, 'json')}>Export JSON</a>
                <a href=${sessionRecordingExportUrl(meta.id, 'jsonl')}>Export JSONL</a>
                <a href=${sessionRecordingExportUrl(meta.id, 'html')}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${events.length === 0 && html`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${events.length > 0 && html`
                <div class="settings-recording-event-summary">
                    ${Object.entries(eventKinds).map(([kind, count]) => html`<${RecordingPill}>${kind}: ${count}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(events.slice(0, 5), null, 2)}</pre>
                </div>
            `}
        </div>
    `;
}

export function RecordingsSection({ filter = '', setStatus }) {
    const [recordings, setRecordings] = useState([]);
    const [active, setActive] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [details, setDetails] = useState(null);
    const [acting, setActing] = useState(false);
    const [chatJid, setChatJid] = useState(readCurrentChatJid);
    const [title, setTitle] = useState('');
    const [mode, setMode] = useState('redacted');
    const [includeSnapshot, setIncludeSnapshot] = useState(true);
    const [customKeys, setCustomKeys] = useState('');
    const [customPatterns, setCustomPatterns] = useState('');
    const [previewInput, setPreviewInput] = useState('{"Authorization":"Bearer abc1234567890","content":"hello"}');
    const [previewResult, setPreviewResult] = useState(null);

    useEffect(() => {
        const onChatChange = (event) => {
            const next = String(event?.detail?.chatJid || '').trim();
            if (next) setChatJid(next);
        };
        window.addEventListener('piclaw:current-chat-changed', onChatChange);
        return () => window.removeEventListener('piclaw:current-chat-changed', onChatChange);
    }, []);

    const load = useCallback(async (preferredId = selectedId) => {
        setLoading(true);
        setError(null);
        try {
            const payload = await getSessionRecordings();
            const nextRecordings = payload.recordings || [];
            setRecordings(nextRecordings);
            setActive(payload.active || []);
            const nextSelected = nextRecordings.find(item => item.id === preferredId) || nextRecordings[0] || null;
            setSelectedId(nextSelected?.id || null);
            if (nextSelected?.id) setDetails(await getSessionRecording(nextSelected.id));
            else setDetails(null);
        } catch (e) {
            setError(e?.message || 'Failed to load recordings.');
        } finally {
            setLoading(false);
        }
    }, [selectedId]);

    useEffect(() => { load(); }, [load]);

    const selected = useMemo(() => recordings.find(item => item.id === selectedId) || null, [recordings, selectedId]);
    const activeForChat = useMemo(() => active.find(item => item.chatJid === chatJid) || null, [active, chatJid]);
    const lf = String(filter || '').trim().toLowerCase();
    const filteredRecordings = useMemo(() => {
        if (!lf) return recordings;
        return recordings.filter(item => [item.id, item.title, item.chatJid, item.status, item.mode].some(value => String(value || '').toLowerCase().includes(lf)));
    }, [recordings, lf]);

    const selectRecording = useCallback(async (item) => {
        setSelectedId(item?.id || null);
        setDetails(null);
        if (!item?.id) return;
        try { setDetails(await getSessionRecording(item.id)); }
        catch (e) { setStatus?.(e?.message || 'Failed to load recording.', 'error'); }
    }, [setStatus]);

    const start = useCallback(async () => {
        if (acting) return;
        setActing(true);
        try {
            const redaction = {
                keys: parseList(customKeys),
                patterns: parseList(customPatterns),
            };
            const payload = await startSessionRecording({
                chat_jid: chatJid,
                title: title || undefined,
                mode,
                include_timeline_snapshot: includeSnapshot,
                timeline_snapshot_limit: 80,
                redaction,
            });
            setStatus?.(`Recording started for ${chatJid}.`, 'success');
            await load(payload?.recording?.id);
        } catch (e) {
            setStatus?.(e?.message || 'Failed to start recording.', 'error');
        } finally {
            setActing(false);
        }
    }, [acting, chatJid, customKeys, customPatterns, includeSnapshot, load, mode, setStatus, title]);

    const stop = useCallback(async (target = activeForChat) => {
        if (!target || acting) return;
        setActing(true);
        try {
            const payload = await stopSessionRecording({ id: target.id });
            setStatus?.(`Recording stopped for ${target.chatJid}.`, 'success');
            await load(payload?.recording?.id);
        } catch (e) {
            setStatus?.(e?.message || 'Failed to stop recording.', 'error');
        } finally {
            setActing(false);
        }
    }, [acting, activeForChat, load, setStatus]);

    const remove = useCallback(async (item) => {
        if (!item || acting) return;
        if (!window.confirm(`Delete recording ${item.id}?\n\n${item.title || ''}`)) return;
        setActing(true);
        try {
            await deleteSessionRecording(item.id);
            setStatus?.('Recording deleted.', 'success');
            await load(null);
        } catch (e) {
            setStatus?.(e?.message || 'Failed to delete recording.', 'error');
        } finally {
            setActing(false);
        }
    }, [acting, load, setStatus]);

    const runPreview = useCallback(async () => {
        try {
            const parsed = JSON.parse(previewInput || 'null');
            const payload = await previewSessionRecordingRedaction(parsed, { mode, redaction: { keys: parseList(customKeys), patterns: parseList(customPatterns) } });
            setPreviewResult(payload.preview);
        } catch (e) {
            setPreviewResult({ error: e?.message || 'Preview failed.' });
        }
    }, [customKeys, customPatterns, mode, previewInput]);

    return html`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${chatJid} onInput=${e => setChatJid(e.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${title} onInput=${e => setTitle(e.target.value)} /></label>
                    <label>Mode<select value=${mode} onChange=${e => setMode(e.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${includeSnapshot} onChange=${e => setIncludeSnapshot(e.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${customKeys} onInput=${e => setCustomKeys(e.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${customPatterns} onInput=${e => setCustomPatterns(e.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${activeForChat
                        ? html`<button onClick=${() => stop(activeForChat)} disabled=${acting}>Stop current chat recording</button>`
                        : html`<button onClick=${start} disabled=${acting}>Start recording</button>`}
                    <button onClick=${() => load()} disabled=${loading}>Refresh</button>
                </div>
                ${active.length > 0 && html`<div class="settings-recording-active-row">${active.map(item => html`<${RecordingPill} type="active">REC ${item.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${previewInput} onInput=${e => setPreviewInput(e.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${runPreview}>Preview redaction</button></div>
                ${previewResult && html`<pre>${JSON.stringify(previewResult, null, 2)}</pre>`}
            </details>

            ${loading && html`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${error && html`<div class="settings-error-state">${error}</div>`}
            ${!loading && !error && recordings.length === 0 && html`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!loading && !error && recordings.length > 0 && html`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${filteredRecordings.map(item => html`
                            <button class=${`settings-task-row ${item.id === selectedId ? 'active' : ''}`} onClick=${() => selectRecording(item)}>
                                <span class="settings-task-row-main"><strong>${item.title || item.id}</strong><span>${item.chatJid} · ${formatDateTime(item.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${RecordingPill} type=${item.status === 'recording' ? 'active' : 'completed'}>${item.status}<//><${RecordingPill}>${modeLabel(item.mode)}<//></span>
                                <span class="settings-task-row-times">${item.eventCount || 0} events</span>
                            </button>
                        `)}
                        ${filteredRecordings.length === 0 && html`<p class="settings-hint">No recordings match “${filter}”.</p>`}
                    </div>
                    <${RecordingDetail} recording=${selected} details=${details} onDelete=${remove} onRefresh=${() => selected && selectRecording(selected)} />
                </div>
            `}
        </div>
    `;
}

export const __recordingsSettingsTest = { formatDateTime, modeLabel, parseList };
