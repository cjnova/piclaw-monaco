import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import { type SettingsData, type SettingsSectionProps } from "./types";
import { AvatarSection } from "./AvatarSection";
import { registerSettingsPane } from "./pane-registry";
import { BUNDLED_THEMES, type BundledTheme } from "../../utils/bundled-themes";
import {
  importVSCodeTheme,
  applyTheme,
  saveTheme,
  resetTheme,
  getSavedThemeVars,
  type VSCodeThemeJSON,
} from "../../utils/theme-importer";

function ThemeCard({
  theme,
  active,
  onClick,
}: {
  theme: BundledTheme;
  active: boolean;
  onClick: () => void;
}) {
  const [bg, text, accent, secondary] = theme.swatches;
  return (
    <button
      className={`vscode-theme-card${active ? " vscode-theme-card--active" : ""}`}
      onClick={onClick}
      title={`Apply ${theme.name}`}
      type="button"
    >
      <div className="vscode-theme-card__preview" style={{ background: bg }}>
        <div className="vscode-theme-card__swatch" style={{ background: secondary }} />
        <div className="vscode-theme-card__swatch" style={{ background: accent }} />
        <div className="vscode-theme-card__swatch" style={{ background: text }} />
      </div>
      <div className="vscode-theme-card__label">
        {theme.name}
        {active && (
          <i className="codicon codicon-check vscode-theme-card__check" />
        )}
      </div>
      <div className="vscode-theme-card__badge">
        {theme.type === "light" ? "☀" : "🌙"}
      </div>
    </button>
  );
}

