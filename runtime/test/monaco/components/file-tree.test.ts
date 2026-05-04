// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const srcDir = resolve(import.meta.dir, "../../../web/frontend/src/components");
const fileTreePath = resolve(srcDir, "FileTree.tsx");
const src = () => readFileSync(fileTreePath, "utf8");

describe("FileTree component (#229)", () => {
  test("FileTree.tsx exists", () => {
    expect(existsSync(fileTreePath)).toBe(true);
  });

  test("exports FileTree function", () => {
    expect(src()).toContain("export function FileTree");
  });

  test("exports TreeNode type", () => {
    expect(src()).toContain("export type { TreeNode }");
  });

  test("handles folder expand/collapse via toggleExpanded", () => {
    expect(src()).toContain("toggleExpanded");
    expect(src()).toContain("onToggleExpand");
  });

  test("uses localStorage for expanded paths persistence", () => {
    const content = src();
    expect(content).toContain("localStorage.getItem");
    expect(content).toContain("localStorage.setItem");
  });

  test("persists expanded paths with piclaw:tree-expanded key", () => {
    expect(src()).toContain("piclaw:tree-expanded");
  });

  test("persists selected path with piclaw:tree-selected key", () => {
    expect(src()).toContain("piclaw:tree-selected");
  });

  test("shows file size metadata via formatBytes", () => {
    expect(src()).toContain("formatBytes");
  });

  test("imports getChatJid for per-chat localStorage keys", () => {
    expect(src()).toContain("getChatJid");
  });

  test("renders file-tree__item--dir class for directories", () => {
    expect(src()).toContain("file-tree__item--dir");
  });

  test("renders file-tree__item--file class for files", () => {
    expect(src()).toContain("file-tree__item--file");
  });

  test("renders file-tree__item--selected for active item", () => {
    expect(src()).toContain("file-tree__item--selected");
  });

  test("uses codicon classes for file/folder icons", () => {
    expect(src()).toContain("codicon");
  });

  test("uses folder-opened codicon for expanded folder", () => {
    expect(src()).toContain("folder-opened");
  });

  test("fetches from /workspace/tree endpoint", () => {
    expect(src()).toContain("/workspace/tree");
  });

  test("handles loading state", () => {
    expect(src()).toContain("Loading");
  });

  test("handles error state with retry button", () => {
    expect(src()).toContain("file-tree__retry");
    expect(src()).toContain("Retry");
  });

  test("has role=tree accessibility attribute", () => {
    expect(src()).toContain('role="tree"');
  });

  test("has role=treeitem accessibility attribute", () => {
    expect(src()).toContain('role="treeitem"');
  });

  test("handles empty folder state", () => {
    expect(src()).toContain("Empty folder");
  });
});
