import { useSignal } from "@preact/signals";
import { type SettingsData, type SettingsSectionProps } from "./types";
import { AvatarSection } from "./AvatarSection";
import { registerSettingsPane } from "./pane-registry";

export function AppearanceSection({
  data,
  onSaveGeneral,
}: {
  data: SettingsData;
  onSaveGeneral: (field: string, value: unknown) => void;
}) {
  const uiTint = useSignal(data.uiTint ?? "");
  const themes = data.themes ?? [];

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Appearance</h2>

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
