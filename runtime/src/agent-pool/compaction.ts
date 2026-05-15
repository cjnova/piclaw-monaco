/**
 * agent-pool/compaction.ts – Shared compaction helpers for orchestrated and manual compaction paths.
 */

import { type AgentSession, type AgentSessionEvent } from "@earendil-works/pi-coding-agent";

import { getCompactionRuntimeConfig } from "../core/config.js";
import {
  clearChatCompactionActive,
  clearChatCompactionBackoff,
  getChatCompactionBackoff,
  markChatCompactionActive,
  setChatCompactionBackoff,
  type ChatCompactionBackoffState,
} from "../db.js";
import { formatTimeoutDuration } from "./prompt-utils.js";
import { updateSessionCompacting } from "../extensions/session-status.js";
import { applyTokenEstimateSafetyMultiplier, getContextThresholdTokens, getContextWindowFromModel, getEffectiveContextWindow, getSystemPromptOverheadTokens, getUnknownModelContextWindow } from "../utils/context-window-budget.js";

export interface CompactionLifecycleOptions {
  onInfo?: (message: string, details: Record<string, unknown>) => void;
  onWarn?: (message: string, details: Record<string, unknown>) => void;
}

const DEFAULT_IDLE_AUTO_COMPACTION_DELAY_MS = 5_000;
const idleAutoCompactionTimers = new Map<string, ReturnType<typeof setTimeout>>();

type CompactionOutcome<T> = { ok: true; result: T } | { ok: false; errorMessage: string };
type ActiveCompaction = { outcome: Promise<CompactionOutcome<unknown>> };

const activeCompactions = new Map<string, ActiveCompaction>();

type AutoCompactionReason = "threshold" | "idle";

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

/** Short-lived per-session-manager cache for estimateContextTokensFromSession to avoid
 *  rebuilding the full session context on every call. */
type ContextEstimateCacheEntry = {
  leafId: string;
  entryCount: number;
  tokens: number;
  at: number;
};
const ctxEstimateCache = new WeakMap<object, ContextEstimateCacheEntry>();
const CTX_ESTIMATE_CACHE_TTL_MS = 2_000;

export function clearContextEstimateCache(session: AgentSession): void {
  const mgr = session.sessionManager;
  if (mgr && typeof mgr === "object") ctxEstimateCache.delete(mgr as object);
}

export function estimateContextTokensFromSession(session: AgentSession): number {
  const mgr = session.sessionManager;
  if (!mgr || typeof mgr !== "object") {
    const usage = session.getContextUsage?.();
    return typeof usage?.tokens === "number" && Number.isFinite(usage.tokens) ? usage.tokens : 0;
  }
  const leafId = typeof mgr.getLeafId === "function" ? (mgr.getLeafId() ?? "") : "";
  const entryCount = typeof mgr.getEntries === "function" ? mgr.getEntries().length : -1;
  const now = Date.now();
  const cached = ctxEstimateCache.get(mgr as object);

  if (
    cached &&
    cached.leafId === leafId &&
    cached.entryCount === entryCount &&
    now - cached.at < CTX_ESTIMATE_CACHE_TTL_MS
  ) {
    return cached.tokens;
  }

  if (typeof mgr.buildSessionContext !== "function") {
    const usage = session.getContextUsage?.();
    return typeof usage?.tokens === "number" && Number.isFinite(usage.tokens) ? usage.tokens : 0;
  }

  const context = mgr.buildSessionContext();
  const hasCompactionSummary = context.messages.some((message: any) => message?.role === "compactionSummary");

  // Assistant usage metadata is scoped to the prompt that produced that
  // assistant message. After a compaction, kept assistant messages can still
  // carry pre-compaction usage totals, so trusting getContextUsage()/last usage
  // makes the freshly compacted context look huge and triggers repeated idle
  // compactions. Once a compacted summary is present, estimate the resolved
  // compacted context directly from the messages instead.
  if (!hasCompactionSummary) {
    const usage = session.getContextUsage?.();
    if (typeof usage?.tokens === "number") {
      ctxEstimateCache.set(mgr as object, { leafId, entryCount, tokens: usage.tokens, at: now });
      return usage.tokens;
    }
  }

  const tokens = context.messages.reduce((total: number, message: any) => total + estimateMessageTokens(message), 0);
  ctxEstimateCache.set(mgr as object, { leafId, entryCount, tokens, at: now });
  return tokens;
}

/** Fallback context window when the model does not report one.
 *  Conservative enough to trigger compaction before most models overflow. */
