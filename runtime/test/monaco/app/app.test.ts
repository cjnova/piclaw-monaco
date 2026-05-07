// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const appDir = resolve(import.meta.dir, "../../../web/frontend/src/app");

test("all extracted app module files exist", () => {
  for (const f of ["useCommands.ts", "useLayoutPersistence.ts", "useResizeHandlers.ts", "useStatusFlash.ts", "useConnectionStatus.ts", "TerminalPanel.tsx", "ExtensionFrame.tsx"]) {
    expect(existsSync(resolve(appDir, f))).toBe(true);
  }
});

test("App.tsx stays under 250 lines", () => {
  const source = readFileSync(resolve(appDir, "../App.tsx"), "utf8");
  expect(source.split(/\r?\n/).length).toBeLessThan(250);
});
