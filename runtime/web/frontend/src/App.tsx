import { useEffect, useMemo, useCallback } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";
import { Sidebar } from "./components/Sidebar";
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
    const unsubscribe = websocket.onStatusChange((s) => { connectionStatus.value = s; });
    websocket.connect();
    return () => { unsubscribe(); websocket.disconnect(); };
  }, [connectionStatus, websocket]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && !e.shiftKey && !e.altKey && (e.code === "Backquote" || e.key === "`" || e.key === "º" || e.key === "Dead")) {
        e.preventDefault(); e.stopPropagation();
        terminalVisible.value = !terminalVisible.value;
        return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        paletteVisible.value = !paletteVisible.value;
        return;
      }
      if (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        sidebarCollapsed.value = !sidebarCollapsed.value;
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [paletteVisible, terminalVisible, sidebarCollapsed]);

  // Register commands
  useEffect(() => {
    const cmds = [
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; } },
      { id: "nav.agent", label: "Show Agent", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; } },
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
      { id: "sidebar.toggle", label: "Toggle Sidebar", category: "navigation" as const, keybinding: "Ctrl+B", handler: () => { sidebarCollapsed.value = !sidebarCollapsed.value; } },
    ];
    cmds.forEach((c) => commandRegistry.register(c));
    return () => cmds.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible, sidebarCollapsed]);

  const toggleSidebar = useCallback(() => { sidebarCollapsed.value = !sidebarCollapsed.value; }, [sidebarCollapsed]);
  const connected = connectionStatus.value === "connected";

  /*
   * Layout (VS Code style):
   *
   * ┌──────────────────────────────────────────────────┐
   * │ ActivityBar │ Status bar (full width)             │
   * │             ├────────────┬────────────────────────│
   * │             │ Sidebar    │ Main Panel             │
   * │             │            │                        │
   * │             ├────────────┴────────────────────────│
   * │             │ Terminal (full width, docked bottom) │
   * └──────────────────────────────────────────────────┘
   */

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden", background: "#1e1e2e", color: "#cdd6f4" }}>
      {/* Activity Bar — fixed left */}
      <ActivityBar activePanel={activePanel.value} onPanelChange={(id) => { activePanel.value = id; }} />

      {/* Everything right of Activity Bar */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Status bar */}
        <div style={{ height: "24px", display: "flex", alignItems: "center", padding: "0 12px", background: "#181825", borderBottom: "1px solid #313244", fontSize: "12px", flexShrink: 0 }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: connected ? "#a6e3a1" : "#f38ba8", marginRight: "6px" }} />
          <span style={{ color: "#6c7086" }}>{connected ? "Connected" : "Disconnected"}</span>
        </div>

        {/* Middle: Sidebar + Main */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {sidebarCollapsed.value ? (
            // No sidebar — just main panel
            <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
              <PanelRouter activePanel={activePanel.value} />
            </div>
          ) : (
            // SplitPane: sidebar | main
            <SplitPane direction="horizontal" initialSize={250} minSize={150} maxSize={500}>
              <Sidebar title={activePanel.value} collapsed={false} onToggleCollapse={toggleSidebar}>
                <div style={{ padding: "8px 12px", color: "#6c7086", fontSize: "12px" }}>
                  {activePanel.value} content...
                </div>
              </Sidebar>
              <PanelRouter activePanel={activePanel.value} />
            </SplitPane>
          )}
        </div>

        {/* Bottom: Terminal (docked, full width) */}
        {terminalVisible.value && (
          <div style={{ height: "200px", flexShrink: 0, borderTop: "1px solid #313244", background: "#11111b", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "32px", background: "#181825", borderBottom: "1px solid #313244", display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0 }}>
              <span style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Terminal</span>
              <span
                style={{ marginLeft: "auto", cursor: "pointer", color: "#6c7086", fontSize: "16px", lineHeight: 1, padding: "4px" }}
                onClick={() => { terminalVisible.value = false; }}
                title="Close terminal (Ctrl+`)"
              >✕</span>
            </div>
            <div style={{ flex: 1, padding: "12px", color: "#a6adc8", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", overflow: "auto" }}>
              $ xterm.js will mount here (Wave 9)
            </div>
          </div>
        )}
      </div>

      {/* Command Palette overlay */}
      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
    </div>
  );
}
