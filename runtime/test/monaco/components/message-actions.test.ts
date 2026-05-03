// Tests written by gpt-5.3-codex
import { describe, expect, it } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const MESSAGE_LIST_DIR = resolve(import.meta.dir, "../../../web/frontend/src/components/message-list");
const SHELL_CSS_PATH = resolve(import.meta.dir, "../../../web/static/css/shell.css");

function readSource(path: string): string {
  return readFileSync(path, "utf8");
}

describe("message collapse + delete regression (#209)", () => {
  it("MessageActionBar.tsx exists and exports MessageActionBar", () => {
    const path = resolve(MESSAGE_LIST_DIR, "MessageActionBar.tsx");
    expect(existsSync(path)).toBe(true);
    expect(readSource(path)).toContain("export function MessageActionBar");
  });

  it("useCollapsedMessages.ts exists and exports hook", () => {
    const path = resolve(MESSAGE_LIST_DIR, "useCollapsedMessages.ts");
    expect(existsSync(path)).toBe(true);
    expect(readSource(path)).toContain("export function useCollapsedMessages");
  });

  it("MessageItem.tsx handles isCollapsed and onDelete props", () => {
    const src = readSource(resolve(MESSAGE_LIST_DIR, "MessageItem.tsx"));
    expect(src).toContain("isCollapsed");
    expect(src).toContain("onDelete");
  });

  it("useCollapsedMessages.ts has localStorage persistence with 500 limit", () => {
    const src = readSource(resolve(MESSAGE_LIST_DIR, "useCollapsedMessages.ts"));
    expect(src).toContain("localStorage");
    expect(src).toContain("500");
  });

  it("shell.css contains action bar and collapsed styles", () => {
    const css = readSource(SHELL_CSS_PATH);
    expect(css).toContain(".message-action-bar");
    expect(css).toContain(".message-list__item--collapsed");
  });

  it("MessageActionBar.tsx has confirm dialog and codicon icons", () => {
    const src = readSource(resolve(MESSAGE_LIST_DIR, "MessageActionBar.tsx"));
    expect(src).toContain("confirm(");
    expect(src).toContain("codicon-trash");
  });
});
