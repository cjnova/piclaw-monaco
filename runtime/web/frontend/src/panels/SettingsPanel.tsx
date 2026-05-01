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
  hasOAuth?: boolean;
  hasApiKey?: boolean;
  configured?: boolean;
  authType?: string | null;
  apiKeyHint?: string;
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
  workspaceSettings?: { webTerminalEnabled?: boolean; vncAllowDirect?: boolean; treeMaxDepth?: number; treeMaxEntries?: number };
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
  const activeCategory = useSignal<Category>((localStorage.getItem("piclaw-settings-category") as Category) || "general");
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
  const ws = data.workspaceSettings ?? {};
  const treeMaxDepth = useSignal(ws.treeMaxDepth ?? 4);
  const treeMaxEntries = useSignal(ws.treeMaxEntries ?? 5000);
  const refreshInterval = useSignal(Number(localStorage.getItem("piclaw-ws-refresh-interval")) || 60);
  const folderPreviewDepth = useSignal(Number(localStorage.getItem("piclaw-ws-folder-preview-depth")) || 3);

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Workspace</h2>

      <h3 className="settings-panel__subsection-title">Access</h3>

      <div className="settings-panel__field settings-panel__checkbox-row">
        <input
          id="ws-webTerminalEnabled"
          type="checkbox"
          checked={ws.webTerminalEnabled ?? false}
          onChange={(e) =>
            onSaveWorkspace("webTerminalEnabled", (e.target as HTMLInputElement).checked)
          }
        />
        <label htmlFor="ws-webTerminalEnabled" className="settings-panel__label">
          Enable web terminal
        </label>
      </div>

      <div className="settings-panel__field settings-panel__checkbox-row">
        <input
          id="ws-vncAllowDirect"
          type="checkbox"
          checked={ws.vncAllowDirect ?? false}
          onChange={(e) =>
            onSaveWorkspace("vncAllowDirect", (e.target as HTMLInputElement).checked)
          }
        />
        <label htmlFor="ws-vncAllowDirect" className="settings-panel__label">
          Allow direct VNC targets
        </label>
      </div>

      <p className="settings-panel__description">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

      <h3 className="settings-panel__subsection-title">Server scan guardrails</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Max tree depth</label>
        <NumberStepper value={treeMaxDepth} min={1} max={50} onSave={(v) => onSaveWorkspace("treeMaxDepth", v)} />
        <span className="settings-panel__description">caps all <code>/workspace/tree</code> requests</span>
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Max entries per scan</label>
        <NumberStepper value={treeMaxEntries} min={50} max={10000} step={50} onSave={(v) => onSaveWorkspace("treeMaxEntries", v)} />
        <span className="settings-panel__description">truncate oversized tree walks earlier</span>
      </div>

      <h3 className="settings-panel__subsection-title">This browser</h3>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Refresh interval (seconds)</label>
        <NumberStepper value={refreshInterval} min={5} max={600} step={5} onSave={(v) => localStorage.setItem("piclaw-ws-refresh-interval", String(v))} />
      </div>

      <div className="settings-panel__field">
        <label className="settings-panel__label">Folder preview scan depth</label>
        <NumberStepper value={folderPreviewDepth} min={0} max={20} onSave={(v) => localStorage.setItem("piclaw-ws-folder-preview-depth", String(v))} />
        <span className="settings-panel__description">set to 0 to disable folder size preview scans</span>
      </div>

      <p className="settings-panel__description">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
    </section>
  );
}

