import { useTheme } from "../theme/ThemeProvider";
import { Icon } from "./Icon";

const PANELS = [
  { id: "explorer", icon: "files", label: "Workspace" },
  { id: "search", icon: "search", label: "Search" },
  { id: "extensions", icon: "extensions", label: "Addons" },
  { id: "agent", icon: "hubot", label: "Agent" },
  { id: "settings", icon: "gear", label: "Settings", alignBottom: true },
] as const;

interface ActivityBarProps {
  activePanel: string;
  onPanelChange: (id: string) => void;
}

export function ActivityBar({ activePanel, onPanelChange }: ActivityBarProps) {
  const theme = useTheme();

  return (
    <nav
      className="activity-bar"
      aria-label="Activity bar"
      style={{
        background: theme.bgSidebar,
        borderRight: `1px solid ${theme.border}`,
      }}
    >
      {PANELS.map((panel) => {
        const active = panel.id === activePanel;

        return (
          <button
            key={panel.id}
            type="button"
            className={`activity-bar__button ${active ? "is-active" : ""} ${"alignBottom" in panel && panel.alignBottom ? "is-bottom" : ""}`}
            style={{
              color: active ? theme.text : theme.textMuted,
              borderLeftColor: active ? theme.accent : "transparent",
            }}
            title={panel.label}
            aria-label={panel.label}
            aria-pressed={active}
            onMouseEnter={(e) => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = theme.text;
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                (e.currentTarget as HTMLButtonElement).style.color = theme.textMuted;
              }
            }}
            onClick={() => onPanelChange(panel.id)}
          >
            <Icon name={panel.icon} size={24} className="activity-bar__icon" />
          </button>
        );
      })}
    </nav>
  );
}
