// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const thoughtsPanelPath = new URL("../../../web/frontend/src/components/message-list/ThoughtsPanel.tsx", import.meta.url);
const timelineStreamPath = new URL("../../../web/frontend/src/components/message-list/useTimelineStream.ts", import.meta.url);
const shellCssPath = new URL("../../../web/static/css/shell.css", import.meta.url);

describe("Thoughts panel regression (#252)", () => {
  test("ThoughtsPanel.tsx exists and exports ThoughtsPanel", () => {
    expect(existsSync(thoughtsPanelPath)).toBe(true);
    expect(readFileSync(thoughtsPanelPath, "utf8")).toContain("export function ThoughtsPanel");
  });

  test("ThoughtsPanel.tsx uses renderThinkingMarkdown", () => {
    expect(readFileSync(thoughtsPanelPath, "utf8")).toContain("renderThinkingMarkdown");
  });

  test("ThoughtsPanel.tsx contains lightbulb icon", () => {
    expect(readFileSync(thoughtsPanelPath, "utf8")).toContain("codicon-lightbulb");
  });

  test("ThoughtsPanel.tsx returns null when empty", () => {
    expect(readFileSync(thoughtsPanelPath, "utf8")).toContain("if (!thought) return null");
  });

  test("useTimelineStream handles agent_thought_delta", () => {
    expect(readFileSync(timelineStreamPath, "utf8")).toContain("agent_thought_delta");
  });

  test("useTimelineStream handles agent_thought", () => {
    const src = readFileSync(timelineStreamPath, "utf8");
    expect(src).toContain('addEventListener("agent_thought"');
  });

  test("useTimelineStream clears thought on agent_response", () => {
    const src = readFileSync(timelineStreamPath, "utf8");
    expect(src).toContain('setThought("")');
  });

  test("shell.css has thoughts-panel styles", () => {
    const css = readFileSync(shellCssPath, "utf8");
    expect(css).toContain(".thoughts-panel");
    expect(css).toContain("--accent-purple");
  });
});
