// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";
import { readFileSync } from "node:fs";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost" } };
  }
});

import {
  getErrorMessage,
  readJsonSafely,
  toUserFacingMessage,
  makeTreeNodeFromMutation,
} from "../../../web/frontend/src/panels/workspace/workspaceUtils";

test("workspaceUtils exports all expected runtime functions", async () => {
  const mod = await import("../../../web/frontend/src/panels/workspace/workspaceUtils");
  expect(typeof mod.getErrorMessage).toBe("function");
  expect(typeof mod.readJsonSafely).toBe("function");
  expect(typeof mod.toUserFacingMessage).toBe("function");
  expect(typeof mod.makeTreeNodeFromMutation).toBe("function");
});

test("workspaceUtils.getErrorMessage handles Error-like object, string, and unknown inputs", () => {
  expect(getErrorMessage({ message: "boom" }, "fallback")).toBe("boom");
  expect(getErrorMessage("plain string", "fallback")).toBe("fallback");
  expect(getErrorMessage({ foo: "bar" }, "fallback")).toBe("fallback");
});

test("workspaceUtils.getErrorMessage edge cases: null/undefined/number/nested Error", () => {
  expect(getErrorMessage(null, "fallback")).toBe("fallback");
  expect(getErrorMessage(undefined, "fallback")).toBe("fallback");
  expect(getErrorMessage(123, "fallback")).toBe("fallback");
  expect(getErrorMessage({ error: new Error("nested") }, "fallback")).toBe("fallback");
});

test("workspaceUtils.readJsonSafely parses valid JSON", async () => {
  const response = new Response(JSON.stringify({ ok: true, n: 1 }));
  const data = await readJsonSafely<{ ok: boolean; n: number }>(response);
  expect(data).toEqual({ ok: true, n: 1 });
});

test("workspaceUtils.readJsonSafely returns null for invalid JSON", async () => {
  const response = new Response("{ invalid json");
  const data = await readJsonSafely(response);
  expect(data).toBeNull();
});

test("workspaceUtils.toUserFacingMessage mapping: safe Error messages pass through", () => {
  expect(toUserFacingMessage(new Error("invalid path"), "fallback")).toBe("invalid path");
  expect(toUserFacingMessage(new Error("Unauthorized"), "fallback")).toBe("Unauthorized");
});

test("workspaceUtils.toUserFacingMessage mapping: unsafe/non-Error values fallback", () => {
  expect(toUserFacingMessage("invalid path", "fallback")).toBe("fallback");
});

test("useWorkspacePreview module exists and exports hook", () => {
  const src = readFileSync("runtime/web/frontend/src/panels/workspace/useWorkspacePreview.ts", "utf8");
  expect(src).toContain("export function useWorkspacePreview");
});

test("WorkspaceActions module exists and exports component", () => {
  const src = readFileSync("runtime/web/frontend/src/panels/workspace/WorkspaceActions.tsx", "utf8");
  expect(src).toContain("export function WorkspaceActions");
});

test("WorkspacePreview module exists and exports component", () => {
  const src = readFileSync("runtime/web/frontend/src/panels/workspace/WorkspacePreview.tsx", "utf8");
  expect(src).toContain("export function WorkspacePreview");
});

test("FolderPreview module exists and exports component", () => {
  const src = readFileSync("runtime/web/frontend/src/panels/workspace/FolderPreview.tsx", "utf8");
  expect(src).toContain("export function FolderPreview");
});

test("WorkspacePanel module exists and exports component", () => {
  const src = readFileSync("runtime/web/frontend/src/panels/WorkspacePanel.tsx", "utf8");
  expect(src).toContain("export function WorkspacePanel");
});

test("WorkspacePanel is an orchestrator file (<200 lines)", async () => {
  const source = await Bun.file(
    new URL("../../../web/frontend/src/panels/WorkspacePanel.tsx", import.meta.url),
  ).text();
  const lineCount = source.split(/\r?\n/).length;
  expect(lineCount).toBeLessThan(200);
});
