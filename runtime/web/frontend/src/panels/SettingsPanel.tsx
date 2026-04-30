import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface SettingsData {
  general?: {
    userName?: string;
    agentName?: string;
    sessionTimeout?: number;
    sessionMaxMessages?: number;
  };
  providers?: Array<{
    id: string;
    name: string;
    status: string;
    type?: string;
  }>;
  models?: {
    available?: Array<{ id: string; name: string; provider?: string }>;
    current?: string;
  };
  appearance?: {
    theme?: string;
    presets?: string[];
  };
}

type Category = "general" | "providers" | "models" | "appearance";

const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "general", label: "General", icon: "codicon-gear" },
  { id: "providers", label: "Providers", icon: "codicon-cloud" },
  { id: "models", label: "Models", icon: "codicon-hubot" },
  { id: "appearance", label: "Appearance", icon: "codicon-paintcan" },
];

export function SettingsPanel() {
  const activeCategory = useSignal<Category>("general");
  const settings = useSignal<SettingsData | null>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const saveStatus = useSignal<string | null>(null);

  useEffect(() => {
    fetch("/agent/settings-data", { credentials: "same-origin" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: SettingsData) => {
        settings.value = data;
        loading.value = false;
      })
      .catch((err) => {
        error.value = `Failed to load settings: ${err.message}`;
        settings.value = {};
        loading.value = false;
      });
  }, []);

  function saveGeneral(field: string, value: string) {
    const updated = { ...(settings.value?.general ?? {}), [field]: value };
    fetch("/agent/settings/general", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        saveStatus.value = "Saved";
        setTimeout(() => (saveStatus.value = null), 2000);
      })
      .catch(() => {
        saveStatus.value = "Save failed";
        setTimeout(() => (saveStatus.value = null), 3000);
      });
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
            onClick={() => (activeCategory.value = cat.id)}
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
          <GeneralSection data={s.general ?? {}} onSave={saveGeneral} />
        )}
        {activeCategory.value === "providers" && (
          <ProvidersSection providers={s.providers ?? []} />
        )}
        {activeCategory.value === "models" && (
          <ModelsSection models={s.models ?? {}} />
        )}
        {activeCategory.value === "appearance" && (
          <AppearanceSection appearance={s.appearance ?? {}} />
        )}
      </div>
    </div>
  );
}

/* ── General ── */
function GeneralSection({
  data,
  onSave,
}: {
  data: SettingsData["general"] & {};
  onSave: (field: string, value: string) => void;
}) {
  const userName = useSignal(data.userName ?? "");
  const agentName = useSignal(data.agentName ?? "");

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">General</h2>

      <div className="settings-panel__field">
        <label className="settings-panel__label">User name</label>
        <input
          className="settings-panel__input"
          type="text"
          value={userName.value}
          onInput={(e) => (userName.value = (e.target as HTMLInputElement).value)}
          onBlur={() => onSave("userName", userName.value)}
          placeholder="Your name"
        />
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Agent name</label>
        <input
          className="settings-panel__input"
          type="text"
          value={agentName.value}
          onInput={(e) => (agentName.value = (e.target as HTMLInputElement).value)}
          onBlur={() => onSave("agentName", agentName.value)}
          placeholder="Agent name"
        />
      </div>

      {data.sessionTimeout !== undefined && (
        <div className="settings-panel__field">
          <label className="settings-panel__label">Session timeout (min)</label>
          <span className="settings-panel__value">{data.sessionTimeout}</span>
        </div>
      )}

      {data.sessionMaxMessages !== undefined && (
        <div className="settings-panel__field">
          <label className="settings-panel__label">Max messages</label>
          <span className="settings-panel__value">{data.sessionMaxMessages}</span>
        </div>
      )}
    </section>
  );
}

/* ── Providers ── */
function ProvidersSection({
  providers,
}: {
  providers: NonNullable<SettingsData["providers"]>;
}) {
  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Providers</h2>
      {providers.length === 0 && (
        <p className="settings-panel__empty">No providers configured.</p>
      )}
      {providers.map((p) => (
        <div key={p.id} className="settings-panel__field">
          <label className="settings-panel__label">
            {p.name}
            {p.type ? <span className="settings-panel__meta"> ({p.type})</span> : null}
          </label>
          <span
            className={`settings-panel__status settings-panel__status--${p.status.toLowerCase()}`}
          >
            {p.status}
          </span>
        </div>
      ))}
    </section>
  );
}

/* ── Models ── */
function ModelsSection({ models }: { models: NonNullable<SettingsData["models"]> }) {
  const available = models.available ?? [];
  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Models</h2>
      {models.current && (
        <div className="settings-panel__field">
          <label className="settings-panel__label">Current model</label>
          <span className="settings-panel__value settings-panel__value--accent">
            {models.current}
          </span>
        </div>
      )}
      {available.length > 0 && (
        <>
          <div className="settings-panel__field">
            <label className="settings-panel__label">Available models</label>
          </div>
          <ul className="settings-panel__list">
            {available.map((m) => (
              <li
                key={m.id}
                className={`settings-panel__list-item${m.id === models.current ? " settings-panel__list-item--active" : ""}`}
              >
                <span>{m.name}</span>
                {m.provider && (
                  <span className="settings-panel__meta">{m.provider}</span>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      {available.length === 0 && !models.current && (
        <p className="settings-panel__empty">No model data available.</p>
      )}
    </section>
  );
}

/* ── Appearance ── */
function AppearanceSection({
  appearance,
}: {
  appearance: NonNullable<SettingsData["appearance"]>;
}) {
  const presets = appearance.presets ?? [];
  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Appearance</h2>
      {appearance.theme && (
        <div className="settings-panel__field">
          <label className="settings-panel__label">Current theme</label>
          <span className="settings-panel__value settings-panel__value--accent">
            {appearance.theme}
          </span>
        </div>
      )}
      {presets.length > 0 && (
        <>
          <div className="settings-panel__field">
            <label className="settings-panel__label">Theme presets</label>
          </div>
          <ul className="settings-panel__list">
            {presets.map((preset) => (
              <li
                key={preset}
                className={`settings-panel__list-item${preset === appearance.theme ? " settings-panel__list-item--active" : ""}`}
              >
                {preset}
              </li>
            ))}
          </ul>
        </>
      )}
      {presets.length === 0 && !appearance.theme && (
        <p className="settings-panel__empty">No appearance data available.</p>
      )}
    </section>
  );
}
