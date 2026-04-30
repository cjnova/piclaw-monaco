/**
 * markdown.ts — Shared markdown rendering, sanitization, and syntax-highlighting
 * utilities for the piclaw web UI.
 *
 * Exported surface:
 *   prepareMarkdownSource   — pre-process raw markdown before handing it to marked
 *   applySyntaxHighlighting — post-process marked HTML to highlight code blocks
 *   isSanitizedHtmlAttributeAllowed — attribute allowlist used by the sanitizer
 *   renderMarkdown          — full pipeline: marked → sanitize → return HTML string
 *   renderMath              — replace $…$ / $$…$$ fences with KaTeX output
 */

import { classHighlighter, highlightTree } from '@lezer/highlight';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import DOMPurify from 'dompurify';

// ── Attribute allowlist ────────────────────────────────────────────────────

const ALWAYS_BLOCKED_ATTRS = new Set(['style']);

const ALWAYS_SAFE_ATTRS = new Set([
  'title', 'lang', 'dir', 'id', 'class', 'tabindex', 'role',
  'colspan', 'rowspan', 'start', 'type', 'reversed',
  'width', 'height', 'alt', 'cite', 'datetime', 'open', 'value',
  'name', 'for', 'target', 'rel',
]);

const TAG_SAFE_ATTRS: Record<string, Set<string>> = {
  a: new Set(['href']),
  img: new Set(['src', 'srcset', 'sizes', 'loading', 'decoding']),
};

/**
 * Returns true when the given attribute is safe to retain on the given element
 * during HTML sanitization.  Event-handler attributes (onclick, onerror, …)
 * and `style` are always rejected.
 */
export function isSanitizedHtmlAttributeAllowed(tag: string, attr: string): boolean {
  if (/^on/i.test(attr)) return false;
  if (ALWAYS_BLOCKED_ATTRS.has(attr)) return false;
  if (attr.startsWith('aria-')) return true;
  if (ALWAYS_SAFE_ATTRS.has(attr)) return true;
  return TAG_SAFE_ATTRS[tag]?.has(attr) ?? false;
}

// ── HTML helpers ───────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function decodeHtmlEntities(html: string): string {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// ── Tag parser used by prepareMarkdownSource ───────────────────────────────

/**
 * Tags that may appear verbatim inside markdown source and must be preserved
 * (rather than HTML-escaped) by `prepareMarkdownSource`.
 */
const ALLOWED_SOURCE_TAGS = new Set([
  'ruby', 'rt', 'rp', 'br', 'span', 'sub', 'sup',
  'abbr', 'ins', 'del', 'mark', 'cite', 'kbd', 'samp', 'var',
]);

/**
 * Find the closing `>` of an HTML tag starting at `start`, honouring quoted
 * attribute values that may themselves contain `>`.  Returns the index of `>`
 * or -1 when the tag is not closed.
 */
function findTagEnd(source: string, start: number): number {
  let i = start + 1;
  let inQuote: string | null = null;
  while (i < source.length) {
    const c = source[i];
    if (inQuote) {
      if (c === inQuote) inQuote = null;
    } else if (c === '"' || c === "'") {
      inQuote = c;
    } else if (c === '>') {
      return i;
    }
    i++;
  }
  return -1;
}

function getTagName(tag: string): string {
  const match = tag.match(/^<\/?([a-zA-Z][a-zA-Z0-9-]*)/);
  return match?.[1]?.toLowerCase() ?? '';
}

/**
 * Normalise an allowed HTML tag:
 *  - collapse self-closing syntax (`<br/>` → `<br>`)
 *  - escape `>` inside quoted attribute values (`title="x > y"` → `title="x &gt; y"`)
 */
function normalizeAllowedTag(tag: string): string {
  let normalized = tag.replace(/\s*\/\s*>$/, '>');
  normalized = normalized.replace(/="([^"]*)"/g, (_, value: string) => {
    return `="${value.replace(/>/g, '&gt;')}"`;
  });
  return normalized;
}

/**
 * Walk `source` and escape the `<` of any tag whose name is **not** in
 * `ALLOWED_SOURCE_TAGS`.  Allowed tags are passed through (normalised).
 */
