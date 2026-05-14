import { useEffect, useRef, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

import { type SettingsData, type Category } from "./settings/types";
import { GeneralSection } from "./settings/GeneralSection";
import { SessionsSection } from "./settings/SessionsSection";
import { AppearanceSection } from "./settings/AppearanceSection";
import { CompactionSection } from "./settings/CompactionSection";
import { WorkspaceSection } from "./settings/WorkspaceSection";
import { ModelsSection } from "./settings/ModelsSection";
import { KeychainSection } from "./settings/KeychainSection";
import { ToolsSection } from "./settings/ToolsSection";
import { ProvidersSection } from "./settings/ProvidersSection";
import { RecordingsSection } from "./settings/RecordingsSection";
import { EnvironmentSection } from "./settings/EnvironmentSection";
import { safeGetItem, safeSetItem } from "../utils/storage";
import { getRegisteredPanes, type SettingsPaneDefinition } from "./settings/pane-registry";

const BUILTIN_CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "general", label: "General", icon: "codicon-gear" },
  { id: "sessions", label: "Sessions", icon: "codicon-terminal-bash" },
  { id: "recordings", label: "Recordings", icon: "codicon-record" },
  { id: "compaction", label: "Compaction", icon: "codicon-archive" },
  { id: "workspace", label: "Workspace", icon: "codicon-folder" },
  { id: "environment", label: "Environment", icon: "codicon-symbol-variable" },
  { id: "providers", label: "Providers", icon: "codicon-cloud" },
  { id: "models", label: "Models", icon: "codicon-hubot" },
  { id: "appearance", label: "Appearance", icon: "codicon-paintcan" },
  { id: "keychain", label: "Keychain", icon: "codicon-key" },
  { id: "tools", label: "Tools", icon: "codicon-tools" },
];

/** Safely render an addon pane component; shows an error state if it throws. */
function AddonPaneRenderer({ pane, filter }: { pane: SettingsPaneDefinition; filter?: string }) {
  const [renderError, setRenderError] = useState<string | null>(null);

  if (renderError) {
    return (
      <div className="settings-panel__addon-error">
        <p>Failed to render addon pane "{pane.label}": {renderError}</p>
      </div>
    );
  }

  if (typeof pane.component !== "function") {
    return (
      <div className="settings-panel__addon-error">
        <p>Addon pane "{pane.label}" did not provide a valid component.</p>
      </div>
    );
  }

  try {
    const Comp = pane.component as (props: { filter?: string }) => unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <>{Comp({ filter }) as any}</>;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    // Set error on next tick to avoid setState-in-render
    Promise.resolve().then(() => setRenderError(msg));
    return <div className="settings-panel__addon-loading">Loading…</div>;
  }
}

export function SettingsPanel() {
  const activeCategory = useSignal<string>((safeGetItem("piclaw-settings-category") as Category) || "general");
  const settings = useSignal<SettingsData>({});
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const saveStatus = useSignal<string | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Re-render when addon panes register/unregister
  const [addonPanes, setAddonPanes] = useState<SettingsPaneDefinition[]>(() => getRegisteredPanes());

  useEffect(() => {
    const handler = () => setAddonPanes(getRegisteredPanes());
    window.addEventListener("piclaw:settings-panes-changed", handler);
    return () => window.removeEventListener("piclaw:settings-panes-changed", handler);
  }, []);

  useEffect(() => {
    void (async () => {
      try {
        const res = await fetch("/agent/settings-data", { credentials: "same-origin" });
        if (!res.ok) throw new Error("Load failed");
        const data: SettingsData = await res.json();
        settings.value = data;
      } catch (err: unknown) {
        error.value = `Failed to load settings: ${err instanceof Error ? err.message : String(err)}`;
        settings.value = {};
      } finally {
        loading.value = false;
      }
    })();
  }, []);

  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, []);

  function showSaved(msg = "Saved ✓") {
    saveStatus.value = msg;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => (saveStatus.value = null), 2000);
  }

  function showError(msg = "Save failed") {
    saveStatus.value = msg;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => (saveStatus.value = null), 3000);
  }

  async function saveSetting(endpoint: string, field: string, value: unknown) {
    try {
      const res = await fetch(`/agent/settings/${endpoint}`, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      if (!res.ok) throw new Error("Save failed");
      const body: { settings?: SettingsData } = await res.json();
      if (body.settings) {
        settings.value = { ...settings.value, ...body.settings };
      }
      showSaved();
    } catch {
      showError();
    }
  }

  if (loading.value) {
    return (
      <div className="settings-panel">
        <div className="settings-panel__loading">Loading settings…</div>
      </div>
    );
  }

  const s = settings.value;
  const activeAddonPane = addonPanes.find(p => p.id === activeCategory.value);

  return (
    <div className="settings-panel">
      {/* Left nav */}
      <nav className="settings-panel__nav">
        {BUILTIN_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`settings-panel__nav-item${activeCategory.value === cat.id ? " settings-panel__nav-item--active" : ""}`}
            onClick={() => { activeCategory.value = cat.id; safeSetItem("piclaw-settings-category", cat.id); }}
          >
            <i className={`codicon ${cat.icon}`} />
            <span>{cat.label}</span>
          </button>
        ))}
        {/* Addon panes rendered after built-in sections */}
        {addonPanes.map((pane) => (
          <button
            key={pane.id}
            className={`settings-panel__nav-item settings-panel__nav-item--addon${activeCategory.value === pane.id ? " settings-panel__nav-item--active" : ""}`}
            onClick={() => { activeCategory.value = pane.id; safeSetItem("piclaw-settings-category", pane.id); }}
          >
            <span className="settings-panel__nav-icon">{pane.icon as never}</span>
            <span>{pane.label}</span>
          </button>
        ))}
      </nav>

      {/* Right content */}
      <div className="settings-panel__content">
        {error.value && (
          <div className="settings-panel__error">{error.value}</div>
        )}
        {saveStatus.value && (
          <div className="settings-panel__save-status">{saveStatus.value}</div>
        )}

        {/* Built-in sections */}
        {activeCategory.value === "general" && (
          <GeneralSection data={s} onSaveGeneral={(field, value) => saveSetting("general", field, value)} />
        )}
        {activeCategory.value === "sessions" && (
          <SessionsSection data={s} onSaveGeneral={(field, value) => saveSetting("general", field, value)} />
        )}
        {activeCategory.value === "appearance" && (
          <AppearanceSection data={s} onSaveGeneral={(field, value) => saveSetting("general", field, value)} />
        )}
        {activeCategory.value === "compaction" && (
          <CompactionSection data={s} onSaveCompaction={(field, value) => saveSetting("compaction", field, value)} />
        )}
        {activeCategory.value === "workspace" && (
          <WorkspaceSection data={s} onSaveWorkspace={(field, value) => saveSetting("workspace", field, value)} />
        )}
        {activeCategory.value === "environment" && (
          <EnvironmentSection />
        )}
        {activeCategory.value === "providers" && (
          <ProvidersSection providers={s.providers ?? []} />
        )}
        {activeCategory.value === "models" && (
          <ModelsSection data={s} />
        )}
        {activeCategory.value === "keychain" && (
          <KeychainSection />
        )}
        {activeCategory.value === "tools" && (
          <ToolsSection data={s} />
        )}
        {activeCategory.value === "recordings" && (
          <RecordingsSection />
        )}

        {/* Addon panes rendered after built-in sections */}
        {activeAddonPane && (
          <AddonPaneRenderer
            pane={activeAddonPane}
            filter={activeAddonPane.searchable ? "" : undefined}
          />
        )}
      </div>
    </div>
  );
}