// ── Per-session compaction counter for auto-rotation ──
const compactionSuccessCounters = new Map<string, number>();

export function getCompactionSuccessCount(chatJid: string): number {
  return compactionSuccessCounters.get(chatJid) ?? 0;
}

export function resetCompactionSuccessCount(chatJid: string): void {
  compactionSuccessCounters.delete(chatJid);
}

export const DEFAULT_FALLBACK_CONTEXT_WINDOW = getUnknownModelContextWindow();

export function getModelContextWindow(session: AgentSession): number | null {
  return getContextWindowFromModel(session.model);
}

function parseNonNegativeInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function getIdleAutoCompactionDelayMs(): number {
  return parseNonNegativeInt(process.env.PICLAW_IDLE_AUTO_COMPACTION_DELAY_MS, DEFAULT_IDLE_AUTO_COMPACTION_DELAY_MS);
}

function getCompactionBackoffBaseMs(): number {
  return getCompactionRuntimeConfig().backoffBaseMs;
}

function getCompactionBackoffMaxMs(): number {
  return getCompactionRuntimeConfig().backoffMaxMs;
}

function computeCompactionBackoffMs(failureCount: number): number {
  const normalizedFailures = Math.max(1, Math.trunc(failureCount));
  const baseMs = getCompactionBackoffBaseMs();
  const maxMs = getCompactionBackoffMaxMs();
  return Math.min(maxMs, baseMs * 2 ** Math.max(0, normalizedFailures - 1));
}

export function isCompactionCancellationError(message: string | null | undefined): boolean {
  return /compaction cancelled|aborterror/i.test(String(message || ""));
}

function isRecentCompactionFailure(state: ChatCompactionBackoffState, nowMs = Date.now()): boolean {
  const failedAtMs = Date.parse(state.lastFailedAt);
  if (!Number.isFinite(failedAtMs)) return false;
  return failedAtMs <= nowMs && (nowMs - failedAtMs) <= 24 * 60 * 60 * 1000;
}

function formatCompactionBackoffDetail(state: Pick<ChatCompactionBackoffState, "failureCount" | "backoffUntil" | "lastErrorMessage">): string {
  const parts = [
    `Skipping auto-compaction until ${state.backoffUntil}`,
    `${state.failureCount} recent failure${state.failureCount === 1 ? "" : "s"}`,
  ];
  if (state.lastErrorMessage) {
    parts.push(`Last error: ${state.lastErrorMessage.slice(0, 160)}`);
  }
  return parts.join(" — ");
}

export function getActiveCompactionBackoff(chatJid: string, nowMs = Date.now()): ChatCompactionBackoffState | null {
  const state = getChatCompactionBackoff(chatJid);
  if (!state) return null;
  const untilMs = Date.parse(state.backoffUntil);
  if (!Number.isFinite(untilMs) || untilMs <= nowMs) return null;
  return state;
}

export function clearCompactionFailureBackoff(chatJid: string): void {
  clearChatCompactionBackoff(chatJid);
}

export function noteCompactionFailure(chatJid: string, errorMessage: string, failedAtIso = new Date().toISOString()): ChatCompactionBackoffState {
  const previous = getChatCompactionBackoff(chatJid);
  const failureCount = (previous?.failureCount ?? 0) + 1;
  const failedAtMs = Date.parse(failedAtIso);
  const backoffMs = computeCompactionBackoffMs(failureCount);
  const backoffUntil = new Date((Number.isFinite(failedAtMs) ? failedAtMs : Date.now()) + backoffMs).toISOString();
  const nextState: ChatCompactionBackoffState = {
    chatJid,
    failureCount,
    lastFailedAt: failedAtIso,
    backoffUntil,
    lastErrorMessage: errorMessage || null,
  };
  setChatCompactionBackoff(chatJid, nextState);
  return nextState;
}

export function getCompactionTimeoutMs(): number {
  return getCompactionRuntimeConfig().timeoutMs;
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
  reason = "manual",
): Promise<CompactionOutcome<T>> {
  const existing = activeCompactions.get(chatJid);
  if (existing) {
    options.onWarn?.("Compaction already in progress; joining existing compaction", {
      operation: "run_agent.join_active_compaction",
      chatJid,
    });
    return await existing.outcome as CompactionOutcome<T>;
  }

  const active: ActiveCompaction = { outcome: Promise.resolve({ ok: false, errorMessage: "Compaction did not start" }) };
  const clearActive = () => {
    if (activeCompactions.get(chatJid) === active) activeCompactions.delete(chatJid);
  };
  const outcome = runCompactionWithTimeoutExclusive(session, chatJid, options, runCompact, clearActive, reason);
  active.outcome = outcome as Promise<CompactionOutcome<unknown>>;
  activeCompactions.set(chatJid, active);
  return await outcome;
}

