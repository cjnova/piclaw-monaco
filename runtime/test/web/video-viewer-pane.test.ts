/**
 * test/web/video-viewer-pane.test.ts – Resolution tests for the web-viewer pane (video).
 */

import { describe, expect, test } from "bun:test";

import { webViewerPaneExtension } from "../../web/src/panes/web-viewer-pane.js";

describe("web-viewer pane (video)", () => {
  test("claims common video files for both preview and tab contexts", () => {
    expect(webViewerPaneExtension.canHandle?.({ path: "media/demo.mp4", mode: "view" } as any)).toBe(54);
    expect(webViewerPaneExtension.canHandle?.({ path: "media/demo.MP4", mode: "view" } as any)).toBe(54);
    expect(webViewerPaneExtension.canHandle?.({ path: "media/demo.webm", mode: "view" } as any)).toBe(54);
    expect(webViewerPaneExtension.canHandle?.({ path: "media/demo.mov", mode: "edit" } as any)).toBe(54);
  });

  test("does not claim non-media files", () => {
    expect(webViewerPaneExtension.canHandle?.({ path: "notes/readme.md", mode: "view" } as any)).toBe(false);
    expect(webViewerPaneExtension.canHandle?.({ path: "images/photo.png", mode: "view" } as any)).toBe(48); // image handled
  });
});
