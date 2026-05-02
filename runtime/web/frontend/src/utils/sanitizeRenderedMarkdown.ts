/**
 * @deprecated — replaced by `markdown-pipeline.ts` (feat #155).
 * Sanitization is now built into `renderMarkdown()` / `renderThinkingMarkdown()`.
 * This file is kept for reference only and is no longer imported anywhere.
 *
 * Use `renderMarkdown(text)` from `./markdown-pipeline` instead.
 */
import DOMPurify from "dompurify";

/** @deprecated Use renderMarkdown() from markdown-pipeline instead. */
export function sanitizeRenderedMarkdown(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["class"],
  });
}
