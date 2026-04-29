import { useEffect, useMemo } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";

export function App() {
  const connectionStatus = useSignal<ConnectionStatus>("disconnected");
  const activePanel = useSignal("agent");
  const websocket = useMemo(() => new WebSocketManager(), []);

  useEffect(() => {
    const unsubscribe = websocket.onStatusChange((status) => {
      connectionStatus.value = status;
    });

    websocket.connect();

    return () => {
      unsubscribe();
      websocket.disconnect();
    };
  }, [connectionStatus, websocket]);

  const connected = connectionStatus.value === "connected";

  return (
    <div className="shell-root">
      <ActivityBar
        activePanel={activePanel.value}
        onPanelChange={(id) => {
          activePanel.value = id;
        }}
      />
      <main className="shell-content" aria-live="polite">
        <header className="shell-status">
          <span
            className={`shell-status__dot ${connected ? "is-connected" : "is-disconnected"}`}
            aria-label={connected ? "connected" : "disconnected"}
            title={connected ? "Connected" : "Disconnected"}
          />
          <span className="shell-status__text">{connected ? "Connected" : "Disconnected"}</span>
        </header>
        <section className="shell-panel-placeholder">
          <h1>{activePanel.value}</h1>
        </section>
      </main>
    </div>
  );
}
