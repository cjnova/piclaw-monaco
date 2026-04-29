import type { ComponentChildren } from "preact";

interface SidebarProps {
  title: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  children: ComponentChildren;
}

export function Sidebar({ title, collapsed, onToggleCollapse, children }: SidebarProps) {
  return (
    <aside className="sidebar" style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <header className="sidebar__header">
        <span className="sidebar__title">{title.toUpperCase()}</span>
        {onToggleCollapse && (
          <button
            type="button"
            className="sidebar__collapse-btn"
            onClick={onToggleCollapse}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "›" : "‹"}
          </button>
        )}
      </header>
      <div className="sidebar__content" style={{ flex: 1, overflow: "auto" }}>
        {children}
      </div>
    </aside>
  );
}
