/**
 * Sanitise an HTML string produced by a markdown renderer before injecting it
 * into the DOM via `dangerouslySetInnerHTML`.
 *
 * Uses DOMPurify (battle-tested, 10+ years, used by Google / Mozilla) to
 * remove XSS vectors including event-handler attributes, `javascript:` URLs,
 * SVG/MathML namespace escapes, and mutation-XSS tricks.
 */
import DOMPurify from "dompurify";

export function sanitizeRenderedMarkdown(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['class'],
  });
}
