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
  const websocket = useMemo(() => new WebSocketManager(), []);

  useEffect(() => {
    const unsubscribe = websocket.onStatusChange((status) => {
      connectionStatus.value = status;
    });
    websocket.connect();
    return () => { unsubscribe(); websocket.disconnect(); };
  }, [connectionStatus, websocket]);

  useEffect(() => {
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      // Ctrl+` — toggle terminal (handles Spanish/intl keyboards)
      if (event.ctrlKey && !event.shiftKey && (event.code === "Backquote" || event.key === "`" || event.key === "º" || event.key === "Dead")) {
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
    };
    window.addEventListener("keydown", handleWindowKeyDown, true);
    return () => window.removeEventListener("keydown", handleWindowKeyDown, true);
  }, [paletteVisible, terminalVisible]);

  useEffect(() => {
    const commands = [
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; } },
      { id: "nav.agent", label: "Show Agent", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; } },
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
    ];
    commands.forEach((c) => commandRegistry.register(c));
    return () => commands.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible]);

  const connected = connectionStatus.value === "connected";

  return (
    <div className="shell-root">
      <ActivityBar
        activePanel={activePanel.value}
        onPanelChange={(id) => { activePanel.value = id; }}
      />
      <div className="shell-content" style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
        <header className="shell-status">
          <span className={`shell-status__dot ${connected ? "is-connected" : "is-disconnected"}`} title={connected ? "Connected" : "Disconnected"} />
          <span className="shell-status__text">{connected ? "Connected" : "Disconnected"}</span>
        </header>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Main area: sidebar + panel (+ optional bottom terminal) */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            <SplitPane direction="horizontal" initialSize={250} minSize={150} maxSize={400}>
              <Sidebar title={activePanel.value}>{null}</Sidebar>
              <PanelRouter activePanel={activePanel.value} />
            </SplitPane>
          </div>
          {/* Bottom panel (terminal dock) */}
          <BottomPanel visible={terminalVisible.value}>
            <div style={{ padding: "12px", color: "#6c7086", fontFamily: "monospace", fontSize: "13px" }}>
              Terminal will be mounted here (xterm.js — Wave 9)
            </div>
          </BottomPanel>
        </div>
      </div>
      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
    </div>
  );
}
