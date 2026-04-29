import type { ComponentChildren, VNode } from "preact";
import { useState } from "preact/hooks";
import { Icon } from "./Icon";

export interface SidebarAction {
  icon: string;
  label: string;
  onClick: () => void;
}

interface SidebarProps {
  title: string;
  actions?: SidebarAction[];
  children?: ComponentChildren;
  onCollapse?: () => void;
}

export function Sidebar({ title, actions = [], children, onCollapse }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    onCollapse?.();
  };

  if (collapsed) {
    return null;
  }

  return (
    <aside className="sidebar" style={{ minWidth: "200px" }}>
      <header className="sidebar__header">
        <h2 className="sidebar__title">{title}</h2>
        <div className="sidebar__actions">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className="sidebar__action-btn"
              title={action.label}
              aria-label={action.label}
              onClick={action.onClick}
            >
              <Icon name={action.icon} size={16} />
            </button>
          ))}
          <button
            type="button"
            className="sidebar__action-btn"
            title="Collapse sidebar"
            aria-label="Collapse sidebar"
            onClick={handleCollapse}
          >
            <Icon name="chevron-left" size={16} />
          </button>
        </div>
      </header>
      <div className="sidebar__content">
        {children}
      </div>
    </aside>
  );
}
