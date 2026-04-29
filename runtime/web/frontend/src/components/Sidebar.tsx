import type { ComponentChildren } from "preact";

interface SidebarProps {
  title: string;
  children: ComponentChildren;
}

export function Sidebar({ title, children }: SidebarProps) {
  return (
    <aside style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", background: "#181825" }}>
      <header style={{ height: "35px", display: "flex", alignItems: "center", padding: "0 12px", borderBottom: "1px solid #313244", flexShrink: 0 }}>
        <span style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>{title.toUpperCase()}</span>
      </header>
      <div style={{ flex: 1, overflow: "auto" }}>
        {children}
      </div>
    </aside>
  );
}
