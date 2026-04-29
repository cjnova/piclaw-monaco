import { useState, useEffect, useCallback } from "preact/hooks";

interface Addon {
  slug: string;
  name: string;
  version: string | null;
  type: string;
  description: string;
  path: string;
  tags: string[];
  skills: string[];
  installed: boolean;
  installedVersion: string | null;
  hasUpdate: boolean;
  installKind: string;
}

interface AddonsResponse {
  addons: Addon[];
  source?: string;
  sources?: string[];
  failed_sources?: string[];
}

export function AddonsPanel() {
  const [addons, setAddons] = useState<Addon[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  const loadAddons = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/agent/addons", { credentials: "same-origin" });
      if (res.status === 401) {
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: AddonsResponse = await res.json();
      setAddons(Array.isArray(data.addons) ? data.addons : []);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadAddons();
  }, [loadAddons]);

  if (status === "loading") {
    return (
      <div className="addons-panel">
        <div className="addons-panel__empty">Loading addons…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="addons-panel">
        <div className="addons-panel__empty addons-panel__empty--error">
          Failed to load addons.{" "}
          <button className="addons-panel__retry" onClick={loadAddons}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  const installed = addons.filter((a) => a.installed);
  const available = addons.filter((a) => !a.installed);

  return (
    <div className="addons-panel">
      {installed.length > 0 && (
        <>
          <div className="addons-panel__section-header">Installed</div>
          <ul className="addons-panel__list">
            {installed.map((addon) => (
              <AddonItem key={addon.slug} addon={addon} />
            ))}
          </ul>
        </>
      )}
      {available.length > 0 && (
        <>
          <div className="addons-panel__section-header">Available</div>
          <ul className="addons-panel__list">
            {available.map((addon) => (
              <AddonItem key={addon.slug} addon={addon} />
            ))}
          </ul>
        </>
      )}
      {addons.length === 0 && (
        <div className="addons-panel__empty">No addons installed</div>
      )}
    </div>
  );
}

function AddonItem({ addon }: { addon: Addon }) {
  const displayVersion = addon.installedVersion ?? addon.version;

  return (
    <li className="addons-panel__item">
      <span className="addons-panel__item-icon codicon codicon-extensions" aria-hidden="true" />
      <div className="addons-panel__item-info">
        <div className="addons-panel__item-header">
          <span className="addons-panel__item-name">{addon.name}</span>
          {displayVersion && (
            <span className="addons-panel__item-version">{displayVersion}</span>
          )}
          {addon.hasUpdate && (
            <span className="addons-panel__item-update-badge" title="Update available">↑</span>
          )}
        </div>
        {addon.description && (
          <div className="addons-panel__item-desc">{addon.description}</div>
        )}
      </div>
      <span
        className={`addons-panel__item-status${addon.installed ? " addons-panel__item-status--enabled" : ""}`}
        title={addon.installed ? "Installed" : "Not installed"}
        aria-label={addon.installed ? "Installed" : "Not installed"}
      />
    </li>
  );
}
