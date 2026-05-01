import { useEffect } from "preact/hooks";
import { useSignal, type Signal } from "@preact/signals";

/* ── Number Stepper Component ── */
function NumberStepper({ value, min, max, step, onSave }: {
  value: Signal<number>;
  min?: number;
  max?: number;
  step?: number;
  onSave: (v: number) => void;
}) {
  const s = step ?? 1;
  const decrement = () => {
    const next = Math.max(min ?? -Infinity, value.value - s);
    value.value = next;
    onSave(next);
  };
  const increment = () => {
    const next = Math.min(max ?? Infinity, value.value + s);
    value.value = next;
    onSave(next);
  };
  return (
    <div className="settings-panel__stepper">
      <button type="button" className="settings-panel__stepper-btn" onClick={decrement}>−</button>
      <input
        className="settings-panel__stepper-value"
        type="number"
        min={min}
        max={max}
        value={value.value}
        onInput={(e) => (value.value = Number((e.target as HTMLInputElement).value))}
        onBlur={() => onSave(value.value)}
      />
      <button type="button" className="settings-panel__stepper-btn" onClick={increment}>+</button>
    </div>
  );
}

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
  composeUploadLimitMb?: number;
  workspaceUploadLimitMb?: number;
  instanceTotp?: { configured?: boolean };
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
  compactionBackoffs?: string[];
  progressWatchdogPhases?: Array<{ chat?: string; phase?: string; started?: string; lastHeartbeat?: string }>;
  /* workspace */
  workspaceSettings?: { treeMaxDepth?: number; treeMaxEntries?: number };
  /* providers */
  providers?: Provider[];
  /* toolsets */
  toolsets?: Array<{ name: string; tools?: Array<{ name: string; kind?: string; weight?: string }> }>;
}

