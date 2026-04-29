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
  const activePanel = useSignal("explorer");
  const paletteVisible = useSignal(false);
  const terminalVisible = useSignal(localStorage.getItem("piclaw-terminal-visible") === "true");
  const terminalHeight = useSignal(Number(localStorage.getItem("piclaw-terminal-height")) || 200);
  const terminalMaximized = useSignal(false);
  const sidebarCollapsed = useSignal(localStorage.getItem("piclaw-sidebar-collapsed") === "true");
  const sidebarWidth = useSignal(Number(localStorage.getItem("piclaw-sidebar-width")) || 250);
  const websocket = useMemo(() => new WebSocketManager(), []);
  const termDragRef = useRef<{ startY: number; startH: number } | null>(null);
  useEffect(() => { localStorage.setItem("piclaw-sidebar-width", String(sidebarWidth.value)); }, [sidebarWidth.value]);
  useEffect(() => { localStorage.setItem("piclaw-sidebar-collapsed", String(sidebarCollapsed.value)); }, [sidebarCollapsed.value]);
  useEffect(() => { localStorage.setItem("piclaw-terminal-visible", String(terminalVisible.value)); }, [terminalVisible.value]);
  useEffect(() => { localStorage.setItem("piclaw-terminal-height", String(terminalHeight.value)); }, [terminalHeight.value]);

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

  // VS Code behavior: click active icon = toggle sidebar, click different icon = switch + open
  const handlePanelChange = useCallback((id: string) => {
    if (id === activePanel.value) {
      sidebarCollapsed.value = !sidebarCollapsed.value;
    } else {
      activePanel.value = id;
      sidebarCollapsed.value = false;
    }
  }, [activePanel, sidebarCollapsed]);

  const connected = connectionStatus.value === "connected";
  const PANEL_NAMES: Record<string, string> = { explorer: "Workspace", search: "Search", extensions: "Addons", agent: "Agent", settings: "Settings" };

  const onTermDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    termDragRef.current = { startY: e.clientY, startH: terminalMaximized.value ? window.innerHeight * 0.7 : terminalHeight.value };
    terminalMaximized.value = false;
    const onMove = (ev: MouseEvent) => {
      if (!termDragRef.current) return;
      terminalHeight.value = Math.max(100, Math.min(window.innerHeight * 0.8, termDragRef.current.startH + (termDragRef.current.startY - ev.clientY)));
    };
    const onUp = () => { termDragRef.current = null; document.body.style.userSelect = ""; document.body.style.cursor = ""; document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
    document.body.style.userSelect = "none"; document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
  }, [terminalHeight, terminalMaximized]);

  const tH = terminalMaximized.value ? "calc(100vh - 60px)" : `${terminalHeight.value}px`;
  const sbWidth = sidebarCollapsed.value ? 0 : sidebarWidth.value;

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden", background: "#1e1e2e", color: "#cdd6f4" }}>
      {/* Activity Bar — in flex flow, not fixed */}
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />

      {/* Content right of Activity Bar */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        {/* Main area: sidebar + panel */}
        <div style={{ flex: "1 1 0", minHeight: 0, display: "flex", overflow: "hidden" }}>
          {/* Sidebar — always mounted, collapsed via width:0 */}
          <div style={{
            width: `${sbWidth}px`,
            minWidth: sidebarCollapsed.value ? 0 : 150,
            maxWidth: sidebarCollapsed.value ? 0 : Math.round(window.innerWidth * 0.5),
            overflow: "hidden",
            transition: "width 0.15s ease",
            flexShrink: 0,
          }}>
            <Sidebar title={PANEL_NAMES[activePanel.value] || activePanel.value}>
              <div style={{ padding: "8px 12px", color: "#6c7086", fontSize: "12px" }}>{activePanel.value} content...</div>
            </Sidebar>
          </div>
          {/* Resize handle — only visible when sidebar is open */}
          {!sidebarCollapsed.value && (
            <div
              style={{ width: "4px", cursor: "col-resize", background: "#313244", flexShrink: 0, transition: "background 0.15s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "#313244"; }}
              onMouseDown={(e) => {
                e.preventDefault();
                const startX = e.clientX;
                const startW = sidebarWidth.value;
                const onMove = (ev: MouseEvent) => {
                  sidebarWidth.value = Math.max(150, Math.min(Math.round(window.innerWidth * 0.5), startW + (ev.clientX - startX)));
                };
                const onUp = () => { document.body.style.userSelect = ""; document.body.style.cursor = ""; document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
                document.body.style.userSelect = "none"; document.body.style.cursor = "col-resize";
                document.addEventListener("mousemove", onMove); document.addEventListener("mouseup", onUp);
              }}
            />
          )}
          {/* Main panel */}
          <div style={{ flex: 1, overflow: "auto", minWidth: 0, height: "100%" }}>
            <PanelRouter activePanel={activePanel.value} />
          </div>
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
                  title={terminalMaximized.value ? "Restore" : "Maximize"}><i className={terminalMaximized.value ? "codicon codicon-screen-normal" : "codicon codicon-screen-full"} style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: "#6c7086", fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { window.open("/static/terminal.html", "_blank"); }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
                  title="Open in new tab"><i className="codicon codicon-link-external" style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: "#6c7086", fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no"); }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
                  title="Pop out to window"><i className="codicon codicon-multiple-windows" style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: "#6c7086", fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { terminalVisible.value = false; terminalMaximized.value = false; }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
                  title="Close (Ctrl+`)">&#x2715;</span>
              </div>
            </div>
            <div style={{ flex: 1, padding: "12px", color: "#a6adc8", fontFamily: "var(--font-mono)", fontSize: "13px", overflow: "auto" }}>$ xterm.js (Wave 9)</div>
          </div>
        )}

        {/* Status bar */}
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