/* ── Models ── */
function ModelsSection({ data }: { data: SettingsData }) {
  const models = useSignal<Array<{ label: string; name: string; provider: string; context_window?: number; reasoning?: boolean }>>([]);
  const current = useSignal("");
  const thinkingLevel = useSignal("medium");
  const filter = useSignal("");

  useEffect(() => {
    fetch("/agent/models", { credentials: "same-origin" })
      .then(r => r.json())
      .then((d: any) => {
        current.value = d.current ?? "";
        thinkingLevel.value = d.thinking_level ?? "medium";
        models.value = d.model_options ?? [];
      })
      .catch(() => {});
  }, []);

  const sendCommand = async (cmd: string) => {
    try {
      await fetch("/agent/web:default/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: cmd }),
      });
    } catch {}
  };

  const switchModel = (label: string) => {
    current.value = label;
    sendCommand(`/model ${label}`);
  };

  const switchThinking = (level: string) => {
    thinkingLevel.value = level;
    sendCommand(`/thinking ${level}`);
  };

  const filtered = filter.value
    ? models.value.filter(m => m.name.toLowerCase().includes(filter.value.toLowerCase()) || m.provider.toLowerCase().includes(filter.value.toLowerCase()))
    : models.value;

  const THINKING_LEVELS = ["off", "minimal", "low", "medium", "high"];

  return (
    <section className="settings-panel__section settings-panel__section--models">
      <h2 className="settings-panel__section-title">Models</h2>

      <input
        className="settings-panel__input settings-panel__model-filter"
        type="text"
        placeholder="Filter models..."
        value={filter.value}
        onInput={(e) => (filter.value = (e.target as HTMLInputElement).value)}
      />

      <p className="settings-panel__description">Model and provider names may wrap in narrow panes to avoid clipping.</p>

      <div className="settings-panel__model-table-wrapper">
        <table className="settings-panel__table settings-panel__model-table">
          <thead>
            <tr>
              <th></th>
              <th>Model</th>
              <th>Provider</th>
              <th>Context</th>
              <th>Reasoning</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <tr
                key={m.label}
                className={m.label === current.value ? "settings-panel__model-table-row--active" : ""}
                onClick={() => switchModel(m.label)}
                style={{ cursor: "pointer" }}
              >
                <td>
                  <input type="radio" name="model" checked={m.label === current.value} readOnly />
                </td>
                <td>{m.name}</td>
                <td>{m.provider}</td>
                <td>{m.context_window ? `${Math.round(m.context_window / 1000)}K` : "—"}</td>
                <td>{m.reasoning ? "🧠" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="settings-panel__subsection-title" style={{ marginTop: "24px" }}>Thinking level: <strong>{thinkingLevel.value}</strong></h3>

      <div className="settings-panel__thinking-slider">
        <input
          type="range"
          min={0}
          max={4}
          value={THINKING_LEVELS.indexOf(thinkingLevel.value)}
          onInput={(e) => switchThinking(THINKING_LEVELS[Number((e.target as HTMLInputElement).value)])}
          className="settings-panel__thinking-range"
        />
        <div className="settings-panel__thinking-labels">
          {THINKING_LEVELS.map((l) => (
            <span
              key={l}
              className={`settings-panel__thinking-label${l === thinkingLevel.value ? " settings-panel__thinking-label--active" : ""}`}
              onClick={() => switchThinking(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Keychain ── */
function KeychainSection() {
  const entries = useSignal<Array<{ name: string; type?: string; envVar?: string | null; updatedAt?: string }>>([]);
  const filter = useSignal("");
  const showAdd = useSignal(false);
  const newName = useSignal("");
  const newSecret = useSignal("");
  const newType = useSignal("secret");

  const fetchEntries = () => {
    fetch("/agent/keychain", { credentials: "same-origin" })
      .then(r => r.json())
      .then((d: any) => { entries.value = d.entries ?? []; })
      .catch(() => {});
  };

  useEffect(() => { fetchEntries(); }, []);

  const addEntry = async () => {
    if (!newName.value.trim() || !newSecret.value.trim()) return;
    try {
      await fetch("/agent/keychain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ name: newName.value.trim(), secret: newSecret.value, type: newType.value }),
      });
      newName.value = "";
      newSecret.value = "";
      showAdd.value = false;
      fetchEntries();
    } catch {}
  };

  const deleteEntry = async (name: string) => {
    if (!confirm(`Delete keychain entry "${name}"?`)) return;
    try {
      await fetch("/agent/keychain", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ name }),
      });
      fetchEntries();
    } catch {}
  };

  const filtered = filter.value
    ? entries.value.filter(e => e.name.toLowerCase().includes(filter.value.toLowerCase()))
    : entries.value;

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Keychain</h2>

      <div className="settings-panel__keychain-header">
        <input
          className="settings-panel__input settings-panel__keychain-filter"
          type="text"
          placeholder="Filter entries..."
          value={filter.value}
          onInput={(e) => (filter.value = (e.target as HTMLInputElement).value)}
        />
        <button type="button" className="settings-panel__provider-btn" onClick={() => (showAdd.value = !showAdd.value)}>
          + Add entry
        </button>
      </div>

      <p className="settings-panel__description">
        {entries.value.length} entries, encrypted at rest.
      </p>

      {showAdd.value && (
        <div className="settings-panel__card" style={{ marginBottom: "12px" }}>
          <h3 className="settings-panel__subsection-title">New entry</h3>
          <div className="settings-panel__field">
            <label className="settings-panel__label">Name</label>
            <input className="settings-panel__input" type="text" placeholder="entry-name" value={newName.value} onInput={(e) => (newName.value = (e.target as HTMLInputElement).value)} />
          </div>
          <div className="settings-panel__field">
            <label className="settings-panel__label">Secret</label>
            <input className="settings-panel__input" type="password" placeholder="secret value" value={newSecret.value} onInput={(e) => (newSecret.value = (e.target as HTMLInputElement).value)} />
          </div>
          <div className="settings-panel__field">
            <label className="settings-panel__label">Type</label>
            <select className="settings-panel__select" value={newType.value} onChange={(e) => (newType.value = (e.target as HTMLSelectElement).value)}>
              <option value="secret">Secret</option>
              <option value="token">Token</option>
              <option value="password">Password</option>
              <option value="basic">Basic</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <button type="button" className="settings-panel__provider-btn" onClick={addEntry}>Save</button>
            <button type="button" className="settings-panel__provider-btn" onClick={() => (showAdd.value = false)}>Cancel</button>
          </div>
        </div>
      )}

      <table className="settings-panel__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Env Var</th>
            <th>Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan={5} style={{ textAlign: "center", color: "var(--text-muted)" }}>No keychain entries.</td></tr>
          ) : (
            filtered.map(e => (
              <tr key={e.name}>
                <td>{e.name}</td>
                <td>{e.type ?? "—"}</td>
                <td><code style={{ fontSize: "11px", color: "var(--text-muted)" }}>{e.envVar ?? "—"}</code></td>
                <td>{e.updatedAt ? new Date(e.updatedAt).toLocaleDateString() : "—"}</td>
                <td>
                  <button type="button" className="settings-panel__provider-btn settings-panel__provider-btn--logout" onClick={() => deleteEntry(e.name)} title="Delete">
                    <i className="codicon codicon-trash" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
  const sendCommand = async (command: string) => {
    try {
      await fetch("/agent/web:default/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: command }),
      });
    } catch { /* ignore */ }
  };

  return (
    <section className="settings-panel__section">
      <h2 className="settings-panel__section-title">Providers</h2>
      {providers.length === 0 && (
        <p className="settings-panel__empty">No providers found.</p>
      )}
      {providers.map((p) => (
        <div key={p.id} className={`settings-panel__provider-card${p.configured ? " settings-panel__provider-card--active" : ""}`}>
          <div className={`settings-panel__provider-status-dot settings-panel__provider-status-dot--${p.configured ? "on" : "off"}`} />
          <div className="settings-panel__provider-info">
            <span className="settings-panel__provider-name">{p.name}</span>
            <span className="settings-panel__provider-id">{p.id}</span>
            {p.hasOAuth && <span className="settings-panel__auth-badge settings-panel__auth-badge--oauth">OAuth</span>}
            {p.hasApiKey && <span className="settings-panel__auth-badge settings-panel__auth-badge--apikey">API Key</span>}
            {!p.hasOAuth && !p.hasApiKey && <span className="settings-panel__auth-badge settings-panel__auth-badge--custom">Custom</span>}
          </div>
          <div className="settings-panel__provider-actions">
            {p.configured ? (
              <>
                <button type="button" className="settings-panel__provider-btn settings-panel__provider-btn--logout" onClick={() => sendCommand(`/logout ${p.id}`)}>Logout</button>
                <button type="button" className="settings-panel__provider-btn" onClick={() => sendCommand(`/login ${p.id}`)}>Reconfigure</button>
              </>
            ) : (
              <button type="button" className="settings-panel__provider-btn" onClick={() => sendCommand(`/login ${p.id}`)}>Set up</button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
