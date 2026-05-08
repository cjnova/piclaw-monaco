import { isSafeExtensionUrl } from "./utils/isSafeExtensionUrl";
import { useCallback, useRef, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { getChatJid } from "./api/chat-jid";
import { ActivityBar } from "./components/ActivityBar";
import { Sidebar } from "./components/Sidebar";
import { TabBar } from "./components/TabBar";
import { SystemStats, formatClock } from "./components/SystemStats";
import { ModelContextBar } from "./components/ModelContextBar";
import { SessionPill } from "./components/SessionPill";
import { CommandPalette } from "./components/CommandPalette";
import { WidgetPane } from "./components/WidgetPane";
import { PanelRouter, ChatPanel, SettingsPanel } from "./panels";
import { ThemeProvider, useThemeControl } from "./theme/ThemeProvider";
import { useCommands } from "./app/useCommands";
import { useLayoutPersistence } from "./app/useLayoutPersistence";
import { useResizeHandlers } from "./app/useResizeHandlers";
import { useStatusFlash } from "./app/useStatusFlash";
import { useConnectionStatus } from "./app/useConnectionStatus";
import { useTabs } from "./app/useTabs";
import { TerminalPanel } from "./app/TerminalPanel";
import { ExtensionFrame } from "./app/ExtensionFrame";
import { useDialog } from "./hooks/useDialog";

const PANEL_NAMES: Record<string, string> = {
  explorer: "Workspace", search: "Search", extensions: "Addons",
  agent: "Dashboards", tasks: "Tasks", scratchpad: "Scratchpad", settings: "Settings",
};
const activateOnEnterOrSpace = (e: KeyboardEvent, handler: () => void) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
};

