import { useEffect, useMemo, useCallback, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";
import { Sidebar } from "./components/Sidebar";
import { CommandPalette } from "./components/CommandPalette";
import { PanelRouter, ChatPanel } from "./panels";
import { commandRegistry } from "./services";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

function AppContent() {
  const theme = useTheme();
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

  useEffect(() => {
    localStorage.setItem("piclaw-sidebar-width", String(sidebarWidth.value));
  }, [sidebarWidth.value]);
  useEffect(() => {
    localStorage.setItem("piclaw-sidebar-collapsed", String(sidebarCollapsed.value));
  }, [sidebarCollapsed.value]);
  useEffect(() => {
    localStorage.setItem("piclaw-terminal-visible", String(terminalVisible.value));
  }, [terminalVisible.value]);
  useEffect(() => {
    localStorage.setItem("piclaw-terminal-height", String(terminalHeight.value));
  }, [terminalHeight.value]);

  useEffect(() => {
    const unsub = websocket.onStatusChange((s) => {
      connectionStatus.value = s;
    });
    websocket.connect();
    return () => {
      unsub();
      websocket.disconnect();
    };
  }, [connectionStatus, websocket]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.ctrlKey && !e.shiftKey && !e.altKey && (e.code === "Backquote" || e.key === "`" || e.key === "\u00BA" || e.key === "Dead")) {
        e.preventDefault();
        e.stopPropagation();
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
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [paletteVisible, terminalVisible, sidebarCollapsed]);

  useEffect(() => {
    const cmds = [
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; sidebarCollapsed.value = false; } },
      { id: "nav.agent", label: "Show Agent", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; sidebarCollapsed.value = true; } },
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
      { id: "sidebar.toggle", label: "Toggle Sidebar", category: "navigation" as const, keybinding: "Ctrl+B", handler: () => { sidebarCollapsed.value = !sidebarCollapsed.value; } },
    ];
    cmds.forEach((c) => commandRegistry.register(c));
    return () => cmds.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible, sidebarCollapsed]);

  const handlePanelChange = useCallback((id: string) => {
    if (id === "agent") {
      activePanel.value = id;
      sidebarCollapsed.value = true;
      return;
    }

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
    const onUp = () => {
      termDragRef.current = null;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [terminalHeight, terminalMaximized]);

  const tH = terminalMaximized.value ? "calc(100vh - 60px)" : `${terminalHeight.value}px`;
  const sbWidth = sidebarCollapsed.value ? 0 : sidebarWidth.value;

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden", background: theme.bg, color: theme.text }}>
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        <div style={{ flex: "1 1 0", minHeight: 0, display: "flex", overflow: "hidden" }}>
          <div style={{ width: `${sbWidth}px`, minWidth: sidebarCollapsed.value ? 0 : 150, maxWidth: sidebarCollapsed.value ? 0 : Math.round(window.innerWidth * 0.5), overflow: "hidden", transition: "width 0.15s ease", flexShrink: 0 }}>
            <Sidebar title={PANEL_NAMES[activePanel.value] || activePanel.value}>
              <PanelRouter activePanel={activePanel.value} />
            </Sidebar>
          </div>
          {!sidebarCollapsed.value && (
            <div
              style={{ width: "4px", cursor: "col-resize", background: theme.handle, flexShrink: 0, transition: "background 0.15s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = theme.handleHover; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = theme.handle; }}
              onMouseDown={(e) => {
                e.preventDefault();
                const startX = e.clientX;
                const startW = sidebarWidth.value;
                const onMove = (ev: MouseEvent) => {
                  sidebarWidth.value = Math.max(150, Math.min(Math.round(window.innerWidth * 0.5), startW + (ev.clientX - startX)));
                };
                const onUp = () => {
                  document.body.style.userSelect = "";
                  document.body.style.cursor = "";
                  document.removeEventListener("mousemove", onMove);
                  document.removeEventListener("mouseup", onUp);
                };
                document.body.style.userSelect = "none";
                document.body.style.cursor = "col-resize";
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onUp);
              }}
            />
          )}
          <div style={{ flex: 1, overflow: "hidden", minWidth: 0, height: "100%" }}>
            <ChatPanel />
          </div>
        </div>

        {terminalVisible.value && (
          <div style={{ height: tH, flexShrink: 0, display: "flex", flexDirection: "column", background: theme.bgTerminal }}>
            <div style={{ height: "4px", cursor: "row-resize", background: theme.handle, flexShrink: 0 }}
              onMouseDown={onTermDragStart}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = theme.handleHover; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = theme.handle; }} />
            <div style={{ height: "32px", background: theme.bgSidebar, borderBottom: `1px solid ${theme.border}`, display: "flex", alignItems: "center", padding: "0 12px", flexShrink: 0 }}>
              <span style={{ fontSize: "11px", color: theme.accent, textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Terminal</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ cursor: "pointer", color: theme.textMuted, fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { terminalMaximized.value = !terminalMaximized.value; }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = theme.text; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = theme.textMuted; }}
                  title={terminalMaximized.value ? "Restore" : "Maximize"}><i className={terminalMaximized.value ? "codicon codicon-screen-normal" : "codicon codicon-screen-full"} style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: theme.textMuted, fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { window.open("/static/terminal.html", "_blank"); }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = theme.text; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = theme.textMuted; }}
                  title="Open in new tab"><i className="codicon codicon-link-external" style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: theme.textMuted, fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no"); }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = theme.text; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = theme.textMuted; }}
                  title="Pop out to window"><i className="codicon codicon-multiple-windows" style={{ fontSize: "14px" }} /></span>
                <span style={{ cursor: "pointer", color: theme.textMuted, fontSize: "14px", padding: "2px 4px" }}
                  onClick={() => { terminalVisible.value = false; terminalMaximized.value = false; }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = theme.text; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = theme.textMuted; }}
                  title="Close (Ctrl+`)">&#x2715;</span>
              </div>
            </div>
            <div style={{ flex: 1, padding: "12px", color: theme.textMuted, fontFamily: "var(--font-mono)", fontSize: "13px", overflow: "auto" }}>$ xterm.js (Wave 9)</div>
          </div>
        )}

        <div style={{ height: "22px", display: "flex", alignItems: "center", padding: "0 8px", background: theme.bgStatus, borderTop: `1px solid ${theme.border}`, fontSize: "11px", flexShrink: 0, gap: "12px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: connected ? theme.success : theme.error }} />
            <span style={{ color: theme.textMuted }}>{connected ? "Connected" : "Disconnected"}</span>
          </span>
          {!terminalVisible.value && (
            <span style={{ cursor: "pointer", color: theme.textMuted, marginLeft: "auto" }}
              onClick={() => { terminalVisible.value = true; }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = theme.text; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = theme.textMuted; }}
              title="Open Terminal (Ctrl+`)">Terminal</span>
          )}
        </div>
      </div>

      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
