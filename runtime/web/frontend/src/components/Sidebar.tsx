import type { ComponentChildren } from "preact";

interface SidebarProps {
  title: string;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  children: ComponentChildren;
}

export function Sidebar({ title, collapsed, onToggleCollapse, children }: SidebarProps) {
  return (
    <aside style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", background: "#181825" }}>
      <header style={{ height: "35px", display: "flex", alignItems: "center", padding: "0 12px", borderBottom: "1px solid #313244", flexShrink: 0 }}>
        <span style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600, flex: 1 }}>{title.toUpperCase()}</span>
        {onToggleCollapse && (
          <span
            onClick={onToggleCollapse}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            style={{ cursor: "pointer", color: "#6c7086", fontSize: "16px", lineHeight: 1, padding: "2px 4px", borderRadius: "3px", background: "none", border: "none" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#cdd6f4"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#6c7086"; }}
          >
            ‹
          </span>
        )}
      </header>
      <div style={{ flex: 1, overflow: "auto" }}>
        {children}
      </div>
    </aside>
  );
}
