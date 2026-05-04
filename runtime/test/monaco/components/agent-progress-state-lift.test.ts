// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const useAgentProgressUrl = new URL(
  "../../../web/frontend/src/hooks/useAgentProgress.ts",
  import.meta.url,
);
const messageListUrl = new URL(
  "../../../web/frontend/src/components/MessageList.tsx",
  import.meta.url,
);
const chatPanelUrl = new URL(
  "../../../web/frontend/src/panels/ChatPanel.tsx",
  import.meta.url,
);
const useTimelineStreamUrl = new URL(
  "../../../web/frontend/src/components/message-list/useTimelineStream.ts",
  import.meta.url,
);
const thoughtsPanelComponentUrl = new URL(
  "../../../web/frontend/src/components/message-list/ThoughtsPanel.tsx",
  import.meta.url,
);

function read(url: URL): string {
  return readFileSync(url, "utf8");
}

describe("#230 Phase 1 state lift regression checks", () => {
  test("1) useAgentProgress.ts exists and exports useAgentProgress", () => {
    expect(existsSync(useAgentProgressUrl)).toBe(true);
    const src = read(useAgentProgressUrl);
    expect(src).toMatch(/export\s+function\s+useAgentProgress\s*\(/);
  });

  test("2) useAgentProgress.ts has thought, status, statusText, clearTurn (NOT draft)", () => {
    const src = read(useAgentProgressUrl);
    expect(src).toContain("thought");
    expect(src).toContain("status");
    expect(src).toContain("statusText");
    expect(src).toContain("clearTurn");
    // Draft stays local to MessageList
    expect(src).not.toContain("setDraft");
  });

  test("3) MessageList.tsx owns draft state locally (useState)", () => {
    const src = read(messageListUrl);
    expect(src).toMatch(/const\s*\[\s*draft\s*,\s*setDraft\s*\]\s*=\s*useState/);
  });

  test("4) MessageList.tsx accepts MessageListProps with setThought", () => {
    const src = read(messageListUrl);
    expect(src).toContain("MessageListProps");
    expect(src).toContain("setThought");
  });

  test("5) MessageList.tsx passes setThought to useTimelineStream", () => {
    const src = read(messageListUrl);
    expect(src).toContain("setThought");
    expect(src).toContain("useTimelineStream");
  });

  test("6) ChatPanel.tsx imports useAgentProgress", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("useAgentProgress");
  });

  test("7) ChatPanel.tsx does NOT pass draft to MessageList", () => {
    const src = read(chatPanelUrl);
    expect(src).not.toContain("draft={draft}");
  });

  test("8) ChatPanel.tsx passes clearTurn to MessageList", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("clearTurn={clearTurn}");
  });

  test("9) useTimelineStream.ts has agent_thought_delta handler", () => {
    const src = read(useTimelineStreamUrl);
    expect(src).toContain("agent_thought_delta");
  });

  test("10) useTimelineStream.ts has agent_thought handler", () => {
    const src = read(useTimelineStreamUrl);
    expect(src).toContain('addEventListener("agent_thought"');
  });

  test("11) useTimelineStream.ts interface includes setThought and clearTurn", () => {
    const src = read(useTimelineStreamUrl);
    expect(src).toContain("setThought");
    expect(src).toContain("clearTurn");
  });

  test("12) useTimelineStream.ts calls clearTurn in agent_response handler", () => {
    const src = read(useTimelineStreamUrl);
    expect(src).toContain("clearTurn()");
  });

  test("13) ThoughtsPanel.tsx does NOT exist (removed from closed PR)", () => {
    expect(existsSync(thoughtsPanelComponentUrl)).toBe(false);
  });

  test("14) Draft state is local to MessageList (not lifted)", () => {
    const src = read(messageListUrl);
    expect(src).toMatch(/useState.*""/);
    expect(src).toContain("setDraft");
  });
});
