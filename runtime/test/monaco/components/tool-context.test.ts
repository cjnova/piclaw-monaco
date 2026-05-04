// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const panelUrl = new URL("../../../web/frontend/src/components/AgentStatusPanel.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Tool card context regression (#276)", () => {
  test("1) ToolCall has hints array", () => {
    const src = read(panelUrl);
    expect(src).toContain("hints: StatusHint[]");
  });

  test("2) Captures status_hints from SSE", () => {
    expect(read(panelUrl)).toContain("detail.status_hints");
  });

  test("3) Renders hint icons from SSE", () => {
    expect(read(panelUrl)).toContain("agent-status-panel__tool-hint-icon");
  });

  test("4) Sanitizes icon_svg before rendering", () => {
    expect(read(panelUrl)).toContain("sanitizeSvg");
  });

  test("5) Renders hint labels", () => {
    expect(read(panelUrl)).toContain("agent-status-panel__tool-hint");
  });

  test("6) CSS has hint icon styles", () => {
    const css = read(cssUrl);
    expect(css).toContain(".agent-status-panel__tool-hint-icon");
  });

  test("7) No hardcoded colors in tool styles", () => {
    const css = read(cssUrl);
    // Tool context section should use CSS vars not hex
    expect(css).not.toMatch(/\.agent-status-panel__tool-context[^}]*#[0-9a-f]{6}/i);
  });
});
