import { useState, useEffect, useRef } from "preact/hooks";
import type { Tab } from "../app/tabTypes";
import { extractDisplayName } from "../utils/extractDisplayName";

interface ExtensionPage {
  prefix: string;
  extensionPath: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string) => void;
  clockText?: string;
  activeExtension?: string | null;
  onSelectExtension?: (prefix: string) => void;
}

const activateOnEnterOrSpace = (e: KeyboardEvent, handler: () => void) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
};

/** Horizontal tab strip rendered above the central pane content area. */
export function TabBar({ tabs, activeTabId, onSelectTab, onCloseTab, clockText, activeExtension, onSelectExtension }: TabBarProps) {
  const [extensionPages, setExtensionPages] = useState<ExtensionPage[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/extension-routes", { credentials: "include" })
      .then((res) => res.ok ? res.json() : [])
      .then((routes: ExtensionPage[]) => {
        setExtensionPages(routes.filter((r) => r.prefix.endsWith("-page")));
      })
      .catch(() => {});
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onClick); document.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  const hasExtensions = extensionPages.length > 0;

  return (
    <div className="tab-bar" role="tablist" aria-label="Central pane tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          type="button"
          aria-selected={tab.id === activeTabId && !activeExtension}
          className={`tab-bar__tab${tab.id === activeTabId && !activeExtension ? " tab-bar__tab--active" : ""}`}
          onClick={() => { onSelectTab(tab.id); onSelectExtension?.(null!); }}
        >
          {tab.icon && <span className="tab-bar__tab__icon" aria-hidden="true">{tab.icon}</span>}
          <span className="tab-bar__tab__label">{tab.label}</span>
          {tab.closable && (
            <span
              className="tab-bar__tab__close"
              role="button"
              tabIndex={0}
              aria-label={`Close ${tab.label}`}
              onClick={(e) => { e.stopPropagation(); onCloseTab(tab.id); }}
              onKeyDown={(e) => activateOnEnterOrSpace(e, () => onCloseTab(tab.id))}
            >
              ×
            </span>
          )}
        </button>
      ))}

      {hasExtensions && (
        <div className="tab-bar__dashboards" ref={menuRef}>
          <button
            type="button"
            className={`tab-bar__tab${activeExtension ? " tab-bar__tab--active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="tab-bar__tab__icon" aria-hidden="true">🧩</span>
            <span className="tab-bar__tab__label">
              {activeExtension
                ? extractDisplayName(extensionPages.find((p) => p.prefix === activeExtension)?.extensionPath ?? "")
                : "Dashboards"}
            </span>
            <span className="tab-bar__caret" aria-hidden="true">▾</span>
          </button>
          {menuOpen && (
            <div className="tab-bar__dropdown">
              {extensionPages.map((page) => (
                <button
                  key={page.prefix}
                  type="button"
                  className={`tab-bar__dropdown-item${activeExtension === page.prefix ? " tab-bar__dropdown-item--active" : ""}`}
                  onClick={() => { onSelectExtension?.(page.prefix); setMenuOpen(false); }}
                >
                  {extractDisplayName(page.extensionPath)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {clockText && <span className="tab-bar__clock">{clockText}</span>}
    </div>
  );
}
