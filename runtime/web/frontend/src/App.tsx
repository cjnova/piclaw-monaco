import { isSafeExtensionUrl } from "./utils/isSafeExtensionUrl";
import { useEffect, useMemo, useCallback, useRef } from "preact/hooks";
import type { JSX } from "preact";
import { useSignal } from "@preact/signals";
import type { ConnectionStatus } from "./api/types";
import { ActivityBar } from "./components/ActivityBar";
import { TerminalComponent } from "./components/TerminalComponent";
import { Sidebar } from "./components/Sidebar";
import { SystemStats } from "./components/SystemStats";
import { ModelContextBar } from "./components/ModelContextBar";
import { CommandPalette } from "./components/CommandPalette";
import { PanelRouter, ChatPanel, SettingsPanel } from "./panels";
import { commandRegistry } from "./services";
import { ThemeProvider, useThemeControl } from "./theme/ThemeProvider";
import { sanitizeMarkdownHtml } from "./utils/markdown";
import { readLocalStorageValue, writeLocalStorageValue } from "./utils/storage";

function AppContent() {
  const themeControl = useThemeControl();
  const connectionStatus = useSignal<ConnectionStatus>("disconnected");
  const activePanel = useSignal(readLocalStorageValue("piclaw-active-panel") || "explorer");
  const previousPanel = useSignal(readLocalStorageValue("piclaw-previous-panel") || "explorer");
  const paletteVisible = useSignal(false);
  const terminalVisible = useSignal(readLocalStorageValue("piclaw-terminal-visible") === "true");
  const terminalHeight = useSignal(Number(readLocalStorageValue("piclaw-terminal-height")) || 200);
  const terminalMaximized = useSignal(false);
  const sidebarCollapsed = useSignal(readLocalStorageValue("piclaw-sidebar-collapsed") === "true");
  const sidebarWidth = useSignal(Number(readLocalStorageValue("piclaw-sidebar-width")) || 250);
  const extensionPageUrl = useSignal<string | null>(null);
  const extensionPageName = useSignal<string | null>(null);
  const extensionPageHtml = useSignal<string | null>(null);
  const termDragRef = useRef<{ startY: number; startH: number } | null>(null);

  useEffect(() => {
    writeLocalStorageValue("piclaw-sidebar-width", String(sidebarWidth.value));
  }, [sidebarWidth.value]);
  useEffect(() => {
    writeLocalStorageValue("piclaw-active-panel", activePanel.value);
  }, [activePanel.value]);
  useEffect(() => {
    writeLocalStorageValue("piclaw-previous-panel", previousPanel.value);
  }, [previousPanel.value]);
  useEffect(() => {
    writeLocalStorageValue("piclaw-sidebar-collapsed", String(sidebarCollapsed.value));
  }, [sidebarCollapsed.value]);
  useEffect(() => {
    writeLocalStorageValue("piclaw-terminal-visible", String(terminalVisible.value));
  }, [terminalVisible.value]);
  useEffect(() => {
    writeLocalStorageValue("piclaw-terminal-height", String(terminalHeight.value));
  }, [terminalHeight.value]);

  // Connection status — derive from MessageList's SSE (via custom event)
  useEffect(() => {
    const onConnected = () => { connectionStatus.value = "connected"; };
    const onDisconnected = () => { connectionStatus.value = "disconnected"; };
    window.addEventListener("piclaw:sse-connected", onConnected);
    window.addEventListener("piclaw:sse-disconnected", onDisconnected);
    // Probe: if SSE already open, the event already fired — check with a ping
    fetch("/agent/models", { credentials: "same-origin" })
      .then((r) => { if (r.ok) connectionStatus.value = "connected"; })
      .catch(() => {});
    return () => {
      window.removeEventListener("piclaw:sse-connected", onConnected);
      window.removeEventListener("piclaw:sse-disconnected", onDisconnected);
    };
  }, []);

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
        return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        activePanel.value = "explorer";
        sidebarCollapsed.value = false;
        return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "f") {
        e.preventDefault();
        activePanel.value = "search";
        sidebarCollapsed.value = false;
        return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "x") {
        e.preventDefault();
        activePanel.value = "extensions";
        sidebarCollapsed.value = false;
        return;
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        activePanel.value = "agent";
        sidebarCollapsed.value = false;
        return;
      }
      if (e.ctrlKey && !e.shiftKey && e.key === ",") {
        e.preventDefault();
        activePanel.value = "settings";
        sidebarCollapsed.value = false;
        return;
      }
    };
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [paletteVisible, terminalVisible, sidebarCollapsed, activePanel]);

  useEffect(() => {
    const cmds = [
      // Navigation
      { id: "nav.explorer", label: "Show Explorer", category: "navigation" as const, keybinding: "Ctrl+Shift+E", handler: () => { activePanel.value = "explorer"; sidebarCollapsed.value = false; } },
      { id: "nav.search", label: "Show Search", category: "navigation" as const, keybinding: "Ctrl+Shift+F", handler: () => { activePanel.value = "search"; sidebarCollapsed.value = false; } },
      { id: "nav.extensions", label: "Show Addons", category: "navigation" as const, keybinding: "Ctrl+Shift+X", handler: () => { activePanel.value = "extensions"; sidebarCollapsed.value = false; } },
      { id: "nav.agent", label: "Show Dashboards", category: "navigation" as const, keybinding: "Ctrl+Shift+A", handler: () => { activePanel.value = "agent"; sidebarCollapsed.value = false; } },
      { id: "nav.settings", label: "Show Settings", category: "navigation" as const, keybinding: "Ctrl+,", handler: () => { activePanel.value = "settings"; sidebarCollapsed.value = false; } },
      { id: "sidebar.toggle", label: "Toggle Sidebar", category: "navigation" as const, keybinding: "Ctrl+B", handler: () => { sidebarCollapsed.value = !sidebarCollapsed.value; } },
      // Terminal
      { id: "terminal.toggle", label: "Toggle Terminal", category: "terminal" as const, keybinding: "Ctrl+`", handler: () => { terminalVisible.value = !terminalVisible.value; } },
      { id: "terminal.maximize", label: "Maximize Terminal", category: "terminal" as const, handler: () => { terminalVisible.value = true; terminalMaximized.value = true; } },
      { id: "terminal.restore", label: "Restore Terminal", category: "terminal" as const, handler: () => { terminalMaximized.value = false; } },
      { id: "terminal.newTab", label: "Open Terminal in New Tab", category: "terminal" as const, handler: () => { window.open("/static/terminal.html", "_blank", "noopener,noreferrer"); } },
      { id: "terminal.popOut", label: "Pop Out Terminal", category: "terminal" as const, handler: () => { window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no,noopener,noreferrer"); } },
      { id: "terminal.close", label: "Close Terminal", category: "terminal" as const, handler: () => { terminalVisible.value = false; terminalMaximized.value = false; } },
      // Theme
      { id: "theme.toggleDarkLight", label: "Toggle Dark/Light Theme", category: "theme" as const, handler: () => { themeControl.toggleMode(); } },
      { id: "theme.dark", label: "Switch to Dark Theme", category: "theme" as const, handler: () => { themeControl.setMode("dark"); } },
      { id: "theme.light", label: "Switch to Light Theme", category: "theme" as const, handler: () => { themeControl.setMode("light"); } },
      // Session
      { id: "session.reconnect", label: "Reconnect", category: "session" as const, handler: () => { window.dispatchEvent(new Event("piclaw:sse-reconnect")); } },
      // General
      { id: "general.commandPalette", label: "Open Command Palette", category: "general" as const, keybinding: "Ctrl+Shift+P", handler: () => { paletteVisible.value = !paletteVisible.value; } },
      { id: "general.clearLocalStorage", label: "Clear Layout State", category: "general" as const, handler: () => { ["piclaw-terminal-visible", "piclaw-terminal-height", "piclaw-sidebar-collapsed", "piclaw-sidebar-width"].forEach((k) => localStorage.removeItem(k)); } },
    ];
    cmds.forEach((c) => commandRegistry.register(c));
    return () => cmds.forEach((c) => commandRegistry.unregister(c.id));
  }, [activePanel, terminalVisible, terminalMaximized, sidebarCollapsed, paletteVisible, themeControl]);

  const handlePanelChange = useCallback((id: string) => {
    if (id === "settings" && activePanel.value === "settings") {
      // Toggle back from settings to previous panel
      activePanel.value = previousPanel.value;
      sidebarCollapsed.value = false;
    } else if (id === activePanel.value) {
      sidebarCollapsed.value = !sidebarCollapsed.value;
    } else {
      if (activePanel.value !== "settings") previousPanel.value = activePanel.value;
      activePanel.value = id;
      sidebarCollapsed.value = false;
    }
  }, [activePanel, sidebarCollapsed, previousPanel]);

  const handlePageSelect = useCallback((url: string, name: string) => {
    extensionPageUrl.value = url;
    extensionPageName.value = name;
    extensionPageHtml.value = null;
  }, [extensionPageUrl, extensionPageName, extensionPageHtml]);

  const handleBackToChat = useCallback(() => {
    extensionPageUrl.value = null;
    extensionPageName.value = null;
    extensionPageHtml.value = null;
  }, [extensionPageUrl, extensionPageName, extensionPageHtml]);

  const adjustSidebarWidth = useCallback((delta: number) => {
    sidebarWidth.value = Math.max(150, Math.min(Math.round(window.innerWidth * 0.5), sidebarWidth.value + delta));
  }, [sidebarWidth]);

  const startSidebarResize = useCallback((e: MouseEvent) => {
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
  }, [sidebarWidth]);

  const handleSidebarResizeKeyDown = useCallback((e: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 50 : 20;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      adjustSidebarWidth(-step);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      adjustSidebarWidth(step);
    } else if (e.key === "Home") {
      e.preventDefault();
      sidebarWidth.value = 150;
    } else if (e.key === "End") {
      e.preventDefault();
      sidebarWidth.value = Math.round(window.innerWidth * 0.5);
    }
  }, [adjustSidebarWidth, sidebarWidth]);

  const adjustTerminalHeight = useCallback((delta: number) => {
    terminalHeight.value = Math.max(100, Math.min(window.innerHeight * 0.8, terminalHeight.value + delta));
  }, [terminalHeight]);

  const startTerminalResize = useCallback((e: MouseEvent) => {
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

  const handleTerminalResizeKeyDown = useCallback((e: JSX.TargetedKeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 50 : 20;
    if (e.key === "ArrowUp") {
      e.preventDefault();
      adjustTerminalHeight(step);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      adjustTerminalHeight(-step);
    } else if (e.key === "Home") {
      e.preventDefault();
      terminalHeight.value = 100;
    } else if (e.key === "End") {
      e.preventDefault();
      terminalHeight.value = Math.round(window.innerHeight * 0.8);
    }
  }, [adjustTerminalHeight, terminalHeight]);

  const toggleTerminalMaximized = useCallback(() => {
    terminalMaximized.value = !terminalMaximized.value;
  }, [terminalMaximized]);

  const openTerminalInNewTab = useCallback(() => {
    window.open("/static/terminal.html", "_blank", "noopener,noreferrer");
  }, []);

  const popOutTerminal = useCallback(() => {
    window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no,noopener,noreferrer");
  }, []);

  const closeTerminal = useCallback(() => {
    terminalVisible.value = false;
    terminalMaximized.value = false;
  }, [terminalVisible, terminalMaximized]);

  const openTerminal = useCallback(() => {
    terminalVisible.value = true;
  }, [terminalVisible]);

  useEffect(() => {
    const onOpenPage = (e: Event) => {
      const detail = (e as CustomEvent<{ url?: string; name: string; html?: string; mode?: string; sourceUrl?: string }>).detail;
      if (detail.mode === 'markdown' && detail.html && detail.name) {
        extensionPageUrl.value = null;
        extensionPageName.value = detail.name;
        extensionPageHtml.value = detail.html;
      } else if (detail.mode === 'pdf' && detail.sourceUrl && detail.name) {
        extensionPageUrl.value = detail.sourceUrl;
        extensionPageName.value = detail.name;
        extensionPageHtml.value = '__pdf__';
      } else if (detail.url && detail.name) {
        handlePageSelect(detail.url, detail.name);
      }
    };
    window.addEventListener('piclaw:open-page', onOpenPage);
    return () => window.removeEventListener('piclaw:open-page', onOpenPage);
  }, [handlePageSelect, extensionPageUrl, extensionPageName, extensionPageHtml]);

  const connected = connectionStatus.value === "connected";
  const sanitizedExtensionPageHtml = useMemo(() => {
    if (!extensionPageHtml.value || extensionPageHtml.value === "__pdf__") return null;
    return sanitizeMarkdownHtml(extensionPageHtml.value);
  }, [extensionPageHtml.value]);
  const PANEL_NAMES: Record<string, string> = { explorer: "Workspace", search: "Search", extensions: "Addons", agent: "Dashboards", tasks: "Tasks", scratchpad: "Scratchpad", settings: "Settings" };

  const tH = terminalMaximized.value ? "calc(100vh - 60px)" : `${terminalHeight.value}px`;
  const isSettingsActive = activePanel.value === "settings";
  const sbWidth = (sidebarCollapsed.value || isSettingsActive) ? 0 : sidebarWidth.value;

  return (
    <div className="app-layout">
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />

      <div className="app-layout__main">
        <div className="app-layout__content-area">
          <div
            className="app-layout__sidebar-wrapper"
            style={{
              width: `${sbWidth}px`,
              minWidth: (sidebarCollapsed.value || isSettingsActive) ? 0 : 150,
              maxWidth: (sidebarCollapsed.value || isSettingsActive) ? 0 : Math.round(window.innerWidth * 0.5),
            }}
          >
            <Sidebar title={PANEL_NAMES[activePanel.value] || activePanel.value}>
              <PanelRouter activePanel={activePanel.value} onPageSelect={handlePageSelect} />
            </Sidebar>
          </div>
          {!sidebarCollapsed.value && !isSettingsActive && (
            <div
              className="app-layout__resize-handle"
              role="separator"
              aria-orientation="vertical"
              aria-label="Resize sidebar"
              tabIndex={0}
              onMouseDown={startSidebarResize}
              onKeyDown={handleSidebarResizeKeyDown}
            />
          )}
          <div className="app-layout__panel">
            {isSettingsActive && (
              <SettingsPanel />
            )}
            {!isSettingsActive && ((extensionPageUrl.value && isSafeExtensionUrl(extensionPageUrl.value)) || extensionPageHtml.value) ? (
              <div className="extension-frame">
                <div className="extension-frame__header">
                  <button
                    type="button"
                    className="extension-frame__back-btn"
                    onClick={handleBackToChat}
                  >
                    <i className="codicon codicon-arrow-left" />
                    {" "}← Back to Chat
                  </button>
                  <span className="extension-frame__title">{extensionPageName.value}</span>
                </div>
                {extensionPageHtml.value === '__pdf__' ? (
                  <object
                    data={extensionPageUrl.value!}
                    type="application/pdf"
                    style={{ width: '100%', flex: 1, border: 'none' }}
                    aria-label={extensionPageName.value ?? 'PDF'}
                  >
                    <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                      <p>PDF cannot be displayed.</p>
                      <a href={extensionPageUrl.value!} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Open PDF in new tab</a>
                    </div>
                  </object>
                ) : sanitizedExtensionPageHtml ? (
                  <div
                    className="workspace__preview-markdown extension-frame__markdown"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized on App consumption via sanitizeMarkdownHtml()
                    dangerouslySetInnerHTML={{ __html: sanitizedExtensionPageHtml }}
                  />
                ) : (
                  <iframe
                    className="extension-frame__iframe"
                    src={extensionPageUrl.value!}
                    sandbox="allow-scripts allow-forms allow-popups"
                    title={extensionPageName.value ?? "Extension Page"}
                  />
                )}
              </div>
            ) : null}
            <div style={{ display: (isSettingsActive || ((extensionPageUrl.value && isSafeExtensionUrl(extensionPageUrl.value)) || extensionPageHtml.value)) ? 'none' : 'contents' }}>
              <ChatPanel onOpenPalette={() => { paletteVisible.value = true; }} />
            </div>
          </div>
        </div>

        {terminalVisible.value && (
          <div className="app-layout__terminal" style={{ height: tH }}>
            <div
              className="app-layout__term-drag-handle"
              role="separator"
              aria-orientation="horizontal"
              aria-label="Resize terminal panel"
              tabIndex={0}
              onMouseDown={startTerminalResize}
              onKeyDown={handleTerminalResizeKeyDown}
            />
            <div className="terminal__header">
              <span className="terminal__title">Terminal</span>
              <div className="terminal__actions">
                <button
                  type="button"
                  className="terminal__btn"
                  onClick={toggleTerminalMaximized}
                  title={terminalMaximized.value ? "Restore" : "Maximize"}
                  aria-label={terminalMaximized.value ? "Restore terminal" : "Maximize terminal"}
                >
                  <i className={terminalMaximized.value ? "codicon codicon-screen-normal" : "codicon codicon-screen-full"} />
                </button>
                <button
                  type="button"
                  className="terminal__btn"
                  onClick={openTerminalInNewTab}
                  title="Open in new tab"
                  aria-label="Open terminal in new tab"
                >
                  <i className="codicon codicon-link-external" />
                </button>
                <button
                  type="button"
                  className="terminal__btn"
                  onClick={popOutTerminal}
                  title="Pop out to window"
                  aria-label="Pop out terminal to new window"
                >
                  <i className="codicon codicon-multiple-windows" />
                </button>
                <button
                  type="button"
                  className="terminal__btn"
                  onClick={closeTerminal}
                  title="Close (Ctrl+`)"
                  aria-label="Close terminal"
                >
                  &#x2715;
                </button>
              </div>
            </div>
            <TerminalComponent />
          </div>
        )}

        <div className="app-layout__status-bar">
          <span className="status-bar__conn">
            <span
              className="status-bar__conn-dot"
              style={{ background: connected ? "var(--success)" : "var(--error)" }}
            />
            <span className="status-bar__conn-text">{connected ? "Connected" : "Disconnected"}</span>
          </span>
          <ModelContextBar />
          <span className="status-bar__right">
            <SystemStats />
            {!terminalVisible.value && (
              <button
                type="button"
                className="status-bar__terminal-btn"
                onClick={openTerminal}
                title="Open Terminal (Ctrl+`)"
                aria-label="Open terminal"
              >
                Terminal
              </button>
            )}
          </span>
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
