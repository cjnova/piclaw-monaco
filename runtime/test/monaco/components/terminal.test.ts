// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const appDir = resolve(import.meta.dir, "../../../web/frontend/src/app");
const staticDir = resolve(import.meta.dir, "../../../web/static");
const cssDir = resolve(import.meta.dir, "../../../web/static/css");

const terminalComponentPath = resolve(appDir, "TerminalPanel.tsx");
const terminalHtmlPath = resolve(staticDir, "terminal.html");
const shellCssPath = resolve(cssDir, "shell.css");

describe("Terminal component and static files (#229)", () => {
  test("TerminalPanel.tsx exists in app dir", () => {
    expect(existsSync(terminalComponentPath)).toBe(true);
  });

  test("TerminalComponent.tsx exists in components dir", () => {
    const compPath = resolve(appDir, "../components/TerminalComponent.tsx");
    expect(existsSync(compPath)).toBe(true);
  });

  test("TerminalComponent.tsx exports TerminalComponent", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("export function TerminalComponent");
  });

  test("TerminalComponent.tsx uses client ID for session auth", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("piclaw-terminal-client-id");
    expect(src).toContain("getTerminalClientId");
  });

  test("TerminalComponent.tsx fetches /terminal/session with client param", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("/terminal/session?client=");
  });

  test("TerminalComponent.tsx WebSocket URL includes client parameter", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("client=${clientId}");
  });

  test("TerminalComponent.tsx uses ghostty-web terminal", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("ghostty-web");
  });

  test("TerminalComponent.tsx has Catppuccin Mocha theme", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("CATPPUCCIN_MOCHA");
  });

  test("terminal.html exists", () => {
    expect(existsSync(terminalHtmlPath)).toBe(true);
  });

  test("terminal.html has client parameter handling", () => {
    const html = readFileSync(terminalHtmlPath, "utf8");
    expect(html).toContain("piclaw-terminal-client-id");
  });

  test("terminal.html sends ?client= on /terminal/session", () => {
    const html = readFileSync(terminalHtmlPath, "utf8");
    expect(html).toContain("/terminal/session?client=");
  });

  test("terminal.html WebSocket URL includes client parameter", () => {
    const html = readFileSync(terminalHtmlPath, "utf8");
    expect(html).toContain("client=' + clientId");
  });

  test("terminal.html has no CSP meta tag (regression #245)", () => {
    const html = readFileSync(terminalHtmlPath, "utf8");
    expect(html).not.toContain('http-equiv="Content-Security-Policy"');
  });

  test("shell.css has terminal panel styles", () => {
    const css = readFileSync(shellCssPath, "utf8");
    expect(css).toContain("terminal");
  });

  test("TerminalComponent.tsx uses sessionStorage for client ID persistence", () => {
    const src = readFileSync(resolve(appDir, "../components/TerminalComponent.tsx"), "utf8");
    expect(src).toContain("sessionStorage");
  });
});
