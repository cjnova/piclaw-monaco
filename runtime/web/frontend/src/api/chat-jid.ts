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