function escapeUnsafeTags(source: string): string {
  let result = '';
  let i = 0;
  while (i < source.length) {
    if (source[i] !== '<') {
      result += source[i];
      i++;
      continue;
    }
    const tagEnd = findTagEnd(source, i);
    if (tagEnd < 0) {
      result += source[i];
      i++;
      continue;
    }
    const fullTag = source.slice(i, tagEnd + 1);
    const tagName = getTagName(fullTag);
    if (tagName && ALLOWED_SOURCE_TAGS.has(tagName)) {
      result += normalizeAllowedTag(fullTag);
    } else {
      // Escape only the opening '<'; leave the rest of the tag text as-is
      result += '&lt;' + fullTag.slice(1);
    }
    i = tagEnd + 1;
  }
  return result;
}

/**
 * If the markdown begins with a YAML frontmatter block (delimited by `---`),
 * rewrite it as a fenced `yaml` code block so that `marked` renders it
 * verbatim rather than interpreting it as a horizontal rule.
 */
function convertFrontmatterToFencedBlock(markdown: string): string {
  const m = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return markdown;
  const frontmatter = m[1] ?? '';
  const rest = m[2] ?? '';
  return `\`\`\`yaml\n${frontmatter}\n\`\`\`\n\n${rest}`;
}

// ── prepareMarkdownSource ──────────────────────────────────────────────────

/**
 * Pre-process a raw markdown string before passing it to `marked`:
 *
 *  1. Rewrites leading YAML frontmatter into a fenced code block.
 *  2. Escapes raw HTML tags that are not in the allowed set, so that
 *     e.g. a literal `<script>` in the source never reaches the DOM.
 *
 * Returns `{ safeHtml }` where `safeHtml` is the processed markdown source
 * (not yet rendered HTML — the name is slightly misleading for historical
 * reasons; it reflects that the string is safe to hand to `marked`).
 */
export function prepareMarkdownSource(markdown: string): { safeHtml: string } {
  let source = convertFrontmatterToFencedBlock(markdown);
  source = escapeUnsafeTags(source);
  return { safeHtml: source };
}

// ── applySyntaxHighlighting ────────────────────────────────────────────────

function getLanguageParser(lang: string): typeof javascriptLanguage.parser | null {
  switch (lang.toLowerCase()) {
    case 'js':
    case 'jsx':
    case 'javascript':
    case 'ts':
    case 'tsx':
    case 'typescript':
      return javascriptLanguage.parser;
    default:
      return null;
  }
}

function highlightWithLezer(
  parser: typeof javascriptLanguage.parser,
  rawCode: string,
): string {
  const tree = parser.parse(rawCode);
  let result = '';
  let lastPos = 0;

  highlightTree(tree, classHighlighter, (from: number, to: number, classes: string) => {
    if (from > lastPos) {
      result += escapeHtml(rawCode.slice(lastPos, from));
    }
    result += `<span class="${classes}">${escapeHtml(rawCode.slice(from, to))}</span>`;
    lastPos = to;
  });

  if (lastPos < rawCode.length) {
    result += escapeHtml(rawCode.slice(lastPos));
  }
  return result;
}

function highlightCodeBlock(lang: string, encodedCode: string): string {
  const parser = getLanguageParser(lang);
  if (!parser) return encodedCode;
  const rawCode = decodeHtmlEntities(encodedCode);
  return highlightWithLezer(parser, rawCode);
}

/**
 * Post-process the HTML emitted by `marked` to add syntax highlighting to
 * fenced code blocks.  Supports JavaScript / TypeScript; all other languages
 * receive only the `hljs language-X` CSS class (compatible with highlight.js
 * themes) without token-level spans.
 *
 * Also promotes `<!--frontmatter-block-start-->…<!--frontmatter-block-end-->`
 * wrapper comments (injected by `prepareMarkdownSource`) into a
 * `<pre class="frontmatter-block">` element.
 */
export function applySyntaxHighlighting(html: string): string {
  // 1. Handle frontmatter wrapper comments
  let result = html.replace(
    /<!--frontmatter-block-start-->([\s\S]*?)<!--frontmatter-block-end-->/g,
    (_match: string, content: string) =>
      content.replace(
        /<pre><code class="language-([^"]+)">/g,
        '<pre class="frontmatter-block"><code class="hljs language-$1">',
      ),
  );

  // 2. Highlight remaining (non-frontmatter) code blocks
  result = result.replace(
    /<pre(?:[^>]*)><code class="language-([^"]+)">([\s\S]*?)<\/code><\/pre>/g,
    (_match: string, lang: string, code: string) => {
      const highlighted = highlightCodeBlock(lang, code);
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    },
  );

  return result;
}

