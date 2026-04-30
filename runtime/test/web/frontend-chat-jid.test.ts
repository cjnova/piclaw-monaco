/**
 * test/web/frontend-chat-jid.test.ts – Tests for api/chat-jid.ts utility functions.
 *
 * Covers getChatJid() and getMessageUrl().
 */

import { afterEach, describe, expect, test } from "bun:test";

import { getChatJid, getMessageUrl } from "../../web/frontend/src/api/chat-jid.ts";

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

describe("getChatJid", () => {
  test("returns 'web:default' when window is undefined", () => {
    (globalThis as any).window = undefined;
    expect(getChatJid()).toBe("web:default");
  });

  test("returns 'web:default' when chat_jid param is absent", () => {
    (globalThis as any).window = { location: { search: "" } };
    expect(getChatJid()).toBe("web:default");
  });

  test("returns chat_jid value from URL search params", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=my-chat" } };
    expect(getChatJid()).toBe("my-chat");
  });

  test("decodes URL-encoded chat_jid", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=web%3Adefault" } };
    expect(getChatJid()).toBe("web:default");
  });

  test("returns 'web:default' when chat_jid param is empty string", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=" } };
    expect(getChatJid()).toBe("web:default");
  });
});

describe("getMessageUrl", () => {
  test("returns correct URL with default chat JID when window is undefined", () => {
    (globalThis as any).window = undefined;
    expect(getMessageUrl()).toBe("/agent/web%3Adefault/message");
  });

  test("encodes colon in chat JID", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=web:default" } };
    expect(getMessageUrl()).toBe("/agent/web%3Adefault/message");
  });

  test("encodes custom chat JID with special chars", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=agent:1" } };
    expect(getMessageUrl()).toBe("/agent/agent%3A1/message");
  });

  test("returns URL for arbitrary chat JID without special chars", () => {
    (globalThis as any).window = { location: { search: "?chat_jid=my-workspace" } };
    expect(getMessageUrl()).toBe("/agent/my-workspace/message");
  });
});
