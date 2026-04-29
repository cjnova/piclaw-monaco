// @ts-nocheck
import { html, useEffect, useState } from '../vendor/preact-htm.js';
import { consumeRequestedSettingsOpenState, normalizeSettingsSectionId, requestOpenSettingsDialog } from './settings-dialog-events.js';

export function openSettingsDialog(options = {}) {
    requestOpenSettingsDialog(options);
}

export function preloadSettingsDialog() {
    return Promise.resolve();
}

export function SettingsDialogLoader() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (event) => {
            const section = normalizeSettingsSectionId(event?.detail?.section);
            if (section) {
                try { window.__piclawSettingsRequestedSection = section; } catch (e) { void e; }
            }
            setOpen(true);
        };
        window.addEventListener('piclaw:open-settings', handler);
        const pending = consumeRequestedSettingsOpenState();
        if (pending.open) {
            if (pending.section) {
                try { window.__piclawSettingsRequestedSection = pending.section; } catch (e) { void e; }
            }
            setOpen(true);
        }
        return () => window.removeEventListener('piclaw:open-settings', handler);
    }, []);

    if (!open) return null;

    // Lazy-import the content on first open
    const [Content, setContent] = useState(null);
    useEffect(() => {
        import('./settings-dialog.js').then(mod => {
            setContent(() => mod.SettingsDialogContent);
        });
    }, []);

    if (!Content) {
        return html`
            <div class="settings-dialog-backdrop" onClick=${() => setOpen(false)}>
                <div class="settings-dialog settings-dialog-loading-shell">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;
    }

    return html`
        <div class="settings-dialog-backdrop" onClick=${(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
            <${Content} onClose=${() => setOpen(false)} />
        </div>
    `;
}
