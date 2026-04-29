import type { ComponentChildren } from "preact";
import { useTheme } from "../theme/ThemeProvider";

interface SidebarProps {
  title: string;
  children: ComponentChildren;
}

export function Sidebar({ title, children }: SidebarProps) {
  const theme = useTheme();

  return (
    <aside style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", background: theme.bgSidebar }}>
      <header
        style={{
          height: "35px",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          borderBottom: `1px solid ${theme.border}`,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "11px", color: theme.accent, textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
          {title.toUpperCase()}
        </span>
      </header>
      <div className="sidebar__content" style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
        {children}
      </div>
    </aside>
  );
}
