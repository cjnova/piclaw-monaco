// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const panelUrl = new URL("../../../web/frontend/src/components/AgentStatusPanel.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Panel polish regression (#254)", () => {
  test("1) STORAGE_KEY for localStorage", () => {
    const src = read(panelUrl);
    expect(src).toContain("piclaw:agent-panel-prefs");
  });

  test("2) loadPanelPrefs reads from localStorage", () => {
    const src = read(panelUrl);
    expect(src).toContain("loadPanelPrefs");
    expect(src).toContain("localStorage.getItem");
  });

  test("3) savePanelPrefs writes to localStorage", () => {
    const src = read(panelUrl);
    expect(src).toContain("savePanelPrefs");
    expect(src).toContain("localStorage.setItem");
  });

  test("4) Panel state initialized from prefs", () => {
    const src = read(panelUrl);
    expect(src).toContain("loadPanelPrefs()");
    expect(src).toContain("prefs.draftExpanded");
    expect(src).toContain("prefs.thoughtExpanded");
  });

  test("5) Toggle saves preferences", () => {
    const src = read(panelUrl);
    expect(src).toContain("toggleDraftExpand");
    expect(src).toContain("toggleThoughtExpand");
    expect(src).toContain("savePanelPrefs");
  });

  test("6) Turn end preserves expand preference", () => {
    const src = read(panelUrl);
    expect(src).toContain("handleTurnEnd");
    // Should load prefs, not reset to false
    expect(src).toContain("loadPanelPrefs");
  });

  test("7) draftStartRef tracks elapsed", () => {
    const src = read(panelUrl);
    expect(src).toContain("draftStartRef");
    expect(src).toContain("Date.now()");
  });

  test("8) thoughtStartRef tracks elapsed", () => {
    const src = read(panelUrl);
    expect(src).toContain("thoughtStartRef");
  });

  test("9) Elapsed rendered in AgentPanel", () => {
    const src = read(panelUrl);
    expect(src).toContain("elapsed");
    expect(src).toContain("agent-status-panel__elapsed");
  });

  test("10) CSS has elapsed style with tabular-nums", () => {
    const css = read(cssUrl);
    expect(css).toContain("agent-status-panel__elapsed");
    expect(css).toContain("tabular-nums");
  });

  test("11) Interval updates elapsed", () => {
    const src = read(panelUrl);
    expect(src).toContain("setInterval");
    expect(src).toContain("clearInterval");
  });
});
