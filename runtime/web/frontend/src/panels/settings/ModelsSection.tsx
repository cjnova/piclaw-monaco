import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { getMessageUrl } from "../../api/chat-jid";
import { type SettingsData } from "./types";

interface ModelOption {
  label: string;
  name: string;
  provider: string;
  context_window?: number;
  reasoning?: boolean;
}

interface ModelsResponse {
  current?: string;
  thinking_level?: string;
  model_options?: ModelOption[];
}

const THINKING_LEVELS = ["off", "minimal", "low", "medium", "high"];

export function ModelsSection({ data: _data }: { data: SettingsData }) {
  const models = useSignal<ModelOption[]>([]);
  const current = useSignal("");
  const thinkingLevel = useSignal("medium");
  const filter = useSignal("");

  useEffect(() => {
    fetch("/agent/models", { credentials: "same-origin" })
      .then(r => r.json())
      .then((d: ModelsResponse) => {
        current.value = d.current ?? "";
        thinkingLevel.value = d.thinking_level ?? "medium";
        models.value = d.model_options ?? [];
      })
      .catch(() => {});
  }, []);

  const sendCommand = async (cmd: string) => {
    try {
      await fetch(getMessageUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: cmd }),
      });
    } catch {}
  };

  const switchModel = (label: string) => {
    current.value = label;
    sendCommand(`/model ${label}`);
  };

  const switchThinking = (level: string) => {
    thinkingLevel.value = level;
    sendCommand(`/thinking ${level}`);
  };

  const filtered = filter.value
    ? models.value.filter(m => m.name.toLowerCase().includes(filter.value.toLowerCase()) || m.provider.toLowerCase().includes(filter.value.toLowerCase()))
    : models.value;

  return (
    <section className="settings-panel__section settings-panel__section--models">
      <h2 className="settings-panel__section-title">Models</h2>

      <input
        className="settings-panel__input settings-panel__model-filter"
        type="text"
        placeholder="Filter models..."
        value={filter.value}
        onInput={(e) => (filter.value = (e.target as HTMLInputElement).value)}
      />

      <p className="settings-panel__description">Model and provider names may wrap in narrow panes to avoid clipping.</p>

      <div className="settings-panel__model-table-wrapper">
        <table className="settings-panel__table settings-panel__model-table">
          <thead>
            <tr>
              <th></th>
              <th>Model</th>
              <th>Provider</th>
              <th>Context</th>
              <th>Reasoning</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <tr
                key={m.label}
                tabIndex={0}
                onClick={() => switchModel(m.label)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchModel(m.label); } }}
                className={`${m.label === current.value ? "settings-panel__model-table-row--active" : ""} settings-panel__model-table-row`}
              >
                <td>
                  <input type="radio" name="model" checked={m.label === current.value} readOnly />
                </td>
                <td>{m.name}</td>
                <td>{m.provider}</td>
                <td>{m.context_window ? `${Math.round(m.context_window / 1000)}K` : "—"}</td>
                <td>{m.reasoning ? "🧠" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="settings-panel__subsection-title settings-panel__subsection-title--spaced">Thinking level: <strong>{thinkingLevel.value}</strong></h3>

      <div className="settings-panel__thinking-slider">
        <input
          type="range"
          min={0}
          max={4}
          value={THINKING_LEVELS.indexOf(thinkingLevel.value)}
          onInput={(e) => switchThinking(THINKING_LEVELS[Number((e.target as HTMLInputElement).value)])}
          className="settings-panel__thinking-range"
        />
        <div className="settings-panel__thinking-labels">
          {THINKING_LEVELS.map((l) => (
            <span
              key={l}
              className={`settings-panel__thinking-label${l === thinkingLevel.value ? " settings-panel__thinking-label--active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => switchThinking(l)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchThinking(l); } }}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
