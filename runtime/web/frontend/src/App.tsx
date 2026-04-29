import { useEffect, useMemo, useCallback, useRef } from "preact/hooks";
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
  const terminalHeight = useSignal(200);
  const terminalMaximized = useSignal(false);
  const sidebarCollapsed = useSignal(false);
  const websocket = useMemo(() => new WebSocketManager(), []);
  const termDragRef = useRef<{ startY: number; startH: number } | null>(null);

  useEffect(() => {
    const unsub = websocket.onStatusChange((s) => { connectionStatus.value = s; });
    websocket.connect();
    return () => { unsub(); websocket.disconnect(); };
  }, [connectionStatus, websocket]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.ctrlKey && !e.shiftKey && !e.altKey && (e.code === "Backquote" || e.key === "`" || e.key === "\u00BA" || e.key === "Dead")) {
        e.preventDefault(); e.stopPropagation(); terminalVisible.value = !terminalVisible.value; return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") { e.preventDefault(); paletteVisible.value = !paletteVisible.value; return; }
      if (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === "b") { e.preventDefault(); sidebarCollapsed.value = !sidebarCollapsed.value; }
    };
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [paletteVisible, terminalVisible, sidebarCollapsed]);

  useEffect(() => {
    const cmds = [
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; sidebarCollapsed.value = false; } },
      { id: "nav.agent", label: "Show Agent", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; sidebarCollapsed.value = false; } },
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
      { id: "sidebar.toggle", label: "Toggle Sidebar", category: "navigation" as const, keybinding: "Ctrl+B", handler: () => { sidebarCollapsed.value = !sidebarCollapsed.value; } },
    ];
    cmds.forEach((c) => commandRegistry.register(c));
    return () => cmds.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible, sidebarCollapsed]);

  const handlePanelChange = useCallback((id: string) => {
    sidebarCollapsed.value = false;
    activePanel.value = id;
  }, [activePanel, sidebarCollapsed]);

  const toggleSidebar = useCallback(() => { sidebarCollapsed.value = !sidebarCollapsed.value; }, [sidebarCollapsed]);
  const connected = connectionStatus.value === "connected";

  const onTermDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    termDragRef.current = { startY: e.clientY, startH: terminalMaximized.value ? window.innerHeight * 0.7 : terminalHeight.value };
    terminalMaximized.value = false;
    const onMove = (ev: MouseEvent) => {
      if (!termDragRef.current) return;
      const next = Math.max(100, Math.min(window.innerHeight * 0.8, termDragRef.current.startH + (termDragRef.current.startY - ev.clientY)));
      terminalHeight.value = next;
    };
    const onUp = () => { termDragRef.current = null; document.body.style.userSelect = ""; document.body.style.cursor = ""; document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
    document.body.style.userSelect = "none"; document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
  }, [terminalHeight, terminalMaximized]);

  const tH = terminalMaximized.value ? "calc(100vh - 60px)" : `${terminalHeight.value}px`;

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden", background: "#1e1e2e", color: "#cdd6f4" }}>
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        {/* Main area */}
        <div style={{ flex: "1 1 0", minHeight: 0, overflow: "hidden" }}>
          {sidebarCollapsed.value ? (
            <div style={{ width: "100%", height: "100%" }}><PanelRouter activePanel={activePanel.value} /></div>
          ) : (
            <SplitPane direction="horizontal" initialSize={250} minSize={150} maxSize={Math.round(window.innerWidth * 0.5)}>
              <Sidebar title={activePanel.value} collapsed={false} onToggleCollapse={toggleSidebar}>
                <div style={{ padding: "8px 12px", color: "#6c7086", fontSize: "12px" }}>{activePanel.value} content...</div>
              </Sidebar>
              <PanelRouter activePanel={activePanel.value} />
            </SplitPane>
          )}
        </div>

        {/* Terminal dock */}
        {terminalVisible.value && (
          <div style={{ height: tH, flexShrink: 0, display: "flex", flexDirection: "column", background: "#11111b" }}>
            <div style={{ height: "4px", cursor: "row-resize", background: "#313244", flexShrink: 0 }}
              onMouseDown={onTermDragStart}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "#313244"; }} />
            <div style={{ height: "32px", background: "#181825", borderBottom: "1px solid #313244", display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0 }}>
              <span style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Terminal</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ cursor: "pointer", color: "#6c7086", fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { terminalMaximized.value = !terminalMaximized.value; }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
                  title={terminalMaximized.value ? "Restore" : "Maximize"}>{terminalMaximized.value ? "\u229F" : "\u229E"}</span>
                <span style={{ cursor: "pointer", color: "#6c7086", fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { terminalVisible.value = false; terminalMaximized.value = false; }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
                  title="Close (Ctrl+`)">&#x2715;</span>
              </div>
            </div>
            <div style={{ flex: 1, padding: "12px", color: "#a6adc8", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", overflow: "auto" }}>$ xterm.js (Wave 9)</div>
          </div>
        )}

        {/* Status bar — bottom edge, always visible */}
        <div style={{ height: "22px", display: "flex", alignItems: "center", padding: "0 8px", background: "#181825", borderTop: "1px solid #313244", fontSize: "11px", flexShrink: 0, gap: "12px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: connected ? "#a6e3a1" : "#f38ba8" }} />
            <span style={{ color: "#6c7086" }}>{connected ? "Connected" : "Disconnected"}</span>
          </span>
          {!terminalVisible.value && (
            <span style={{ cursor: "pointer", color: "#6c7086", marginLeft: "auto" }}
              onClick={() => { terminalVisible.value = true; }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
              title="Open Terminal (Ctrl+`)">Terminal</span>
          )}
        </div>
      </div>
      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
    </div>
  );
}
