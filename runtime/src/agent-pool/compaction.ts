/**
 * agent-pool/compaction.ts – Shared compaction helpers for orchestrated and manual compaction paths.
 */

import { type AgentSession, type AgentSessionEvent } from "@mariozechner/pi-coding-agent";

import { formatTimeoutDuration } from "./prompt-utils.js";

export interface CompactionLifecycleOptions {
  onInfo?: (message: string, details: Record<string, unknown>) => void;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
}

function estimateMessageTokens(message: any): number {
  if (!message || typeof message !== "object") return 0;

  const countText = (value: unknown): number => {
    if (typeof value === "string") return value.length;
    if (!Array.isArray(value)) return 0;
    let chars = 0;
    for (const block of value) {
      if (!block || typeof block !== "object") continue;
      if (block.type === "text" && typeof block.text === "string") chars += block.text.length;
      if (block.type === "thinking" && typeof block.thinking === "string") chars += block.thinking.length;
      if (block.type === "toolCall") {
        chars += typeof block.name === "string" ? block.name.length : 0;
        if (block.arguments !== undefined) chars += JSON.stringify(block.arguments).length;
      }
      if (block.type === "image") chars += 4800;
    }
    return chars;
  };

  switch (message.role) {
    case "assistant":
    case "custom":
    case "toolResult":
      return Math.ceil(countText(message.content) / 4);
    case "user":
      return Math.ceil(countText(message.content) / 4);
    case "bashExecution": {
      const chars = (typeof message.command === "string" ? message.command.length : 0)
        + (typeof message.output === "string" ? message.output.length : 0);
      return Math.ceil(chars / 4);
    }
    case "branchSummary":
    case "compactionSummary":
      return Math.ceil(((typeof message.summary === "string" ? message.summary.length : 0)) / 4);
    default:
      return 0;
  }
}

export function estimateContextTokensFromSession(session: AgentSession): number {
  const usage = session.getContextUsage?.();
  if (typeof usage?.tokens === "number") return usage.tokens;

  const context = session.sessionManager.buildSessionContext();
  return context.messages.reduce((total: number, message: any) => total + estimateMessageTokens(message), 0);
}

/** Fallback context window when the model does not report one.
 *  Conservative enough to trigger compaction before most models overflow. */
export const DEFAULT_FALLBACK_CONTEXT_WINDOW = 128_000;
const DEFAULT_COMPACTION_TIMEOUT_MS = 180_000;

