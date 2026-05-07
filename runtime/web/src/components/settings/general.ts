import { html, useState, useEffect, useCallback, useMemo, useRef } from '../../vendor/preact-htm.js';
import { METERS_EVENT_NAME, applyMetersEnabled, readStoredMetersEnabled } from '../../ui/meters.js';
import { NumberStepper } from './number-stepper.js';

function resolveAvatarPreview(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    if (raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('data:') || raw.startsWith('blob:')) return raw;
    if (raw.startsWith('/workspace/')) {
        return `/workspace/file?path=${encodeURIComponent(raw.slice('/workspace/'.length))}`;
    }
    if (raw.startsWith('/')) return '';
    if (/^[a-zA-Z]:[\\/]/.test(raw)) return '';
    if (raw.startsWith('\\\\')) return '';
    if (raw.includes('\\')) return '';
    return `/workspace/file?path=${encodeURIComponent(raw.replace(/^\.\//, ''))}`;
}

function AvatarField({ value, onChange }) {
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(resolveAvatarPreview(value));

    useEffect(() => { setPreview(resolveAvatarPreview(value)); }, [value]);

    const handleFileSelect = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            setPreview(dataUrl);
            onChange?.(dataUrl);
        };
        reader.readAsDataURL(file);
    }, [onChange]);

    return html`
        <div class="settings-avatar-inline" onClick=${() => inputRef.current?.click()} title="Click to upload">
            ${preview
                ? html`<img src=${preview} alt="avatar" />`
                : html`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${inputRef} style="display:none" onChange=${handleFileSelect} />
        </div>
    `;
}

function normalizeGeneralSettings(data: Record<string, any> = {}) {
    return {
        userName: data.userName || '',
        userAvatar: data.userAvatar || '',
        assistantName: data.assistantName || '',
        assistantAvatar: data.assistantAvatar || '',
        composeUploadLimitMb: data.composeUploadLimitMb ?? 32,
        workspaceUploadLimitMb: data.workspaceUploadLimitMb ?? 256,
    };
}

export function GeneralSection({ settingsData, setStatus, mergeSettingsData }) {
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const [assistantAvatar, setAssistantAvatar] = useState('');
    const [composeUploadLimitMb, setComposeUploadLimitMb] = useState(32);
    const [workspaceUploadLimitMb, setWorkspaceUploadLimitMb] = useState(256);
    const [widgetToken, setWidgetToken] = useState('');
    const [widgetTokenRevealed, setWidgetTokenRevealed] = useState(false);
    const [widgetTokenCopied, setWidgetTokenCopied] = useState(false);
    const [widgetTokenBusy, setWidgetTokenBusy] = useState(false);
    const [metersEnabled, setMetersEnabled] = useState(() => readStoredMetersEnabled(false));
    const [appliedHint, setAppliedHint] = useState(false);
    const savedSnapshotRef = useRef('');
    const saveTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; };
    }, []);

    const applyIncoming = useCallback((data) => {
        const next = normalizeGeneralSettings(data);
        setUserName(next.userName);
        setUserAvatar(next.userAvatar);
        setAssistantName(next.assistantName);
        setAssistantAvatar(next.assistantAvatar);
        setComposeUploadLimitMb(next.composeUploadLimitMb);
        setWorkspaceUploadLimitMb(next.workspaceUploadLimitMb);
        setWidgetToken(data?.widgetToken || '');
        savedSnapshotRef.current = JSON.stringify(next);
    }, []);

    useEffect(() => {
        applyIncoming(settingsData || {});
    }, [settingsData, applyIncoming]);

    useEffect(() => {
        const onMetersChange = (event) => {
            setMetersEnabled(Boolean(event?.detail?.enabled));
        };
        window.addEventListener(METERS_EVENT_NAME, onMetersChange);
        return () => window.removeEventListener(METERS_EVENT_NAME, onMetersChange);
    }, []);

    const currentSnapshot = useMemo(() => JSON.stringify(normalizeGeneralSettings({
        userName, userAvatar, assistantName, assistantAvatar,
        composeUploadLimitMb, workspaceUploadLimitMb,
    })), [
        userName, userAvatar, assistantName, assistantAvatar,
        composeUploadLimitMb, workspaceUploadLimitMb,
    ]);

    useEffect(() => {
        if (currentSnapshot === savedSnapshotRef.current) return;
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(async () => {
            if (!mountedRef.current) return;
            const active = document.activeElement;
            if (active && active.closest?.('.settings-number-stepper')) return;
            try {
                const response = await fetch('/agent/settings/general', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: currentSnapshot,
                });
                const payload = await response.json().catch(() => ({}));
                if (!mountedRef.current) return;
                if (!response.ok || !payload?.ok || !payload?.settings) return;
                savedSnapshotRef.current = currentSnapshot;
                mergeSettingsData?.(payload.settings);
                setAppliedHint(true);
                setTimeout(() => { if (mountedRef.current) setAppliedHint(false); }, 4000);
            } catch (error) {
                console.warn('[settings/general] Failed to persist general settings snapshot.', error);
            }
        }, 800);
        return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
    }, [currentSnapshot, mergeSettingsData]);

    const totpSetup = settingsData?.instanceTotp || {
        configured: false,
        issuer: assistantName || 'Piclaw',
        label: userName ? `${assistantName || 'Piclaw'}:${userName}` : (assistantName || 'Piclaw'),
        secret: '',
        otpauth: '',
        qrSvg: '',
    };

    const copyWidgetToken = useCallback(async () => {
        if (!widgetToken) return;
        try {
            await navigator.clipboard?.writeText(widgetToken);
            setWidgetTokenCopied(true);
            setTimeout(() => { if (mountedRef.current) setWidgetTokenCopied(false); }, 3000);
        } catch (error) {
            console.warn('[settings/general] Failed to copy widget token.', error);
        }
    }, [widgetToken]);

    const regenerateWidgetToken = useCallback(async () => {
        if (widgetTokenBusy) return;
        if (!confirm('Regenerate the widget token? Existing macOS widgets using the old token will stop updating.')) return;
        setWidgetTokenBusy(true);
        try {
            const response = await fetch('/agent/settings/widget-token/regenerate', { method: 'POST' });
            const payload = await response.json().catch(() => ({}));
            if (!response.ok || !payload?.ok || !payload?.settings) throw new Error(payload?.error || 'Failed to regenerate widget token.');
            setWidgetToken(payload.settings.widgetToken || '');
            mergeSettingsData?.(payload.settings);
            setAppliedHint(true);
            setTimeout(() => { if (mountedRef.current) setAppliedHint(false); }, 4000);
        } catch (error) {
            console.warn('[settings/general] Failed to regenerate widget token.', error);
        } finally {
            if (mountedRef.current) setWidgetTokenBusy(false);
        }
    }, [widgetTokenBusy, mergeSettingsData]);

    const isSecureContext = typeof window !== 'undefined' && window.isSecureContext;
    const maskedWidgetToken = widgetToken ? '•'.repeat(Math.min(Math.max(widgetToken.length, 16), 48)) : '—';
    const widgetTokenDisplay = widgetTokenRevealed ? (widgetToken || '—') : maskedWidgetToken;

    return html`
        <div class="settings-section">
            ${appliedHint && html`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${AvatarField} value=${userAvatar} onChange=${setUserAvatar} />
                <input type="text" value=${userName} onInput=${e => setUserName(e.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${AvatarField} value=${assistantAvatar} onChange=${setAssistantAvatar} />
                <input type="text" value=${assistantName} onInput=${e => setAssistantName(e.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${isSecureContext ? html`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            ` : html`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${metersEnabled}
                        onChange=${() => {
                            const next = applyMetersEnabled(!metersEnabled);
                            setMetersEnabled(next);
                        }} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${NumberStepper}
                    label="compose upload limit"
                    value=${composeUploadLimitMb}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${setComposeUploadLimitMb}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${NumberStepper}
                    label="workspace upload limit"
                    value=${workspaceUploadLimitMb}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${setWorkspaceUploadLimitMb}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${widgetTokenDisplay}</code>
                        <button class=${`settings-keychain-reveal-btn${widgetTokenRevealed ? ' active' : ''}`}
                            type="button"
                            onClick=${() => setWidgetTokenRevealed(value => !value)}
                            disabled=${!widgetToken}
                            title=${widgetTokenRevealed ? 'Hide token' : 'Reveal token'}>
                            ${widgetTokenRevealed
                                ? html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
                                : html`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
                            }
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${copyWidgetToken} disabled=${!widgetToken} title="Copy token">
                            ${widgetTokenCopied
                                ? html`<span class="settings-widget-token-copied">Copied</span>`
                                : html`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
                            }
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${regenerateWidgetToken} disabled=${widgetTokenBusy}>${widgetTokenBusy ? 'Regenerating…' : 'Regenerate'}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${totpSetup.configured
                                ? 'Current web-login authenticator secret. Scan this QR to add another authenticator device.'
                                : 'TOTP is not configured for this instance yet, so no setup QR is available.'}
                        </div>
                    </div>
                </div>
                ${totpSetup.configured ? html`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{ __html: totpSetup.qrSvg }}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${totpSetup.issuer || ''} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${totpSetup.label || ''} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${totpSetup.secret || ''} />
                            </div>
                        </div>
                    </div>
                ` : null}
            </div>
        </div>
    `;
}
