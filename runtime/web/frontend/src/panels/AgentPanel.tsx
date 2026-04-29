import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface ExtensionRoute {
  prefix: string;
  extensionPath: string;
}

interface AgentPanelProps {
  onPageSelect: (url: string, name: string) => void;
}

function extractDisplayName(extensionPath: string): string {
  const withoutPrefix = extensionPath.replace(/^piclaw-/, "");
  return withoutPrefix
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function AgentPanel({ onPageSelect }: AgentPanelProps) {
  const pages = useSignal<ExtensionRoute[]>([]);
  const loading = useSignal(true);

  useEffect(() => {
    fetch("/api/extension-routes", { credentials: "same-origin" })
      .then((res) => res.json())
      .then((routes: ExtensionRoute[]) => {
        pages.value = routes.filter((r) => r.prefix.endsWith("-page"));
        loading.value = false;
      })
      .catch(() => {
        loading.value = false;
      });
  }, []);

  if (loading.value) {
    return (
      <div className="agent-panel">
        <div className="agent-panel__empty">Loading…</div>
      </div>
    );
  }

  if (pages.value.length === 0) {
    return (
      <div className="agent-panel">
        <div className="agent-panel__empty">
          No extension pages available. Install addons with page routes.
        </div>
      </div>
    );
  }

  return (
    <div className="agent-panel">
      <ul className="agent-panel__list">
        {pages.value.map((page) => {
          const name = extractDisplayName(page.extensionPath);
          return (
            <li
              key={page.prefix}
              className="agent-panel__item"
              onClick={() => onPageSelect(page.prefix, name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onPageSelect(page.prefix, name);
                }
              }}
            >
              <i className="agent-panel__item-icon codicon codicon-browser" />
              <span className="agent-panel__item-name">{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
