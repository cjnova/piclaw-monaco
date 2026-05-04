// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const chatPanelUrl = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Compose enhancements regression (#266 + #272)", () => {
  test("1) ChatPanel has Attachment interface", () => {
    expect(read(chatPanelUrl)).toContain("interface Attachment");
  });

  test("2) ChatPanel has attachments state", () => {
    expect(read(chatPanelUrl)).toContain("setAttachments");
  });

  test("3) Clip button with codicon-attach", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("chat__clip-btn");
    expect(src).toContain("codicon-attach");
  });

  test("4) Hidden file input", () => {
    expect(read(chatPanelUrl)).toContain('type="file"');
  });

  test("5) Attachment pills rendered", () => {
    expect(read(chatPanelUrl)).toContain("chat__attachment-pill");
  });

  test("6) removeAttachment function", () => {
    expect(read(chatPanelUrl)).toContain("removeAttachment");
  });

  test("7) Uploads to /media/upload", () => {
    expect(read(chatPanelUrl)).toContain("/media/upload");
  });

  test("8) Includes media_ids in message", () => {
    expect(read(chatPanelUrl)).toContain("media_ids");
  });

  test("11) CSS compose container", () => {
    expect(read(cssUrl)).toContain(".chat__compose-container");
  });

  test("12) CSS attachment pill", () => {
    expect(read(cssUrl)).toContain(".chat__attachment-pill");
  });

  test("14) CSS clip button", () => {
    expect(read(cssUrl)).toContain(".chat__clip-btn");
  });

  test("15) CSS input border: none inside container", () => {
    expect(read(cssUrl)).toContain("border: none");
  });
});
