// Tests written by gpt-5.3-codex
import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";

const source = readFileSync(
  new URL("../../../web/frontend/src/components/model-context-bar/useStatusPolling.ts", import.meta.url),
  "utf8",
);

describe("useStatusPolling race-condition hardening", () => {
  it("contains AbortController for both fetch flows", () => {
    const count = (source.match(/\bAbortController\b/g) ?? []).length;
    expect(count).toBeGreaterThanOrEqual(2);
  });

  it("contains request version check pattern", () => {
    expect(source.includes("!== myVersion")).toBe(true);
  });

  it("contains dedup guards for status and context", () => {
    expect(source.includes("isFetchingStatus.current")).toBe(true);
    expect(source.includes("isFetchingContext.current")).toBe(true);
  });

  it("contains AbortError handling in catch", () => {
    expect(source.includes("AbortError")).toBe(true);
  });

  it("source stays under 250 lines", () => {
    expect(source.split(/\r?\n/).length).toBeLessThan(250);
  });
});
