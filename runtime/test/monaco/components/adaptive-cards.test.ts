// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const rendererUrl = new URL("../../../web/frontend/src/components/message-list/AdaptiveCardRenderer.tsx", import.meta.url);
const typesUrl = new URL("../../../web/frontend/src/components/message-list/types.ts", import.meta.url);
const messageItemUrl = new URL("../../../web/frontend/src/components/message-list/MessageItem.tsx", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);
const indexHtmlUrl = new URL("../../../web/static/index.html", import.meta.url);
const vendorUrl = new URL("../../../web/static/js/vendor/adaptivecards.min.js", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Adaptive cards regression (#148)", () => {
  test("1) AdaptiveCardRenderer.tsx exists", () => {
    expect(existsSync(rendererUrl)).toBe(true);
  });

  test("2) Exports extractCardBlocks", () => {
    expect(read(rendererUrl)).toContain("export function extractCardBlocks");
  });

  test("3) Handles adaptive_card type", () => {
    const src = read(rendererUrl);
    expect(src).toContain("adaptive_card");
    expect(src).toContain("card_id");
    expect(src).toContain("schema_version");
  });

  test("4) Handles Action.OpenUrl and Action.Submit", () => {
    const src = read(rendererUrl);
    expect(src).toContain("Action.OpenUrl");
    expect(src).toContain("Action.Submit");
  });

  test("5) Has fallback rendering", () => {
    const src = read(rendererUrl);
    expect(src).toContain("fallback_text");
    expect(src).toContain("adaptive-card-fallback");
  });

  test("6) Lazy-loads SDK via script tag", () => {
    const src = read(rendererUrl);
    expect(src).toContain("adaptivecards.min.js");
  });

  test("7) Uses containerRef for imperative DOM", () => {
    const src = read(rendererUrl);
    expect(src).toContain("containerRef");
    expect(src).toContain("useRef");
  });

  test("8) ContentBlock type includes adaptive_card", () => {
    expect(read(typesUrl)).toContain("adaptive_card");
  });

  test("9) ContentBlock has card_id, schema_version, state, payload", () => {
    const src = read(typesUrl);
    expect(src).toContain("card_id");
    expect(src).toContain("schema_version");
    expect(src).toContain("payload");
  });

  test("10) MessageItem imports AdaptiveCardRenderer", () => {
    const src = read(messageItemUrl);
    expect(src).toContain("AdaptiveCardRenderer");
    expect(src).toContain("extractCardBlocks");
  });

  test("11) CSS has adaptive-card-container", () => {
    expect(read(cssUrl)).toContain(".adaptive-card-container");
  });

  test("12) CSS has adaptive-card-fallback", () => {
    expect(read(cssUrl)).toContain(".adaptive-card-fallback");
  });

  test("13) CSS has adaptive-card-finished", () => {
    expect(read(cssUrl)).toContain(".adaptive-card-finished");
  });

  test("14) CSS has status variants", () => {
    const css = read(cssUrl);
    expect(css).toContain("adaptive-card-status-completed");
    expect(css).toContain("adaptive-card-status-cancelled");
    expect(css).toContain("adaptive-card-status-failed");
  });

  test("15) adaptivecards SDK vendored file exists", () => {
    expect(existsSync(vendorUrl)).toBe(true);
  });

  test("16) Vendored SDK exists", () => {
    expect(existsSync(vendorUrl)).toBe(true);
  });

  test("17) Has dark theme host config", () => {
    const src = read(rendererUrl);
    expect(src).toContain("HostConfig");
  });
});
