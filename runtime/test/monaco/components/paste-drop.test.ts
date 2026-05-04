// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const chatPanelUrl = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Image paste + drag & drop regression (#267 + #268)", () => {
  test("1) handlePaste function exists", () => {
    expect(read(chatPanelUrl)).toContain("handlePaste");
  });

  test("2) Paste checks clipboardData.items", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("clipboardData");
    expect(src).toContain("getAsFile");
  });

  test("3) onPaste on textarea", () => {
    expect(read(chatPanelUrl)).toContain("onPaste=");
  });

  test("4) Drag handlers exist", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("handleDragEnter");
    expect(src).toContain("handleDragLeave");
    expect(src).toContain("handleDrop");
  });

  test("5) isDragOver state", () => {
    expect(read(chatPanelUrl)).toContain("isDragOver");
  });

  test("6) dragCounterRef for nested events", () => {
    expect(read(chatPanelUrl)).toContain("dragCounterRef");
  });

  test("7) Drop reads dataTransfer.files", () => {
    expect(read(chatPanelUrl)).toContain("dataTransfer");
  });

  test("8) Drop adds to attachments", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("setAttachments");
  });

  test("9) CSS dragover visual state", () => {
    expect(read(cssUrl)).toContain("chat__compose-container--dragover");
  });
});
