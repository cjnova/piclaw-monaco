import { useCallback, useEffect } from "preact/hooks";
import { useSignal, useComputed } from "@preact/signals";
import { getChatJid } from "../../api/chat-jid";
import type { AgentStatus, AgentContext, ModelInfo, ProviderUsage, ModelEntry } from "./types";
import { fmtTokens } from "./types";

export interface UseStatusPollingResult {
  agentStatus: ReturnType<typeof useSignal<AgentStatus | null>>;
  agentContext: ReturnType<typeof useSignal<AgentContext | null>>;
  error: ReturnType<typeof useSignal<boolean>>;
  isStale: ReturnType<typeof useComputed<boolean>>;
  currentModel: ReturnType<typeof useSignal<string | null>>;
  currentThinkingLevel: ReturnType<typeof useSignal<string>>;
  modelContextWindow: ReturnType<typeof useSignal<number>>;
  sessionTokens: ReturnType<typeof useSignal<number>>;
  usageLabel: ReturnType<typeof useSignal<string>>;
  providerUsage: ReturnType<typeof useSignal<ProviderUsage | null>>;
  fetchStatus: () => Promise<void>;
  fetchContext: () => Promise<void>;
}

function loadCachedContext(): AgentContext | null {
  try {
    const jid = getChatJid();
    const cached = localStorage.getItem(`piclaw:context-cache:${jid}`) || localStorage.getItem("piclaw:context-cache");
    if (cached) return JSON.parse(cached) as AgentContext;
  } catch {}
  return null;
}

export function useStatusPolling(): UseStatusPollingResult {
  const agentStatus = useSignal<AgentStatus | null>(null);
  const agentContext = useSignal<AgentContext | null>(loadCachedContext());
  const error = useSignal<boolean>(false);
  const lastSuccessAt = useSignal<number>(0);
  const pollTick = useSignal(0);
  const isStale = useComputed(() => {
    void pollTick.value; // subscribe to poll ticks for reactivity
    return error.value && lastSuccessAt.value > 0 && Date.now() - lastSuccessAt.value > 30000;
  });
  const currentModel = useSignal<string | null>(null);
  const currentThinkingLevel = useSignal<string>("");
  // #60: store model's context_window from /agent/models as fallback
  const modelContextWindow = useSignal<number>(0);
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
      pollTick.value += 1;
    } catch (err) {
      console.warn("[ModelContextBar] status fetch failed:", err);
      error.value = true;
      pollTick.value += 1;
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

  // Listen for agent_status events — extract context_usage from done events
  useEffect(() => {
    const onStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      // Extract context_usage from done event (pushed by backend after each turn)
      if (detail?.context_usage && detail.context_usage.tokens !== null && detail.context_usage.tokens !== undefined) {
        const cu = detail.context_usage;
        agentContext.value = { tokens: cu.tokens, contextWindow: cu.contextWindow ?? 0, percent: cu.percent ?? 0 };
        try { localStorage.setItem(`piclaw:context-cache:${getChatJid()}`, JSON.stringify(agentContext.value)); } catch {}
      }
      // Always refresh context after a turn completes
      if (detail?.type === "done" || detail?.type === "error" || detail?.status === "idle") {
        setTimeout(() => { void fetchContext(); }, 500);
      }
    };
    window.addEventListener("piclaw:agent-status", onStatus);
    return () => window.removeEventListener("piclaw:agent-status", onStatus);
  }, [fetchContext]);

  return {
    agentStatus,
    agentContext,
    error,
    isStale,
    currentModel,
    currentThinkingLevel,
    modelContextWindow,
    sessionTokens,
    usageLabel,
    providerUsage,
    fetchStatus,
    fetchContext,
  };
}
