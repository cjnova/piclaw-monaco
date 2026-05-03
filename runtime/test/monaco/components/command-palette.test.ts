// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";
import { readFileSync } from "node:fs";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost" }, addEventListener: () => {}, removeEventListener: () => {} };
  }
});

import type { MergedCommand } from "../../../web/frontend/src/components/command-palette/types";
import { CATEGORY_BADGE_CLASS } from "../../../web/frontend/src/components/command-palette/types";

test("types.ts: MergedCommand shape is importable (type-only)", () => {
  type HasMergedShape = MergedCommand extends {
    id: string;
    label: string;
    category: string;
    isBackend: boolean;
  } ? true : false;
  const ok: HasMergedShape = true;
  expect(ok).toBe(true);
});

test("types.ts: CATEGORY_BADGE_CLASS is a string record", () => {
  expect(typeof CATEGORY_BADGE_CLASS).toBe("object");
  const entries = Object.entries(CATEGORY_BADGE_CLASS);
  expect(entries.length).toBeGreaterThan(0);
  for (const [, value] of entries) {
    expect(typeof value).toBe("string");
    expect(value.length).toBeGreaterThan(0);
  }
});

test("utils.ts: sendCommand and fetchAutocompleteOptions are exported", async () => {
  const mod = await import("../../../web/frontend/src/components/command-palette/utils");
  expect(typeof mod.sendCommand).toBe("function");
  expect(typeof mod.fetchAutocompleteOptions).toBe("function");
});

test("module smoke: useCommandFetch, useKeyboardNav, CommandList exports", async () => {
  const fetchHook = await import("../../../web/frontend/src/components/command-palette/useCommandFetch");
  expect(typeof fetchHook.useCommandFetch).toBe("function");
  const navHook = await import("../../../web/frontend/src/components/command-palette/useKeyboardNav");
  expect(typeof navHook.useKeyboardNav).toBe("function");
  const list = await import("../../../web/frontend/src/components/command-palette/CommandList");
  expect(typeof list.CommandList).toBe("function");
});

test("CommandPalette.tsx: exports and stays under 150 lines", async () => {
  const mod = await import("../../../web/frontend/src/components/CommandPalette");
  expect(typeof mod.CommandPalette).toBe("function");
  const source = readFileSync(
    new URL("../../../web/frontend/src/components/CommandPalette.tsx", import.meta.url), "utf8"
  );
  expect(source.split(/\r?\n/).length).toBeLessThan(150);
});
