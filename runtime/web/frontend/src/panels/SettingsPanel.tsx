import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

/* ── Data shape returned by GET /agent/settings-data ── */
interface Theme {
  name: string;
  label: string;
  mode: string;
}

interface Provider {
  id: string;
  name: string;
  configured: boolean;
  authType?: string | null;
  isCustom?: boolean;
}

interface SettingsData {
  /* general */
  assistantName?: string;
  userName?: string;
  sessionAutoRotate?: boolean;
  sessionMaxSizeMb?: number;
  toolUseBudget?: number;
  webTerminalEnabled?: boolean;
  sessionIsolation?: "none" | "summary" | "full";
  searchMatchMode?: "or" | "and";
  /* appearance */
  uiTheme?: string;
  uiTint?: string | null;
  themes?: Theme[];
  /* compaction */
  compactionTimeoutSec?: number;
  compactionBackoffBaseMin?: number;
  compactionBackoffMaxMin?: number;
  progressWatchdogEnabled?: boolean;
  progressWatchdogTimeoutSec?: number;
  /* providers */
  providers?: Provider[];
}

type Category = "general" | "sessions" | "appearance" | "compaction" | "providers";

const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "general", label: "General", icon: "codicon-gear" },
  { id: "sessions", label: "Sessions", icon: "codicon-terminal-bash" },
  { id: "appearance", label: "Appearance", icon: "codicon-paintcan" },
  { id: "compaction", label: "Compaction", icon: "codicon-archive" },
  { id: "providers", label: "Providers", icon: "codicon-cloud" },
];

export function SettingsPanel() {
  const activeCategory = useSignal<Category>("general");
  const settings = useSignal<SettingsData | null>(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);
  const saveStatus = useSignal<string | null>(null);
  let saveTimer: ReturnType<typeof setTimeout> | null = null;

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
      .catch((err: unknown) => {
        error.value = `Failed to load settings: ${err instanceof Error ? err.message : String(err)}`;
        settings.value = {};
        loading.value = false;
      });
  }, []);

  function showSaved(msg = "Saved ✓") {
    saveStatus.value = msg;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => (saveStatus.value = null), 2000);
  }

  function showError(msg = "Save failed") {
    saveStatus.value = msg;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => (saveStatus.value = null), 3000);
  }

  function saveGeneral(field: string, value: unknown) {
    fetch("/agent/settings/general", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
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

  function saveCompaction(field: string, value: unknown) {
    fetch("/agent/settings/compaction", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
        {activeCategory.value === "providers" && (
          <ProvidersSection providers={s.providers ?? []} />
        )}
      </div>
    </div>
  );
}

/* ── General ── */
function GeneralSection({
  data,
  onSaveGeneral,
}: {
  data: SettingsData;
  onSaveGeneral: (field: string, value: unknown) => void;
}) {
  const assistantName = useSignal(data.assistantName ?? "");
  const userName = useSignal(data.userName ?? "");

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">General</h2>

      <h3 className="settings-panel__subsection-title">Identity</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Agent name</label>
        <div className="settings-panel__field-content">
          <input
            className="settings-panel__input"
            type="text"
            value={assistantName.value}
            onInput={(e) => (assistantName.value = (e.target as HTMLInputElement).value)}
            onBlur={() => onSaveGeneral("assistantName", assistantName.value)}
            placeholder="Agent display name"
          />
          <span className="settings-panel__description">Display name for the AI agent</span>
        </div>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">User name</label>
        <div className="settings-panel__field-content">
          <input
            className="settings-panel__input"
            type="text"
            value={userName.value}
            onInput={(e) => (userName.value = (e.target as HTMLInputElement).value)}
            onBlur={() => onSaveGeneral("userName", userName.value)}
            placeholder="Your name"
          />
          <span className="settings-panel__description">Your display name in chat</span>
        </div>
      </div>

      <h3 className="settings-panel__subsection-title">Display</h3>

      <div className="settings-panel__field settings-panel__checkbox-row">
        <input
          id="webTerminalEnabled"
          type="checkbox"
          checked={data.webTerminalEnabled ?? false}
          onChange={(e) =>
            onSaveGeneral("webTerminalEnabled", (e.target as HTMLInputElement).checked)
          }
        />
        <label htmlFor="webTerminalEnabled" className="settings-panel__label">
          Web terminal enabled
        </label>
        <span className="settings-panel__description">Enable terminal access in the web UI</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Search match mode</label>
        <div className="settings-panel__field-content">
          <select
            className="settings-panel__select"
            value={data.searchMatchMode ?? "or"}
            onChange={(e) =>
              onSaveGeneral("searchMatchMode", (e.target as HTMLSelectElement).value)
            }
          >
            <option value="or">OR (any term)</option>
            <option value="and">AND (all terms)</option>
          </select>
          <span className="settings-panel__description">How multiple search terms are combined</span>
        </div>
      </div>
    </section>
  );
}

/* ── Sessions ── */
function SessionsSection({
  data,
  onSaveGeneral,
}: {
  data: SettingsData;
  onSaveGeneral: (field: string, value: unknown) => void;
}) {
  const sessionMaxSizeMb = useSignal(data.sessionMaxSizeMb ?? 0);
  const toolUseBudget = useSignal(data.toolUseBudget ?? 0);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Sessions</h2>

      <h3 className="settings-panel__subsection-title">Session Lifecycle</h3>

      <div className="settings-panel__field settings-panel__checkbox-row">
        <input
          id="sessionAutoRotate"
          type="checkbox"
          checked={data.sessionAutoRotate ?? false}
          onChange={(e) =>
            onSaveGeneral("sessionAutoRotate", (e.target as HTMLInputElement).checked)
          }
        />
        <label htmlFor="sessionAutoRotate" className="settings-panel__label">
          Auto-rotate sessions
        </label>
        <span className="settings-panel__description">Automatically start new session when context is full</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Max session size (MB)</label>
        <div className="settings-panel__field-content">
          <input
            className="settings-panel__input settings-panel__input--number"
            type="number"
            min={1}
            max={500}
            value={sessionMaxSizeMb.value}
            onInput={(e) => (sessionMaxSizeMb.value = Number((e.target as HTMLInputElement).value))}
            onBlur={() => onSaveGeneral("sessionMaxSizeMb", sessionMaxSizeMb.value)}
          />
          <span className="settings-panel__description">Maximum session context size before auto-compaction</span>
        </div>
      </div>

      <h3 className="settings-panel__subsection-title">Agent Behaviour</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Tool use budget</label>
        <div className="settings-panel__field-content">
          <input
            className="settings-panel__input settings-panel__input--number"
            type="number"
            min={0}
            max={200}
            value={toolUseBudget.value}
            onInput={(e) => (toolUseBudget.value = Number((e.target as HTMLInputElement).value))}
            onBlur={() => onSaveGeneral("toolUseBudget", toolUseBudget.value)}
          />
          <span className="settings-panel__description">Max tool-call messages per turn</span>
        </div>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Session isolation</label>
        <div className="settings-panel__field-content">
          <select
            className="settings-panel__select"
            value={data.sessionIsolation ?? "none"}
            onChange={(e) =>
              onSaveGeneral("sessionIsolation", (e.target as HTMLSelectElement).value)
            }
          >
            <option value="none">None — full cross-session visibility</option>
            <option value="summary">Summary</option>
            <option value="full">Full</option>
          </select>
          <span className="settings-panel__description">Controls visibility between sessions</span>
        </div>
      </div>
    </section>
  );
}

