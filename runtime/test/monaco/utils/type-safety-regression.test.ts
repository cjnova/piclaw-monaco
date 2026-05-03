// Tests written by gpt-5.3-codex, code refactored by claude-sonnet-4.6
import { test, expect, beforeAll } from "bun:test";

import {
  HASHTAG_REGEX,
  sanitizeUrl,
  decodeEntities,
  decodeEntitiesDeep,
  prepareMarkdownSource,
  renderMarkdown,
  renderThinkingMarkdown,
  renderMath,
} from "../../../web/frontend/src/utils/markdown-pipeline";
import {
  normalizeCodeLanguageLabel,
  parserForCodeFenceLanguage,
  highlightCodeToHtml,
  applySyntaxHighlighting,
} from "../../../web/frontend/src/utils/code-highlighting";
import { bicepMode } from "../../../web/frontend/src/utils/bicep-mode";
import { renderMermaidDiagrams } from "../../../web/frontend/src/utils/mermaid-render";

beforeAll(() => {
  if (typeof globalThis.window === "undefined") {
    (globalThis as any).window = { location: { origin: "http://localhost" } };
  }
});

class TestStream {
  private line: string;
  public pos = 0;
  private start = 0;

  constructor(line: string) {
    this.line = line;
  }

  beginToken() {
    this.start = this.pos;
  }

  eatSpace(): boolean {
    const m = this.line.slice(this.pos).match(/^\s+/);
    if (!m) return false;
    this.pos += m[0].length;
    return true;
  }

  match(pattern: string | RegExp): string | boolean | null {
    if (typeof pattern === "string") {
      if (this.line.startsWith(pattern, this.pos)) {
        this.pos += pattern.length;
        return true;
      }
      return false;
    }

    const flags = pattern.flags.replace(/g/g, "");
    const anchored = new RegExp(`^(?:${pattern.source})`, flags);
    const rest = this.line.slice(this.pos);
    const m = rest.match(anchored);
    if (!m) return null;
    this.pos += m[0].length;
    return m[0];
  }

  current(): string {
    return this.line.slice(this.start, this.pos);
  }

  next(): string | null {
    if (this.pos >= this.line.length) return null;
    const ch = this.line[this.pos];
    this.pos += 1;
    return ch;
  }

  skipToEnd(): void {
    this.pos = this.line.length;
  }

  done(): boolean {
    return this.pos >= this.line.length;
  }
}

function tokenStyles(line: string, state = bicepMode.startState()): string[] {
  const stream = new TestStream(line);
  const out: string[] = [];

  while (!stream.done()) {
    const before = stream.pos;
    stream.beginToken();
    const style = bicepMode.token(stream as any, state);
    if (style) out.push(style);
    if (stream.pos === before) stream.next();
  }

  return out;
}

