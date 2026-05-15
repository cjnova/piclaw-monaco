export interface HighlightRange {
  color: string;
  startOffset: number;
  endOffset: number;
  text: string;
}

export const HIGHLIGHT_COLORS = [
  "#4a9e4a80", // green
  "#c9a83b80", // yellow
  "#c94e4e80", // red
  "#4a7ec980", // blue
  "#9e4ac980", // purple
];

/** Walk all text nodes in container, returning them with cumulative offsets. */
function getTextNodes(container: HTMLElement): { node: Text; start: number }[] {
  const result: { node: Text; start: number }[] = [];
  let offset = 0;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    result.push({ node: text, start: offset });
    offset += text.length;
  }
  return result;
}

/** Convert a DOM Selection to character offsets relative to container's text content. */
export function serializeSelection(
  container: HTMLElement,
  selection: Selection
): { startOffset: number; endOffset: number; text: string } | null {
  if (!selection.rangeCount) return null;
  const range = selection.getRangeAt(0);
  if (range.collapsed) return null;

  // Ensure both endpoints are inside container
  if (!container.contains(range.startContainer) || !container.contains(range.endContainer)) {
    return null;
  }

  const textNodes = getTextNodes(container);

  let startOffset = -1;
  let endOffset = -1;

  for (const { node, start } of textNodes) {
    if (node === range.startContainer) {
      startOffset = start + range.startOffset;
    }
    if (node === range.endContainer) {
      endOffset = start + range.endOffset;
    }
  }

  if (startOffset === -1 || endOffset === -1) return null;
  if (startOffset >= endOffset) return null;

  return {
    startOffset,
    endOffset,
    text: selection.toString(),
  };
}

/** Remove all highlight marks from container. */
export function clearHighlights(container: HTMLElement): void {
  const marks = container.querySelectorAll("mark[data-highlight]");
  for (const mark of marks) {
    const parent = mark.parentNode;
    if (!parent) continue;
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark);
    }
    parent.removeChild(mark);
  }
  container.normalize();
}

/** Apply an array of HighlightRange objects to the container as <mark> elements. */
export function applyHighlights(container: HTMLElement, highlights: HighlightRange[]): void {
  if (!highlights.length) return;

  // Sort descending so we apply from end to start (preserves offsets)
  const sorted = [...highlights].sort((a, b) => b.startOffset - a.startOffset);

  for (const hl of sorted) {
    applyOneHighlight(container, hl);
  }
}

function applyOneHighlight(container: HTMLElement, hl: HighlightRange): void {
  const textNodes = getTextNodes(container);
  let remaining = hl.endOffset - hl.startOffset;
  let pos = hl.startOffset;

  for (const { node, start } of textNodes) {
    const nodeEnd = start + node.length;
    if (nodeEnd <= pos) continue;
    if (start >= hl.endOffset) break;

    const localStart = Math.max(0, pos - start);
    const localEnd = Math.min(node.length, hl.endOffset - start);

    if (localStart >= localEnd) continue;

    // Split the text node and wrap the middle part
    const before = node.splitText(localStart);
    const middle = before.splitText(localEnd - localStart);
    void middle; // the rest after highlight

    const mark = document.createElement("mark");
    mark.setAttribute("data-highlight", "");
    mark.style.background = hl.color;
    mark.style.borderRadius = "2px";
    mark.style.padding = "0 1px";

    const parent = before.parentNode!;
    parent.insertBefore(mark, before);
    mark.appendChild(before);

    // After DOM mutation, break — caller will re-collect nodes next call
    break;
  }
}
