// @ts-nocheck
/**
 * settings-dialog-loader.ts — Lazy-loads the settings dialog module on first open.
 * After load, the SettingsDialog manages its own open/close state via the
 * 'piclaw:open-settings' custom event.
 */
import { html, useEffect, useState } from '../vendor/preact-htm.js';

type SettingsDialogModule = typeof import('./settings-dialog.js');

let settingsDialogModule: SettingsDialogModule | null = null;
let loadPromise: Promise<SettingsDialogModule> | null = null;

function ensureModule(): Promise<SettingsDialogModule> {
    if (settingsDialogModule) return Promise.resolve(settingsDialogModule);
    if (loadPromise) return loadPromise;
    const t0 = performance.now();
    loadPromise = import('./settings-dialog.js').then((mod) => {
        console.info(`[settings-loader] import resolved in ${(performance.now() - t0).toFixed(1)}ms`);
        settingsDialogModule = mod;
        loadPromise = null;
        return mod;
    }).catch((error) => {
        loadPromise = null;
        throw error;
    });
    return loadPromise;
}

export function openSettingsDialog() {
    window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
}

export function preloadSettingsDialog(): Promise<SettingsDialogModule> {
    return ensureModule();
}

/**
 * Loader component. Once the module is loaded, it stays loaded and
 * SettingsDialog handles its own visibility via the custom event.
 */
export function SettingsDialogLoader() {
    const [loaded, setLoaded] = useState(!!settingsDialogModule);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        if (loaded) return;
        // On first 'piclaw:open-settings', load the module
        const handleOpen = () => {
            if (settingsDialogModule) {
                setLoaded(true);
                return;
            }
            setShowSpinner(true);
            ensureModule()
                .then(() => {
                    setLoaded(true);
                    setShowSpinner(false);
                    // Re-fire so the now-mounted SettingsDialog catches it
                    requestAnimationFrame(() => {
                        window.dispatchEvent(new CustomEvent('piclaw:open-settings'));
                    });
                })
                .catch(() => setShowSpinner(false));
        };
        window.addEventListener('piclaw:open-settings', handleOpen);
        return () => window.removeEventListener('piclaw:open-settings', handleOpen);
    }, [loaded]);

    if (!loaded) {
        if (!showSpinner) return null;
        return html`
            <div class="settings-dialog-backdrop settings-dialog-backdrop-loader" aria-live="polite">
                <div class="settings-dialog settings-dialog-loading-shell" role="status">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Module loaded — render SettingsDialog permanently.
    // It manages its own open/close state internally.
    const Comp = settingsDialogModule?.SettingsDialog;
    if (!Comp) return null;
    return html`<${Comp} />`;
}