function decodeB64Utf8(base64: string): string {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

test("public exports exist with expected runtime types", () => {
  expect(HASHTAG_REGEX).toBeInstanceOf(RegExp);
  expect(typeof sanitizeUrl).toBe("function");
  expect(typeof decodeEntities).toBe("function");
  expect(typeof decodeEntitiesDeep).toBe("function");
  expect(typeof prepareMarkdownSource).toBe("function");
  expect(typeof renderMath).toBe("function");
  expect(typeof renderMarkdown).toBe("function");
  expect(typeof renderThinkingMarkdown).toBe("function");
  expect(typeof normalizeCodeLanguageLabel).toBe("function");
  expect(typeof parserForCodeFenceLanguage).toBe("function");
  expect(typeof highlightCodeToHtml).toBe("function");
  expect(typeof applySyntaxHighlighting).toBe("function");
  expect(typeof bicepMode).toBe("object");
  expect(typeof bicepMode.startState).toBe("function");
  expect(typeof bicepMode.token).toBe("function");
  expect(typeof renderMermaidDiagrams).toBe("function");
});

test("sanitizeUrl handles allowed, blocked, and edge protocols", () => {
  expect(sanitizeUrl("https://example.com/path?a=1#x")).toBe("https://example.com/path?a=1#x");
  expect(sanitizeUrl("http://example.com")).toBe("http://example.com/");
  expect(sanitizeUrl("mailto:user@example.com")).toBe("mailto:user@example.com");
  expect(sanitizeUrl("/relative/path")).toBe("/relative/path");
  expect(sanitizeUrl("#anchor")).toBe("#anchor");
  expect(sanitizeUrl("javascript:alert(1)")).toBeNull();
  expect(sanitizeUrl("data:text/html;base64,PHNjcmlwdD4=")).toBeNull();
  const dataImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB";
  expect(sanitizeUrl(dataImg)).toBeNull();
  expect(sanitizeUrl(dataImg, { allowDataImage: true })).toBe(dataImg);
  expect(sanitizeUrl("blob:1234-5678-90")).toBe("blob:1234-5678-90");
  expect(sanitizeUrl("")).toBeNull();
  expect(sanitizeUrl("   ")).toBeNull();
});

test("bicepMode startState shape and keyword/type/operator tokenization", () => {
  const state = bicepMode.startState();
  expect(state).toEqual({ inBlockComment: false, inMultilineString: false });
  expect(tokenStyles("resource", bicepMode.startState())).toContain("keyword");
  expect(tokenStyles("param", bicepMode.startState())).toContain("keyword");
  expect(tokenStyles("var", bicepMode.startState())).toContain("keyword");
  const typeTokens = tokenStyles("string int bool", bicepMode.startState());
  expect(typeTokens.filter((t) => t === "typeName").length).toBe(3);
  expect(tokenStyles("12345", bicepMode.startState())).toContain("number");
  const opTokens = tokenStyles("a = b && c || d", bicepMode.startState());
  expect(opTokens).toContain("operator");
});

test("bicepMode handles comments, decorators, single and multiline strings", () => {
  expect(tokenStyles("// hello", bicepMode.startState())).toContain("comment");
  const blockState = bicepMode.startState();
  expect(tokenStyles("/* comment starts", blockState)).toContain("comment");
  expect(blockState.inBlockComment).toBe(true);
  expect(tokenStyles("still comment */", blockState)).toContain("comment");
  expect(blockState.inBlockComment).toBe(false);
  expect(tokenStyles("'single-quoted string'", bicepMode.startState())).toContain("string");
  expect(tokenStyles("@description", bicepMode.startState())).toContain("meta");
  const multiState = bicepMode.startState();
  expect(tokenStyles("'''first line", multiState)).toContain("string");
  expect(multiState.inMultilineString).toBe(true);
  expect(tokenStyles("second line'''", multiState)).toContain("string");
  expect(multiState.inMultilineString).toBe(false);
});

test("normalizeCodeLanguageLabel resolves aliases and fallbacks", () => {
  expect(normalizeCodeLanguageLabel("js")).toBe("JavaScript");
  expect(normalizeCodeLanguageLabel("ts")).toBe("TypeScript");
  expect(normalizeCodeLanguageLabel("py")).toBe("Python");
  expect(normalizeCodeLanguageLabel("sh")).toBe("Shell");
  expect(normalizeCodeLanguageLabel("bash")).toBe("Bash");
  expect(normalizeCodeLanguageLabel("rs")).toBe("Rust");
  expect(normalizeCodeLanguageLabel("rb")).toBe("Ruby");
  expect(normalizeCodeLanguageLabel("go")).toBe("Go");
  expect(normalizeCodeLanguageLabel("cpp")).toBe("C++");
  expect(normalizeCodeLanguageLabel("bicep")).toBe("Bicep");
  expect(normalizeCodeLanguageLabel("")).toBe("Text");
  expect(normalizeCodeLanguageLabel("unknownlang")).toBe("unknownlang");
});

test("highlightCodeToHtml escapes dangerous HTML and handles empty/multiline input", () => {
  expect(highlightCodeToHtml("", "js")).toBe("");
  const dangerous = '<img src=x onerror=alert(1)> \' " &';
  const escaped = highlightCodeToHtml(dangerous, "js");
  expect(escaped).toContain("&lt;img");
  expect(escaped).not.toContain("<img");
  expect(escaped).toContain("&amp;");
  const multi = "line1\nline2<script>";
  const out = highlightCodeToHtml(multi, "ts");
  expect(out).toContain("line1\nline2");
  expect(out).toContain("&lt;script&gt;");
});

test("applySyntaxHighlighting wraps blocks, adds language label, and preserves content", () => {
  const html = '<pre><code class="language-ts">const x = 42;</code></pre>';
  const out = applySyntaxHighlighting(html);
  expect(out).toContain('<div class="code-block">');
  expect(out).toContain("TypeScript");
  expect(out).toContain('class="hljs language-ts"');
  expect(out).toContain("const x = 42;");
});

test("applySyntaxHighlighting handles code blocks without language class", () => {
  const html = '<pre><code>alert("hi")</code></pre>';
  const out = applySyntaxHighlighting(html);
  expect(out).toContain("Text");
  expect(out).toContain('class="hljs language-plaintext"');
});

test("parserForCodeFenceLanguage returns null when cmHighlight is unavailable", () => {
  delete (window as any).cmHighlight;
  expect(parserForCodeFenceLanguage("js")).toBeNull();
  expect(parserForCodeFenceLanguage("python")).toBeNull();
  expect(parserForCodeFenceLanguage("bicep")).toBeNull();
});

test("renderMarkdown returns empty for empty input", () => {
  expect(renderMarkdown("")).toBe("");
});

test("renderThinkingMarkdown returns empty string for empty input", () => {
  expect(renderThinkingMarkdown("")).toBe("");
});

// decodeEntities and prepareMarkdownSource require DOMParser (browser-only)
// Skipped in Node/Bun test environment
test.skip("decodeEntities and decodeEntitiesDeep decode basic and nested entities", () => {});

test.skip("prepareMarkdownSource extracts mermaid blocks and normalizes math fences", () => {});
