import { useEffect, useMemo, useState } from "preact/hooks";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { Icon } from "./components/Icon";

const items = [
  { name: "files", label: "Explorer" },
  { name: "search", label: "Search" },
  { name: "extensions", label: "Extensions" },
  { name: "hubot", label: "Agent" },
];

export function App() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("disconnected");
  const websocket = useMemo(() => new WebSocketManager(), []);

  useEffect(() => {
    const unsubscribe = websocket.onStatusChange(setConnectionStatus);
    websocket.connect();
    return () => {
      unsubscribe();
      websocket.disconnect();
    };
  }, [websocket]);

  const connected = connectionStatus === "connected";

  return (
    <div
      style={{
        background: "#1e1e2e",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "18px",
        height: "100vh",
        gap: "24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          aria-label={connected ? "connected" : "disconnected"}
          style={{
            backgroundColor: connected ? "#22c55e" : "#ef4444",
            borderRadius: "9999px",
            display: "inline-block",
            height: "12px",
            width: "12px",
          }}
        />
        <span>{connected ? "Connected to PiClaw" : "Disconnected"}</span>
      </div>
      <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
        {items.map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Icon name={item.name} size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
