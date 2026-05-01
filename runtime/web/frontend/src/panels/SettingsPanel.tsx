import { useEffect, useRef } from "preact/hooks";
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

const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "general", label: "General", icon: "codicon-gear" },
  { id: "sessions", label: "Sessions", icon: "codicon-terminal-bash" },
  { id: "compaction", label: "Compaction", icon: "codicon-archive" },
  { id: "workspace", label: "Workspace", icon: "codicon-folder" },
  { id: "providers", label: "Providers", icon: "codicon-cloud" },
  { id: "models", label: "Models", icon: "codicon-hubot" },
  { id: "appearance", label: "Appearance", icon: "codicon-paintcan" },
  { id: "keychain", label: "Keychain", icon: "codicon-key" },
  { id: "tools", label: "Tools", icon: "codicon-tools" },
];

export function SettingsPanel() {
  const activeCategory = useSignal<Category>((localStorage.getItem("piclaw-settings-category") as Category) || "general");
  const settings = useSignal<SettingsData | null>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const saveStatus = useSignal<string | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetch("/agent/settings-data", { credentials: "same-origin" })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        return res.json();
      })
      .then((data: SettingsData) => {
        settings.value = data;
        loading.value = false;
      })
      .catch((err: unknown) => {
        error.value = `Failed to load settings: ${err instanceof Error ? err.message : String(err)}`;
        settings.value = {};
        loading.value = false;
      });
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

  function saveGeneral(field: string, value: unknown) {
    fetch("/agent/settings/general", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        return res.json();
      })
      .then((body: { settings?: SettingsData }) => {
        if (body.settings) {
          settings.value = { ...(settings.value ?? {}), ...body.settings };
        }
        showSaved();
      })
      .catch(() => showError());
  }

  const saveWorkspace = async (field: string, value: unknown) => {
    try {
      const res = await fetch("/agent/settings/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ [field]: value }),
      });
      if (res.ok) {
        showSaved("Saved");
      } else {
        showError("Save failed");
      }
    } catch {
      showError("Save failed");
    }
  };

  function saveCompaction(field: string, value: unknown) {
    fetch("/agent/settings/compaction", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        return res.json();
      })
      .then((body: { settings?: SettingsData }) => {
        if (body.settings) {
          settings.value = { ...(settings.value ?? {}), ...body.settings };
        }
        showSaved();
      })
      .catch(() => showError());
  }

  if (loading.value) {
    return (
      <div className="settings-panel">
        <div className="settings-panel__loading">Loading settings…</div>
      </div>
    );
  }

  const s = settings.value ?? {};

  return (
    <div className="settings-panel">
      {/* Left nav */}
      <nav className="settings-panel__nav">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`settings-panel__nav-item${activeCategory.value === cat.id ? " settings-panel__nav-item--active" : ""}`}
            onClick={() => { activeCategory.value = cat.id; localStorage.setItem("piclaw-settings-category", cat.id); }}
          >
            <i className={`codicon ${cat.icon}`} />
            <span>{cat.label}</span>
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

        {activeCategory.value === "general" && (
          <GeneralSection data={s} onSaveGeneral={saveGeneral} />
        )}
        {activeCategory.value === "sessions" && (
          <SessionsSection data={s} onSaveGeneral={saveGeneral} />
        )}
        {activeCategory.value === "appearance" && (
          <AppearanceSection data={s} onSaveGeneral={saveGeneral} />
        )}
        {activeCategory.value === "compaction" && (
          <CompactionSection data={s} onSaveCompaction={saveCompaction} />
        )}
        {activeCategory.value === "workspace" && (
          <WorkspaceSection data={s} onSaveWorkspace={saveWorkspace} />
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
      </div>
    </div>
  );
}
