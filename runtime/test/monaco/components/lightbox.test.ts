// Tests written by claude-sonnet-4.6
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const lightboxPath = "runtime/web/frontend/src/components/ImageLightbox.tsx";
const messageItemPath = "runtime/web/frontend/src/components/message-list/MessageItem.tsx";
const cssPath = "runtime/web/static/css/shell.css";

describe("Image lightbox (#278)", () => {
  test("ImageLightbox.tsx exists", () => {
    expect(existsSync(lightboxPath)).toBe(true);
    expect(readFileSync(lightboxPath, "utf8")).toContain("export function ImageLightbox");
  });

  test("Lightbox has backdrop and close button", () => {
    const src = readFileSync(lightboxPath, "utf8");
    expect(src).toContain("lightbox__backdrop");
    expect(src).toContain("lightbox__close");
  });

  test("Lightbox closes on Escape", () => {
    const src = readFileSync(lightboxPath, "utf8");
    expect(src).toContain("Escape");
  });

  test("MessageItem has lightbox state", () => {
    const src = readFileSync(messageItemPath, "utf8");
    expect(src).toContain("lightboxSrc");
    expect(src).toContain("ImageLightbox");
  });

  test("MessageItem opens lightbox on image click", () => {
    const src = readFileSync(messageItemPath, "utf8");
    expect(src).toContain("IMG");
    expect(src).toContain("setLightboxSrc");
  });

  test("CSS has lightbox styles", () => {
    const css = readFileSync(cssPath, "utf8");
    expect(css).toContain(".lightbox__backdrop");
    expect(css).toContain(".lightbox__image");
    expect(css).toContain("cursor: zoom-in");
  });
});
