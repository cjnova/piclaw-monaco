import { WorkspacePanel } from "./WorkspacePanel";
import { SearchPanel } from "./SearchPanel";
import { AddonsPanel } from "./AddonsPanel";
import { AgentPanel } from "./AgentPanel";
import { TasksPanel } from "./TasksPanel";
import { SettingsPanel } from "./SettingsPanel";

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
    case "tasks":
      return <TasksPanel />;
    case "settings":
      return <SettingsPanel />;
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
