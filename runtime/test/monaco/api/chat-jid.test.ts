import { afterEach, expect, test } from "bun:test";

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test("getChatJid returns web:default when no URL params", async () => {
  // In test env, window is undefined, should return default
  const { getChatJid } = await import("../../../web/frontend/src/api/chat-jid.ts");
  (globalThis as any).window = undefined;
  expect(getChatJid()).toBe("web:default");
});

test("getMessageUrl builds correct path", async () => {
  const { getMessageUrl } = await import("../../../web/frontend/src/api/chat-jid.ts");
  (globalThis as any).window = undefined;
  expect(getMessageUrl()).toBe("/agent/web%3Adefault/message");
});

test("buildChatUrl includes chat_jid param", async () => {
  const { buildChatUrl } = await import("../../../web/frontend/src/api/chat-jid.ts");
  (globalThis as any).window = undefined;
  const url = buildChatUrl("/timeline", { limit: "50" });
  expect(url).toContain("chat_jid=web%3Adefault");
  expect(url).toContain("limit=50");
  expect(url).toStartWith("/timeline?");
});
