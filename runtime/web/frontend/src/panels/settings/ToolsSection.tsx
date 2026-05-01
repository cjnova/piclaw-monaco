import { useSignal } from "@preact/signals";
import { type SettingsData, type Toolset, type Tool } from "./types";

function kindIcon(kind?: string): string {
  if (kind === "read-only") return "🔍";
  if (kind === "mutating") return "✏️";
  return "🔵";
}

export function ToolsSection({ data }: { data: SettingsData }) {
  const toolsets = data.toolsets ?? [];
  const filter = useSignal("");
  const collapsed = useSignal<Record<string, boolean>>({});

  const toggleCollapse = (name: string) => {
    collapsed.value = { ...collapsed.value, [name]: !collapsed.value[name] };
  };

  const filteredToolsets: Toolset[] = filter.value
    ? toolsets.map(ts => ({
        ...ts,
        tools: (ts.tools ?? []).filter((t: Tool) =>
          t.name.toLowerCase().includes(filter.value.toLowerCase()) ||
          (t.description ?? t.summary ?? "").toLowerCase().includes(filter.value.toLowerCase())
        ),
      })).filter(ts => (ts.tools ?? []).length > 0)
    : toolsets;

  return (
    <section className="settings-panel__section settings-panel__section--narrow">
      <h2 className="settings-panel__section-title">Tools</h2>

      <div className="settings-panel__tools-filter-row">
        <input
          className="settings-panel__input settings-panel__tools-filter"
          type="text"
          placeholder="Filter tools..."
          value={filter.value}
          onInput={(e) => (filter.value = (e.target as HTMLInputElement).value)}
        />
        <label className="settings-panel__tools-match-mode">
          <input type="checkbox" checked={true} disabled />
          Any keyword (OR)
        </label>
      </div>

      {filteredToolsets.map((ts: Toolset) => {
        const isCollapsed = collapsed.value[ts.name] ?? false;
        const tools = ts.tools ?? [];
        return (
          <div key={ts.name} className="settings-panel__toolset">
            <div className="settings-panel__toolset-header" role="button" tabIndex={0} onClick={() => toggleCollapse(ts.name)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCollapse(ts.name); } }}>
              <span className="settings-panel__toolset-toggle">{isCollapsed ? "▶" : "▼"}</span>
              <input type="checkbox" checked={true} disabled className="settings-panel__toolset-checkbox" />
              <strong className="settings-panel__toolset-name">{ts.name}</strong>
              <span className="settings-panel__toolset-count">({tools.length})</span>
              <span className="settings-panel__toolset-desc">{ts.description ?? ""}</span>
            </div>
            {!isCollapsed && (
              <div className="settings-panel__toolset-tools">
                {tools.map((t: Tool) => (
                  <div key={t.name} className="settings-panel__tool-row">
                    <input type="checkbox" checked={true} disabled className="settings-panel__tool-checkbox" />
                    <span className="settings-panel__tool-name">{t.name}</span>
                    <span className="settings-panel__tool-kind">{kindIcon(t.kind)}</span>
                    {(t.description ?? t.summary) && (
                      <span className="settings-panel__tool-desc">
                        {(t.description ?? t.summary ?? "").length > 60
                          ? (t.description ?? t.summary ?? "").slice(0, 60) + "…"
                          : (t.description ?? t.summary)}
                      </span>
                    )}
                    <span className="settings-panel__tool-category">{t.weight ?? ""}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <p className="settings-panel__description settings-panel__description--spaced">
        Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.
      </p>
    </section>
  );
}
