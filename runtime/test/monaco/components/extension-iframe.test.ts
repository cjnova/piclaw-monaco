// Tests written by gpt-5.3-codex
import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";

const extensionFramePath = new URL("../../../web/frontend/src/app/ExtensionFrame.tsx", import.meta.url);
const chatPanelPath = new URL("../../../web/frontend/src/panels/ChatPanel.tsx", import.meta.url);

describe("extension iframe regression (#245)", () => {
  it("ExtensionFrame.tsx does not include experimental iframe csp attribute", () => {
    const source = readFileSync(extensionFramePath, "utf8");
    expect(source).not.toContain("csp:");
  });

  it("ChatPanel.tsx does not include experimental iframe csp attribute", () => {
    const source = readFileSync(chatPanelPath, "utf8");
    expect(source).not.toContain("csp:");
  });

  it('ExtensionFrame.tsx keeps sandbox with allow-popups', () => {
    const source = readFileSync(extensionFramePath, "utf8");
    expect(source).toContain('sandbox="allow-same-origin allow-scripts allow-forms allow-popups"');
  });

  it("ChatPanel.tsx keeps sandbox with allow-popups", () => {
    const source = readFileSync(chatPanelPath, "utf8");
    expect(source).toMatch(/sandbox="[^"]*allow-popups[^"]*"/);
  });
});
