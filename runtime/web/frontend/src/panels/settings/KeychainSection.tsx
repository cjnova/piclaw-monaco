import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface KeychainEntry {
  name: string;
  type?: string;
  envVar?: string | null;
  updatedAt?: string;
}

interface KeychainResponse {
  entries?: KeychainEntry[];
}

export function KeychainSection() {
  const entries = useSignal<KeychainEntry[]>([]);
  const filter = useSignal("");
  const showAdd = useSignal(false);
  const newName = useSignal("");
  const newSecret = useSignal("");
  const newType = useSignal("secret");
  const keychainError = useSignal<string | null>(null);
  const keychainErrorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showKeychainError = (msg: string) => {
    keychainError.value = msg;
    if (keychainErrorTimer.current) clearTimeout(keychainErrorTimer.current);
    keychainErrorTimer.current = setTimeout(() => (keychainError.value = null), 3000);
  };

  const fetchEntries = () => {
    fetch("/agent/keychain", { credentials: "same-origin" })
      .then(r => r.json())
      .then((d: KeychainResponse) => { entries.value = d.entries ?? []; })
      .catch(() => {});
  };

  useEffect(() => { fetchEntries(); }, []);

  const addEntry = async () => {
    if (!newName.value.trim() || !newSecret.value.trim()) return;
    try {
      const res = await fetch("/agent/keychain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ name: newName.value.trim(), secret: newSecret.value, type: newType.value }),
      });
      if (!res.ok) {
        console.warn("[keychain] add failed:", res.status);
        showKeychainError("Couldn't add entry. Please try again.");
        return;
      }
      newName.value = "";
      newSecret.value = "";
      showAdd.value = false;
      fetchEntries();
    } catch (err) {
      console.warn("[keychain] add failed:", err);
      showKeychainError("Failed to add entry");
    }
  };

  const deleteEntry = async (name: string) => {
    if (!confirm(`Delete keychain entry "${name}"?`)) return;
    try {
      const res = await fetch("/agent/keychain", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        console.warn("[keychain] delete failed:", res.status);
        showKeychainError("Couldn't delete entry. Please try again.");
        return;
      }
      fetchEntries();
    } catch (err) {
      console.warn("[keychain] delete failed:", err);
      showKeychainError("Failed to delete entry");
    }
  };

  const filtered = filter.value
    ? entries.value.filter(e => e.name.toLowerCase().includes(filter.value.toLowerCase()))
    : entries.value;

  return (
    <section className="settings-panel__section" style={{ maxWidth: '720px' }}>
      <h2 className="settings-panel__section-title">Keychain</h2>

      {keychainError.value && (
        <div className="settings-panel__save-status settings-panel__save-status--error">{keychainError.value}</div>
      )}

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
