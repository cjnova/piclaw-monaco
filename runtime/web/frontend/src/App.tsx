import { useEffect, useMemo } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";
import { Sidebar } from "./components/Sidebar";
import { BottomPanel } from "./components/BottomPanel";
import { CommandPalette } from "./components/CommandPalette";
import { SplitPane } from "./components/SplitPane";
import { PanelRouter } from "./panels";
import { commandRegistry } from "./services";

export function App() {
  const connectionStatus = useSignal<ConnectionStatus>("disconnected");
  const activePanel = useSignal("agent");
  const paletteVisible = useSignal(false);
  const terminalVisible = useSignal(false);
  const sidebarCollapsed = useSignal(false);
  const websocket = useMemo(() => new WebSocketManager(), []);

  useEffect(() => {
    const unsubscribe = websocket.onStatusChange((status) => { connectionStatus.value = status; });
    websocket.connect();
    return () => { unsubscribe(); websocket.disconnect(); };
  }, [connectionStatus, websocket]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+` or Ctrl+º — toggle terminal
      if (event.ctrlKey && !event.shiftKey && !event.altKey &&
          (event.code === "Backquote" || event.key === "`" || event.key === "º" || event.key === "\\" || event.key === "Dead")) {
        event.preventDefault();
        event.stopPropagation();
        terminalVisible.value = !terminalVisible.value;
        return;
      }
      // Ctrl+Shift+P — command palette
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        paletteVisible.value = !paletteVisible.value;
      }
      // Ctrl+B — toggle sidebar
      if (event.ctrlKey && !event.shiftKey && event.key.toLowerCase() === "b") {
        event.preventDefault();
        sidebarCollapsed.value = !sidebarCollapsed.value;
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [paletteVisible, terminalVisible, sidebarCollapsed]);

  useEffect(() => {
    const commands = [
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; } },
      { id: "nav.agent", label: "Show Agent", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; } },
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
      { id: "sidebar.toggle", label: "Toggle Sidebar", category: "navigation" as const, keybinding: "Ctrl+B", handler: () => { sidebarCollapsed.value = !sidebarCollapsed.value; } },
    ];
    commands.forEach((c) => commandRegistry.register(c));
    return () => commands.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible, sidebarCollapsed]);

  const connected = connectionStatus.value === "connected";

  return (
    <div className="shell-root">
      <ActivityBar activePanel={activePanel.value} onPanelChange={(id) => { activePanel.value = id; }} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
        {/* Status bar */}
        <header className="shell-status">
          <span className={`shell-status__dot ${connected ? "is-connected" : "is-disconnected"}`} title={connected ? "Connected" : "Disconnected"} />
          <span className="shell-status__text">{connected ? "Connected" : "Disconnected"}</span>
        </header>

        {/* Main area (sidebar + content) */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <SplitPane direction="horizontal" initialSize={sidebarCollapsed.value ? 0 : 250} minSize={150} maxSize={800}>
            <Sidebar
              title={activePanel.value}
              collapsed={sidebarCollapsed.value}
              onToggleCollapse={() => { sidebarCollapsed.value = !sidebarCollapsed.value; }}
            >
              <div style={{ padding: "8px 12px", color: "#6c7086", fontSize: "12px" }}>
                {activePanel.value} content here...
              </div>
            </Sidebar>
            <PanelRouter activePanel={activePanel.value} />
          </SplitPane>
        </div>

        {/* Bottom panel (terminal) */}
        {terminalVisible.value && (
          <div style={{ height: "200px", borderTop: "1px solid #313244", background: "#11111b", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "32px", background: "#181825", borderBottom: "1px solid #313244", display: "flex", alignItems: "center", padding: "0 12px", gap: "8px" }}>
              <span style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "1px" }}>Terminal</span>
              <span style={{ marginLeft: "auto", cursor: "pointer", color: "#6c7086", fontSize: "14px" }} onClick={() => { terminalVisible.value = false; }}>✕</span>
            </div>
            <div style={{ flex: 1, padding: "12px", color: "#a6adc8", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>
              $ xterm.js will mount here (Wave 9)<br/>
              <span style={{ color: "#6c7086" }}>Press Ctrl+` or Ctrl+º to toggle this panel</span>
            </div>
          </div>
        )}
      </div>
      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
    </div>
  );
}
