import { isSafeExtensionUrl } from "./utils/isSafeExtensionUrl";
import { useEffect, useCallback, useRef } from "preact/hooks";
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
import { safeGetItem, safeSetItem, safeRemoveItem } from "./utils/storage";

function AppContent() {
  const themeControl = useThemeControl();
  const connectionStatus = useSignal<ConnectionStatus>("disconnected");
  const activePanel = useSignal(safeGetItem("piclaw-active-panel") || "explorer");
  const previousPanel = useSignal(safeGetItem("piclaw-previous-panel") || "explorer");
  const paletteVisible = useSignal(false);
  const terminalVisible = useSignal(safeGetItem("piclaw-terminal-visible") === "true");
  const terminalHeight = useSignal(Number(safeGetItem("piclaw-terminal-height")) || 200);
  const terminalMaximized = useSignal(false);
  const sidebarCollapsed = useSignal(safeGetItem("piclaw-sidebar-collapsed") === "true");
  const sidebarWidth = useSignal(Number(safeGetItem("piclaw-sidebar-width")) || 250);
  const extensionPageUrl = useSignal<string | null>(null);
  const extensionPageName = useSignal<string | null>(null);
  const extensionPageHtml = useSignal<string | null>(null);
  const termDragRef = useRef<{ startY: number; startH: number } | null>(null);
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const statusFlashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const statusFlash = useSignal<{ message: string; type: "error" | "warning" | "success" | "info" } | null>(null);

  useEffect(() => {
    safeSetItem("piclaw-sidebar-width", String(sidebarWidth.value));
  }, [sidebarWidth.value]);
  useEffect(() => {
    safeSetItem("piclaw-active-panel", activePanel.value);
  }, [activePanel.value]);
  useEffect(() => {
    safeSetItem("piclaw-previous-panel", previousPanel.value);
  }, [previousPanel.value]);
  useEffect(() => {
    safeSetItem("piclaw-sidebar-collapsed", String(sidebarCollapsed.value));
  }, [sidebarCollapsed.value]);
  useEffect(() => {
    safeSetItem("piclaw-terminal-visible", String(terminalVisible.value));
  }, [terminalVisible.value]);
  useEffect(() => {
    safeSetItem("piclaw-terminal-height", String(terminalHeight.value));
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
    const onStatusFlash = (e: Event) => {
      const detail = (e as CustomEvent<{ message?: string; type?: "error" | "warning" | "success" | "info" }>).detail;
      if (!detail?.message) return;
      statusFlash.value = { message: detail.message, type: detail.type ?? "info" };
      if (statusFlashTimer.current) clearTimeout(statusFlashTimer.current);
      statusFlashTimer.current = setTimeout(() => {
        statusFlash.value = null;
        statusFlashTimer.current = null;
      }, 1400);
    };
    window.addEventListener("piclaw:status-flash", onStatusFlash);
    return () => {
      window.removeEventListener("piclaw:status-flash", onStatusFlash);
      if (statusFlashTimer.current) clearTimeout(statusFlashTimer.current);
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
      { id: "general.clearLocalStorage", label: "Clear Layout State", category: "general" as const, handler: () => { ["piclaw-terminal-visible", "piclaw-terminal-height", "piclaw-sidebar-collapsed", "piclaw-sidebar-width"].forEach((k) => safeRemoveItem(k)); } },
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
  }, [handlePageSelect]);

  const connected = connectionStatus.value === "connected";
  const PANEL_NAMES: Record<string, string> = { explorer: "Workspace", search: "Search", extensions: "Addons", agent: "Dashboards", tasks: "Tasks", scratchpad: "Scratchpad", settings: "Settings" };

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

  const isSettingsActive = activePanel.value === "settings";
  const isExtensionPageOpen = (extensionPageUrl.value && isSafeExtensionUrl(extensionPageUrl.value)) || extensionPageHtml.value;

  useEffect(() => {
    const el = sidebarWrapperRef.current;
    if (!el) return;
    const isClosed = sidebarCollapsed.value || isSettingsActive;
    el.style.width = isClosed ? "0px" : `${sidebarWidth.value}px`;
    el.style.minWidth = isClosed ? "0px" : "150px";
    el.style.maxWidth = isClosed ? "0px" : "50vw";
  }, [sidebarCollapsed.value, isSettingsActive, sidebarWidth.value]);

  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;
    el.style.height = terminalMaximized.value ? "calc(100vh - 60px)" : `${terminalHeight.value}px`;
  }, [terminalMaximized.value, terminalHeight.value]);

  const activateOnEnterOrSpace = (e: KeyboardEvent, handler: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler();
    }
  };
  const resizeSidebarBy = (delta: number) => {
    const min = 150;
    const max = Math.round(window.innerWidth * 0.5);
    sidebarWidth.value = Math.max(min, Math.min(max, sidebarWidth.value + delta));
  };

  return (
    <div className="app-layout">
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />

      <main className="app-layout__main">
        <div className="app-layout__content-area">
          <div
            className="app-layout__sidebar-wrapper"
            ref={sidebarWrapperRef}
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
              tabIndex={0}
              aria-label="Resize sidebar"
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
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  resizeSidebarBy(-20);
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  resizeSidebarBy(20);
                }
              }}
            />
          )}
          <div className="app-layout__panel">
            {isSettingsActive && (
              <SettingsPanel />
            )}
            {!isSettingsActive && isExtensionPageOpen ? (
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
                    className="extension-frame__pdf-object"
                    aria-label={extensionPageName.value ?? 'PDF'}
                  >
                    <div className="extension-frame__pdf-fallback">
                      <p>PDF cannot be displayed.</p>
                      <a href={extensionPageUrl.value!} target="_blank" rel="noopener noreferrer" className="extension-frame__pdf-link">Open PDF in new tab</a>
                    </div>
                  </object>
                ) : extensionPageHtml.value ? (
                  <div
                    className="workspace__preview-markdown extension-frame__markdown"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by markdown-pipeline
                    dangerouslySetInnerHTML={{ __html: extensionPageHtml.value }}
                  />
                ) : (
                  <>
                    {/* Security: allow-same-origin required for extension API access. allow-scripts required for interactivity. Popups restricted. See #168. */}
                    <iframe
                      className="extension-frame__iframe"
                      src={extensionPageUrl.value!}
                      sandbox="allow-same-origin allow-scripts allow-forms"
                      {...({ csp: "script-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'" } as any)}
                      title={extensionPageName.value ?? "Extension Page"}
                    />
                  </>
                )}
              </div>
            ) : null}
            <div className={isSettingsActive || isExtensionPageOpen ? "app-layout__chat-wrapper app-layout__chat-wrapper--hidden" : "app-layout__chat-wrapper"}>
              <ChatPanel onOpenPalette={() => { paletteVisible.value = true; }} />
            </div>
          </div>
        </div>

        {terminalVisible.value && (
          <div className="app-layout__terminal" ref={terminalRef}>
            <div
              className="app-layout__term-drag-handle"
              onMouseDown={onTermDragStart}
            />
            <div className="terminal__header">
              <span className="terminal__title">Terminal</span>
              <div className="terminal__actions">
                <span
                  className="terminal__btn"
                  role="button"
                  tabIndex={0}
                  onClick={() => { terminalMaximized.value = !terminalMaximized.value; }}
                  onKeyDown={(e) => activateOnEnterOrSpace(e, () => { terminalMaximized.value = !terminalMaximized.value; })}
                  title={terminalMaximized.value ? "Restore" : "Maximize"}
                  aria-label={terminalMaximized.value ? "Restore" : "Maximize"}
                >
                  <i className={terminalMaximized.value ? "codicon codicon-screen-normal" : "codicon codicon-screen-full"} />
                </span>
                <span
                  className="terminal__btn"
                  role="button"
                  tabIndex={0}
                  onClick={() => { window.open("/static/terminal.html", "_blank", "noopener,noreferrer"); }}
                  onKeyDown={(e) => activateOnEnterOrSpace(e, () => { window.open("/static/terminal.html", "_blank", "noopener,noreferrer"); })}
                  title="Open in new tab"
                  aria-label="Open in new tab"
                >
                  <i className="codicon codicon-link-external" />
                </span>
                <span
                  className="terminal__btn"
                  role="button"
                  tabIndex={0}
                  onClick={() => { window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no,noopener,noreferrer"); }}
                  onKeyDown={(e) => activateOnEnterOrSpace(e, () => { window.open("/static/terminal.html", "piclaw-terminal", "width=800,height=600,menubar=no,toolbar=no,noopener,noreferrer"); })}
                  title="Pop out to window"
                  aria-label="Pop out to window"
                >
                  <i className="codicon codicon-multiple-windows" />
                </span>
                <span
                  className="terminal__btn"
                  role="button"
                  tabIndex={0}
                  onClick={() => { terminalVisible.value = false; terminalMaximized.value = false; }}
                  onKeyDown={(e) => activateOnEnterOrSpace(e, () => { terminalVisible.value = false; terminalMaximized.value = false; })}
                  title="Close (Ctrl+`)"
                  aria-label="Close (Ctrl+`)"
                >
                  &#x2715;
                </span>
              </div>
            </div>
            <TerminalComponent />
          </div>
        )}

        <div className={`app-layout__status-bar ${statusFlash.value ? `app-layout__status-bar--flash app-layout__status-bar--flash-${statusFlash.value.type}` : ""}`}>
          <span className="status-bar__conn">
            <span
              className={`status-bar__conn-dot ${connected ? "status-bar__conn-dot--connected" : "status-bar__conn-dot--disconnected"}`}
            />
            <span className="status-bar__conn-text">{connected ? "Connected" : "Disconnected"}</span>
          </span>
          <ModelContextBar />
          {statusFlash.value && (
            <span className={`status-bar__flash status-bar__flash--${statusFlash.value.type}`} role="status" aria-live="polite">
              {statusFlash.value.message}
            </span>
          )}
          <span className="status-bar__right">
            <SystemStats />
            {!terminalVisible.value && (
              <span
                className="status-bar__terminal-btn"
                role="button"
                tabIndex={0}
                onClick={() => { terminalVisible.value = true; }}
                onKeyDown={(e) => activateOnEnterOrSpace(e, () => { terminalVisible.value = true; })}
                title="Open Terminal (Ctrl+`)"
                aria-label="Open Terminal (Ctrl+`)"
              >
                Terminal
              </span>
            )}
          </span>
        </div>
      </main>

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