async function runCompactionWithTimeoutExclusive<T>(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onWarn">,
  runCompact: () => Promise<T>,
  clearActive: () => void,
  reason: string,
): Promise<CompactionOutcome<T>> {
  const timeoutMs = getCompactionTimeoutMs();
  updateSessionCompacting(chatJid, true);
  markChatCompactionActive(chatJid, new Date().toISOString(), reason);
  if (timeoutMs <= 0) {
    try {
      return { ok: true, result: await runCompact() };
    } catch (error) {
      return { ok: false, errorMessage: error instanceof Error ? error.message : String(error) };
    } finally {
      clearContextEstimateCache(session);
      updateSessionCompacting(chatJid, false);
      clearChatCompactionActive(chatJid);
      clearActive();
    }
  }

  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  const compactionOutcome = Promise.resolve()
    .then(() => runCompact())
    .then((result): CompactionOutcome<T> => ({ ok: true, result }))
    .catch((error): CompactionOutcome<T> => ({
      ok: false,
      errorMessage: error instanceof Error ? error.message : String(error),
    }))
    .finally(() => {
      if (timeoutId) clearTimeout(timeoutId);
      clearContextEstimateCache(session);
      updateSessionCompacting(chatJid, false);
      clearChatCompactionActive(chatJid);
      clearActive();
    });

  const timedOut = Symbol("compaction-timeout");
  const timeoutOutcome = new Promise<typeof timedOut>((resolve) => {
    timeoutId = setTimeout(() => resolve(timedOut), timeoutMs);
  });

  const outcome = await Promise.race([compactionOutcome, timeoutOutcome]);
  if (outcome !== timedOut) {
    return outcome;
  }

  await abortCompactionBestEffort(session, chatJid, options);

  // Wait for the compaction promise to fully settle so extension handlers
  // finish their cleanup (finally blocks, UI teardown) before the caller
  // can dispose the session.  Without this, emergency rotation can call
  // session.dispose() while the extension's ctx is still in use.
  const SETTLEMENT_GRACE_MS = 5_000;
  await Promise.race([
    compactionOutcome,
    new Promise<void>((r) => setTimeout(r, SETTLEMENT_GRACE_MS)),
  ]);

  updateSessionCompacting(chatJid, false);
  clearChatCompactionActive(chatJid);
  // Release the in-memory single-flight lock after timeout+settlement grace
  // even if the upstream compaction promise never resolves. A late settlement
  // will run the promise's finally and call clearActive() again harmlessly.
  clearActive();
  return {
    ok: false,
    errorMessage: `Compaction timed out after ${formatTimeoutDuration(timeoutMs)}`,
  };
}

function getAutoCompactionContext(session: AgentSession, chatJid: string, options: Pick<CompactionLifecycleOptions, "onInfo" | "onWarn">, reason: AutoCompactionReason): {
  contextTokens: number;
  contextWindow: number;
  reserveTokens: number;
} | null {
  if (session.isStreaming || session.isCompacting || session.isRetrying) return null;
  const reportedContextWindow = getModelContextWindow(session);
  const contextWindow = reportedContextWindow ?? getUnknownModelContextWindow();
  if (!reportedContextWindow) {
    options.onWarn?.(
      reason === "idle"
        ? "Model does not report contextWindow; using fallback for idle compaction"
        : "Model does not report contextWindow; using fallback for pre-prompt compaction",
      {
        operation: reason === "idle"
          ? "schedule_idle_auto_compaction.fallback_context_window"
          : "maybe_auto_compact_session_before_prompt.fallback_context_window",
        chatJid,
        fallbackContextWindow: DEFAULT_FALLBACK_CONTEXT_WINDOW,
        modelId: (session.model as any)?.id ?? null,
        provider: (session.model as any)?.provider ?? null,
      },
    );
  }

  const settingsManager = (session as AgentSession & {
    settingsManager?: { getCompactionSettings?: () => { enabled?: boolean; reserveTokens?: number } };
  }).settingsManager;
  const settings = typeof settingsManager?.getCompactionSettings === "function"
    ? settingsManager.getCompactionSettings()
    : null;
  if (!settings) return null;

  const rawContextTokens = estimateContextTokensFromSession(session);
  const contextTokens = applyTokenEstimateSafetyMultiplier(rawContextTokens);
  const compactionConfig = getCompactionRuntimeConfig();
  const overheadTokens = getSystemPromptOverheadTokens();
  const effectiveContextWindow = getEffectiveContextWindow(contextWindow, overheadTokens);
  const thresholdTokens = getContextThresholdTokens(contextWindow, compactionConfig.thresholdPercent, overheadTokens);
  const reserveTokens = contextWindow - thresholdTokens;
  if (contextTokens <= thresholdTokens) return null;

  options.onInfo?.(
    reason === "idle"
      ? "Idle auto-compaction threshold exceeded"
      : "Pre-prompt auto-compaction threshold exceeded",
    {
      operation: reason === "idle"
        ? "schedule_idle_auto_compaction.threshold"
        : "maybe_auto_compact_session_before_prompt.threshold",
      chatJid,
      contextTokens,
      rawContextTokens,
      contextWindow,
      effectiveContextWindow,
      overheadTokens,
      thresholdTokens,
      thresholdPercent: compactionConfig.thresholdPercent,
      reserveTokens,
    },
  );

  return { contextTokens, contextWindow, reserveTokens };
}

