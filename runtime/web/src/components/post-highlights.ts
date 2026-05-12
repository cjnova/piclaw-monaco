/**
 * post-highlights.ts — Persistent text highlighting for timeline posts.
 *
 * Lets the user select text in a post, tap "Highlight" to mark it with
 * a colored background. Highlights are stored in the message's own
 * `annotations` field in the database via PATCH /post/:id/annotations.
 *
 * Re-application uses textContent offset matching, which is resilient
 * to HTML re-rendering as long as the text content is stable.
 */

import { savePostAnnotations } from '../api.js';

// ── Types ───────────────────────────────────────────────────────

export interface PostHighlight {
  type: 'highlight';
  text: string;
  textOffset: number;
  color: string;
}

// ── Highlight colors ────────────────────────────────────────────

export const HIGHLIGHT_COLORS = [
  { name: 'yellow',  value: 'rgba(250, 204, 21, 0.4)' },
  { name: 'green',   value: 'rgba(74, 222, 128, 0.35)' },
  { name: 'blue',    value: 'rgba(96, 165, 250, 0.35)' },
  { name: 'pink',    value: 'rgba(244, 114, 182, 0.35)' },
  { name: 'orange',  value: 'rgba(251, 146, 60, 0.35)' },
];

export const DEFAULT_HIGHLIGHT_COLOR = HIGHLIGHT_COLORS[0]!.value;

// ── Read highlights from post data ──────────────────────────────

export function extractHighlightsFromAnnotations(annotations: unknown[] | undefined | null): PostHighlight[] {
  if (!Array.isArray(annotations)) return [];
  return annotations.filter(
    (a): a is PostHighlight =>
      a != null &&
      typeof a === 'object' &&
      (a as any).type === 'highlight' &&
      typeof (a as any).text === 'string' &&
      typeof (a as any).textOffset === 'number' &&
      typeof (a as any).color === 'string',
  );
}

// ── Save highlights via API ─────────────────────────────────────

export async function persistHighlight(
  postId: number,
  chatJid: string,
  existingAnnotations: unknown[] | undefined | null,
  highlight: PostHighlight,
): Promise<unknown[]> {
  const current = Array.isArray(existingAnnotations) ? [...existingAnnotations] : [];
  // Dedupe
  const exists = current.some(
    (a: any) =>
      a?.type === 'highlight' &&
      a?.text === highlight.text &&
      a?.textOffset === highlight.textOffset,
  );
  if (!exists) current.push(highlight);
  await savePostAnnotations(postId, current, chatJid);
  return current;
}

// ── DOM application ─────────────────────────────────────────────

function collectTextNodes(root: Node): { node: Text; offset: number }[] {
  const result: { node: Text; offset: number }[] = [];
  let offset = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    result.push({ node, offset });
    offset += node.textContent?.length ?? 0;
  }
  return result;
}

/**
 * Apply saved highlights to a DOM element by wrapping matched text
 * ranges in <mark> elements. Call after innerHTML is set.
 */
export function applyHighlightsToElement(
  element: HTMLElement,
  highlights: PostHighlight[],
): void {
  if (!highlights.length) return;
  const fullText = element.textContent ?? '';

  const sorted = highlights
    .filter((h) => {
      const found = fullText.substring(h.textOffset, h.textOffset + h.text.length);
      return found === h.text;
    })
    .sort((a, b) => b.textOffset - a.textOffset);

  for (const highlight of sorted) {
    const textNodes = collectTextNodes(element);
    wrapTextRange(textNodes, highlight.textOffset, highlight.text.length, highlight.color);
  }
}

function wrapTextRange(
  textNodes: { node: Text; offset: number }[],
  targetOffset: number,
  length: number,
  color: string,
): void {
  let remaining = length;
  let started = false;

  for (const { node, offset: nodeOffset } of textNodes) {
    const nodeLen = node.textContent?.length ?? 0;
    const nodeEnd = nodeOffset + nodeLen;

    if (!started) {
      if (targetOffset >= nodeOffset && targetOffset < nodeEnd) {
        started = true;
        const localStart = targetOffset - nodeOffset;
        const localEnd = Math.min(nodeLen, localStart + remaining);
        const wrapped = localEnd - localStart;
        wrapPartOfTextNode(node, localStart, localEnd, color);
        remaining -= wrapped;
        if (remaining <= 0) return;
      }
    } else {
      const localEnd = Math.min(nodeLen, remaining);
      wrapPartOfTextNode(node, 0, localEnd, color);
      remaining -= localEnd;
      if (remaining <= 0) return;
    }
  }
}

function wrapPartOfTextNode(
  node: Text,
  start: number,
  end: number,
  color: string,
): void {
  const text = node.textContent ?? '';
  if (start >= end || start >= text.length) return;

  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, Math.min(end, text.length));

  const mark = document.createElement('mark');
  mark.className = 'post-highlight';
  mark.style.backgroundColor = color;
  mark.style.borderRadius = '2px';
  mark.style.padding = '0 1px';

  try {
    range.surroundContents(mark);
  } catch {
    const fragment = range.extractContents();
    mark.appendChild(fragment);
    range.insertNode(mark);
  }
}

// ── Selection helpers ───────────────────────────────────────────

export function getSelectionInElement(element: HTMLElement): {
  text: string;
  textOffset: number;
  rect: DOMRect;
} | null {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return null;

  const range = sel.getRangeAt(0)!;
  if (!element.contains(range.commonAncestorContainer)) return null;

  const text = sel.toString().trim();
  if (!text) return null;

  const fullText = element.textContent ?? '';
  const textNodes = collectTextNodes(element);
  let textOffset = -1;

  for (const { node, offset } of textNodes) {
    if (node === range.startContainer || node.contains?.(range.startContainer)) {
      textOffset = offset + range.startOffset;
      break;
    }
  }

  if (textOffset < 0) {
    textOffset = fullText.indexOf(text);
  }

  if (textOffset < 0) return null;

  const rect = range.getBoundingClientRect();
  return { text, textOffset, rect };
}
