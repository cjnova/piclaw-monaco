/**
 * web/agent-message-store.ts – Tracks in-flight agent responses and attachments.
 *
 * Maintains a buffer of the current agent response text, media attachments,
 * and a pending-post queue. When the agent finishes, the buffered content
 * is flushed to the database via agent-message-service.ts.
 *
 * Consumers: channels/web.ts and web/agent-events.ts write to this store.
 */

import type { WebChannelLike } from "../core/web-channel-contracts.js";
import type { AttachmentInfo } from "../../../agent-pool/attachments.js";
import type { AgentEventEmitter } from "../sse/agent-events.js";
import { formatOutbound, type ChatChannel } from "../../../router.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { sendStoredAgentReplyWebPushNotification } from "../push/web-push-service.js";

const log = createLogger("web.agent-message-store");
const SVG_SOURCE_HINT = /(?:<svg[\s>]|&lt;svg[\s>]|&amp;lt;svg[\s>])/i;

function buildAttachmentBlocks(attachments: AttachmentInfo[]): {
  mediaIds: number[];
  contentBlocks: Array<Record<string, unknown>>;
} {
  const mediaIds = attachments.map((a) => a.id);
  const contentBlocks = attachments.map((a) => ({
    type: a.kind === "image" ? "image" : "file",
    name: a.name,
    filename: a.name,
    mime_type: a.contentType,
    size: a.size,
  }));
  return { mediaIds, contentBlocks };
}

function dispatchStoredReplyWebPush(
  interaction: ReturnType<WebChannelLike["storeMessage"]>,
  dispatchWebPushNotification?: (interaction: ReturnType<WebChannelLike["storeMessage"]>) => Promise<unknown>,
): void {
  if (!interaction) return;
  void (dispatchWebPushNotification || sendStoredAgentReplyWebPushNotification)(interaction).catch((error) => {
    debugSuppressedError(log, "Failed to dispatch Web Push for stored agent reply.", error, {
      chatJid: interaction.chat_jid,
      rowId: interaction.id,
    });
  });
}

function maybeWarnOnEscapedSvgSource(
  params: {
    chatJid: string;
    text: string;
    attachments: AttachmentInfo[];
    channelName: ChatChannel;
    extraContentBlocks?: Array<Record<string, unknown>>;
  },
  mergedContentBlocks: Array<Record<string, unknown>>,
): void {
  if (params.channelName !== "web") return;
  if (!SVG_SOURCE_HINT.test(params.text || "")) return;

  const hasRenderableVisualBlock = mergedContentBlocks.some((block) => {
    const type = typeof block?.type === "string" ? block.type : "";
    if (type === "generated_widget" || type === "image") return true;
    const mimeType = typeof block?.mime_type === "string" ? block.mime_type : "";
    return /image\/svg\+xml/i.test(mimeType);
  });
  const hasSvgAttachment = params.attachments.some((attachment) => /image\/svg\+xml/i.test(attachment.contentType || ""));
  if (hasRenderableVisualBlock || hasSvgAttachment) return;

  log.warn("Web agent reply contains SVG source markup; attach the SVG or use a widget/artifact instead of message text.", {
    operation: "web.agent_message_store.svg_source_guardrail",
    chatJid: params.chatJid,
    textPreview: params.text.slice(0, 160),
    attachmentCount: params.attachments.length,
    contentBlockTypes: mergedContentBlocks.map((block) => (typeof block?.type === "string" ? block.type : "unknown")),
  });
}

/** Persist the accumulated agent turn (text + attachments) to the database. */
export function storeAgentTurn(
  channel: WebChannelLike,
  emitter: AgentEventEmitter,
  params: {
    chatJid: string;
    text: string;
    attachments: AttachmentInfo[];
    channelName: ChatChannel;
    threadId?: number | null;
    /** When true, skip consuming queued follow-up placeholders.
     *  Used for intermediate (non-follow-up) turns so the original
     *  response doesn't steal a placeholder meant for the follow-up. */
    skipPlaceholder?: boolean;
    /** True only for the terminal persisted assistant message of a run. */
    isTerminalAgentReply?: boolean;
    extraContentBlocks?: Array<Record<string, unknown>>;
    dispatchWebPushNotification?: (interaction: ReturnType<WebChannelLike["storeMessage"]>) => Promise<unknown>;
  }
): boolean {
  const { mediaIds, contentBlocks } = buildAttachmentBlocks(params.attachments);
  const mergedContentBlocks = [
    ...contentBlocks,
    ...(Array.isArray(params.extraContentBlocks) ? params.extraContentBlocks.filter((block) => block && typeof block === "object") : []),
  ];
  maybeWarnOnEscapedSvgSource(params, mergedContentBlocks);
  const formatted = formatOutbound(params.text, params.channelName);
  const resolvedThreadId = params.threadId ?? undefined;

  if (!params.skipPlaceholder) {
    const placeholderId = channel.consumeQueuedFollowupPlaceholder(params.chatJid);
    if (placeholderId) {
      // Don't override the placeholder's thread_id — it was set correctly
      // when the /queue command created the placeholder (threaded under the
      // /queue message). Passing undefined preserves the original association.
      const updated = channel.replaceQueuedFollowupPlaceholder(
        params.chatJid,
        placeholderId,
        formatted,
        mediaIds,
        mergedContentBlocks.length > 0 ? mergedContentBlocks : undefined,
        undefined,
        params.isTerminalAgentReply
      );
      if (updated) {
        channel.broadcastEvent?.("agent_followup_consumed", {
          chat_jid: params.chatJid,
          thread_id: params.threadId ?? null,
          row_id: placeholderId,
        });
        if (params.isTerminalAgentReply) {
          dispatchStoredReplyWebPush(updated, params.dispatchWebPushNotification);
        }
        return true;
      }
    }
  }

  const interaction = channel.storeMessage(params.chatJid, formatted, true, mediaIds, {
    contentBlocks: mergedContentBlocks.length > 0 ? mergedContentBlocks : undefined,
    threadId: resolvedThreadId,
    isTerminalAgentReply: params.isTerminalAgentReply,
  });
  if (interaction) {
    emitter.response(interaction);
    if (params.isTerminalAgentReply) {
      dispatchStoredReplyWebPush(interaction, params.dispatchWebPushNotification);
    }
    return true;
  }
  return false;
}