async function maybeAutoCompactSession(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onInfo" | "onWarn">,
  onEvent: ((event: AgentSessionEvent) => void) | undefined,
  reason: AutoCompactionReason,
): Promise<void> {
  const context = getAutoCompactionContext(session, chatJid, options, reason);
  if (!context) return;

  try {
    const activeBackoff = getActiveCompactionBackoff(chatJid);
    const previousBackoff = getChatCompactionBackoff(chatJid);
    const previousNonCancellationFailure = previousBackoff
      && !isCompactionCancellationError(previousBackoff.lastErrorMessage)
      && isRecentCompactionFailure(previousBackoff)
      ? previousBackoff
      : null;
    if (activeBackoff && isCompactionCancellationError(activeBackoff.lastErrorMessage)) {
      clearCompactionFailureBackoff(chatJid);
      options.onWarn?.(
        reason === "idle"
          ? "Idle auto-compaction clearing cancellation backoff"
          : "Pre-prompt auto-compaction clearing cancellation backoff",
        {
          operation: reason === "idle"
            ? "schedule_idle_auto_compaction.backoff_cleared"
            : "maybe_auto_compact_session_before_prompt.backoff_cleared",
          chatJid,
          contextTokens: context.contextTokens,
          contextWindow: context.contextWindow,
          reserveTokens: context.reserveTokens,
          failureCount: activeBackoff.failureCount,
          backoffUntil: activeBackoff.backoffUntil,
          lastErrorMessage: activeBackoff.lastErrorMessage,
        },
      );
    } else if (activeBackoff || previousNonCancellationFailure) {
      const suppressionState = activeBackoff ?? previousNonCancellationFailure!;
      const detail = activeBackoff
        ? formatCompactionBackoffDetail(suppressionState)
        : `Previous auto-compaction failed at ${suppressionState.lastFailedAt}; emergency rotation should run before retrying. Last error: ${(suppressionState.lastErrorMessage ?? "unknown").slice(0, 160)}`;
      options.onWarn?.(
        reason === "idle"
          ? "Idle auto-compaction suppressed for chat after recent failures"
          : "Pre-prompt auto-compaction suppressed for chat after recent failures",
        {
          operation: reason === "idle"
            ? "schedule_idle_auto_compaction.backoff"
            : "maybe_auto_compact_session_before_prompt.backoff",
          chatJid,
          contextTokens: context.contextTokens,
          contextWindow: context.contextWindow,
          reserveTokens: context.reserveTokens,
          failureCount: suppressionState.failureCount,
          backoffUntil: suppressionState.backoffUntil,
          lastErrorMessage: suppressionState.lastErrorMessage,
        },
      );
      onEvent?.({
        type: "compaction_suppressed",
        reason: activeBackoff ? "backoff" : "previous_failure",
        until: suppressionState.backoffUntil,
        failureCount: suppressionState.failureCount,
        detail,
        errorMessage: suppressionState.lastErrorMessage ?? undefined,
      } as unknown as AgentSessionEvent);
      return;
    }

    options.onInfo?.(
      reason === "idle"
        ? "Auto-compacting idle session after turn"
        : "Auto-compacting session before prompt",
      {
        operation: reason === "idle"
          ? "schedule_idle_auto_compaction"
          : "maybe_auto_compact_session_before_prompt",
        chatJid,
        contextTokens: context.contextTokens,
        contextWindow: context.contextWindow,
        reserveTokens: context.reserveTokens,
      },
    );

    onEvent?.({ type: "compaction_start", reason } as AgentSessionEvent);
    const compactionResult = await runCompactionWithTimeout(
      session,
      chatJid,
      options,
      async () => await session.compact(),
      reason,
    );
    if (!compactionResult.ok) {
      const aborted = isCompactionCancellationError(compactionResult.errorMessage);
      const failureState = aborted ? null : noteCompactionFailure(chatJid, compactionResult.errorMessage);
      onEvent?.({
        type: "compaction_end",
        reason,
        result: undefined,
        aborted,
        willRetry: false,
        errorMessage: aborted
          ? undefined
          : `${reason === "idle" ? "Idle compaction failed" : "Pre-prompt compaction failed"}: ${compactionResult.errorMessage}`,
      } as AgentSessionEvent);
      if (failureState) {
        options.onWarn?.(
          reason === "idle"
            ? "Idle auto-compaction entered backoff for this chat"
            : "Pre-prompt auto-compaction entered backoff for this chat",
          {
            operation: reason === "idle"
              ? "schedule_idle_auto_compaction.backoff_recorded"
              : "maybe_auto_compact_session_before_prompt.backoff_recorded",
            chatJid,
            failureCount: failureState.failureCount,
            backoffUntil: failureState.backoffUntil,
            lastErrorMessage: failureState.lastErrorMessage,
            aborted,
          },
        );
      } else {
        options.onWarn?.(
          reason === "idle"
            ? "Idle auto-compaction cancelled without entering backoff"
            : "Pre-prompt auto-compaction cancelled without entering backoff",
          {
            operation: reason === "idle"
              ? "schedule_idle_auto_compaction.cancelled"
              : "maybe_auto_compact_session_before_prompt.cancelled",
            chatJid,
            lastErrorMessage: compactionResult.errorMessage,
            aborted,
          },
        );
      }
      throw new Error(compactionResult.errorMessage);
    }
    clearCompactionFailureBackoff(chatJid);
    // Increment per-session compaction success counter
    const prevCount = compactionSuccessCounters.get(chatJid) ?? 0;
    compactionSuccessCounters.set(chatJid, prevCount + 1);
    options.onInfo?.("Compaction success count incremented", {
      operation: reason === "idle" ? "schedule_idle_auto_compaction.counter" : "maybe_auto_compact_session_before_prompt.counter",
      chatJid,
      compactionCount: prevCount + 1,
    });
    onEvent?.({
      type: "compaction_end",
      reason,
      result: undefined,
      aborted: false,
      willRetry: false,
    } as AgentSessionEvent);
  } catch (error) {
    options.onWarn?.(
      reason === "idle" ? "Idle auto-compaction skipped" : "Pre-prompt auto-compaction skipped",
      {
        operation: reason === "idle"
          ? "schedule_idle_auto_compaction"
          : "maybe_auto_compact_session_before_prompt",
        chatJid,
        error,
      },
    );
  }
}

