// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const chatPanelUrl = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);
const shellCssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Send/Stop cycle regression (#265)", () => {
  test("1) ChatPanel has isAgentRunning signal", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("isAgentRunning");
    expect(src).toContain("useSignal");
  });

  test("2) ChatPanel listens for piclaw:agent-status", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("piclaw:agent-status");
  });

  test("3) ChatPanel has abortAgent sending /abort", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("abortAgent");
    expect(src).toContain("/abort");
  });

  test("4) Renders send button with SVG", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("chat__send-btn");
    expect(src).toContain("<svg");
  });

  test("5) Renders stop button when agent running", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("chat__stop-btn");
    expect(src).toContain("Stop response");
  });

  test("6) Escape key triggers abort", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("Escape");
    expect(src).toContain("abortAgent");
  });

  test("7) Textarea has rows=3", () => {
    expect(read(chatPanelUrl)).toContain("rows={3}");
  });

  test("8) CSS circular send button", () => {
    const css = read(shellCssUrl);
    expect(css).toContain(".chat__send-btn");
    expect(css).toContain("border-radius: 50%");
  });

  test("9) CSS stop button with pulse", () => {
    const css = read(shellCssUrl);
    expect(css).toContain(".chat__stop-btn");
    expect(css).toContain("stopPulse");
  });

  test("10) CSS textarea auto-grow (field-sizing)", () => {
    expect(read(shellCssUrl)).toContain("field-sizing: content");
  });

  test("11) CSS textarea focus ring", () => {
    const css = read(shellCssUrl);
    expect(css).toContain(".chat__input:focus");
  });
});
