/**
 * Lazy vendor script loader.
 * Loads vendor scripts on first use instead of upfront in index.html.
 * Each vendor is loaded once and cached.
 */

const loaded = new Map<string, Promise<void>>();
const resolved = new Set<string>();

export function loadVendor(url: string): Promise<void> {
  if (resolved.has(url)) return Promise.resolve();
  if (loaded.has(url)) return loaded.get(url)!;

  const p = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = url;
    s.onload = () => {
      resolved.add(url);
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(s);
  });
  loaded.set(url, p);
  return p;
}

// Vendor URLs
export const VENDOR_MARKED = "/static/js/marked.min.js";
export const VENDOR_DOMPURIFY = "/static/js/vendor/dompurify.min.js";
export const VENDOR_KATEX = "/static/js/vendor/katex.min.js";
export const VENDOR_CODEMIRROR = "/static/js/vendor/codemirror-highlight.min.js";
export const VENDOR_ADAPTIVECARDS = "/static/js/vendor/adaptivecards.min.js";

/** Ensure markdown rendering vendors are loaded (marked + dompurify + codemirror). */
export async function ensureMarkdownVendors(): Promise<void> {
  await Promise.all([
    loadVendor(VENDOR_MARKED),
    loadVendor(VENDOR_DOMPURIFY),
    loadVendor(VENDOR_CODEMIRROR),
  ]);
}

/** Ensure KaTeX is loaded. */
export function ensureKatex(): Promise<void> {
  return loadVendor(VENDOR_KATEX);
}
