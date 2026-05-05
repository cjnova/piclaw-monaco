import { html, useCallback, useEffect, useMemo, useRef, useState } from '../../vendor/preact-htm.js';
import { saveWorkspaceSettings } from '../../api.js';
import {
    applyWorkspaceClientSettings,
    readWorkspaceClientSettings,
} from '../../ui/workspace-settings.js';
import { NumberStepper } from './number-stepper.js';

function normalizeWorkspaceSettings(data: Record<string, any> = {}) {
    const workspace = data.workspaceSettings || {};
    return {
        webTerminalEnabled: workspace.webTerminalEnabled !== false,
        vncAllowDirect: workspace.vncAllowDirect !== false,
        treeMaxDepth: workspace.treeMaxDepth ?? 4,
        treeMaxEntries: workspace.treeMaxEntries ?? 5000,
    };
}

export function WorkspaceSection({ settingsData, setStatus, mergeSettingsData }) {
    const [webTerminalEnabled, setWebTerminalEnabled] = useState(true);
    const [vncAllowDirect, setVncAllowDirect] = useState(true);
    const [treeMaxDepth, setTreeMaxDepth] = useState(4);
    const [treeMaxEntries, setTreeMaxEntries] = useState(5000);
    const [refreshIntervalSec, setRefreshIntervalSec] = useState(60);
    const [folderPreviewDepth, setFolderPreviewDepth] = useState(3);
    const [serverAppliedHint, setServerAppliedHint] = useState(false);
    const [browserAppliedHint, setBrowserAppliedHint] = useState(false);
    const savedSnapshotRef = useRef('');
    const saveTimerRef = useRef(null);
    const serverHintTimerRef = useRef(null);
    const browserHintTimerRef = useRef(null);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
            if (serverHintTimerRef.current) clearTimeout(serverHintTimerRef.current);
            if (browserHintTimerRef.current) clearTimeout(browserHintTimerRef.current);
        };
    }, []);

    const applyIncoming = useCallback((data) => {
        const next = normalizeWorkspaceSettings(data);
        const browser = readWorkspaceClientSettings();
        setWebTerminalEnabled(next.webTerminalEnabled);
        setVncAllowDirect(next.vncAllowDirect);
        setTreeMaxDepth(next.treeMaxDepth);
        setTreeMaxEntries(next.treeMaxEntries);
        setRefreshIntervalSec(browser.refreshIntervalSec);
        setFolderPreviewDepth(browser.folderPreviewDepth);
        savedSnapshotRef.current = JSON.stringify(next);
    }, []);

    useEffect(() => {
        applyIncoming(settingsData || {});
    }, [settingsData, applyIncoming]);

    const currentServerSnapshot = useMemo(() => JSON.stringify(normalizeWorkspaceSettings({
        workspaceSettings: {
            webTerminalEnabled,
            vncAllowDirect,
            treeMaxDepth,
            treeMaxEntries,
        },
    })), [webTerminalEnabled, vncAllowDirect, treeMaxDepth, treeMaxEntries]);

    useEffect(() => {
        if (currentServerSnapshot === savedSnapshotRef.current) return;
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(async () => {
            if (!mountedRef.current) return;
            const active = document.activeElement;
            if (active && active.closest?.('.settings-number-stepper')) return;
            try {
                const payload = await saveWorkspaceSettings(JSON.parse(currentServerSnapshot));
                if (!mountedRef.current || !payload?.ok || !payload?.settings) return;
                savedSnapshotRef.current = currentServerSnapshot;
                mergeSettingsData?.({ workspaceSettings: payload.settings });
                setStatus?.(null);
                setServerAppliedHint(true);
                if (serverHintTimerRef.current) clearTimeout(serverHintTimerRef.current);
                serverHintTimerRef.current = setTimeout(() => {
                    if (mountedRef.current) setServerAppliedHint(false);
                }, 4000);
            } catch (error) {
                setStatus?.(String(error?.message || error), 'error');
            }
        }, 800);
        return () => {
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        };
    }, [currentServerSnapshot, mergeSettingsData, setStatus]);

    const applyBrowserPatch = useCallback((patch) => {
        const next = applyWorkspaceClientSettings(patch);
        setRefreshIntervalSec(next.refreshIntervalSec);
        setFolderPreviewDepth(next.folderPreviewDepth);
        setBrowserAppliedHint(true);
        if (browserHintTimerRef.current) clearTimeout(browserHintTimerRef.current);
        browserHintTimerRef.current = setTimeout(() => {
            if (mountedRef.current) setBrowserAppliedHint(false);
        }, 3000);
    }, []);

    return html`
        <div class="settings-section">
            ${serverAppliedHint && html`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${browserAppliedHint && html`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${webTerminalEnabled} onChange=${e => setWebTerminalEnabled(e.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${vncAllowDirect} onChange=${e => setVncAllowDirect(e.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${NumberStepper}
                    label="workspace tree max depth"
                    value=${treeMaxDepth}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${setTreeMaxDepth}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${NumberStepper}
                    label="workspace tree max entries"
                    value=${treeMaxEntries}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${setTreeMaxEntries}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${NumberStepper}
                    label="workspace refresh interval"
                    value=${refreshIntervalSec}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(value) => applyBrowserPatch({ refreshIntervalSec: value })}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${NumberStepper}
                    label="folder preview scan depth"
                    value=${folderPreviewDepth}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(value) => applyBrowserPatch({ folderPreviewDepth: value })}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `;
}
