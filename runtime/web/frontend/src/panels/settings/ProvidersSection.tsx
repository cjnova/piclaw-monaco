import { getMessageUrl } from "../../api/chat-jid";
import { type Provider } from "./types";

export function ProvidersSection({ providers }: { providers: Provider[] }) {
  const sendCommand = async (command: string) => {
    try {
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: command }),
      });
      if (!res.ok) {
        console.warn("[providers] command failed:", res.status);
      }
    } catch (err) {
      console.warn("[providers] command failed:", err);
    }
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
