import { test, expect } from "bun:test";
import { readFileSync } from "fs";
import { resolve } from "path";

const INDEX_HTML = readFileSync(resolve(import.meta.dir, "../../../web/static/index.html"), "utf8");

test("index.html does NOT have a CSP meta tag", () => {
  // Dual CSP (header + meta) broke terminal WASM loading — #215
  expect(INDEX_HTML).not.toContain('http-equiv="Content-Security-Policy"');
  expect(INDEX_HTML).toContain("CSP is set by the backend via HTTP header");
});

test("index.html loads app.bundle.js as ES module", () => {
  expect(INDEX_HTML).toContain('type="module" src="/static/dist/app.bundle.js"');
});

test("index.html loads vendor scripts with defer", () => {
  expect(INDEX_HTML).toContain('src="/static/js/marked.min.js" defer');
  expect(INDEX_HTML).toContain('src="/static/js/vendor/dompurify.min.js" defer');
  expect(INDEX_HTML).toContain('src="/static/js/vendor/katex.min.js" defer');
  expect(INDEX_HTML).toContain('src="/static/js/vendor/codemirror-highlight.min.js" defer');
});

test("index.html does NOT load mermaid eagerly", () => {
  // Mermaid is ~1.5MB — must be lazy-loaded only when needed
  expect(INDEX_HTML).not.toContain('beautiful-mermaid.js"');
  expect(INDEX_HTML).toContain("loaded on demand");
});

test("index.html has KaTeX CSS", () => {
  expect(INDEX_HTML).toContain('href="/static/css/katex.min.css"');
});

test("index.html has codicons CSS", () => {
  expect(INDEX_HTML).toContain('href="/static/css/codicons.css"');
});

test("index.html keeps the lightweight shell layout styles", () => {
  expect(INDEX_HTML).toContain("min-height: 100%");
  expect(INDEX_HTML).not.toContain("__APP_ASSET_VERSION__");
});