/* ── Appearance ── */
function AppearanceSection({
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
    </section>
  );
}

/* ── Compaction ── */
function CompactionSection({
  data,
  onSaveCompaction,
}: {
  data: SettingsData;
  onSaveCompaction: (field: string, value: unknown) => void;
}) {
  const timeoutSec = useSignal(data.compactionTimeoutSec ?? 0);
  const backoffBase = useSignal(data.compactionBackoffBaseMin ?? 0);
  const backoffMax = useSignal(data.compactionBackoffMaxMin ?? 0);
  const watchdogTimeout = useSignal(data.progressWatchdogTimeoutSec ?? 0);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Compaction</h2>

      <div className="settings-panel__card">
      <h3 className="settings-panel__subsection-title">Compaction Timeouts</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Timeout (sec)</label>
        <input
          className="settings-panel__input settings-panel__input--number"
          type="number"
          min={1}
          max={3600}
          value={timeoutSec.value}
          onInput={(e) => (timeoutSec.value = Number((e.target as HTMLInputElement).value))}
          onBlur={() => onSaveCompaction("compactionTimeoutSec", timeoutSec.value)}
        />
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Backoff base (min)</label>
        <input
          className="settings-panel__input settings-panel__input--number"
          type="number"
          min={1}
          max={1440}
          value={backoffBase.value}
          onInput={(e) => (backoffBase.value = Number((e.target as HTMLInputElement).value))}
          onBlur={() => onSaveCompaction("compactionBackoffBaseMin", backoffBase.value)}
        />
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Backoff max (min)</label>
        <input
          className="settings-panel__input settings-panel__input--number"
          type="number"
          min={1}
          max={10080}
          value={backoffMax.value}
          onInput={(e) => (backoffMax.value = Number((e.target as HTMLInputElement).value))}
          onBlur={() => onSaveCompaction("compactionBackoffMaxMin", backoffMax.value)}
        />
      </div>

      <div className="settings-panel__field settings-panel__checkbox-row">
        <input
          id="progressWatchdogEnabled"
          type="checkbox"
          checked={data.progressWatchdogEnabled ?? false}
          onChange={(e) =>
            onSaveCompaction(
              "progressWatchdogEnabled",
              (e.target as HTMLInputElement).checked
            )
          }
        />
        <label htmlFor="progressWatchdogEnabled" className="settings-panel__label">
          Progress watchdog enabled
        </label>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Watchdog timeout (sec)</label>
        <input
          className="settings-panel__input settings-panel__input--number"
          type="number"
          min={0}
          max={3600}
          value={watchdogTimeout.value}
          onInput={(e) => (watchdogTimeout.value = Number((e.target as HTMLInputElement).value))}
          onBlur={() =>
            onSaveCompaction("progressWatchdogTimeoutSec", watchdogTimeout.value)
          }
        />
      </div>
      </div>
    </section>
  );
}

/* ── Providers ── */
function ProvidersSection({ providers }: { providers: Provider[] }) {
  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Providers</h2>
      {providers.length === 0 && (
        <p className="settings-panel__empty">No providers found.</p>
      )}
      {providers.map((p) => (
        <div key={p.id} className="settings-panel__provider-row">
          <span className="settings-panel__label">{p.name}</span>
          <span
            className={`settings-panel__status settings-panel__status--${p.configured ? "ok" : "unknown"}`}
          >
            {p.configured ? "Configured" : "Not configured"}
          </span>
          {p.authType && (
            <span className="settings-panel__meta">{p.authType}</span>
          )}
        </div>
      ))}
    </section>
  );
}
