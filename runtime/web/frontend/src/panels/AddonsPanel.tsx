import { useState, useEffect, useCallback, useRef } from "preact/hooks";

interface AddonSkill {
  name: string;
}

interface Addon {
  slug: string;
  name: string;
  version: string | null;
  type: string;
  description: string;
  tags: string[];
  skills: AddonSkill[];
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
  const [source, setSource] = useState<string>("");
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");
  const [filter, setFilter] = useState<string>("");
  const [actionState, setActionState] = useState<Record<string, "installing" | "uninstalling">>({});
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const actionMessageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flashActionMessage = useCallback((message: string) => {
    if (actionMessageTimerRef.current) {
      clearTimeout(actionMessageTimerRef.current);
    }
    setActionMessage(message);
    actionMessageTimerRef.current = setTimeout(() => {
      setActionMessage(null);
      actionMessageTimerRef.current = null;
    }, 3000);
  }, []);

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
      setSource(data.source ?? (data.sources ? data.sources.join(", ") : ""));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadAddons();
  }, [loadAddons]);

  const handleInstall = useCallback(async (slug: string) => {
    setActionState((prev) => ({ ...prev, [slug]: "installing" }));
    try {
      const res = await fetch("/agent/addons/install", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: slug }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await loadAddons();
    } catch (err) {
      console.warn("[addons] failed to install", slug, err);
      flashActionMessage(`Failed to install ${slug}.`);
    } finally {
      setActionState((prev) => {
        const next = { ...prev };
        delete next[slug];
        return next;
      });
    }
  }, [flashActionMessage, loadAddons]);

  const handleUninstall = useCallback(async (slug: string) => {
    setActionState((prev) => ({ ...prev, [slug]: "uninstalling" }));
    try {
      const res = await fetch("/agent/addons/uninstall", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: slug }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await loadAddons();
    } catch (err) {
      console.warn("[addons] failed to uninstall", slug, err);
      flashActionMessage(`Failed to remove ${slug}.`);
    } finally {
      setActionState((prev) => {
        const next = { ...prev };
        delete next[slug];
        return next;
      });
    }
  }, [flashActionMessage, loadAddons]);

  const filteredAddons = addons.filter((addon) => {
    if (!filter) return true;
    const q = filter.toLowerCase();
    return (
      addon.name.toLowerCase().includes(q) ||
      addon.description.toLowerCase().includes(q) ||
      addon.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  if (status === "loading") {
    return (
      <div className="addons-panel">
        <div className="addons-panel__empty">Loading catalog…</div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="addons-panel">
        <div className="addons-panel__empty addons-panel__empty--error">
          Failed to load catalog.{" "}
          <button className="addons-panel__retry" onClick={loadAddons}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="addons-panel">
      <div className="addons-panel__filter">
        <input
          className="addons-panel__filter-input"
          type="text"
          placeholder="Filter add-ons…"
          value={filter}
          onInput={(e) => setFilter((e.target as HTMLInputElement).value)}
        />
      </div>
      {actionMessage && (
        <div className="addons-panel__message addons-panel__message--error" role="status" aria-live="polite">
          {actionMessage}
        </div>
      )}
      {source && (
        <div className="addons-panel__source">Catalog from {source}</div>
      )}
      <div className="addons-panel__list">
        {filteredAddons.length === 0 && filter ? (
          <div className="addons-panel__empty">No add-ons match &ldquo;{filter}&rdquo;</div>
        ) : filteredAddons.length === 0 ? (
          <div className="addons-panel__empty">No add-ons available</div>
        ) : (
          filteredAddons.map((addon) => (
            <AddonCard
              key={addon.slug}
              addon={addon}
              actionState={actionState[addon.slug]}
              onInstall={handleInstall}
              onUninstall={handleUninstall}
            />
          ))
        )}
      </div>
    </div>
  );
}

interface AddonCardProps {
  addon: Addon;
  actionState?: "installing" | "uninstalling";
  onInstall: (slug: string) => void;
  onUninstall: (slug: string) => void;
}

function AddonCard({ addon, actionState, onInstall, onUninstall }: AddonCardProps) {
  const displayVersion = addon.installedVersion ?? addon.version;
  const isExtSkill = addon.type === "extension+skill";
  const busy = !!actionState;

  const skills: AddonSkill[] = Array.isArray(addon.skills)
    ? addon.skills.filter((s): s is AddonSkill => typeof s === "object" && s !== null && "name" in s)
    : [];

  return (
    <div className="addons-panel__card">
      <div className="addons-panel__card-header">
        <div className="addons-panel__card-info">
          <span className="addons-panel__card-name">{addon.name}</span>
          <span className={`addons-panel__card-type ${isExtSkill ? "addons-panel__card-type--skill" : "addons-panel__card-type--ext"}`}>
            {isExtSkill ? "EXTENSION + SKILL" : "EXTENSION"}
          </span>
          {displayVersion && (
            <span className="addons-panel__card-version">{displayVersion}</span>
          )}
          {addon.installKind && (
            <span className="addons-panel__card-kind">{addon.installKind}</span>
          )}
        </div>
        {addon.hasUpdate ? (
          <button
            className="addons-panel__card-action addons-panel__card-action--update"
            disabled={busy}
            onClick={() => onInstall(addon.slug)}
          >
            {actionState === "installing" ? "Updating…" : "Update"}
          </button>
        ) : addon.installed ? (
          <button
            className="addons-panel__card-action addons-panel__card-action--uninstall"
            disabled={busy}
            onClick={() => onUninstall(addon.slug)}
          >
            {actionState === "uninstalling" ? "Removing…" : "Uninstall"}
          </button>
        ) : (
          <button
            className="addons-panel__card-action addons-panel__card-action--install"
            disabled={busy}
            onClick={() => onInstall(addon.slug)}
          >
            {actionState === "installing" ? "Installing…" : "Install"}
          </button>
        )}
      </div>
      {addon.description && (
        <div className="addons-panel__card-desc">{addon.description}</div>
      )}
      {(addon.tags.length > 0 || skills.length > 0) && (
        <div className="addons-panel__card-tags">
          {addon.tags.map((tag) => (
            <span key={tag} className="addons-panel__tag">{tag}</span>
          ))}
          {skills.map((skill) => (
            <span key={skill.name} className="addons-panel__skill">📄 {skill.name}</span>
          ))}
        </div>
      )}
    </div>
  );
}
