import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const source = readFileSync(join(import.meta.dir, "../../web/src/components/markdown-preview.ts"), "utf8");

test("editor markdown preview uses content-change events instead of polling", () => {
  expect(source).toContain("subscribeContentChange");
  expect(source).toContain("RENDER_DEBOUNCE_MS");
  expect(source).not.toContain("setInterval");
});
