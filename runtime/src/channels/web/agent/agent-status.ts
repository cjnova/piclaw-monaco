/**
 * channels/web/agent-status.ts – Agent status/context/models endpoint helpers.
 */

import type { WebAgentBufferEntry } from "./agent-buffers.js";
import { getAddonApiHealthSnapshot } from "../../../addons/addon-api-health.js";
import { appendServerTiming, measureAsync, measureSync } from "../http/server-timing.js";

/** Context contract used by web agent status/context/model endpoint handlers. */
export interface AgentStatusContext {
  defaultChatJid: string;
  json(payload: unknown, status?: number): Response;
  getAgentStatus(chatJid: string): Record<string, unknown> | null;
  getExtensionWorkingState(chatJid: string): Record<string, unknown> | null;
  recoverStaleInflightRun(chatJid: string, options?: { hasActiveStatus?: boolean; minAgeMs?: number }): boolean;
  getBuffer(turnId: string, panel: "thought" | "draft"): WebAgentBufferEntry | undefined;
  getContextUsageForChat(
    chatJid: string
  ): Promise<{ tokens: number | null; contextWindow: number; percent: number | null } | null>;
  getAvailableModels(chatJid: string): Promise<unknown>;
  getProviderReadyCompletedForInstance(): boolean;
}

function resolveChatJid(req: Request, defaultChatJid: string): string {
  const url = new URL(req.url);
  return (url.searchParams.get("chat_jid") || defaultChatJid).trim() || defaultChatJid;
}

function readTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isAuthFailureText(value: string): boolean {
  return /no api key(?: found| for provider)?|token refresh failed\s*:\s*401|authentication failed|credentials may have expired|re-authenticate|unauthorized|\b401\b|\b403\b|invalid.*api.*key|api.*key.*invalid|token.*expired|oauth.*expired|refresh.*token|provider login required|auth.*expired|missing provider credential|missing provider config/i.test(value);
}

function deriveAgentState(status: Record<string, unknown>): string {
  const explicit = readTrimmedString(status.state);
  if (explicit) return explicit;

  const classifier = readTrimmedString(
    status.classifier
      ?? status.recovery_classifier
      ?? status.recoveryClassifier
      ?? status.failure_classifier,
  );

  if (classifier === "recovery_suppressed") return "recovery_suppressed";
  if (classifier === "auth_config" || classifier === "provider_auth") return "blocked_auth";

  const title = readTrimmedString(status.title);
  const detail = readTrimmedString(status.detail);
  const errorText = `${title} ${detail}`.trim();
  if (errorText && isAuthFailureText(errorText)) return "blocked_auth";

  return "active";
}

/** Return active/idle agent status plus streamed thought/draft buffers when available. */
export function handleAgentStatusRequest(req: Request, ctx: AgentStatusContext): Response {
  const { result, durationMs } = measureSync(() => {
    const chatJid = resolveChatJid(req, ctx.defaultChatJid);
    const status = ctx.getAgentStatus(chatJid);
    if (!status) {
      ctx.recoverStaleInflightRun(chatJid, { hasActiveStatus: false });
      return ctx.json({ status: "idle", state: "idle", chat_jid: chatJid, data: null, extension_working: ctx.getExtensionWorkingState(chatJid), addon_api: getAddonApiHealthSnapshot() });
    }

    const turnId = (status.turn_id || status.turnId) as string | undefined;
    let thought: { text: string; totalLines: number } | undefined;
    let draft: { text: string; totalLines: number } | undefined;
    if (turnId) {
      const tb = ctx.getBuffer(turnId, "thought");
      if (tb) thought = { text: tb.text, totalLines: tb.totalLines };
      const db = ctx.getBuffer(turnId, "draft");
      if (db) draft = { text: db.text, totalLines: db.totalLines };
    }

    const state = deriveAgentState(status);
    const classifier = readTrimmedString(
      status.classifier
      ?? status.recovery_classifier
      ?? status.recoveryClassifier
      ?? status.failure_classifier,
    ) || null;

    return ctx.json({
      status: "active",
      state,
      chat_jid: chatJid,
      provider: readTrimmedString(status.provider) || null,
      model: readTrimmedString(status.model) || null,
      classifier,
      last_error: readTrimmedString(status.detail) || readTrimmedString(status.title) || null,
      recovery_strategy: readTrimmedString(status.recovery_strategy ?? status.recoveryStrategy ?? status.strategy) || null,
      recovery_suppressed_reason: readTrimmedString(status.recovery_suppressed_reason ?? status.recoverySuppressedReason) || null,
      data: status,
      thought,
      draft,
      extension_working: ctx.getExtensionWorkingState(chatJid),
      addon_api: getAddonApiHealthSnapshot(),
    });
  });
  return appendServerTiming(result, {
    name: "agent_status",
    durationMs,
  });
}

/** Return context window usage metrics for the requested/default chat. */
export async function handleAgentContextRequest(req: Request, ctx: AgentStatusContext): Promise<Response> {
  const { result, durationMs } = await measureAsync(async () => {
    const chatJid = resolveChatJid(req, ctx.defaultChatJid);
    const usage = await ctx.getContextUsageForChat(chatJid);
    if (!usage) {
      return ctx.json({ tokens: null, contextWindow: null, percent: null });
    }

    return ctx.json({
      tokens: usage.tokens,
      contextWindow: usage.contextWindow,
      percent: usage.percent,
    });
  });
  return appendServerTiming(result, {
    name: "agent_context",
    durationMs,
  });
}

/** Return available model options for the requested/default chat. */
export async function handleAgentModelsRequest(req: Request, ctx: AgentStatusContext): Promise<Response> {
  const { result, durationMs } = await measureAsync(async () => {
    const chatJid = resolveChatJid(req, ctx.defaultChatJid);
    const payload = await ctx.getAvailableModels(chatJid);
    if (payload && typeof payload === "object") {
      return ctx.json({
        ...payload as Record<string, unknown>,
        oobe: {
          ...((payload as { oobe?: Record<string, unknown> }).oobe ?? {}),
          provider_ready_completed_instance: ctx.getProviderReadyCompletedForInstance(),
        },
      }, 200);
    }
    return ctx.json(payload, 200);
  });
  return appendServerTiming(result, {
    name: "agent_models",
    durationMs,
  });
}
