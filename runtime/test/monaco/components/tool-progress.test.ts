// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const panelUrl = new URL("../../../web/frontend/src/components/AgentStatusPanel.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Tool call progress regression (#253)", () => {
  test("1) ToolCall interface with id, name, title, status", () => {
    const src = read(panelUrl);
    expect(src).toContain("interface ToolCall");
    expect(src).toContain("id: string");
    expect(src).toContain("status:");
    expect(src).toContain('"running"');
    expect(src).toContain('"done"');
  });

  test("2) Handles tool_call event (tool started)", () => {
    const src = read(panelUrl);
    expect(src).toContain("tool_call");
    expect(src).toContain('status: "running"');
  });

  test("3) Handles tool_status event (tool complete)", () => {
    const src = read(panelUrl);
    expect(src).toContain("tool_status");
    expect(src).toContain('"done"');
  });

  test("4) Renders tool cards", () => {
    const src = read(panelUrl);
    expect(src).toContain("agent-status-panel__tool");
  });

  test("5) Shows spinner for running tools", () => {
    const src = read(panelUrl);
    expect(src).toContain("agent-status-panel__spinner");
  });

  test("6) Shows checkmark for done tools", () => {
    const src = read(panelUrl);
    expect(src).toContain("agent-status-panel__tool-check");
    expect(src).toContain("✓");
  });

  test("7) Clears tools on turn end", () => {
    const src = read(panelUrl);
    expect(src).toContain("setTools([])");
  });

  test("8) Includes tools in hasContent", () => {
    const src = read(panelUrl);
    expect(src).toContain("tools.length > 0");
  });

  test("9) CSS has tool styles", () => {
    const css = read(cssUrl);
    expect(css).toContain(".agent-status-panel__tool");
    expect(css).toContain(".agent-status-panel__tool--done");
  });

  test("10) Done tools have opacity fade", () => {
    const css = read(cssUrl);
    expect(css).toContain("agent-status-panel__tool--done");
    expect(css).toContain("opacity");
  });

  test("11) Monospace font for tool cards", () => {
    const css = read(cssUrl);
    expect(css).toContain("monospace");
  });
});
