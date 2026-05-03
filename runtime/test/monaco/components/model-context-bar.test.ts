// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

import { FALLBACK_MODELS, FALLBACK_THINKING_LEVELS, fmtTokens } from "../../../web/frontend/src/components/model-context-bar/types";

const srcDir = resolve(import.meta.dir, "../../../web/frontend/src/components/model-context-bar");

test("types.ts: FALLBACK_MODELS + FALLBACK_THINKING_LEVELS", () => {
  expect(Array.isArray(FALLBACK_MODELS)).toBe(true);
  expect(FALLBACK_MODELS.length).toBeGreaterThan(0);
  for (const entry of FALLBACK_MODELS) {
    expect(typeof entry.id).toBe("string");
    expect(typeof entry.context_window).toBe("number");
  }
  expect(FALLBACK_THINKING_LEVELS).toEqual(["none", "low", "medium", "high", "max"]);
});

test("fmtTokens formatting", () => {
  expect(fmtTokens(1_000)).toBe("1k");
  expect(fmtTokens(1_000_000)).toBe("1.0M");
  expect(fmtTokens(500_000)).toBe("500k");
  expect(fmtTokens(0)).toBe("0k");
  expect(fmtTokens(1_500_000)).toBe("1.5M");
});

test("all extracted module files exist", () => {
  for (const f of ["types.ts", "useStatusPolling.ts", "useCompaction.ts", "useModelPicker.ts", "ModelPicker.tsx", "ThinkingPicker.tsx", "ContextRing.tsx"]) {
    expect(existsSync(resolve(srcDir, f))).toBe(true);
  }
});

test("ModelContextBar.tsx stays under 150 lines", () => {
  const source = readFileSync(resolve(srcDir, "../ModelContextBar.tsx"), "utf8");
  expect(source.split(/\r?\n/).length).toBeLessThan(150);
});