// ── renderMarkdown ─────────────────────────────────────────────────────────

function getMarked(): { parse(text: string): string } | null {
  const g = globalThis as Record<string, unknown>;
  return (g['marked'] as { parse(text: string): string } | undefined)
    ?? ((g['window'] as Record<string, unknown> | undefined)?.['marked'] as { parse(text: string): string } | undefined)
    ?? null;
}

/**
 * Sanitise HTML produced by `marked` (or any other renderer) using DOMPurify.
 * Falls back to a lightweight custom sanitizer in non-DOM environments (e.g.
 * server-side or test environments where DOMPurify.sanitize is unavailable).
 */
function sanitizeHtml(html: string): string {
  // DOMPurify.sanitize is only defined when running in a DOM environment.
  // It is undefined in Node.js / bun without jsdom.
  if (typeof DOMPurify.sanitize === 'function') {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  }
  // Fallback for non-DOM environments (test runner, SSR)
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const NodeFilterLocal = (globalThis as Record<string, unknown>)['NodeFilter'] as { SHOW_ELEMENT: number } | undefined;
  const SHOW_ELEMENT = NodeFilterLocal?.SHOW_ELEMENT ?? 1;
  const walker = doc.createTreeWalker(doc.body, SHOW_ELEMENT);
  let node: Element | null = walker.nextNode() as Element | null;
  while (node) {
    const tag = node.tagName.toLowerCase();
    const attrs = Array.from(node.attributes);
    for (const attr of attrs) {
      const name = attr.name;
      const value = attr.value;
      if (!isSanitizedHtmlAttributeAllowed(tag, name)) {
        node.removeAttribute(name);
      } else if (
        /^(href|src|action|formaction|xlink:href)$/i.test(name) &&
        /^javascript:/i.test(value)
      ) {
        node.removeAttribute(name);
      }
    }
    node = walker.nextNode() as Element | null;
  }
  return doc.body.innerHTML;
}

/**
 * Render `content` (markdown source) to an HTML string.
 *
 * @param content   Raw markdown text.
 * @param _element  Optional target DOM element (unused; kept for API symmetry).
 * @param options   `{ sanitize: false }` to skip XSS sanitization (trusted
 *                  surfaces only — use with care).
 */
export function renderMarkdown(
  content: string,
  _element: Element | null,
  options?: { sanitize?: boolean },
): string {
  const markedInstance = getMarked();
  if (!markedInstance) return content;
  const html = markedInstance.parse(content);
  if (options?.sanitize === false) return html;
  return sanitizeHtml(html);
}

// ── renderMath ─────────────────────────────────────────────────────────────

function getKatex(): { renderToString(tex: string, opts: { displayMode?: boolean }): string } | null {
  const g = globalThis as Record<string, unknown>;
  return (g['katex'] as { renderToString(tex: string, opts: { displayMode?: boolean }): string } | undefined)
    ?? ((g['window'] as Record<string, unknown> | undefined)?.['katex'] as { renderToString(tex: string, opts: { displayMode?: boolean }): string } | undefined)
    ?? null;
}

/**
 * Replace `$$…$$` (block) and `$…$` (inline) math fences in rendered HTML
 * with KaTeX output.  Skips bare currency amounts like `$649` that are not
 * wrapped in a matching closing `$`.
 *
 * Requires KaTeX to be available as a global (`window.katex` or
 * `globalThis.katex`).  Returns `html` unchanged when KaTeX is absent.
 */
export function renderMath(html: string): string {
  const katex = getKatex();
  if (!katex) return html;

  const doc = new DOMParser().parseFromString(html, 'text/html');
  let content: string = (doc.body as HTMLBodyElement & { innerHTML: string }).innerHTML;

  // Block math: $$…$$
  content = content.replace(/\$\$([\s\S]+?)\$\$/g, (_match: string, tex: string) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: true });
    } catch {
      return _match;
    }
  });

  // Inline math: $…$ — but NOT a bare currency amount ($digits)
  content = content.replace(/\$(?!\d)((?:[^$\\]|\\.)+?)\$(?!\d)/g, (_match: string, tex: string) => {
    try {
      return katex.renderToString(tex.trim(), { displayMode: false });
    } catch {
      return _match;
    }
  });

  return content;
}
