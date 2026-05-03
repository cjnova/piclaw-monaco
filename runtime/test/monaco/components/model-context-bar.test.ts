// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";
import { readFileSync } from "node:fs";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost" }, addEventListener: () => {}, removeEventListener: () => {}, matchMedia: () => ({ matches: true }) };
  }
});

import { FALLBACK_MODELS, FALLBACK_THINKING_LEVELS, fmtTokens } from "../../../web/frontend/src/components/model-context-bar/types";

test("types.ts: FALLBACK_MODELS entries include id + context_window, levels are expected", () => {
  expect(Array.isArray(FALLBACK_MODELS)).toBe(true);
  expect(FALLBACK_MODELS.length).toBeGreaterThan(0);
  for (const entry of FALLBACK_MODELS) {
    expect(typeof entry.id).toBe("string");
    expect(entry.id.length).toBeGreaterThan(0);
    expect(typeof entry.context_window).toBe("number");
  }
  expect(FALLBACK_THINKING_LEVELS).toEqual(["none", "low", "medium", "high", "max"]);
});

test("fmtTokens base formatting", () => {
  expect(fmtTokens(1_000)).toBe("1k");
  expect(fmtTokens(1_000_000)).toBe("1.0M");
  expect(fmtTokens(500_000)).toBe("500k");
  expect(fmtTokens(200_000)).toBe("200k");
});

test("fmtTokens edge cases", () => {
  expect(fmtTokens(0)).toBe("0k");
  expect(fmtTokens(999)).toBe("1k");
  expect(fmtTokens(999_999)).toBe("1000k");
  expect(fmtTokens(1_500_000)).toBe("1.5M");
});

test("module smoke: hooks and components export", async () => {
  const polling = await import("../../../web/frontend/src/components/model-context-bar/useStatusPolling");
  expect(typeof polling.useStatusPolling).toBe("function");
  const compaction = await import("../../../web/frontend/src/components/model-context-bar/useCompaction");
  expect(typeof compaction.useCompaction).toBe("function");
  const picker = await import("../../../web/frontend/src/components/model-context-bar/useModelPicker");
  expect(typeof picker.useModelPicker).toBe("function");
  const modelPicker = await import("../../../web/frontend/src/components/model-context-bar/ModelPicker");
  expect(typeof modelPicker.ModelPicker).toBe("function");
  const thinkingPicker = await import("../../../web/frontend/src/components/model-context-bar/ThinkingPicker");
  expect(typeof thinkingPicker.ThinkingPicker).toBe("function");
  const ring = await import("../../../web/frontend/src/components/model-context-bar/ContextRing");
  expect(typeof ring.ContextRing).toBe("function");
});

test("ModelContextBar.tsx: exports component and stays under 150 lines", async () => {
  const mod = await import("../../../web/frontend/src/components/ModelContextBar");
  expect(typeof mod.ModelContextBar).toBe("function");
  const source = readFileSync(
    new URL("../../../web/frontend/src/components/ModelContextBar.tsx", import.meta.url), "utf8"
  );
  expect(source.split(/\r?\n/).length).toBeLessThan(150);
});
