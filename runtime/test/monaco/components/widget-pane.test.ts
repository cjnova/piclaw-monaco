// Tests written by gpt-5.3-codex
import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";

const widgetPaneUrl = new URL("../../../web/frontend/src/components/WidgetPane.tsx", import.meta.url);
const chatPanelUrl = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);
const streamUrl = new URL("../../../web/frontend/src/components/message-list/useTimelineStream.ts", import.meta.url);
const cssUrl = new URL("../../../web/static/css/shell.css", import.meta.url);

const read = (url: URL) => readFileSync(url, "utf8");

describe("Widget iframe host regression (#149)", () => {
  test("1) WidgetPane.tsx exists and exports WidgetPane", () => {
    expect(existsSync(widgetPaneUrl)).toBe(true);
    expect(read(widgetPaneUrl)).toContain("export function WidgetPane");
  });

  test("2) Has bridge script with piclawWidget", () => {
    const src = read(widgetPaneUrl);
    expect(src).toContain("piclawWidget");
    expect(src).toContain("submit");
    expect(src).toContain("close");
    expect(src).toContain("requestRefresh");
  });

  test("3) Listens for all widget events", () => {
    const src = read(widgetPaneUrl);
    expect(src).toContain("piclaw:widget-open");
    expect(src).toContain("piclaw:widget-delta");
    expect(src).toContain("piclaw:widget-final");
    expect(src).toContain("piclaw:widget-close");
    expect(src).toContain("piclaw:widget-error");
  });

  test("4) Renders sandboxed iframe with srcDoc", () => {
    const src = read(widgetPaneUrl);
    expect(src).toContain("sandbox=");
    expect(src).toContain("srcDoc=");
  });

  test("5) Has close button and backdrop", () => {
    const src = read(widgetPaneUrl);
    expect(src).toContain("widget-pane__close");
    expect(src).toContain("widget-pane__backdrop");
  });

  test("6) WidgetPane renders in App.tsx tab viewport (not ChatPanel)", () => {
    const appUrl = new URL("../../../web/frontend/src/App.tsx", import.meta.url);
    const appSrc = readFileSync(appUrl, "utf8");
    expect(appSrc).toContain("WidgetPane");
    expect(appSrc).toContain("tabMode");
  });

  test("7) ChatPanel handles widget submissions", () => {
    const src = read(chatPanelUrl);
    expect(src).toContain("piclaw:widget-submission");
  });

  test("8) useTimelineStream dispatches widget SSE events", () => {
    const src = read(streamUrl);
    expect(src).toContain("generated_widget_open");
    expect(src).toContain("generated_widget_final");
    expect(src).toContain("piclaw:widget-open");
    expect(src).toContain("piclaw:widget-final");
  });

  test("9) CSS has widget pane styles", () => {
    const css = read(cssUrl);
    expect(css).toContain(".widget-pane");
    expect(css).toContain(".widget-pane__frame");
    expect(css).toContain(".widget-pane__backdrop");
  });
});
