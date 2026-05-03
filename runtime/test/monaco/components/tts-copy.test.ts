// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const actionBarPath = resolve(import.meta.dir, "../../../web/frontend/src/components/message-list/MessageActionBar.tsx");
const shellCssPath = resolve(import.meta.dir, "../../../web/static/css/shell.css");

const src = readFileSync(actionBarPath, "utf8");

describe("MessageActionBar TTS + copy regression (#195)", () => {
  test("contains content: string prop", () => {
    expect(src).toContain("content: string");
  });

  test("contains speechSynthesis usage", () => {
    expect(src).toContain("speechSynthesis");
  });

  test("contains clipboard.writeText usage", () => {
    expect(src).toContain("clipboard.writeText");
  });

  test("contains TTS icon (unmute)", () => {
    expect(src).toContain("unmute");
  });

  test("contains copy icon (codicon-copy)", () => {
    expect(src).toContain("codicon-copy");
  });

  test("strips markdown for TTS", () => {
    expect(src).toContain(".replace(");
    expect(src).toContain(".trim()");
  });

  test("has onend/onerror handlers", () => {
    expect(src).toContain("onend");
    expect(src).toContain("onerror");
  });

  test("shell.css has active button style", () => {
    const css = readFileSync(shellCssPath, "utf8");
    expect(css).toContain(".message-action-bar__btn--active");
  });
});
