import { getMessageUrl } from "../api/chat-jid";
import { useCallback, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

interface AgentStatus {
  status: "active" | "idle";
  data?: {
    model?: string;
    thinking_level?: string;
    tier?: string;
    chat_percent?: number;
    premium_percent?: number;
  };
}

interface AgentContext {
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
}

interface ModelInfo {
  current: string | null;
  models: string[];
  model_options: { id: string; label?: string; provider?: string; context_window?: number }[];
  thinking_level: string | null;
  thinking_level_label: string | null;
  supports_thinking: boolean;
  available_thinking_levels: string[];
}

interface ModelEntry { id: string; context_window?: number }

const FALLBACK_MODELS: ModelEntry[] = [
  { id: "github-copilot/claude-sonnet-4.6", context_window: 200000 },
  { id: "github-copilot/claude-opus-4.6", context_window: 1000000 },
  { id: "github-copilot/gpt-5.3-codex", context_window: 1000000 },
  { id: "github-copilot/o4-mini", context_window: 200000 },
  { id: "github-copilot/gemini-2.5-pro", context_window: 1048576 },
];

const FALLBACK_THINKING_LEVELS = ["none", "low", "medium", "high", "max"];

function ContextRing({ percent, tokens, contextWindow, onClick }: { percent: number | null; tokens: number | null; contextWindow: number | null; onClick: (e: MouseEvent) => void }) {
  const p = percent ?? 0;
  const color = p > 95 ? "#f38ba8" : p > 80 ? "#f9e2af" : "#a6e3a1";
  const fmtTokens = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : `${(n / 1000).toFixed(0)}k`;
  const tokensK = tokens != null ? fmtTokens(tokens) : "--";
  const totalK = contextWindow != null ? fmtTokens(contextWindow) : "--";

  return (
    <span
      className="context-ring"
      onClick={onClick}
      title={`Context: ${tokensK}/${totalK} (${p.toFixed(0)}%) \u2014 click to compact`}
    >
      <svg width="12" height="12" viewBox="0 0 12 12">
        <circle cx="6" cy="6" r="5" fill={color} opacity="0.9" />
      </svg>
      <span className="context-ring__label">{tokensK}/{totalK}</span>
    </span>
  );
}

export function ModelContextBar() {
  const agentStatus = useSignal<AgentStatus | null>(null);
  const agentContext = useSignal<AgentContext | null>(null);
  const error = useSignal<boolean>(false);
  const lastSuccessAt = useSignal<number>(0);
  const showPicker = useSignal<boolean>(false);
  const showThinkingPicker = useSignal<boolean>(false);
  const models = useSignal<ModelEntry[]>([]);
  const thinkingLevels = useSignal<string[]>([]);
  const currentModel = useSignal<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/agent/status");
      if (res.ok) {
        agentStatus.value = await res.json() as AgentStatus;
        error.value = false;
        lastSuccessAt.value = Date.now();
      } else {
        error.value = true;
      }
      // Also fetch current model (status.data is null when idle)
      const modelsRes = await fetch("/agent/models");
      if (modelsRes.ok) {
        const info = await modelsRes.json() as { current?: string; thinking_level?: string };
        if (info.current) currentModel.value = info.current;
      }
    } catch (err) {
      console.warn("[ModelContextBar] status fetch failed:", err);
      error.value = true;
    }
  }, []);

  const fetchContext = useCallback(async () => {
    try {
      const res = await fetch("/agent/context");
      if (res.ok) {
        agentContext.value = await res.json() as AgentContext;
      }
    } catch (err) {
      console.warn("[ModelContextBar] context fetch failed:", err);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5_000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  useEffect(() => {
    fetchContext();
    const interval = setInterval(fetchContext, 10_000);
    return () => clearInterval(interval);
  }, [fetchContext]);

  // Refresh model and context immediately when SSE reconnects
  useEffect(() => {
    const handler = () => {
      fetchStatus();
      fetchContext();
    };
    window.addEventListener("piclaw:sse-connected", handler);
    return () => window.removeEventListener("piclaw:sse-connected", handler);
  }, [fetchStatus, fetchContext]);

  // Close pickers on outside click or Escape
  useEffect(() => {
    if (!showPicker.value && !showThinkingPicker.value) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        showPicker.value = false;
        showThinkingPicker.value = false;
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-model-picker]")) {
        showPicker.value = false;
        showThinkingPicker.value = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPicker.value, showThinkingPicker.value]);

  const handleCompact = (e: MouseEvent) => {
    e.stopPropagation();
    fetch(getMessageUrl(), {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "/compact" }),
    }).catch(() => {});
  };

  const handleBadgeClick = async (e: MouseEvent) => {
    e.stopPropagation();
    if (showPicker.value) {
      showPicker.value = false;
      return;
    }

    // Show immediately with cached/fallback data, fetch in background
    showPicker.value = true;
    if (!models.value.length) models.value = FALLBACK_MODELS;

    try {
      const res = await fetch("/agent/models");
      if (res.ok) {
        const info = await res.json() as ModelInfo;
        const entries: ModelEntry[] = info.model_options?.length
          ? info.model_options.map(o => ({ id: o.id, context_window: o.context_window }))
          : (info.models?.length ? info.models.map(id => ({ id })) : FALLBACK_MODELS);
        models.value = entries;
        currentModel.value = info.current ?? modelName;
        thinkingLevels.value = info.available_thinking_levels?.length
          ? info.available_thinking_levels
          : FALLBACK_THINKING_LEVELS;
      }
    } catch (err) {
      console.warn("[ModelContextBar] models fetch failed:", err);
    }
  };

  const handleSelectModel = async (id: string) => {
    try {
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `/model ${id}` }),
      });
      if (res.ok) {
        currentModel.value = id;
        showPicker.value = false;
      } else {
        console.warn("[ModelContextBar] model switch failed:", res.status);
      }
    } catch (err) {
      console.warn("[ModelContextBar] model switch error:", err);
    }
  };

  const handleThinkingClick = (e: MouseEvent) => {
    e.stopPropagation();
    showThinkingPicker.value = !showThinkingPicker.value;
    showPicker.value = false;
  };

  const handleSelectThinking = async (level: string) => {
    try {
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `/thinking ${level}` }),
      });
      if (res.ok) {
        showThinkingPicker.value = false;
      } else {
        console.warn("[ModelContextBar] thinking switch failed:", res.status);
      }
    } catch (err) {
      console.warn("[ModelContextBar] thinking switch error:", err);
    }
  };

  // Show mockup when not connected.
  // If last successful fetch was > 30s ago and we now have an error, treat as stale/disconnected.
  const isConnected = error.value
    ? (lastSuccessAt.value > 0 && Date.now() - lastSuccessAt.value <= 30_000)
    : true;
  const modelName = isConnected
    ? (agentStatus.value?.data?.model ?? currentModel.value ?? "github-copilot/claude-sonnet-4.6")
    : "github-copilot/claude-sonnet-4.6";
  const thinkingLevel = isConnected
    ? (agentStatus.value?.data?.thinking_level || "medium")
    : "medium";
  const contextPercent = isConnected
    ? (agentContext.value?.percent ?? null)
    : 42;
  const contextTokens = isConnected
    ? (agentContext.value?.tokens ?? null)
    : 54000;
  const contextWindow = isConnected
    ? (agentContext.value?.contextWindow ?? null)
    : 128000;

  const activeModel = currentModel.value ?? modelName;

  return (
    <span
      data-model-picker
      className="model-badge-wrapper"
    >
      {/* Model picker dropdown — opens above */}
      {showPicker.value && (
        <div
          data-model-picker
          className="model-picker"
        >
          {models.value.map((entry) => {
            const isCurrent = entry.id === activeModel;
            const ctxK = entry.context_window ? (entry.context_window >= 1000000 ? `${(entry.context_window / 1000000).toFixed(1)}M` : `${(entry.context_window / 1000).toFixed(0)}k`) : "";
            return (
              <div
                key={entry.id}
                className="model-picker__item"
                onClick={() => handleSelectModel(entry.id)}
                style={{
                  color: isCurrent ? "#cba6f7" : "#cdd6f4",
                  background: isCurrent ? "rgba(203,166,247,0.1)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = isCurrent
                    ? "rgba(203,166,247,0.18)"
                    : "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = isCurrent
                    ? "rgba(203,166,247,0.1)"
                    : "transparent";
                }}
              >
                <span className="model-picker__item__check">
                  {isCurrent ? "✓" : ""}
                </span>
                <span className="model-picker__item__name">{entry.id}</span>
                {ctxK && <span className="model-picker__item__ctx">{ctxK}</span>}
              </div>
            );
          })}
        </div>
      )}

      {/* The badge itself */}
      <span
        className="model-badge"
        onClick={handleBadgeClick}
        title={`${modelName}${thinkingLevel ? ` • ${thinkingLevel}` : ""} — click to switch model`}
      >
        <span className="model-badge__name-wrapper">
          <span className="model-badge__provider">{modelName.includes("/") ? modelName.split("/")[0] + "/" : ""}</span>
          <span className="model-badge__name">{modelName.split("/").pop() || modelName}</span>
        </span>
        {thinkingLevel && (
          <span
            data-model-picker
            className="thinking-badge-wrapper"
          >
            <span
              className="thinking-badge"
              onClick={handleThinkingClick}
              title="Click to change thinking level"
            >
              {thinkingLevel}
            </span>
            {showThinkingPicker.value && (
              <div
                data-model-picker
                className="thinking-picker"
              >
                {(thinkingLevels.value.length ? thinkingLevels.value : FALLBACK_THINKING_LEVELS).map((level) => {
                  const isActive = level === thinkingLevel;
                  return (
                    <div
                      key={level}
                      className="thinking-picker__item"
                      onClick={(ev) => { ev.stopPropagation(); handleSelectThinking(level); }}
                      style={{
                        color: isActive ? "#a6e3a1" : "#cdd6f4",
                        background: isActive ? "rgba(166,227,161,0.1)" : "transparent",
                      }}
                      onMouseEnter={(ev) => { (ev.currentTarget as HTMLElement).style.background = isActive ? "rgba(166,227,161,0.18)" : "rgba(255,255,255,0.07)"; }}
                      onMouseLeave={(ev) => { (ev.currentTarget as HTMLElement).style.background = isActive ? "rgba(166,227,161,0.1)" : "transparent"; }}
                    >
                      <span className="thinking-picker__item__check">{isActive ? "✓" : ""}</span>
                      <span>{level}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </span>
        )}
        <ContextRing percent={contextPercent} tokens={contextTokens} contextWindow={contextWindow} onClick={handleCompact} />
      </span>
    </span>
  );
}
