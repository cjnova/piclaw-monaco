/**
 * test/web/markdown-live-preview-gating.test.ts — Pure tests for markdown
 * live-preview cursor gating rules.
 */

import { expect, test } from "bun:test";
import {
  isAlwaysDecoratedNode,
  usesBlockCursorGate,
} from "../../extensions/viewers/editor/markdown/cursor-gating.ts";
import { shouldDecorateBlockquote } from "../../extensions/viewers/editor/markdown/blockquote-utils.ts";
import { getSelectionLineSignature } from "../../extensions/viewers/editor/markdown/live-preview.ts";

test("blockquote nodes are not suppressed by generic block cursor gating", () => {
  expect(usesBlockCursorGate("Blockquote")).toBe(false);
  expect(usesBlockCursorGate("Table")).toBe(true);
});

test("list items remain always decorated", () => {
  expect(isAlwaysDecoratedNode("ListItem")).toBe(true);
});

test("inline code remains decorated so monospaced spans render on the active line", () => {
  expect(isAlwaysDecoratedNode("InlineCode")).toBe(true);
});

test("regular blockquotes stay decorated while editing inside them", () => {
  expect(shouldDecorateBlockquote("> quoted bullet list", true)).toBe(true);
});

test("callouts still back off while editing inside them", () => {
  expect(shouldDecorateBlockquote("> [!warning] Heads up", true)).toBe(false);
  expect(shouldDecorateBlockquote("> [!warning] Heads up", false)).toBe(true);
});

test("live preview selection signature is stable while cursor moves within one line", () => {
  const lineStarts = [0, 11, 22];
  const doc = {
    length: 32,
    lineAt(pos: number) {
      const start = [...lineStarts].reverse().find((value) => pos >= value) ?? 0;
      return { from: start };
    },
  };

  const lineOneA = { state: { doc, selection: { ranges: [{ anchor: 2, head: 4 }] } } };
  const lineOneB = { state: { doc, selection: { ranges: [{ anchor: 5, head: 8 }] } } };
  const lineTwo = { state: { doc, selection: { ranges: [{ anchor: 12, head: 12 }] } } };

  expect(getSelectionLineSignature(lineOneA as any)).toBe(getSelectionLineSignature(lineOneB as any));
  expect(getSelectionLineSignature(lineTwo as any)).not.toBe(getSelectionLineSignature(lineOneA as any));
});
