interface PanelRouterProps {
  activePanel: string;
}

interface PanelContent {
  title: string;
  description: string;
}

const PANEL_CONTENT: Record<string, PanelContent> = {
  explorer: {
    title: "📁 Workspace",
    description: "File tree will appear here",
  },
  files: {
    title: "📁 Workspace",
    description: "File tree will appear here",
  },
  search: {
    title: "🔍 Search",
    description: "Search input and results",
  },
  extensions: {
    title: "🧩 Addons",
    description: "Installed addons list",
  },
  agent: {
    title: "🤖 Agent",
    description: "Chat is always visible →",
  },
  settings: {
    title: "⚙️ Settings",
    description: "Settings panels",
  },
};

const FALLBACK_PANEL: PanelContent = {
  title: "📁 Workspace",
  description: "File tree will appear here",
};

export function PanelRouter({ activePanel }: PanelRouterProps) {
  const panel = PANEL_CONTENT[activePanel] ?? FALLBACK_PANEL;

  return (
    <section aria-live="polite" style={{ height: "100%", padding: "12px" }}>
      <div style={{ color: "#cdd6f4", fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>{panel.title}</div>
      <p style={{ color: "#a6adc8", fontSize: "13px", margin: 0 }}>{panel.description}</p>
    </section>
  );
}
