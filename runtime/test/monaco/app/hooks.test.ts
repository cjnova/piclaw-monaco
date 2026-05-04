// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const appDir = resolve(import.meta.dir, "../../../web/frontend/src/app");

describe("App hooks source coverage (#229)", () => {
  // useCommands
  test("useCommands.ts exists", () => {
    expect(existsSync(resolve(appDir, "useCommands.ts"))).toBe(true);
  });

  test("useCommands exports useCommands function", () => {
    const src = readFileSync(resolve(appDir, "useCommands.ts"), "utf8");
    expect(src).toContain("export function useCommands");
  });

  test("useCommands registers ~18 commands", () => {
    const src = readFileSync(resolve(appDir, "useCommands.ts"), "utf8");
    const cmdCount = (src.match(/id: "nav\.|id: "terminal\.|id: "theme\.|id: "session\.|id: "general\./g) ?? []).length;
    expect(cmdCount).toBeGreaterThanOrEqual(15);
  });

  test("useCommands has Ctrl+` terminal toggle shortcut", () => {
    const src = readFileSync(resolve(appDir, "useCommands.ts"), "utf8");
    expect(src).toContain("Backquote");
    expect(src).toContain("terminalVisible");
  });

  test("useCommands has Ctrl+Shift+P command palette shortcut", () => {
    const src = readFileSync(resolve(appDir, "useCommands.ts"), "utf8");
    expect(src).toContain("paletteVisible");
    expect(src).toContain("Ctrl+Shift+P");
  });

  test("useCommands has Ctrl+B sidebar toggle", () => {
    const src = readFileSync(resolve(appDir, "useCommands.ts"), "utf8");
    expect(src).toContain("sidebarCollapsed");
    expect(src).toContain("Ctrl+B");
  });

  // useConnectionStatus
  test("useConnectionStatus.ts exists", () => {
    expect(existsSync(resolve(appDir, "useConnectionStatus.ts"))).toBe(true);
  });

  test("useConnectionStatus exports useConnectionStatus", () => {
    const src = readFileSync(resolve(appDir, "useConnectionStatus.ts"), "utf8");
    expect(src).toContain("export function useConnectionStatus");
  });

  test("useConnectionStatus listens for piclaw:sse-connected event", () => {
    const src = readFileSync(resolve(appDir, "useConnectionStatus.ts"), "utf8");
    expect(src).toContain("piclaw:sse-connected");
  });

  test("useConnectionStatus listens for piclaw:sse-disconnected event", () => {
    const src = readFileSync(resolve(appDir, "useConnectionStatus.ts"), "utf8");
    expect(src).toContain("piclaw:sse-disconnected");
  });

  test("useConnectionStatus probes /agent/models endpoint", () => {
    const src = readFileSync(resolve(appDir, "useConnectionStatus.ts"), "utf8");
    expect(src).toContain("/agent/models");
  });

  // useLayoutPersistence
  test("useLayoutPersistence.ts exists", () => {
    expect(existsSync(resolve(appDir, "useLayoutPersistence.ts"))).toBe(true);
  });

  test("useLayoutPersistence exports useLayoutPersistence", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("export function useLayoutPersistence");
  });

  test("useLayoutPersistence persists sidebar width", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("piclaw-sidebar-width");
  });

  test("useLayoutPersistence persists active panel", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("piclaw-active-panel");
  });

  test("useLayoutPersistence persists terminal visibility", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("piclaw-terminal-visible");
  });

  test("useLayoutPersistence persists terminal height", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("piclaw-terminal-height");
  });

  test("useLayoutPersistence persists sidebar collapsed state", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("piclaw-sidebar-collapsed");
  });

  test("useLayoutPersistence returns LayoutState with all signals", () => {
    const src = readFileSync(resolve(appDir, "useLayoutPersistence.ts"), "utf8");
    expect(src).toContain("activePanel");
    expect(src).toContain("sidebarCollapsed");
    expect(src).toContain("terminalMaximized");
  });

  // useResizeHandlers
  test("useResizeHandlers.ts exists", () => {
    expect(existsSync(resolve(appDir, "useResizeHandlers.ts"))).toBe(true);
  });

  test("useResizeHandlers exports useResizeHandlers", () => {
    const src = readFileSync(resolve(appDir, "useResizeHandlers.ts"), "utf8");
    expect(src).toContain("export function useResizeHandlers");
  });

  test("useResizeHandlers has terminal drag handler", () => {
    const src = readFileSync(resolve(appDir, "useResizeHandlers.ts"), "utf8");
    expect(src).toContain("onTermDragStart");
  });

  test("useResizeHandlers has sidebar mouse-down handler", () => {
    const src = readFileSync(resolve(appDir, "useResizeHandlers.ts"), "utf8");
    expect(src).toContain("onSidebarMouseDown");
  });

  test("useResizeHandlers has sidebar keyboard handler", () => {
    const src = readFileSync(resolve(appDir, "useResizeHandlers.ts"), "utf8");
    expect(src).toContain("onSidebarKeyDown");
    expect(src).toContain("ArrowLeft");
    expect(src).toContain("ArrowRight");
  });

  // useStatusFlash
  test("useStatusFlash.ts exists", () => {
    expect(existsSync(resolve(appDir, "useStatusFlash.ts"))).toBe(true);
  });

  test("useStatusFlash exports useStatusFlash", () => {
    const src = readFileSync(resolve(appDir, "useStatusFlash.ts"), "utf8");
    expect(src).toContain("export function useStatusFlash");
  });

  test("useStatusFlash listens for piclaw:status-flash event", () => {
    const src = readFileSync(resolve(appDir, "useStatusFlash.ts"), "utf8");
    expect(src).toContain("piclaw:status-flash");
  });

  test("useStatusFlash auto-clears after 1400ms", () => {
    const src = readFileSync(resolve(appDir, "useStatusFlash.ts"), "utf8");
    expect(src).toContain("1400");
  });

  test("useStatusFlash supports error/warning/success/info types", () => {
    const src = readFileSync(resolve(appDir, "useStatusFlash.ts"), "utf8");
    expect(src).toContain('"error"');
    expect(src).toContain('"warning"');
    expect(src).toContain('"success"');
    expect(src).toContain('"info"');
  });
});
