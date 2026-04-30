/**
 * chat-jid.ts — Shared chat JID resolution from URL params.
 */

/** Get the active chat_jid from URL params, defaulting to "web:default". */
export function getChatJid(): string {
  if (typeof window === "undefined") return "web:default";
  const params = new URLSearchParams(window.location.search);
  return params.get("chat_jid") || "web:default";
}

/** Build the message POST URL for the current chat. */
export function getMessageUrl(): string {
  return `/agent/${encodeURIComponent(getChatJid())}/message`;
}

/**
 * Build a chat-scoped URL for the given path, safely encoding all query
 * parameters (including `chat_jid`) via URLSearchParams.
 *
 * @param path   - The base path (e.g. "/timeline", "/sse/stream").
 * @param params - Additional query parameters to include.
 */
export function buildChatUrl(path: string, params: Record<string, string> = {}): string {
  const qs = new URLSearchParams({ chat_jid: getChatJid(), ...params });
  return `${path}?${qs.toString()}`;
}
