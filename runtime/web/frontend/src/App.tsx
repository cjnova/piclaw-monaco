import { signal } from "@preact/signals";

const greeting = signal("Hello PiClaw Monaco");

export function App() {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#1e1e2e",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "24px",
        height: "100vh",
        justifyContent: "center",
        margin: "0",
      }}
    >
      {greeting.value}
    </div>
  );
}
