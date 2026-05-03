// Tests written by gpt-5.3-codex
import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dir, "../../../../");
const workspaceSectionPath = resolve(repoRoot, "runtime/web/frontend/src/panels/settings/WorkspaceSection.tsx");
const shellCssPath = resolve(repoRoot, "runtime/web/static/css/shell.css");

describe("settings + css cleanup regression (#177 + #193)", () => {
  it("WorkspaceSection.tsx does not include removed workspace settings keys", () => {
    const source = readFileSync(workspaceSectionPath, "utf8");
    expect(source).not.toContain("piclaw-ws-refresh-interval");
    expect(source).not.toContain("piclaw-ws-folder-preview-depth");
  });

  it("shell.css does not include dead selectors", () => {
    const css = readFileSync(shellCssPath, "utf8");
    for (const sel of [".shell-root", ".shell-content", ".chat-messages", ".chat__empty", ".workspace__section-empty", ".addons-panel__section-header", ".scratchpad-panel__checkbox", ".settings-panel__model-row"]) {
      expect(css).not.toContain(sel);
    }
  });

  it("shell.css still includes active selectors", () => {
    const css = readFileSync(shellCssPath, "utf8");
    for (const sel of [".app-layout", ".message-list", ".activity-bar", ".model-badge"]) {
      expect(css).toContain(sel);
    }
  });
});
