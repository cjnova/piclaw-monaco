// @ts-nocheck
import { html, useEffect, useMemo, useState } from '../../vendor/preact-htm.js';
import {
    KEYBOARD_SHORTCUT_ACTIONS,
    formatShortcutBindingList,
    getKeyboardShortcutBindings,
    normalizeShortcutBindingString,
    parseShortcutBindingList,
    readAllKeyboardShortcutBindings,
    resetKeyboardShortcutBindings,
    saveKeyboardShortcutBindings,
} from '../../ui/keyboard-shortcuts.js';

function hasFilterMatch(filter, action, bindingsText) {
    const query = String(filter || '').trim().toLowerCase();
    if (!query) return true;
    return [action.label, action.description, bindingsText, ...(action.defaultBindings || [])]
        .some((part) => String(part || '').toLowerCase().includes(query));
}

export function KeyboardSection({ filter = '', setStatus }) {
    const [drafts, setDrafts] = useState(() => {
        const current = readAllKeyboardShortcutBindings();
        return Object.fromEntries(Object.entries(current).map(([id, bindings]) => [id, formatShortcutBindingList(bindings)]));
    });

    useEffect(() => {
        const sync = () => {
            const current = readAllKeyboardShortcutBindings();
            setDrafts(Object.fromEntries(Object.entries(current).map(([id, bindings]) => [id, formatShortcutBindingList(bindings)])));
        };
        window.addEventListener('piclaw:keyboard-shortcuts-changed', sync);
        return () => window.removeEventListener('piclaw:keyboard-shortcuts-changed', sync);
    }, []);

    const visibleActions = useMemo(() => KEYBOARD_SHORTCUT_ACTIONS.filter((action) => {
        const bindingsText = String(drafts[action.id] || '');
        return hasFilterMatch(filter, action, bindingsText);
    }), [drafts, filter]);

    const saveAction = (actionId) => {
        const raw = String(drafts[actionId] || '').trim();
        const tokens = raw ? raw.split(/[\n,]/).map((part) => part.trim()).filter(Boolean) : [];
        const invalid = tokens.filter((token) => !normalizeShortcutBindingString(token));
        if (invalid.length > 0) {
            setStatus?.(`Invalid shortcut: ${invalid[0]}. Escape is reserved and cannot be rebound.`, 'error');
            return;
        }
        const bindings = parseShortcutBindingList(raw);
        saveKeyboardShortcutBindings(actionId, bindings);
        setDrafts((prev) => ({ ...prev, [actionId]: formatShortcutBindingList(getKeyboardShortcutBindings(actionId)) }));
        setStatus?.('Keyboard shortcuts saved.', 'success');
    };

    const resetAction = (actionId) => {
        resetKeyboardShortcutBindings(actionId);
        setDrafts((prev) => ({ ...prev, [actionId]: formatShortcutBindingList(getKeyboardShortcutBindings(actionId)) }));
        setStatus?.('Keyboard shortcut reset to default.', 'success');
    };

    const resetAll = () => {
        resetKeyboardShortcutBindings();
        const current = readAllKeyboardShortcutBindings();
        setDrafts(Object.fromEntries(Object.entries(current).map(([id, bindings]) => [id, formatShortcutBindingList(bindings)])));
        setStatus?.('Keyboard shortcuts reset to defaults.', 'success');
    };

    return html`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:16px;">
                <button class="settings-addon-btn" onClick=${resetAll}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list">
                ${visibleActions.map((action) => html`
                    <div class="settings-shortcut-card" key=${action.id}>
                        <div class="settings-shortcut-copy">
                            <div class="settings-shortcut-title">${action.label}</div>
                            <div class="settings-hint" style="margin:4px 0 0 0;">${action.description}</div>
                            <div class="settings-shortcut-default">Default: <code>${formatShortcutBindingList(action.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls">
                            <input
                                type="text"
                                value=${drafts[action.id] || ''}
                                placeholder=${formatShortcutBindingList(action.defaultBindings)}
                                onInput=${(e) => setDrafts((prev) => ({ ...prev, [action.id]: e.target.value }))}
                            />
                            <div class="settings-shortcut-actions">
                                <button class="settings-addon-btn settings-addon-btn-install" onClick=${() => saveAction(action.id)}>Save</button>
                                <button class="settings-addon-btn" onClick=${() => resetAction(action.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${visibleActions.length === 0 && html`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `;
}
