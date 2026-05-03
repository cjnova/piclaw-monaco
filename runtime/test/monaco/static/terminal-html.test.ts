import { test, expect } from "bun:test";
import { readFileSync } from "fs";
import { resolve } from "path";

const TERMINAL_HTML = readFileSync(resolve(import.meta.dir, "../../../web/static/terminal.html"), "utf8");

test("terminal.html generates and sends client ID for auth", () => {
  // Regression #215: missing client parameter caused 401
  expect(TERMINAL_HTML).toContain("getTerminalClientId");
  expect(TERMINAL_HTML).toContain("piclaw-terminal-client-id");
  expect(TERMINAL_HTML).toContain("client=${clientId}");
});

test("terminal.html sends client ID on WebSocket URL", () => {
  expect(TERMINAL_HTML).toContain("client=' + clientId");
});

test("terminal.html imports ghostty-web from vendor path", () => {
  expect(TERMINAL_HTML).toContain("from '/static/js/vendor/ghostty-web.js'");
});

test("terminal.html does NOT have a CSP meta tag", () => {
  expect(TERMINAL_HTML).not.toContain('http-equiv="Content-Security-Policy"');
});
