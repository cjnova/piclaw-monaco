/**
 * Extracted smart-compaction helper module.
 *
 * Keep this module focused; the public extension facade remains
 * ../smart-compaction.ts.
 */

import {
  BUDGET_SAFETY_MARGIN,
  MAX_COMPACTION_OUTPUT_TOKENS,
  MAX_KEEP_RECENT_FRACTION,
  MIN_COMPACTION_OUTPUT_TOKENS,
  PROGRESSIVE_FALLBACK_CONTEXT_WINDOW,
} from "./config.js";
import { applyTokenEstimateSafetyMultiplier, getEffectiveContextWindow, getSystemPromptOverheadTokens } from "../../utils/context-window-budget.js";
import { estimateCompactionPromptTokens, estimateTokensFromChars, getModelContextWindow } from "./context.js";


// ---------------------------------------------------------------------------
// Post-compaction verification and keepRecentTokens clamping
// ---------------------------------------------------------------------------

/**
 * Clamp keepRecentTokens to at most MAX_KEEP_RECENT_FRACTION of the effective
 * context window (after subtracting system prompt overhead). Prevents the kept
 * window from consuming so much context that summary + system prompt + tools
 * don't fit.
 */
export function clampKeepRecentTokens(keepRecentTokens: number, contextWindow: number): number {
  const effectiveWindow = getEffectiveContextWindow(contextWindow, getSystemPromptOverheadTokens());
  const maxKeep = Math.floor(effectiveWindow * MAX_KEEP_RECENT_FRACTION);
  return Math.max(0, Math.min(Math.floor(keepRecentTokens), maxKeep));
}

/**
 * Estimate whether the post-compaction context will fit in the model's window.
 * Returns the estimated total and whether it overflows.
 */
export function estimatePostCompactionFit(summary: string, keepRecentTokens: number, contextWindow: number): {
  estimatedTotal: number;
  fits: boolean;
  summaryTokens: number;
  overheadTokens: number;
  margin: number;
} {
  const summaryTokens = applyTokenEstimateSafetyMultiplier(estimateTokensFromChars(summary));
  const safeKeepRecentTokens = applyTokenEstimateSafetyMultiplier(keepRecentTokens);
  const overheadTokens = getSystemPromptOverheadTokens();
  const estimatedTotal = summaryTokens + safeKeepRecentTokens + overheadTokens;
  const margin = contextWindow - estimatedTotal;
  return {
    estimatedTotal,
    fits: margin > 0,
    summaryTokens,
    overheadTokens,
    margin,
  };
}

export function getCompactionReasoningReserveTokens(model: unknown): number {
  const anyModel = model as { reasoning?: unknown } | null | undefined;
  if (!anyModel?.reasoning) return 0;
  const contextWindow = getModelContextWindow(model) ?? PROGRESSIVE_FALLBACK_CONTEXT_WINDOW;
  if (contextWindow <= 64_000) return 512;
  if (contextWindow <= 128_000) return 1_024;
  if (contextWindow <= 256_000) return 2_048;
  return 4_096;
}

export function getSafeCompactionMaxTokens(model: unknown, promptText: string, requestedMaxTokens: number): {
  maxTokens: number;
  promptTokens: number;
  availableOutputTokens: number;
  contextWindow: number;
  reasoningReserveTokens: number;
} {
  const contextWindow = getModelContextWindow(model) ?? PROGRESSIVE_FALLBACK_CONTEXT_WINDOW;
  const promptTokens = estimateCompactionPromptTokens(promptText);
  const reasoningReserveTokens = getCompactionReasoningReserveTokens(model);
  const availableOutputTokens = Math.floor((contextWindow - promptTokens - reasoningReserveTokens) * BUDGET_SAFETY_MARGIN);
  if (availableOutputTokens < MIN_COMPACTION_OUTPUT_TOKENS) {
    throw new Error(
      `Compaction prompt exceeds safe model budget: prompt+overhead=${promptTokens}t, reasoningReserve=${reasoningReserveTokens}t, context=${contextWindow}t, availableOutput=${availableOutputTokens}t`,
    );
  }
  return {
    maxTokens: Math.max(
      MIN_COMPACTION_OUTPUT_TOKENS,
      Math.min(Math.floor(requestedMaxTokens), availableOutputTokens, MAX_COMPACTION_OUTPUT_TOKENS),
    ),
    promptTokens,
    availableOutputTokens,
    contextWindow,
    reasoningReserveTokens,
  };
}

export function getCompactionReasoningEffort(model: unknown): "minimal" | "low" | "medium" | "high" {
  const contextWindow = getModelContextWindow(model) ?? PROGRESSIVE_FALLBACK_CONTEXT_WINDOW;
  if (contextWindow <= 64_000) return "minimal";
  if (contextWindow <= 128_000) return "low";
  if (contextWindow <= 256_000) return "medium";
  return "high";
}

export interface ProgressiveCompactionBudget {
  contextWindow: number;
  promptBudgetChars: number;
  chunkBudgetChars: number;
  mergeBudgetChars: number;
  forceProgressive: boolean;
}
