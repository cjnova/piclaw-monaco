import { useEffect, useMemo } from "preact/hooks";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { WebSocketManager } from "./api/websocket";
import { ActivityBar } from "./components/ActivityBar";
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

    return () => {
      unsubscribe();
      websocket.disconnect();
    };
  }, [connectionStatus, websocket]);

  useEffect(() => {
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        paletteVisible.value = !paletteVisible.value;
      }
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, [paletteVisible]);

  useEffect(() => {
    const commands = [
      {
        id: "navigation.show-explorer",
        label: "Show Explorer",
        category: "navigation" as const,
        keybinding: "Ctrl+Shift+E",
        handler: () => {
          activePanel.value = "explorer";
        },
      },
      {
        id: "navigation.show-agent",
        label: "Show Agent",
        category: "navigation" as const,
        keybinding: "Ctrl+Shift+A",
        handler: () => {
          activePanel.value = "agent";
        },
      },
      {
        id: "terminal.toggle",
        label: "Toggle Terminal",
        category: "terminal" as const,
        keybinding: "Ctrl+`",
        handler: () => {
          terminalVisible.value = !terminalVisible.value;
          console.log(`[command] terminal ${terminalVisible.value ? "shown" : "hidden"}`);
        },
      },
    ];

    commands.forEach((command) => commandRegistry.register(command));

    return () => {
      commands.forEach((command) => commandRegistry.unregister(command.id));
    };
  }, [activePanel, terminalVisible]);

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
      <CommandPalette
        visible={paletteVisible.value}
        onClose={() => {
          paletteVisible.value = false;
        }}
      />
    </div>
  );
}
