/**
 * Sanitise an HTML string produced by a markdown renderer before injecting it
 * into the DOM via `dangerouslySetInnerHTML`.
 *
 * Removes event-handler attributes (onclick, onerror, …), `style` attributes,
 * and `javascript:` URLs from href / src / action attributes.  Uses only
 * browser-native APIs (DOMParser + TreeWalker) — no external library required.
 */
export function sanitizeRenderedMarkdown(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
  let node: Element | null = walker.nextNode() as Element | null;
  while (node) {
    for (const attr of Array.from(node.attributes)) {
      const name = attr.name;
      const value = attr.value;
      if (
        /^on/i.test(name) ||
        name === "style" ||
        (/^(href|src|action|formaction|xlink:href)$/i.test(name) &&
          /^javascript:/i.test(value))
      ) {
        node.removeAttribute(name);
      }
    }
    node = walker.nextNode() as Element | null;
  }
  return doc.body.innerHTML;
}
