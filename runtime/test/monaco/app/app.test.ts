// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";
import { readFileSync } from "node:fs";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost", search: "" }, addEventListener: () => {}, removeEventListener: () => {}, matchMedia: () => ({ matches: true, addEventListener: () => {} }), open: () => {} };
  }
  if (typeof globalThis.document === "undefined") {
    (globalThis as any).document = { createElement: () => ({ style: {} }), body: { style: {} }, addEventListener: () => {}, removeEventListener: () => {} };
  }
  if (typeof globalThis.localStorage === "undefined") {
    const store: Record<string, string> = {};
    (globalThis as any).localStorage = { getItem: (k: string) => store[k] ?? null, setItem: (k: string, v: string) => { store[k] = v; }, removeItem: (k: string) => { delete store[k]; } };
  }
});

test("module smoke: hooks and subcomponents export expected symbols", async () => {
  const [commandsMod, layoutMod, resizeMod, statusMod, connectionMod, terminalMod, extensionMod] = await Promise.all([
    import("../../../web/frontend/src/app/useCommands"),
    import("../../../web/frontend/src/app/useLayoutPersistence"),
    import("../../../web/frontend/src/app/useResizeHandlers"),
    import("../../../web/frontend/src/app/useStatusFlash"),
    import("../../../web/frontend/src/app/useConnectionStatus"),
    import("../../../web/frontend/src/app/TerminalPanel"),
    import("../../../web/frontend/src/app/ExtensionFrame"),
  ]);
  expect(typeof commandsMod.useCommands).toBe("function");
  expect(typeof layoutMod.useLayoutPersistence).toBe("function");
  expect(typeof resizeMod.useResizeHandlers).toBe("function");
  expect(typeof statusMod.useStatusFlash).toBe("function");
  expect(typeof connectionMod.useConnectionStatus).toBe("function");
  expect(typeof terminalMod.TerminalPanel).toBe("function");
  expect(typeof extensionMod.ExtensionFrame).toBe("function");
});

test("App.tsx: exports App and stays under 200 lines", async () => {
  const appMod = await import("../../../web/frontend/src/App");
  expect(typeof appMod.App).toBe("function");
  const source = readFileSync(new URL("../../../web/frontend/src/App.tsx", import.meta.url), "utf8");
  expect(source.split(/\r?\n/).length).toBeLessThan(200);
});
