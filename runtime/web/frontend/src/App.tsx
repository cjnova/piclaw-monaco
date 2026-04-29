import { Icon } from "./components/Icon";

const items = [
  { name: "files", label: "Explorer" },
  { name: "search", label: "Search" },
  { name: "extensions", label: "Extensions" },
  { name: "hubot", label: "Agent" },
];

export function App() {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#1e1e2e",
        color: "#ffffff",
        display: "flex",
        fontFamily: "Inter, system-ui, sans-serif",
        height: "100vh",
        justifyContent: "center",
        margin: "0",
      }}
    >
      <div style={{ display: "grid", gap: "12px" }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{ alignItems: "center", display: "flex", gap: "8px" }}
          >
            <Icon name={item.name} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
