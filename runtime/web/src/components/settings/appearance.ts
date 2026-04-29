// @ts-nocheck
import { html, useState, useEffect, useCallback, useMemo, useRef } from '../../vendor/preact-htm.js';
import { applyThemeFromEvent } from '../../ui/theme.js';

function normalizeAppearanceSettings(data = {}) {
    return {
        uiTheme: typeof data.uiTheme === 'string' && data.uiTheme.trim() ? data.uiTheme.trim() : 'default',
        uiTint: typeof data.uiTint === 'string' && data.uiTint.trim() ? data.uiTint.trim() : '',
    };
}

export function ThemeSection({ themes, colorKeys, settingsData, setStatus, mergeSettingsData }) {
    const [currentTheme, setCurrentTheme] = useState('default');
    const [currentTint, setCurrentTint] = useState('');
    const [saving, setSaving] = useState(false);
    const savedSnapshotRef = useRef('');
    const saveTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; };
    }, []);

    const applyIncoming = useCallback((data) => {
        const next = normalizeAppearanceSettings(data);
        setCurrentTheme(next.uiTheme);
        setCurrentTint(next.uiTint);
        savedSnapshotRef.current = JSON.stringify(next);
    }, []);

    useEffect(() => {
        if (settingsData) {
            applyIncoming(settingsData);
            return;
        }
        applyIncoming({
            uiTheme: document.documentElement.dataset.colorTheme || 'default',
            uiTint: document.documentElement.dataset.tint || '',
        });
    }, [settingsData, applyIncoming]);

    const applyLocal = useCallback((name, tint) => {
        applyThemeFromEvent({ theme: name, tint: tint || null });
        setCurrentTheme(name || 'default');
        setCurrentTint(tint || '');
    }, []);

    const currentSnapshot = useMemo(() => JSON.stringify(normalizeAppearanceSettings({
        uiTheme: currentTheme,
        uiTint: currentTint,
    })), [currentTheme, currentTint]);

    useEffect(() => {
        if (currentSnapshot === savedSnapshotRef.current) return;
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(async () => {
            if (!mountedRef.current) return;
            setSaving(true);
            try {
                const response = await fetch('/agent/settings/general', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: currentSnapshot,
                });
                const payload = await response.json().catch(() => ({}));
                if (!mountedRef.current) return;
                if (!response.ok || !payload?.ok || !payload?.settings) {
                    setStatus?.(payload?.error || 'Failed to save appearance settings.', 'error');
                    return;
                }
                savedSnapshotRef.current = currentSnapshot;
                mergeSettingsData?.(payload.settings);
                setStatus?.('Appearance synced across clients.', 'success');
            } catch (error) {
                if (!mountedRef.current) return;
                console.warn('[settings/appearance] Failed to persist appearance settings.', error);
                setStatus?.('Failed to save appearance settings.', 'error');
            } finally {
                if (mountedRef.current) setSaving(false);
            }
        }, 250);
        return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
    }, [currentSnapshot, mergeSettingsData, setStatus]);

    const keys = colorKeys || [];
    const presets = themes || [];

    return html`
        <div class="settings-section">
            ${saving && html`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${currentTheme === 'default'}
                        onChange=${() => applyLocal('default', currentTint)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${currentTint || '#1d9bf0'}
                        onInput=${e => {
                            const hex = e.target.value;
                            setCurrentTint(hex);
                            if (currentTheme === 'default') {
                                applyThemeFromEvent({ theme: 'default', tint: hex });
                            }
                        }} />
                    ${currentTint && html`
                        <button class="settings-tint-clear" onClick=${() => applyLocal('default', '')}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${currentTint || 'none'}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${keys.map(k => html`<th class="settings-swatch-header">${k.replace(/([A-Z])/g, ' $1').trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${presets.filter(t => t.name !== 'default').map(t => html`
                        <tr class=${t.name === currentTheme ? 'settings-row-active' : ''}
                            style="cursor:pointer" onClick=${() => applyLocal(t.name, '')}>
                            <td><input type="radio" name="settings-theme" checked=${t.name === currentTheme} onChange=${() => applyLocal(t.name, '')} /></td>
                            <td><strong>${t.label}</strong></td>
                            <td>${t.mode}</td>
                            ${keys.map(k => {
                                const c = t.colors?.[k];
                                return html`<td class="settings-swatch-cell">
                                    ${c ? html`<span class="settings-color-swatch" style=${'background:' + c} title=${c}></span>` : '\u2014'}
                                </td>`;
                            })}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `;
}
