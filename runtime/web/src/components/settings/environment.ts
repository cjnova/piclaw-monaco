import { html, useCallback, useEffect, useMemo, useState } from '../../vendor/preact-htm.js';
import { getEnvironmentSettings, saveEnvironmentOverride } from '../../api.js';

function normalizeEnvironmentSettings(data: Record<string, any> = {}) {
    const environment = data.environmentSettings || data.settings || data.environment || {};
    return {
        variables: Array.isArray(environment.variables) ? environment.variables : [],
        overrides: environment.overrides && typeof environment.overrides === 'object' ? environment.overrides : {},
        count: Number(environment.count || 0),
        overrideCount: Number(environment.overrideCount || 0),
        keychainEnvNames: Array.isArray(environment.keychainEnvNames) ? environment.keychainEnvNames : [],
    };
}

export function EnvironmentSection({ settingsData, filter = '', setStatus, mergeSettingsData }) {
    const [environment, setEnvironment] = useState(() => normalizeEnvironmentSettings(settingsData || {}));
    const [drafts, setDrafts] = useState({});
    const [newName, setNewName] = useState('');
    const [newValue, setNewValue] = useState('');
    const [savingName, setSavingName] = useState(null);

    useEffect(() => {
        setEnvironment(normalizeEnvironmentSettings(settingsData || {}));
        setDrafts({});
    }, [settingsData]);

    const applyPayload = useCallback((payload) => {
        const next = normalizeEnvironmentSettings({ environmentSettings: payload?.settings || payload });
        setEnvironment(next);
        mergeSettingsData?.({ environmentSettings: next });
        setDrafts({});
        return next;
    }, [mergeSettingsData]);

    const refresh = useCallback(async () => {
        try {
            const payload = await getEnvironmentSettings();
            if (payload?.ok) applyPayload(payload.settings);
            setStatus?.('Environment refreshed.', 'info');
        } catch (error) {
            setStatus?.(String(error?.message || error), 'error');
        }
    }, [applyPayload, setStatus]);

    const saveOverride = useCallback(async (name, value) => {
        const normalizedName = String(name || '').trim();
        if (!normalizedName) return;
        setSavingName(normalizedName);
        try {
            const payload = await saveEnvironmentOverride({ action: 'set', name: normalizedName, value: String(value ?? '') });
            if (payload?.ok) applyPayload(payload.settings);
            setStatus?.(`Saved environment override for ${normalizedName}.`, 'info');
            if (normalizedName === newName.trim()) {
                setNewName('');
                setNewValue('');
            }
        } catch (error) {
            setStatus?.(String(error?.message || error), 'error');
        } finally {
            setSavingName(null);
        }
    }, [applyPayload, newName, setStatus]);

    const clearOverride = useCallback(async (name) => {
        const normalizedName = String(name || '').trim();
        if (!normalizedName) return;
        setSavingName(normalizedName);
        try {
            const payload = await saveEnvironmentOverride({ action: 'clear', name: normalizedName });
            if (payload?.ok) applyPayload(payload.settings);
            setStatus?.(`Cleared environment override for ${normalizedName}.`, 'info');
        } catch (error) {
            setStatus?.(String(error?.message || error), 'error');
        } finally {
            setSavingName(null);
        }
    }, [applyPayload, setStatus]);

    const filteredVariables = useMemo(() => {
        const q = String(filter || '').trim().toLowerCase();
        const rows = Array.isArray(environment.variables) ? environment.variables : [];
        if (!q) return rows;
        return rows.filter((row) => {
            const haystack = `${row?.name || ''} ${row?.value || ''} ${row?.source || ''}`.toLowerCase();
            return haystack.includes(q);
        });
    }, [environment.variables, filter]);

    const setDraft = useCallback((name, value) => {
        setDrafts(prev => ({ ...(prev || {}), [name]: value }));
    }, []);

    return html`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${refresh}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${newName}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${e => setNewName(e.target.value)}
                    />
                    <input
                        type="text"
                        value=${newValue}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${e => setNewValue(e.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!newName.trim() || savingName === newName.trim()}
                        onClick=${() => saveOverride(newName, newValue)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${environment.count} variables visible • ${environment.overrideCount} overrides active • ${environment.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${filteredVariables.map(row => {
                    const name = String(row?.name || '');
                    const draft = Object.prototype.hasOwnProperty.call(drafts, name) ? drafts[name] : row.value;
                    const dirty = draft !== row.value;
                    const saving = savingName === name;
                    return html`
                        <div class="settings-tool-row" key=${name} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${name}>${name}</span>
                            <input
                                type="text"
                                value=${draft}
                                spellcheck="false"
                                onInput=${e => setDraft(name, e.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${row.overridden ? 'Overridden in KV' : 'Inherited from process environment'}>
                                ${row.overridden ? 'override' : 'process'}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${saving || !dirty} onClick=${() => saveOverride(name, draft)}>Save</button>
                                <button type="button" disabled=${saving || !row.overridden} onClick=${() => clearOverride(name)}>Clear</button>
                            </span>
                        </div>
                    `;
                })}
                ${filteredVariables.length === 0 && html`<p class="settings-hint">No environment variables match "${filter}".</p>`}
            </div>
        </div>
    `;
}
