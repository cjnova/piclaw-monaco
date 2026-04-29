import { WorkspacePanel } from "./WorkspacePanel";

interface PanelRouterProps {
  activePanel: string;
}

export function PanelRouter({ activePanel }: PanelRouterProps) {
  switch (activePanel) {
    case "explorer":
    case "files":
      return <WorkspacePanel />;
    case "search":
      return <Placeholder text="Search input and results" />;
    case "extensions":
      return <Placeholder text="Installed addons list" />;
    case "agent":
      return <Placeholder text="Chat is always visible →" />;
    case "settings":
      return <Placeholder text="Settings panels" />;
    default:
      return <Placeholder text="Select a panel" />;
  }
}

function Placeholder({ text }: { text: string }) {
  return (
    <div style={{ padding: "12px", color: "#6c7086", fontSize: "12px" }}>
      {text}
    </div>
  );
}