export function cancelScheduledIdleAutoCompaction(chatJid: string): void {
  const pending = idleAutoCompactionTimers.get(chatJid);
  if (!pending) return;
  clearTimeout(pending);
  idleAutoCompactionTimers.delete(chatJid);
}

export function scheduleIdleAutoCompaction(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onInfo" | "onWarn">,
  onEvent?: (event: AgentSessionEvent) => void,
): void {
  cancelScheduledIdleAutoCompaction(chatJid);
  if (!getAutoCompactionContext(session, chatJid, options, "idle")) return;

  const delayMs = getIdleAutoCompactionDelayMs();
  const timer = setTimeout(() => {
    idleAutoCompactionTimers.delete(chatJid);
    void maybeAutoCompactSession(session, chatJid, options, onEvent, "idle");
  }, delayMs);
  idleAutoCompactionTimers.set(chatJid, timer);
}

export async function maybeAutoCompactSessionBeforePrompt(
  session: AgentSession,
  chatJid: string,
  options: Pick<CompactionLifecycleOptions, "onInfo" | "onWarn">,
  onEvent?: (event: AgentSessionEvent) => void,
): Promise<void> {
  cancelScheduledIdleAutoCompaction(chatJid);
  await maybeAutoCompactSession(session, chatJid, options, onEvent, "threshold");
}
