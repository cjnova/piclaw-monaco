import { useEffect, useMemo } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";
import { SplitPane } from "./components/SplitPane";
import { PanelRouter } from "./panels";

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
      <main className="shell-content">
        <header className="shell-status">
          <span
            className={`shell-status__dot ${connected ? "is-connected" : "is-disconnected"}`}
            aria-label={connected ? "connected" : "disconnected"}
            title={connected ? "Connected" : "Disconnected"}
          />
          <span className="shell-status__text">{connected ? "Connected" : "Disconnected"}</span>
        </header>
        <div className="shell-main-layout">
          <SplitPane direction="horizontal" initialSize={250} minSize={150} maxSize={400}>
            <aside className="shell-sidebar">Sidebar area</aside>
            <PanelRouter activePanel={activePanel.value} />
          </SplitPane>
        </div>
      </main>
    </div>
  );
}
