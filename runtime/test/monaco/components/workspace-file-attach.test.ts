/**
 * Tests for #269: workspace file attach from sidebar.
 * Validates the integration between FileTree, WorkspaceActions, and ChatPanel
 * via the piclaw:file-attach custom event.
 */
import { describe, test, expect } from "bun:test";
import { readFileSync } from "node:fs";

const CHAT_PANEL = readFileSync("runtime/web/frontend/src/panels/ChatPanel.tsx", "utf8");
const WORKSPACE_ACTIONS = readFileSync("runtime/web/frontend/src/panels/workspace/WorkspaceActions.tsx", "utf8");
const SHELL_CSS = readFileSync("runtime/web/static/css/shell.css", "utf8");

describe("Workspace file attach (#269)", () => {
  test("ChatPanel listens for piclaw:file-attach event", () => {
    expect(CHAT_PANEL).toContain('addEventListener("piclaw:file-attach"');
  });

  test("ChatPanel Attachment interface has isFileRef flag", () => {
    expect(CHAT_PANEL).toContain("isFileRef?: boolean");
    expect(CHAT_PANEL).toContain("path?: string");
  });

  test("ChatPanel skips upload for file refs", () => {
    expect(CHAT_PANEL).toContain("if (att.isFileRef) continue;");
  });

  test("ChatPanel appends Files block to message content for file refs", () => {
    expect(CHAT_PANEL).toContain("Files:\\n${filesBlock}");
  });

  test("ChatPanel deduplicates file refs by path", () => {
    expect(CHAT_PANEL).toContain("prev.some((a) => a.isFileRef && a.path === detail.path)");
  });

  test("ChatPanel file ref pill has distinct CSS class", () => {
    expect(CHAT_PANEL).toContain("chat__attachment-pill--fileref");
  });

  test("ChatPanel file ref pill shows file icon", () => {
    expect(CHAT_PANEL).toContain("codicon codicon-file");
  });

  test("WorkspaceActions has Attach to chat button", () => {
    expect(WORKSPACE_ACTIONS).toContain("Attach to chat");
    expect(WORKSPACE_ACTIONS).toContain("codicon codicon-attach");
  });

  test("WorkspaceActions dispatches piclaw:file-attach event", () => {
    expect(WORKSPACE_ACTIONS).toContain('piclaw:file-attach');
    expect(WORKSPACE_ACTIONS).toContain("detail: { path: node.path, name: node.name");
  });

  test("WorkspaceActions shows status flash on attach", () => {
    expect(WORKSPACE_ACTIONS).toContain("Attached ${node.name} to chat");
  });

  test("CSS has file ref pill variant with green tint", () => {
    expect(SHELL_CSS).toContain(".chat__attachment-pill--fileref");
    expect(SHELL_CSS).toContain("rgba(166, 227, 161, 0.15)");
  });
});
