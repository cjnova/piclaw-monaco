// @ts-nocheck
import { html, useEffect, useState } from '../vendor/preact-htm.js';

export function openSettingsDialog() {
    window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
}

export function preloadSettingsDialog() {
    return Promise.resolve();
}

export function SettingsDialogLoader() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setOpen(true);
        window.addEventListener('piclaw:open-settings', handler);
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
