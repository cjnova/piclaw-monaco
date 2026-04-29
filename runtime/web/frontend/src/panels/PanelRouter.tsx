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
    description: "Coming soon...",
  },
  files: {
    title: "📁 Workspace",
    description: "Coming soon...",
  },
  search: {
    title: "🔍 Search Panel",
    description: "Coming soon...",
  },
  extensions: {
    title: "🧩 Extensions Panel",
    description: "Coming soon...",
  },
  agent: {
    title: "🤖 Agent Panel",
    description: "Coming soon...",
  },
  settings: {
    title: "⚙️ Settings Panel",
    description: "Coming soon...",
  },
};

const FALLBACK_PANEL: PanelContent = {
  title: "🤖 Agent Panel",
  description: "Coming soon...",
};

export function PanelRouter({ activePanel }: PanelRouterProps) {
  const panel = PANEL_CONTENT[activePanel] ?? FALLBACK_PANEL;

  return (
    <section className="shell-panel-placeholder" aria-live="polite">
      <div className="shell-panel-placeholder__content">
        <h1 className="shell-panel-placeholder__title">{panel.title}</h1>
        <p className="shell-panel-placeholder__description">{panel.description}</p>
      </div>
    </section>
  );
}
