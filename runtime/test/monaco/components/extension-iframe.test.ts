// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const appDir = resolve(import.meta.dir, "../../../web/frontend/src/app");
const extensionFramePath = resolve(appDir, "ExtensionFrame.tsx");
const src = () => readFileSync(extensionFramePath, "utf8");

describe("ExtensionFrame component (#229)", () => {
  test("ExtensionFrame.tsx exists", () => {
    expect(existsSync(extensionFramePath)).toBe(true);
  });

  test("exports ExtensionFrame function", () => {
    expect(src()).toContain("export function ExtensionFrame");
  });

  test("iframe has sandbox attribute for security", () => {
    expect(src()).toContain("sandbox=");
    expect(src()).toContain("allow-same-origin");
    expect(src()).toContain("allow-scripts");
  });

  test("iframe does NOT have CSP attribute (regression #245)", () => {
    // csp attribute was removed per #245 — should not be present
    expect(src()).not.toContain(" csp=");
  });

  test("has back button to return to chat", () => {
    expect(src()).toContain("Back to Chat");
    expect(src()).toContain("onBack");
  });

  test("handles PDF content via <object> element", () => {
    expect(src()).toContain("__pdf__");
    expect(src()).toContain("<object");
    expect(src()).toContain("application/pdf");
  });

  test("handles markdown HTML via dangerouslySetInnerHTML", () => {
    expect(src()).toContain("dangerouslySetInnerHTML");
    expect(src()).toContain("extensionPageHtml");
  });

  test("has extension-frame CSS class namespace", () => {
    expect(src()).toContain("extension-frame");
  });

  test("has extension-frame__header and title", () => {
    expect(src()).toContain("extension-frame__header");
    expect(src()).toContain("extension-frame__title");
  });

  test("iframe has title attribute for accessibility", () => {
    expect(src()).toContain("title={extensionPageName");
  });
});