function AppContent() {
  const themeControl = useThemeControl();
  const connectionStatus = useConnectionStatus();
  const layout = useLayoutPersistence();
  const {
    activePanel, previousPanel, sidebarCollapsed, sidebarWidth,
    terminalVisible, terminalHeight, terminalMaximized,
  } = layout;
  const paletteVisible = useSignal(false);
  const statusFlash = useStatusFlash();
  const extensionPageUrl = useSignal<string | null>(null);
  const extensionPageName = useSignal<string | null>(null);
  const extensionPageHtml = useSignal<string | null>(null);
  const clockText = useSignal<string>(formatClock(new Date()));
  const sidebarWrapperRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const { tabs, activeTabId, closeTab } = useTabs(terminalVisible, terminalMaximized);
  const activeExtension = useSignal<string | null>(null);
  const { DialogHost } = useDialog();

  const isSettingsActive = activePanel.value === "settings";

  const { onTermDragStart, onSidebarMouseDown, onSidebarKeyDown } = useResizeHandlers({
    sidebarWidth, sidebarCollapsed, terminalHeight, terminalMaximized,
    isSettingsActive, sidebarWrapperRef, terminalRef,
  });

  useCommands({
    activePanel, previousPanel, sidebarCollapsed,
    terminalVisible, terminalMaximized, paletteVisible, themeControl,
  });

  const handlePanelChange = useCallback((id: string) => {
    if (id === "settings" && activePanel.value === "settings") {
      activePanel.value = previousPanel.value;
      sidebarCollapsed.value = true;
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

  useEffect(() => {
    const onClose = () => { sidebarCollapsed.value = true; };
    window.addEventListener('piclaw:close-sidebar', onClose);
    return () => window.removeEventListener('piclaw:close-sidebar', onClose);
  }, [sidebarCollapsed]);

  // Clock: align to next full minute, then tick every 60s
  useEffect(() => {
    const tick = () => { clockText.value = formatClock(new Date()); };
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    let interval: ReturnType<typeof setInterval> | null = null;
    const timeout = setTimeout(() => { tick(); interval = setInterval(tick, 60_000); }, msUntilNextMinute);
    return () => { clearTimeout(timeout); if (interval !== null) clearInterval(interval); };
  }, [clockText]);

  // Redirect away from archived or non-existent sessions on load
  useEffect(() => {
    const chatJid = getChatJid();
    if (chatJid === "web:default") return;
    fetch(`/agent/branches?include_archived=1`, { credentials: "same-origin" })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (!data) return;
        const chats = Array.isArray(data) ? data : (data.chats ?? []);
        const current = chats.find((c: Record<string, unknown>) => (c.chat_jid ?? c.jid) === chatJid);
        if (!current || current.archived_at) {
          window.location.href = "/?chat_jid=web:default";
        }
      })
      .catch(() => {});
  }, []);

  const connected = connectionStatus.value === "connected";
  const isExtensionPageOpen = (extensionPageUrl.value && isSafeExtensionUrl(extensionPageUrl.value)) || extensionPageHtml.value;
  const hasWidgetTab = tabs.value.some((t) => t.type === "widget");
  const isWidgetActive = hasWidgetTab && tabs.value.some((t) => t.id === activeTabId.value && t.type === "widget");
  const isTerminalActive = activeTabId.value === "terminal";
  const hasTerminalTab = tabs.value.some((t) => t.type === "terminal");

  return (
    <div className="app-layout">
      <ActivityBar activePanel={activePanel.value} onPanelChange={handlePanelChange} />
      <main className="app-layout__main">
        <div className="app-layout__content-area">
          <div className="app-layout__sidebar-wrapper" ref={sidebarWrapperRef}>
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
              onMouseDown={onSidebarMouseDown}
              onKeyDown={onSidebarKeyDown}
            />
          )}
          <div className="app-layout__panel">
            {isSettingsActive ? (
              <SettingsPanel />
            ) : (
              <>
                <TabBar
                  tabs={tabs.value}
                  activeTabId={activeTabId.value}
                  onSelectTab={(id) => { activeTabId.value = id; activeExtension.value = null; }}
                  onCloseTab={closeTab}
                  clockText={clockText.value}
                  activeExtension={activeExtension.value}
                  onSelectExtension={(prefix) => { activeExtension.value = prefix; }}
                />
                <div className="app-layout__tab-viewport">
                  {isExtensionPageOpen ? (
                    <ExtensionFrame
                      extensionPageUrl={extensionPageUrl.value}
                      extensionPageName={extensionPageName.value}
                      extensionPageHtml={extensionPageHtml.value}
                      onBack={handleBackToChat}
                    />
                  ) : (
                    <>
                      <div className={isWidgetActive || isTerminalActive ? "app-layout__tab-content--hidden" : "app-layout__tab-content"}>
                        <ChatPanel onOpenPalette={() => { paletteVisible.value = true; }} activeExtension={activeExtension.value} />
                      </div>
                      {hasTerminalTab && (
                        <div className={isTerminalActive ? "app-layout__tab-content" : "app-layout__tab-content--hidden"}>
                          <TerminalPanel
                            tabMode
                            terminalMaximized={terminalMaximized}
                            terminalVisible={terminalVisible}
                            onDragStart={onTermDragStart}
                          />
                        </div>
                      )}
                      {tabs.value.filter((t) => t.type === "widget").map((t) => (
                        <div key={t.id} className={activeTabId.value === t.id ? "app-layout__tab-content" : "app-layout__tab-content--hidden"}>
                          <WidgetPane tabMode widgetHtml={t.widgetHtml} widgetTitle={t.label} />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Desktop docked terminal (not shown on mobile — mobile uses terminal tab) */}
        {terminalVisible.value && !hasTerminalTab && (
          <div className="app-layout__terminal" ref={terminalRef}>
            <TerminalPanel
              terminalMaximized={terminalMaximized}
              terminalVisible={terminalVisible}
              onDragStart={onTermDragStart}
            />
          </div>
        )}

        <div className={`app-layout__status-bar ${statusFlash.value ? `app-layout__status-bar--flash app-layout__status-bar--flash-${statusFlash.value.type}` : ""}`}>
          <span className="status-bar__conn">
            <span className={`status-bar__conn-dot ${connected ? "status-bar__conn-dot--connected" : "status-bar__conn-dot--disconnected"}`} />
            <span className="status-bar__conn-text">{connected ? "" : "Offline"}</span>
          </span>
          <SessionPill />
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
        {/* Mobile bottom toolbar */}
        <div className="mobile-toolbar">
          <SessionPill />
          <span className="mobile-toolbar__model-slot"><ModelContextBar /></span>
          <button
            type="button"
            className="mobile-toolbar__terminal-btn"
            onClick={() => { terminalVisible.value = true; }}
          >
            Terminal
          </button>
        </div>
      </main>
      <CommandPalette visible={paletteVisible.value} onClose={() => { paletteVisible.value = false; }} />
      <DialogHost />
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
