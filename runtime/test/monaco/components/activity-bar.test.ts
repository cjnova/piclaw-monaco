// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const srcDir = resolve(import.meta.dir, "../../../web/frontend/src/components");
const activityBarPath = resolve(srcDir, "ActivityBar.tsx");
const src = () => readFileSync(activityBarPath, "utf8");

describe("ActivityBar component (#229)", () => {
  test("ActivityBar.tsx exists", () => {
    expect(existsSync(activityBarPath)).toBe(true);
  });

  test("exports ActivityBar function", () => {
    expect(src()).toContain("export function ActivityBar");
  });

  test("has at least 5 activity bar panels defined", () => {
    // Count { id: entries in PANELS array
    const matches = src().match(/\{ id:/g) ?? [];
    expect(matches.length).toBeGreaterThanOrEqual(5);
  });

  test("includes explorer/workspace panel", () => {
    expect(src()).toContain('"explorer"');
  });

  test("includes search panel", () => {
    expect(src()).toContain('"search"');
  });

  test("includes extensions/addons panel", () => {
    expect(src()).toContain('"extensions"');
  });

  test("includes settings panel", () => {
    expect(src()).toContain('"settings"');
  });

  test("includes agent/dashboard panel", () => {
    expect(src()).toContain('"agent"');
  });

  test("uses Icon component for icons", () => {
    expect(src()).toContain("Icon");
    expect(src()).toContain('import { Icon }');
  });

  test("has is-active CSS class for active state", () => {
    expect(src()).toContain("is-active");
  });

  test("calls onPanelChange onClick", () => {
    expect(src()).toContain("onPanelChange");
    expect(src()).toContain("onClick");
  });

  test("has activity-bar nav element", () => {
    expect(src()).toContain("activity-bar");
  });

  test("has aria-pressed for active state accessibility", () => {
    expect(src()).toContain("aria-pressed");
  });

  test("has activePanel prop in interface", () => {
    expect(src()).toContain("activePanel");
  });

  test("settings panel has alignBottom marker", () => {
    expect(src()).toContain("alignBottom");
  });
});
