// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost" }, addEventListener: () => {}, removeEventListener: () => {} };
  }
  if (typeof globalThis.document === "undefined") {
    (globalThis as any).document = { createElement: () => ({ style: {} }), fonts: { ready: Promise.resolve() } };
  }
});

import { readFileSync } from "node:fs";

import { relativeTime, getBlockKey, normalizePost, mergeInteractions } from "../../../web/frontend/src/components/message-list/helpers";
import type { ContentBlock, Interaction } from "../../../web/frontend/src/components/message-list/types";

test("types.ts: ContentBlock and Interaction are importable (type-only)", () => {
  type ContentBlockHasType = ContentBlock extends { type: string } ? true : false;
  type InteractionHasCoreFields = Interaction extends { id: number; type: "user" | "agent"; content: string; created_at: string } ? true : false;
  const a: ContentBlockHasType = true;
  const b: InteractionHasCoreFields = true;
  expect(a).toBe(true);
  expect(b).toBe(true);
});

test("relativeTime: returns 'just now' for recent timestamps", () => {
  const realNow = Date.now;
  try {
    Date.now = () => new Date("2026-01-01T00:00:30.000Z").getTime();
    expect(relativeTime("2026-01-01T00:00:10.000Z")).toBe("just now");
  } finally { Date.now = realNow; }
});

test("relativeTime: returns Xm ago", () => {
  const realNow = Date.now;
  try {
    Date.now = () => new Date("2026-01-01T00:10:00.000Z").getTime();
    expect(relativeTime("2026-01-01T00:05:00.000Z")).toBe("5m ago");
  } finally { Date.now = realNow; }
});

test("relativeTime: returns Xh ago", () => {
  const realNow = Date.now;
  try {
    Date.now = () => new Date("2026-01-01T06:00:00.000Z").getTime();
    expect(relativeTime("2026-01-01T03:00:00.000Z")).toBe("3h ago");
  } finally { Date.now = realNow; }
});

test("relativeTime: returns Xd ago", () => {
  const realNow = Date.now;
  try {
    Date.now = () => new Date("2026-01-10T00:00:00.000Z").getTime();
    expect(relativeTime("2026-01-08T00:00:00.000Z")).toBe("2d ago");
  } finally { Date.now = realNow; }
});

test("getBlockKey: uses block.id when present", () => {
  const block: ContentBlock = { type: "tool_use", id: "abc-123" };
  expect(getBlockKey(block, 7)).toBe("abc-123");
});

test("getBlockKey: falls back to block-N when id missing", () => {
  const block: ContentBlock = { type: "text" };
  expect(getBlockKey(block, 7)).toBe("block-7");
});

test("normalizePost: normalizes base raw post fields", () => {
  const out = normalizePost({
    id: "42",
    type: "user",
    content: "hello",
    created_at: "2026-01-01T00:00:00.000Z",
  });
  expect(out.id).toBe(42);
  expect(out.type).toBe("user");
  expect(out.content).toBe("hello");
  expect(out.created_at).toBe("2026-01-01T00:00:00.000Z");
});

test("normalizePost: uses data fallback fields and maps user_message -> user", () => {
  const out = normalizePost({
    id: 5,
    data: { type: "user_message", content: "from data", content_blocks: [{ type: "text" }] },
    timestamp: "2026-01-01T12:34:56.000Z",
  });
  expect(out.type).toBe("user");
  expect(out.content).toBe("from data");
  expect(out.content_blocks).toEqual([{ type: "text" }]);
  expect(out.created_at).toBe("2026-01-01T12:34:56.000Z");
});

test("normalizePost: defaults to agent and empty values when fields missing", () => {
  const out = normalizePost({});
  expect(out.id).toBe(0);
  expect(out.type).toBe("agent");
  expect(out.content).toBe("");
});

test("mergeInteractions: deduplicates by id and keeps incoming version", () => {
  const existing: Interaction[] = [
    { id: 1, type: "user", content: "old-1", created_at: "t1" },
    { id: 2, type: "agent", content: "old-2", created_at: "t2" },
  ];
  const incoming: Interaction[] = [
    { id: 2, type: "agent", content: "new-2", created_at: "t3" },
    { id: 3, type: "agent", content: "new-3", created_at: "t4" },
  ];
  const merged = mergeInteractions(existing, incoming);
  expect(merged.length).toBe(3);
  expect(merged.find(m => m.id === 2)?.content).toBe("new-2");
  expect(merged.find(m => m.id === 3)?.content).toBe("new-3");
});

test("mergeInteractions: returns sorted by id", () => {
  const existing: Interaction[] = [{ id: 10, type: "agent", content: "a", created_at: "t1" }];
  const incoming: Interaction[] = [
    { id: 2, type: "user", content: "b", created_at: "t2" },
    { id: 7, type: "agent", content: "c", created_at: "t3" },
  ];
  const merged = mergeInteractions(existing, incoming);
  expect(merged.map(m => m.id)).toEqual([2, 7, 10]);
});

test("MessageList.tsx: stays under 200 lines", () => {
  const source = readFileSync(
    new URL("../../../web/frontend/src/components/MessageList.tsx", import.meta.url), "utf8"
  );
  expect(source.split(/\r?\n/).length).toBeLessThan(200);
});