export function AppearanceSection({
  data,
  onSaveGeneral,
}: {
  data: SettingsData;
  onSaveGeneral: (field: string, value: unknown) => void;
}) {
  const uiTint = useSignal(data.uiTint ?? "");
  const themes = data.themes ?? [];

  // Current active custom theme name (stored in localStorage key piclaw_custom_theme_name)
  const LS_NAME_KEY = "piclaw_custom_theme_name";
  const activeThemeName = useSignal<string | null>(() => {
    try { return localStorage.getItem(LS_NAME_KEY); } catch { return null; }
  });

  // Pending import state
  const pendingVars = useSignal<Record<string, string> | null>(null);
  const pendingName = useSignal<string>("");
  const importStatus = useSignal<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function applyBundled(theme: BundledTheme) {
    saveTheme(theme.vars);
    try { localStorage.setItem(LS_NAME_KEY, theme.name); } catch { /* ignore */ }
    activeThemeName.value = theme.name;
    importStatus.value = `Applied "${theme.name}" ✓`;
    pendingVars.value = null;
    setTimeout(() => { importStatus.value = null; }, 2500);
  }

  function handleReset() {
    resetTheme();
    try { localStorage.removeItem(LS_NAME_KEY); } catch { /* ignore */ }
    activeThemeName.value = null;
    importStatus.value = "Reset to default ✓";
    setTimeout(() => { importStatus.value = null; }, 2500);
  }

  function handleFileChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (e.target as HTMLInputElement).value = "";

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const json = JSON.parse(ev.target?.result as string) as VSCodeThemeJSON;
        const vars = importVSCodeTheme(json);
        if (Object.keys(vars).length === 0) {
          importStatus.value = "No recognized color keys found in this file.";
          setTimeout(() => { importStatus.value = null; }, 3000);
          return;
        }
        // Preview — apply but don't save yet
        applyTheme(vars);
        pendingVars.value = vars;
        pendingName.value = json.name ?? file.name.replace(/\.json$/i, "");
        importStatus.value = `Preview: "${pendingName.value}" — confirm to save`;
      } catch {
        importStatus.value = "Failed to parse theme file. Make sure it's valid JSON.";
        setTimeout(() => { importStatus.value = null; }, 3000);
      }
    };
    reader.readAsText(file);
  }

  function confirmImport() {
    if (!pendingVars.value) return;
    saveTheme(pendingVars.value);
    try { localStorage.setItem(LS_NAME_KEY, pendingName.value); } catch { /* ignore */ }
    activeThemeName.value = pendingName.value;
    importStatus.value = `Saved "${pendingName.value}" ✓`;
    pendingVars.value = null;
    setTimeout(() => { importStatus.value = null; }, 2500);
  }

  function cancelImport() {
    // Re-apply saved theme (or reset if none)
    const saved = getSavedThemeVars();
    if (Object.keys(saved).length > 0) {
      applyTheme(saved);
    } else {
      // Re-apply the currently active bundled theme if any
      const current = activeThemeName.value;
      if (current) {
        const bt = BUNDLED_THEMES.find((t) => t.name === current);
        if (bt) applyTheme(bt.vars);
      } else {
        resetTheme();
      }
    }
    pendingVars.value = null;
    importStatus.value = null;
  }

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Appearance</h2>

      {/* Legacy theme select (server-side themes) */}
      <div className="settings-panel__field">
        <label className="settings-panel__label">Theme</label>
        <select
          className="settings-panel__select"
          value={data.uiTheme ?? ""}
          onChange={(e) =>
            onSaveGeneral("uiTheme", (e.target as HTMLSelectElement).value)
          }
        >
          {themes.length === 0 && (
            <option value={data.uiTheme ?? ""}>{data.uiTheme ?? "Default"}</option>
          )}
          {themes.map((t) => (
            <option key={t.name} value={t.name}>
              {t.label} ({t.mode})
            </option>
          ))}
        </select>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Tint color</label>
        <input
          className="settings-panel__input"
          type="text"
          value={uiTint.value}
          placeholder="e.g. #3a86ff or empty"
          onInput={(e) => (uiTint.value = (e.target as HTMLInputElement).value)}
          onBlur={() =>
            onSaveGeneral("uiTint", uiTint.value.trim() || null)
          }
        />
      </div>

      {/* VS Code themes */}
      <div className="settings-panel__field">
        <label className="settings-panel__label">
          VS Code Themes
          {activeThemeName.value && (
            <span className="vscode-theme-active-badge"> — {activeThemeName.value}</span>
          )}
        </label>

        <div className="vscode-theme-grid">
          {BUNDLED_THEMES.map((t) => (
            <ThemeCard
              key={t.name}
              theme={t}
              active={activeThemeName.value === t.name && !pendingVars.value}
              onClick={() => applyBundled(t)}
            />
          ))}
        </div>

        <div className="vscode-theme-actions">
          <button
            className="settings-panel__btn"
            type="button"
            onClick={() => fileInputRef.current?.click()}
          >
            <i className="codicon codicon-cloud-upload" /> Import Custom…
          </button>
          <button
            className="settings-panel__btn settings-panel__btn--secondary"
            type="button"
            onClick={handleReset}
          >
            <i className="codicon codicon-discard" /> Reset to Default
          </button>
        </div>

        {/* Pending import confirm/cancel */}
        {pendingVars.value && (
          <div className="vscode-theme-confirm">
            <span className="vscode-theme-confirm__label">
              Preview: <strong>{pendingName.value}</strong>
            </span>
            <button className="settings-panel__btn" type="button" onClick={confirmImport}>
              <i className="codicon codicon-check" /> Apply
            </button>
            <button className="settings-panel__btn settings-panel__btn--secondary" type="button" onClick={cancelImport}>
              <i className="codicon codicon-close" /> Cancel
            </button>
          </div>
        )}

        {importStatus.value && (
          <div className="vscode-theme-status">{importStatus.value}</div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <AvatarSection />
    </section>
  );
}

registerSettingsPane({
  id: "appearance",
  label: "Appearance",
  icon: <i className="codicon codicon-paintcan" />,
  order: 45,
  component: ({ data, saveSetting }: SettingsSectionProps) => (
    <AppearanceSection data={data} onSaveGeneral={(field, value) => saveSetting("general", field, value)} />
  ),
});
