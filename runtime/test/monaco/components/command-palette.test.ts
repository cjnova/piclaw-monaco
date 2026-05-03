// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const srcDir = resolve(import.meta.dir, "../../../web/frontend/src/components/command-palette");

import { CATEGORY_BADGE_CLASS } from "../../../web/frontend/src/components/command-palette/types";

test("types.ts: CATEGORY_BADGE_CLASS is a string record", () => {
  expect(typeof CATEGORY_BADGE_CLASS).toBe("object");
  for (const [, value] of Object.entries(CATEGORY_BADGE_CLASS)) {
    expect(typeof value).toBe("string");
  }
});

test("all extracted module files exist", () => {
  for (const f of ["types.ts", "useCommandFetch.ts", "useKeyboardNav.ts", "CommandList.tsx", "utils.ts"]) {
    expect(existsSync(resolve(srcDir, f))).toBe(true);
  }
});

test("CommandPalette.tsx stays under 150 lines", () => {
  const source = readFileSync(resolve(srcDir, "../CommandPalette.tsx"), "utf8");
  expect(source.split(/\r?\n/).length).toBeLessThan(150);
});