export function getModelContextWindow(session: AgentSession): number | null {
  const model = session.model as (AgentSession["model"] & { contextLength?: number }) | undefined;
  const contextWindow = typeof model?.contextWindow === "number"
    ? model.contextWindow
    : typeof model?.contextLength === "number"
      ? model.contextLength
      : null;
  if (typeof contextWindow !== "number" || !Number.isFinite(contextWindow) || contextWindow <= 0) {
    return null;
  }
  return contextWindow;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function getCompactionTimeoutMs(): number {
  return parsePositiveInt(process.env.PICLAW_COMPACTION_TIMEOUT_MS, DEFAULT_COMPACTION_TIMEOUT_MS);
}

export async function abortCompactionBestEffort(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onWarn">,
): Promise<void> {
  try {
    const compactingSession = session as AgentSession & {
      abortCompaction?: () => void;
      abort?: () => Promise<void>;
    };
    if (typeof compactingSession.abortCompaction === "function" && session.isCompacting) {
      compactingSession.abortCompaction();
      return;
    }
    if (typeof compactingSession.abort === "function") {
      await compactingSession.abort();
    }
  } catch (error) {
    options.onWarn?.("Failed to abort stuck compaction", {
      operation: "run_agent.abort_stuck_compaction",
      chatJid,
      err: error,
    });
  }
}

export async function runCompactionWithTimeout<T>(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onWarn">,
  runCompact: () => Promise<T>,
): Promise<{ ok: true; result: T } | { ok: false; errorMessage: string }> {
  const timeoutMs = getCompactionTimeoutMs();
  if (timeoutMs <= 0) {
    try {
      return { ok: true, result: await runCompact() };
    } catch (error) {
      return { ok: false, errorMessage: error instanceof Error ? error.message : String(error) };
    }
  }

  const compactionOutcome = new Promise<{ ok: true; result: T } | { ok: false; errorMessage: string }>((resolve) => {
    void Promise.resolve()
      .then(() => runCompact())
      .then((result) => resolve({ ok: true, result }))
      .catch((error) => resolve({
        ok: false,
        errorMessage: error instanceof Error ? error.message : String(error),
      }));
  });

  const timedOut = Symbol("compaction-timeout");
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  const timeoutOutcome = new Promise<typeof timedOut>((resolve) => {
    timeoutId = setTimeout(() => resolve(timedOut), timeoutMs);
  });

  const outcome = await Promise.race([compactionOutcome, timeoutOutcome]);
  if (timeoutId) clearTimeout(timeoutId);
  if (outcome !== timedOut) {
    return outcome;
  }

  await abortCompactionBestEffort(session, chatJid, options);
  return {
    ok: false,
    errorMessage: `Compaction timed out after ${formatTimeoutDuration(timeoutMs)}`,
  };
}

export async function maybeAutoCompactSessionBeforePrompt(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onInfo" | "onWarn">,
  onEvent?: (event: AgentSessionEvent) => void,
): Promise<void> {
  if (session.isStreaming || session.isCompacting || session.isRetrying) return;
  const reportedContextWindow = getModelContextWindow(session);
  const contextWindow = reportedContextWindow ?? DEFAULT_FALLBACK_CONTEXT_WINDOW;
  if (!reportedContextWindow) {
    options.onWarn?.("Model does not report contextWindow; using fallback for pre-prompt compaction", {
      operation: "maybe_auto_compact_session_before_prompt.fallback_context_window",
      chatJid,
      fallbackContextWindow: DEFAULT_FALLBACK_CONTEXT_WINDOW,
      modelId: (session.model as any)?.id ?? null,
      provider: (session.model as any)?.provider ?? null,
    });
  }

  const settingsManager = (session as AgentSession & {
    settingsManager?: { getCompactionSettings?: () => { enabled?: boolean; reserveTokens?: number } };
  }).settingsManager;
  const settings = typeof settingsManager?.getCompactionSettings === "function"
    ? settingsManager.getCompactionSettings()
    : null;
  // Piclaw manages compaction at safe pre-prompt boundaries regardless of
  // upstream auto-compaction being disabled. Only bail when there is no
  // settings object at all (no model / no session).
  if (!settings) return;

  try {
    const contextTokens = estimateContextTokensFromSession(session);
    // Inline threshold check — bypasses upstream settings.enabled flag since
    // piclaw disables upstream auto-compaction and owns the compaction schedule.
    const reserveTokens = settings.reserveTokens ?? 16384;
    if (contextTokens <= contextWindow - reserveTokens) return;

    options.onInfo?.("Auto-compacting session before prompt", {
      operation: "maybe_auto_compact_session_before_prompt",
      chatJid,
      contextTokens,
      contextWindow,
      reserveTokens: settings.reserveTokens ?? null,
    });

    // Upstream 0.67.6 removed compaction_start/end events from the manual
    // compact() path. Emit them locally so the web UI still shows the
    // "Compacting context" status pill during what can be a 30-60s operation.
    onEvent?.({ type: "compaction_start", reason: "threshold" } as AgentSessionEvent);
    const compactionResult = await runCompactionWithTimeout(
      session,
      chatJid,
      options,
      async () => await session.compact(),
    );
    if (!compactionResult.ok) {
      const aborted = /compaction cancelled|aborterror/i.test(compactionResult.errorMessage);
      onEvent?.({
        type: "compaction_end",
        reason: "threshold",
        result: undefined,
        aborted,
        willRetry: false,
        errorMessage: aborted ? undefined : `Pre-prompt compaction failed: ${compactionResult.errorMessage}`,
      } as AgentSessionEvent);
      throw new Error(compactionResult.errorMessage);
    }
    onEvent?.({
      type: "compaction_end",
      reason: "threshold",
      result: undefined,
      aborted: false,
      willRetry: false,
    } as AgentSessionEvent);
  } catch (error) {
    options.onWarn?.("Pre-prompt auto-compaction skipped", {
      operation: "maybe_auto_compact_session_before_prompt",
      chatJid,
      error,
    });
  }
}
