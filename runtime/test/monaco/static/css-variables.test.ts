// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const cssDir = resolve(import.meta.dir, "../../../web/static/css");
const shellCssPath = resolve(cssDir, "shell.css");
const src = () => readFileSync(shellCssPath, "utf8");

describe("CSS variable definitions (#229)", () => {
  test("shell.css exists", () => {
    expect(existsSync(shellCssPath)).toBe(true);
  });

  // Core text variables
  test("defines --text variable in :root", () => {
    expect(src()).toContain("--text:");
  });

  test("defines --text-muted variable in :root", () => {
    expect(src()).toContain("--text-muted:");
  });

  test("defines --text-soft variable in :root", () => {
    expect(src()).toContain("--text-soft:");
  });

  // Core background variables
  test("defines --bg variable in :root", () => {
    expect(src()).toContain("--bg:");
  });

  test("defines --bg-sidebar variable", () => {
    expect(src()).toContain("--bg-sidebar:");
  });

  test("defines --bg-terminal variable", () => {
    expect(src()).toContain("--bg-terminal:");
  });

  test("defines --bg-status variable", () => {
    expect(src()).toContain("--bg-status:");
  });

  // UI variables
  test("defines --border variable", () => {
    expect(src()).toContain("--border:");
  });

  test("defines --accent variable", () => {
    expect(src()).toContain("--accent:");
  });

  // State variables
  test("defines --success variable", () => {
    expect(src()).toContain("--success:");
  });

  test("defines --warning variable", () => {
    expect(src()).toContain("--warning:");
  });

  test("defines --error variable", () => {
    expect(src()).toContain("--error:");
  });

  // Dark theme (default) - Catppuccin Mocha
  test("dark theme --bg is Catppuccin Mocha base (#1e1e2e)", () => {
    const css = src();
    // The first :root block defines dark theme
    const rootBlock = css.split("@media")[0];
    expect(rootBlock).toContain("#1e1e2e");
  });

  test("dark theme --text is Catppuccin Mocha text (#cdd6f4)", () => {
    const rootBlock = src().split("@media")[0];
    expect(rootBlock).toContain("#cdd6f4");
  });

  test("dark theme --accent is Catppuccin Mocha blue (#89b4fa)", () => {
    const rootBlock = src().split("@media")[0];
    expect(rootBlock).toContain("#89b4fa");
  });

  // Light theme media query
  test("has prefers-color-scheme: light media query", () => {
    expect(src()).toContain("prefers-color-scheme: light");
  });

  test("light theme redefines --bg", () => {
    const mediaBlock = src().split("@media (prefers-color-scheme: light)")[1];
    expect(mediaBlock).toContain("--bg:");
  });

  test("light theme --text is dark (#1e1e1e)", () => {
    const mediaBlock = src().split("@media (prefers-color-scheme: light)")[1];
    expect(mediaBlock).toContain("#1e1e1e");
  });

  test("light theme redefines --text-muted", () => {
    const mediaBlock = src().split("@media (prefers-color-scheme: light)")[1];
    expect(mediaBlock).toContain("--text-muted:");
  });

  test("light theme redefines --border", () => {
    const mediaBlock = src().split("@media (prefers-color-scheme: light)")[1];
    expect(mediaBlock).toContain("--border:");
  });

  // Syntax highlighting
  test("defines --syn-keyword for syntax highlighting", () => {
    expect(src()).toContain("--syn-keyword:");
  });

  test("defines --syn-string for syntax highlighting", () => {
    expect(src()).toContain("--syn-string:");
  });

  test("defines --syn-comment for syntax highlighting", () => {
    expect(src()).toContain("--syn-comment:");
  });

  // Usage spot check — variables used in rules
  test("body uses var(--bg) for background", () => {
    expect(src()).toContain("background: var(--bg)");
  });

  test("body uses var(--text) for color", () => {
    expect(src()).toContain("color: var(--text)");
  });

  test("uses var(--border) for borders", () => {
    expect(src()).toContain("var(--border)");
  });

  test("uses var(--accent) in rule definitions", () => {
    expect(src()).toContain("var(--accent)");
  });

  // Handle variables (for resize handles)
  test("defines --handle variable", () => {
    expect(src()).toContain("--handle:");
  });

  test("defines --handle-hover variable", () => {
    expect(src()).toContain("--handle-hover:");
  });

  // Input variables
  test("defines --input-bg variable", () => {
    expect(src()).toContain("--input-bg:");
  });

  test("defines --input-border variable", () => {
    expect(src()).toContain("--input-border:");
  });
});
