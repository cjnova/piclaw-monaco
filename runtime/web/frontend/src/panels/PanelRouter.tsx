import { WorkspacePanel } from "./WorkspacePanel";
import { SearchPanel } from "./SearchPanel";
import { AddonsPanel } from "./AddonsPanel";
import { AgentPanel } from "./AgentPanel";

interface PanelRouterProps {
  activePanel: string;
  onPageSelect?: (url: string, name: string) => void;
}

export function PanelRouter({ activePanel, onPageSelect }: PanelRouterProps) {
  switch (activePanel) {
    case "explorer":
    case "files":
      return <WorkspacePanel />;
    case "search":
      return <SearchPanel />;
    case "extensions":
      return <AddonsPanel />;
    case "agent":
      return <AgentPanel onPageSelect={onPageSelect ?? (() => {})} />;
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
