import { getMessageUrl } from "../api/chat-jid";
import { useEffect } from "preact/hooks";
import { useSignal, useComputed } from "@preact/signals";

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
  provider_usage?: ProviderUsage;
}

interface ProviderUsage {
  provider?: string;
  plan?: string;
  hint_short?: string;
  primary?: { label: string; used_percent: number; remaining_percent: number; resets_at?: string; reset_description?: string };
  secondary?: { label: string; used_percent: number; remaining_percent: number; resets_at?: string; reset_description?: string };
  credits_remaining?: number | null;
  credits_unlimited?: boolean;
  total_tokens?: number;
  input_tokens?: number;
  output_tokens?: number;
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

const fmtTokens = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : `${(n / 1000).toFixed(0)}k`;

function ContextRing({ percent, tokens, contextWindow, onClick }: { percent: number; tokens: number; contextWindow: number; onClick: (e: MouseEvent) => void }) {
  const p = percent;
  const color = p > 95 ? "#f38ba8" : p > 80 ? "#f9e2af" : "#a6e3a1";
  const tokensK = fmtTokens(tokens);
  const totalK = contextWindow > 0 ? fmtTokens(contextWindow) : "--";

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
  // #60: store model's context_window from /agent/models as fallback
  const modelContextWindow = useSignal<number>(0);
  // #68: compaction progress
  const isCompacting = useSignal(false);
  const compactStartTime = useSignal<number>(0);
  const compactElapsed = useSignal<number>(0);
  // billing: session token usage
  const sessionTokens = useSignal<number>(0);
  const providerUsage = useSignal<ProviderUsage | null>(null);

  const fetchStatus = async () => {
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
        const info = await modelsRes.json() as ModelInfo;
        if (info.current) currentModel.value = info.current;
        // #60: store context_window from current model's definition
        const currentOpt = info.model_options?.find((m: Record<string, unknown>) => m.label === info.current || m.id === info.current);
        if (currentOpt?.context_window) modelContextWindow.value = currentOpt.context_window as number;
        // billing: store provider_usage
        if (info.provider_usage) {
          providerUsage.value = info.provider_usage;
          // Sum total tokens across providers
          const pu = info.provider_usage as Record<string, ProviderUsage>;
          const total = Object.values(pu).reduce((sum: number, p: ProviderUsage) => {
            if (typeof p !== "object" || p === null) return sum;
            return sum + (p?.total_tokens ?? ((p?.input_tokens ?? 0) + (p?.output_tokens ?? 0)));
          }, 0);
          if (total > 0) sessionTokens.value = total;
        }
      }
    } catch (err) {
      console.warn("[ModelContextBar] status fetch failed:", err);
      error.value = true;
    }
  };

  const fetchContext = async () => {
    try {
      const res = await fetch("/agent/context");
      if (res.ok) {
        agentContext.value = await res.json() as AgentContext;
      }
    } catch (err) {
      console.warn("[ModelContextBar] context fetch failed:", err);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5_000);
    return () => clearInterval(interval);
  }, [agentStatus, error]);

  useEffect(() => {
    fetchContext();
    const interval = setInterval(fetchContext, 10_000);
    return () => clearInterval(interval);
  }, [agentContext]);

  // Immediately refresh model/context when SSE connects (first load + reconnects)
  useEffect(() => {
    const onConnect = () => {
      fetchStatus();
      fetchContext();
    };
    window.addEventListener("piclaw:sse-connected", onConnect);
    return () => window.removeEventListener("piclaw:sse-connected", onConnect);
  }, []);

  // #68: elapsed timer during compaction
  useEffect(() => {
    if (!isCompacting.value) return;
    const interval = setInterval(() => {
      compactElapsed.value = Math.round((Date.now() - compactStartTime.value) / 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCompacting.value]);

  // #68: listen for agent completion to clear compaction state
  useEffect(() => {
    const onStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      // Detect compaction started (from /compact command or auto-compaction)
      if (detail?.intent_key === "compaction" && !isCompacting.value) {
        isCompacting.value = true;
        compactStartTime.value = Date.now();
        compactElapsed.value = 0;
      }
      // Detect compaction/turn done
      if (detail?.type === "done" || detail?.type === "error" || detail?.status === "idle") {
        if (isCompacting.value) {
          isCompacting.value = false;
          setTimeout(() => fetchContext(), 1000);
        }
      }
    };
    window.addEventListener("piclaw:agent-status", onStatus);
    return () => window.removeEventListener("piclaw:agent-status", onStatus);
  }, []);

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

  // #68: handleCompact with progress tracking
  const handleCompact = async (e: MouseEvent) => {
    e.stopPropagation();
    isCompacting.value = true;
    compactStartTime.value = Date.now();
    compactElapsed.value = 0;
    try {
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: "/compact" }),
      });
      const data = await res.json().catch(() => null);
      // Command responded immediately ("Already compacted" or similar) — no agent turn
      if (data?.command) {
        isCompacting.value = false;
        setTimeout(() => fetchContext(), 1000);
      }
    } catch {
      isCompacting.value = false;
    }
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

  const modelName = agentStatus.value?.data?.model ?? currentModel.value ?? "";
  const thinkingLevel = agentStatus.value?.data?.thinking_level || "";
  const contextTokens = useComputed(() => agentContext.value?.tokens ?? 0);
  // #60: use model's context_window from /agent/models as fallback when /agent/context returns null
  const contextWindow = useComputed(() => agentContext.value?.contextWindow ?? modelContextWindow.value ?? 0);
  const contextPercent = useComputed(() => {
    const w = contextWindow.value;
    const t = contextTokens.value;
    return agentContext.value?.percent ?? (w > 0 ? (t / w) * 100 : 0);
  });

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

      {/* #68: compaction progress badge */}
      {isCompacting.value && (
        <span className="compaction-badge">
          ⟳ Compacting... {compactElapsed.value}s
        </span>
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
        <ContextRing percent={contextPercent.value} tokens={contextTokens.value} contextWindow={contextWindow.value} onClick={handleCompact} />
        {/* billing: show session token count if available */}
        {sessionTokens.value > 0 && (
          <span
            className="usage-badge"
            title={[
              providerUsage.value?.provider ? `Provider: ${providerUsage.value.provider}` : "",
              providerUsage.value?.plan ? `Plan: ${providerUsage.value.plan}` : "",
              `Session tokens: ${sessionTokens.value.toLocaleString()}`,
            ].filter(Boolean).join("\n")}
          >
            ▼ {fmtTokens(sessionTokens.value)}
          </span>
        )}
      </span>
    </span>
  );
}
