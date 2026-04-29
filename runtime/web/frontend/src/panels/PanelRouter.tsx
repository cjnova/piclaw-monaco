import { WorkspacePanel } from "./WorkspacePanel";
import { SearchPanel } from "./SearchPanel";
import { AddonsPanel } from "./AddonsPanel";

interface PanelRouterProps {
  activePanel: string;
}

export function PanelRouter({ activePanel }: PanelRouterProps) {
  switch (activePanel) {
    case "explorer":
    case "files":
      return <WorkspacePanel />;
    case "search":
      return <SearchPanel />;
    case "extensions":
      return <AddonsPanel />;
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
    <div className="panel-placeholder">
      {text}
    </div>
  );
}