type Category = "general" | "sessions" | "workspace" | "models" | "keychain" | "tools" | "appearance" | "compaction" | "providers";

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

  const saveWorkspace = async (field: string, value: unknown) => {
    try {
      const res = await fetch("/agent/settings/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ [field]: value }),
      });
      if (res.ok) {
        saveStatus.value = "Saved";
        setTimeout(() => (saveStatus.value = null), 2000);
      } else {
        saveStatus.value = "Save failed";
        setTimeout(() => (saveStatus.value = null), 3000);
      }
    } catch { saveStatus.value = "Save failed"; setTimeout(() => (saveStatus.value = null), 3000); }
  };

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
  const composeUploadMb = useSignal(data.composeUploadLimitMb ?? 32);
  const workspaceUploadMb = useSignal(data.workspaceUploadLimitMb ?? 256);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">General</h2>

      <h3 className="settings-panel__subsection-title">Identity</h3>

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

      <h3 className="settings-panel__subsection-title">Notifications</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Browser notifications</label>
        <span className="settings-panel__description">Use the 🔔 bell button in the compose bar to enable/disable notifications. Web Push requires HTTPS or localhost.</span>
      </div>



      <h3 className="settings-panel__subsection-title">Instance Configuration</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Compose upload (MB)</label>
        <div className="settings-panel__field-content">
          <NumberStepper value={composeUploadMb} min={1} max={256} onSave={(v) => onSaveGeneral("composeUploadLimitMb", v)} />
          <span className="settings-panel__description">Chat/media attachments</span>
        </div>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Workspace upload (MB)</label>
        <div className="settings-panel__field-content">
          <NumberStepper value={workspaceUploadMb} min={1} max={1024} onSave={(v) => onSaveGeneral("workspaceUploadLimitMb", v)} />
          <span className="settings-panel__description">Defaults to 256 MB; chunked uploads allow up to 1 GB</span>
        </div>
      </div>

      <h3 className="settings-panel__subsection-title">Authentication</h3>
      <div className="settings-panel__field">
        <label className="settings-panel__label">TOTP setup QR</label>
        <div className="settings-panel__card">
          <span className="settings-panel__description">
            {data.instanceTotp?.configured
              ? "TOTP is configured for this instance."
              : "TOTP is not configured for this instance yet, so no setup QR is available."}
          </span>
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
          <NumberStepper value={sessionMaxSizeMb} min={1} max={500} onSave={(v) => onSaveGeneral("sessionMaxSizeMb", v)} />
          <span className="settings-panel__description">Maximum session context size before auto-compaction</span>
        </div>
      </div>

      <h3 className="settings-panel__subsection-title">Agent Behaviour</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Tool use budget</label>
        <div className="settings-panel__field-content">
          <NumberStepper value={toolUseBudget} min={0} max={200} onSave={(v) => onSaveGeneral("toolUseBudget", v)} />
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

      <h3 className="settings-panel__subsection-title">Automatic compaction</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Compaction timeout (sec)</label>
        <NumberStepper value={timeoutSec} min={1} max={3600} step={10} onSave={(v) => onSaveCompaction("compactionTimeoutSec", v)} />
        <span className="settings-panel__description">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Failure backoff base (min)</label>
        <NumberStepper value={backoffBase} min={1} max={1440} step={5} onSave={(v) => onSaveCompaction("compactionBackoffBaseMin", v)} />
        <span className="settings-panel__description">First suppression window after a compaction failure.</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Failure backoff max (min)</label>
        <NumberStepper value={backoffMax} min={1} max={10080} step={10} onSave={(v) => onSaveCompaction("compactionBackoffMaxMin", v)} />
        <span className="settings-panel__description">Upper bound for exponential suppression after repeated failures.</span>
      </div>

      <h3 className="settings-panel__subsection-title">Stall watchdog</h3>

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
          Enable watchdog
        </label>
        <span className="settings-panel__description">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Watchdog timeout (sec)</label>
        <NumberStepper value={watchdogTimeout} min={0} max={3600} step={10} onSave={(v) => onSaveCompaction("progressWatchdogTimeoutSec", v)} />
        <span className="settings-panel__description">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
      </div>

      <h3 className="settings-panel__subsection-title">Active compaction suppressions</h3>
      <p className="settings-panel__description">
        {(data.compactionBackoffs ?? []).length === 0
          ? "No chats are currently under compaction backoff."
          : (data.compactionBackoffs ?? []).join(", ")}
      </p>

      <h3 className="settings-panel__subsection-title">Live watchdog phases</h3>
      {(data.progressWatchdogPhases ?? []).length === 0 ? (
        <p className="settings-panel__description">No active watchdog phases.</p>
      ) : (
        <table className="settings-panel__table">
          <thead>
            <tr><th>Chat</th><th>Phase</th><th>Started</th><th>Last heartbeat</th></tr>
          </thead>
          <tbody>
            {(data.progressWatchdogPhases ?? []).map((phase: { chat?: string; phase?: string; started?: string; lastHeartbeat?: string }, i: number) => (
              <tr key={i}>
                <td>{phase.chat ?? "—"}</td>
                <td>{phase.phase ?? "—"}</td>
                <td>{phase.started ?? "—"}</td>
                <td>{phase.lastHeartbeat ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

/* ── Workspace ── */
function WorkspaceSection({
  data,
  onSaveWorkspace,
}: {
  data: SettingsData;
  onSaveWorkspace: (field: string, value: unknown) => void;
}) {
  const treeMaxDepth = useSignal(data.workspaceSettings?.treeMaxDepth ?? 10);
  const treeMaxEntries = useSignal(data.workspaceSettings?.treeMaxEntries ?? 500);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Workspace</h2>

      <h3 className="settings-panel__subsection-title">File Tree</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Tree max depth</label>
        <div className="settings-panel__field-content">
          <NumberStepper value={treeMaxDepth} min={1} max={50} onSave={(v) => onSaveWorkspace("treeMaxDepth", v)} />
          <span className="settings-panel__description">Maximum directory nesting level shown in file tree</span>
        </div>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Tree max entries</label>
        <div className="settings-panel__field-content">
          <NumberStepper value={treeMaxEntries} min={50} max={5000} step={50} onSave={(v) => onSaveWorkspace("treeMaxEntries", v)} />
          <span className="settings-panel__description">Maximum number of entries shown per directory</span>
        </div>
      </div>
    </section>
  );
}

/* ── Models ── */
function ModelsSection({ data }: { data: SettingsData }) {
  const models = useSignal<Array<{ label: string; name: string; provider: string; context_window?: number; reasoning?: boolean }>>([]);
  const current = useSignal("");

  useEffect(() => {
    fetch("/agent/models", { credentials: "same-origin" })
      .then(r => r.json())
      .then((d: any) => {
        current.value = d.current ?? "";
        models.value = d.model_options ?? [];
      })
      .catch(() => {});
  }, []);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Models</h2>
      <div className="settings-panel__field">
        <label className="settings-panel__label">Current model</label>
        <span className="settings-panel__value">{current.value || "—"}</span>
      </div>
      <h3 className="settings-panel__subsection-title">Available Models</h3>
      {models.value.map(m => (
        <div key={m.label} className="settings-panel__model-row">
          <span className="settings-panel__model-name">{m.name}</span>
          <span className="settings-panel__model-provider">{m.provider}</span>
          {m.context_window && <span className="settings-panel__model-ctx">{Math.round(m.context_window / 1000)}k</span>}
          {m.label === current.value && <span className="settings-panel__status settings-panel__status--ok">Active</span>}
        </div>
      ))}
    </section>
  );
}

/* ── Keychain ── */
function KeychainSection() {
  const entries = useSignal<string[]>([]);
  useEffect(() => {
    fetch("/agent/keychain", { credentials: "same-origin" })
      .then(r => r.ok ? r.json() : { entries: [] })
      .then((d: any) => { entries.value = (d.entries ?? d.keys ?? []).map((e: any) => typeof e === "string" ? e : e.name ?? e.id ?? ""); })
      .catch(() => {});
  }, []);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Keychain</h2>
      <p className="settings-panel__description">Stored credentials (names only — secrets are never displayed).</p>
      {entries.value.length === 0 ? (
        <p className="settings-panel__description">No keychain entries found, or API not available.</p>
      ) : (
        entries.value.map(name => (
          <div key={name} className="settings-panel__field">
            <i className="codicon codicon-key" style={{ opacity: 0.5 }} />
            <span className="settings-panel__value">{name}</span>
          </div>
        ))
      )}
    </section>
  );
}

/* ── Tools ── */
function ToolsSection({ data }: { data: SettingsData }) {
  const toolsets = data.toolsets ?? [];
  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Tools</h2>
      <p className="settings-panel__description">Available toolsets and their tools (read-only).</p>
      {toolsets.map(ts => (
        <div key={ts.name}>
          <h3 className="settings-panel__subsection-title">{ts.name}</h3>
          <div className="settings-panel__tools-list">
            {(ts.tools ?? []).map(t => (
              <span key={t.name} className="settings-panel__tool-badge">{t.name}</span>
            ))}
          </div>
        </div>
      ))}
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
