// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const panelUrl = new URL("../../../web/frontend/src/components/AgentStatusPanel.tsx", import.meta.url);
const chatPanelUrl = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);
const timelineStreamUrl = new URL("../../../web/frontend/src/components/message-list/useTimelineStream.ts", import.meta.url);
const messageListUrl = new URL("../../../web/frontend/src/components/MessageList.tsx", import.meta.url);
const shellCssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("AgentStatusPanel regression (#230)", () => {
  test("1) AgentStatusPanel.tsx exists and exports AgentStatusPanel", () => {
    expect(existsSync(panelUrl)).toBe(true);
    expect(read(panelUrl)).toContain("export function AgentStatusPanel");
  });

  test("2) Uses requestAnimationFrame for throttling", () => {
    const src = read(panelUrl);
    expect(src).toContain("requestAnimationFrame");
  });

  test("3) Listens for piclaw:agent-draft events", () => {
    expect(read(panelUrl)).toContain("piclaw:agent-draft");
  });

  test("4) Listens for piclaw:agent-thought events", () => {
    expect(read(panelUrl)).toContain("piclaw:agent-thought");
  });

  test("5) Listens for piclaw:agent-turn-end events", () => {
    expect(read(panelUrl)).toContain("piclaw:agent-turn-end");
  });

  test("6) Has expand/collapse toggle", () => {
    const src = read(panelUrl);
    expect(src).toContain("expanded");
    expect(src).toContain("onToggle");
  });

  test("7) Uses char-based truncation", () => {
    const src = read(panelUrl);
    expect(src).toContain("truncate");
    expect(src).toContain("COLLAPSED_MAX_CHARS");
    expect(src).toContain("more");
    expect(src).toContain("show less");
  });

  test("8) ChatPanel renders AgentStatusPanel between messages and compose", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("AgentStatusPanel");
    expect(src).toContain("<AgentStatusPanel");
  });

  test("9) useTimelineStream dispatches piclaw:agent-draft", () => {
    expect(read(timelineStreamUrl)).toContain("piclaw:agent-draft");
  });

  test("10) useTimelineStream dispatches piclaw:agent-thought", () => {
    expect(read(timelineStreamUrl)).toContain("piclaw:agent-thought");
  });

  test("11) useTimelineStream dispatches piclaw:agent-turn-end", () => {
    expect(read(timelineStreamUrl)).toContain("piclaw:agent-turn-end");
  });

  test("12) useTimelineStream handles agent_thought_delta SSE", () => {
    expect(read(timelineStreamUrl)).toContain("agent_thought_delta");
  });

  test("13) useTimelineStream handles agent_thought SSE", () => {
    expect(read(timelineStreamUrl)).toContain('addEventListener("agent_thought"');
  });

  test("14) shell.css has agent-status-panel styles", () => {
    const css = read(shellCssUrl);
    expect(css).toContain(".agent-status-panel");
    expect(css).toContain(".agent-status-panel__section");
  });

  test("15) shell.css has thought title style (purple)", () => {
    const css = read(shellCssUrl);
    expect(css).toContain("agent-status-panel__title--thought");
    expect(css).toContain("#cba6f7");
  });

  test("16) MessageList no longer renders draft bubble", () => {
    const src = read(messageListUrl);
    expect(src).not.toContain("message-list__draft");
  });

  test("17) MessageList still has draft useState for SSE compat", () => {
    expect(read(messageListUrl)).toContain("setDraft");
  });

  test("18) AgentStatusPanel uses ref-based DOM update", () => {
    const src = read(panelUrl);
    expect(src).toContain("contentRef");
    expect(src).toContain("appendChild");
  });
});
