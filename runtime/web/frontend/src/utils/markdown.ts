/**
 * @deprecated — replaced by `markdown-pipeline.ts` (feat #155).
 * This parse5-based sanitizer is no longer used anywhere in the codebase.
 * Use `renderMarkdown()` / `renderThinkingMarkdown()` from `./markdown-pipeline` instead.
 */
import { marked } from "marked";
import { parseFragment, serialize } from "parse5";

interface HtmlNode {
  nodeName: string;
  tagName?: string;
  attrs?: Array<{ name: string; value: string }>;
  childNodes?: HtmlNode[];
}

const BLOCKED_TAGS = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "link",
  "meta",
  "svg",
  "math",
  "template",
  "base",
]);

const URL_ATTRS = new Set(["href", "src", "xlink:href", "formaction", "poster"]);
const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|tel):|\/|#|\.\/?|\.\.\/?|data:image\/)/i;

function isSafeUrl(value: string): boolean {
  const normalized = value.trim().replace(/\u0000/g, "");
  return normalized.length > 0 && SAFE_URL_PATTERN.test(normalized);
}

function sanitizeNode(node: HtmlNode): void {
  if (node.attrs?.length) {
    node.attrs = node.attrs.filter((attr) => {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on")) return false;
      if (name === "style") return false;
      if (URL_ATTRS.has(name)) return isSafeUrl(attr.value);
      return true;
    });
  }

  if (node.childNodes?.length) {
    sanitizeChildren(node.childNodes);
  }
}

function sanitizeChildren(nodes: HtmlNode[]): void {
  for (let index = nodes.length - 1; index >= 0; index--) {
    const node = nodes[index];
    if (node.nodeName === "#comment") {
      nodes.splice(index, 1);
      continue;
    }

    const tagName = node.tagName?.toLowerCase();
    if (tagName && BLOCKED_TAGS.has(tagName)) {
      nodes.splice(index, 1);
      continue;
    }

    sanitizeNode(node);
  }
}

export function sanitizeMarkdownHtml(html: string): string {
  const fragment = parseFragment(html) as HtmlNode;
  if (fragment.childNodes?.length) {
    sanitizeChildren(fragment.childNodes);
  }
  return serialize(fragment);
}

export function renderSafeMarkdown(content: string): string {
  try {
    const rendered = marked(content, { async: false });
    return sanitizeMarkdownHtml(rendered as string);
  } catch {
    return sanitizeMarkdownHtml(content);
  }
}
