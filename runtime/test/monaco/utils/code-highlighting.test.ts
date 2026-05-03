import { afterEach, expect, test } from "bun:test";
import { highlightCodeToHtml, normalizeCodeLanguageLabel, applySyntaxHighlighting } from "../../../web/frontend/src/utils/code-highlighting.ts";

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test("normalizeCodeLanguageLabel maps common aliases", () => {
  expect(normalizeCodeLanguageLabel("js")).toBe("JavaScript");
  expect(normalizeCodeLanguageLabel("ts")).toBe("TypeScript");
  expect(normalizeCodeLanguageLabel("py")).toBe("Python");
  expect(normalizeCodeLanguageLabel("bicep")).toBe("Bicep");
  expect(normalizeCodeLanguageLabel("")).toBe("Text");
});

test("highlightCodeToHtml returns escaped HTML when no parser available", () => {
  (globalThis as any).window = {};
  // window.cmHighlight won't be available in test env
  const result = highlightCodeToHtml('<script>alert(1)</script>', 'unknown');
  expect(result).toContain("&lt;script&gt;");
  expect(result).not.toContain("<script>");
});

test("applySyntaxHighlighting processes pre>code blocks", () => {
  (globalThis as any).window = {};
  const html = '<pre><code class="language-js">const x = 1;</code></pre>';
  const result = applySyntaxHighlighting(html);
  // Should at minimum preserve the code content
  expect(result).toContain("const x = 1;");
  expect(result).toContain("language-");
});
