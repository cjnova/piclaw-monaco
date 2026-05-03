import { getMessageUrl, getChatJid } from "../api/chat-jid";
import { useCallback, useEffect } from "preact/hooks";
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

function ContextRing({ percent, tokens, contextWindow, onClick }: { percent: number; tokens: number; contextWindow: number; onClick: (e: Event) => void }) {
  const p = percent;
  const color = p > 95 ? "var(--error)" : p > 80 ? "var(--warning)" : "var(--success)";
  const tokensK = fmtTokens(tokens);
  const totalK = contextWindow > 0 ? fmtTokens(contextWindow) : "--";

  return (
    <span
      className="context-ring"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); onClick(e); } }}
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
  // Load cached context immediately (before first fetch) so hard refresh shows last known values
  function loadCachedContext(): AgentContext | null {
    try {
      const jid = getChatJid();
      const cached = localStorage.getItem(`piclaw:context-cache:${jid}`) || localStorage.getItem("piclaw:context-cache");
      if (cached) return JSON.parse(cached) as AgentContext;
    } catch {}
    return null;
  }
  const agentContext = useSignal<AgentContext | null>(loadCachedContext());
  const error = useSignal<boolean>(false);
  const lastSuccessAt = useSignal<number>(0);
  const showPicker = useSignal<boolean>(false);
  const showThinkingPicker = useSignal<boolean>(false);
  const models = useSignal<ModelEntry[]>([]);
  const thinkingLevels = useSignal<string[]>([]);
  const currentModel = useSignal<string | null>(null);
  const currentThinkingLevel = useSignal<string>("");
  // #60: store model's context_window from /agent/models as fallback
  const modelContextWindow = useSignal<number>(0);
  // #68: compaction progress
  const isCompacting = useSignal(false);
  const compactStartTime = useSignal<number>(0);
  const compactElapsed = useSignal<number>(0);
  // billing: session usage
  const sessionTokens = useSignal<number>(0);
  const usageLabel = useSignal<string>("");
  const providerUsage = useSignal<ProviderUsage | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/agent/status?chat_jid=" + encodeURIComponent(getChatJid()));
      if (res.ok) {
        agentStatus.value = await res.json() as AgentStatus;
        error.value = false;
        lastSuccessAt.value = Date.now();
      } else {
        error.value = true;
      }
      // Also fetch current model (status.data is null when idle)
      const modelsRes = await fetch("/agent/models?chat_jid=" + encodeURIComponent(getChatJid()));
      if (modelsRes.ok) {
        const info = await modelsRes.json() as ModelInfo;
        if (info.current) currentModel.value = info.current;
        if (info.thinking_level) currentThinkingLevel.value = info.thinking_level;
        // #60: store context_window from current model's definition
        const currentOpt = info.model_options?.find((m: Record<string, unknown>) => m.label === info.current || m.id === info.current);
        if (currentOpt?.context_window) modelContextWindow.value = currentOpt.context_window as number;
        // billing: store provider_usage (conditional on data shape)
        if (info.provider_usage) {
          providerUsage.value = info.provider_usage;
          const pu = info.provider_usage as Record<string, unknown>;
          // Check if percentage-based (GitHub Copilot style)
          if (pu.primary && typeof (pu.primary as Record<string, unknown>).used_percent === "number") {
            const pct = (pu.primary as Record<string, unknown>).used_percent as number;
            const label = (pu.primary as Record<string, unknown>).label as string || "premium";
            usageLabel.value = `${pct}% ${label}`;
            sessionTokens.value = 0;
          } else {
            // Token-based provider (Anthropic, OpenAI, etc.)
            const total = Object.values(pu).reduce((sum: number, p: unknown) => {
              if (typeof p !== "object" || p === null) return sum;
              const pp = p as Record<string, unknown>;
              return sum + ((pp.total_tokens as number) ?? (((pp.input_tokens as number) ?? 0) + ((pp.output_tokens as number) ?? 0)));
            }, 0);
            if (total > 0) {
              sessionTokens.value = total;
              usageLabel.value = `▼ ${fmtTokens(total)}`;
            }
          }
        }
      }
    } catch (err) {
      console.warn("[ModelContextBar] status fetch failed:", err);
      error.value = true;
    }
  }, []);

  const fetchContext = useCallback(async () => {
    try {
      const res = await fetch("/agent/context?chat_jid=" + encodeURIComponent(getChatJid()));
      if (res.ok) {
        const data = await res.json() as AgentContext;
        // Only update if backend returned real data (not all-null)
        if (data.tokens !== null) {
          agentContext.value = data;
          try { localStorage.setItem(`piclaw:context-cache:${getChatJid()}`, JSON.stringify(data)); } catch {}
        } else if (!agentContext.value) {
          // Load from cache on first null response
          try {
            const cached = localStorage.getItem(`piclaw:context-cache:${getChatJid()}`);
            if (cached) agentContext.value = JSON.parse(cached) as AgentContext;
          } catch {}
        }
      }
    } catch (err) {
      console.warn("[ModelContextBar] context fetch failed:", err);
    }
  }, []);

  useEffect(() => {
    void fetchStatus();
    const interval = setInterval(() => {
      void fetchStatus();
    }, 5_000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  useEffect(() => {
    void fetchContext();
    const interval = setInterval(() => {
      void fetchContext();
    }, 10_000);
    return () => clearInterval(interval);
  }, [fetchContext]);

  // Immediately refresh model/context when SSE connects (first load + reconnects)
  useEffect(() => {
    const onConnect = () => {
      void fetchStatus();
      void fetchContext();
    };
    window.addEventListener("piclaw:sse-connected", onConnect);
    return () => window.removeEventListener("piclaw:sse-connected", onConnect);
  }, [fetchStatus, fetchContext]);

  // #68: elapsed timer during compaction
  useEffect(() => {
    if (!isCompacting.value) return;
    const interval = setInterval(() => {
      compactElapsed.value = Math.round((Date.now() - compactStartTime.value) / 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCompacting.value]);

  // #68: listen for agent completion to clear compaction state + update context
  useEffect(() => {
    const onStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      // Extract context_usage from done event (pushed by backend after each turn)
      if (detail?.context_usage && detail.context_usage.tokens !== null && detail.context_usage.tokens !== undefined) {
        const cu = detail.context_usage;
        agentContext.value = { tokens: cu.tokens, contextWindow: cu.contextWindow ?? 0, percent: cu.percent ?? 0 };
        try { localStorage.setItem(`piclaw:context-cache:${getChatJid()}`, JSON.stringify(agentContext.value)); } catch {}
      }
      // Detect compaction started (from /compact command or auto-compaction)
      if (detail?.intent_key === "compaction" && !isCompacting.value) {
        isCompacting.value = true;
        compactStartTime.value = Date.now();
        compactElapsed.value = 0;
      }
      // Detect compaction/turn done — also refresh context
      if (detail?.type === "done" || detail?.type === "error" || detail?.status === "idle") {
        if (isCompacting.value) {
          isCompacting.value = false;
        }
        // Always refresh context after a turn completes
        setTimeout(() => { void fetchContext(); }, 500);
      }
    };
    window.addEventListener("piclaw:agent-status", onStatus);
    return () => window.removeEventListener("piclaw:agent-status", onStatus);
  }, [fetchContext]);

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
  const handleCompact = async (e: Event) => {
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
        setTimeout(() => {
          void fetchContext();
        }, 1000);
      }
    } catch {
      isCompacting.value = false;
    }
  };

  const flashStatus = (message: string) => {
    window.dispatchEvent(new CustomEvent("piclaw:status-flash", { detail: { message, type: "error" } }));
  };

  const handleBadgeClick = async (e: Event) => {
    e.stopPropagation();
    if (showPicker.value) {
      showPicker.value = false;
      return;
    }

    // Show immediately with cached/fallback data, fetch in background
    showPicker.value = true;
    if (!models.value.length) models.value = FALLBACK_MODELS;

    try {
      const res = await fetch("/agent/models?chat_jid=" + encodeURIComponent(getChatJid()));
      if (res.ok) {
        const info = await res.json() as ModelInfo;
        const entries: ModelEntry[] = info.model_options?.length
          ? info.model_options.map(o => ({ id: o.id, context_window: o.context_window }))
          : (info.models?.length ? info.models.map(id => ({ id })) : FALLBACK_MODELS);
        models.value = entries;
        currentModel.value = info.current ?? modelName;
        if (info.thinking_level) currentThinkingLevel.value = info.thinking_level;
        thinkingLevels.value = info.available_thinking_levels?.length
          ? info.available_thinking_levels
          : FALLBACK_THINKING_LEVELS;
      } else {
        console.warn("[ModelContextBar] models fetch failed:", res.status);
        flashStatus("Model fetch failed");
      }
    } catch (err) {
      console.warn("[ModelContextBar] models fetch failed:", err);
      flashStatus("Model fetch failed");
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
        flashStatus("Model switch failed");
      }
    } catch (err) {
      console.warn("[ModelContextBar] model switch error:", err);
      flashStatus("Model switch failed");
    }
  };

  const handleThinkingClick = (e: Event) => {
    e.stopPropagation();
    showThinkingPicker.value = !showThinkingPicker.value;
    showPicker.value = false;
  };

  const handleSelectThinking = async (level: string) => {
    currentThinkingLevel.value = level;
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
        flashStatus("Thinking switch failed");
      }
    } catch (err) {
      console.warn("[ModelContextBar] thinking switch error:", err);
      flashStatus("Thinking switch failed");
    }
  };

  const modelName = agentStatus.value?.data?.model ?? currentModel.value ?? "";
  const thinkingLevel = agentStatus.value?.data?.thinking_level || currentThinkingLevel.value || "";
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
                className={`model-picker__item${isCurrent ? " model-picker__item--active" : ""}`}
                role="button"
                tabIndex={0}
                onClick={() => handleSelectModel(entry.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSelectModel(entry.id); } }}
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
        role="button"
        tabIndex={0}
        onClick={handleBadgeClick}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleBadgeClick(e); } }}
        title={`${modelName}${thinkingLevel ? ` • ${thinkingLevel}` : ""} — click to switch model`}
      >
        <span className="model-badge__name-wrapper">
          <span className="model-badge__provider">{modelName.includes("/") ? modelName.split("/")[0] + "/" : ""}</span>
          <span className="model-badge__name">{modelName.split("/").pop() || modelName}</span>
        </span>
      </span>
      {thinkingLevel && (
          <span
            data-model-picker
            className="thinking-badge-wrapper"
          >
            <span
              className="thinking-badge"
              role="button"
              tabIndex={0}
              onClick={handleThinkingClick}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleThinkingClick(e); } }}
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
                      className={`thinking-picker__item${isActive ? " thinking-picker__item--active" : ""}`}
                      role="button"
                      tabIndex={0}
                      onClick={(ev) => { ev.stopPropagation(); handleSelectThinking(level); }}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); handleSelectThinking(level); } }}
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
        {usageLabel.value && (
          <span
            className="usage-badge"
            title={[
              providerUsage.value?.provider ? `Provider: ${(providerUsage.value as Record<string, unknown>).provider}` : "",
              providerUsage.value?.plan ? `Plan: ${(providerUsage.value as Record<string, unknown>).plan}` : "",
            ].filter(Boolean).join("\n")}
          >
            {usageLabel.value}
          </span>
        )}
    </span>
  );
}
