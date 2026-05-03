import { afterEach, expect, test } from "bun:test";

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test("markdown pipeline module loads without errors", async () => {
  const mod = await import("../../../web/frontend/src/utils/markdown-pipeline.ts");
  expect(mod.renderMarkdown).toBeFunction();
  expect(mod.renderThinkingMarkdown).toBeFunction();
  expect(mod.sanitizeUrl).toBeFunction();
});

test("sanitizeUrl allows safe protocols", async () => {
  (globalThis as any).window = { location: { origin: "http://localhost" } };
  const { sanitizeUrl } = await import("../../../web/frontend/src/utils/markdown-pipeline.ts");
  expect(sanitizeUrl("https://example.com")).toBe("https://example.com/");
  expect(sanitizeUrl("http://example.com")).toBe("http://example.com/");
  expect(sanitizeUrl("/relative/path")).toBe("/relative/path");
  expect(sanitizeUrl("#anchor")).toBe("#anchor");
});

test("sanitizeUrl blocks dangerous protocols", async () => {
  (globalThis as any).window = { location: { origin: "http://localhost" } };
  const { sanitizeUrl } = await import("../../../web/frontend/src/utils/markdown-pipeline.ts");
  expect(sanitizeUrl("javascript:alert(1)")).toBeNull();
  expect(sanitizeUrl("data:text/html,<script>")).toBeNull();
  expect(sanitizeUrl("vbscript:foo")).toBeNull();
});

test("sanitizeUrl allows data images when opted in", async () => {
  (globalThis as any).window = { location: { origin: "http://localhost" } };
  const { sanitizeUrl } = await import("../../../web/frontend/src/utils/markdown-pipeline.ts");
  expect(sanitizeUrl("data:image/png;base64,abc", { allowDataImage: true })).toBe("data:image/png;base64,abc");
  expect(sanitizeUrl("data:text/html,bad", { allowDataImage: true })).toBeNull();
});
