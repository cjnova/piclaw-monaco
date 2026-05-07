import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";

import { shouldShowComposeAgentAffordance } from "../../web/src/ui/compose-layout.js";

const responsiveCss = readFileSync(path.join(import.meta.dir, "../../web/static/css/responsive.css"), "utf8");

test("shows compose agent affordance when the footer is wide enough", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 760,
    visibleAgentCount: 2,
    hasContextIndicator: true,
  })).toBe(true);
});

test("hides compose agent affordance when the footer is too narrow", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 540,
    visibleAgentCount: 2,
    hasContextIndicator: true,
  })).toBe(false);
});

test("hides compose agent affordance when there are no visible agents", () => {
  expect(shouldShowComposeAgentAffordance({
    footerWidth: 900,
    visibleAgentCount: 0,
    hasContextIndicator: true,
  })).toBe(false);
});

test("mobile compose layout does not reserve indicator width inside the textarea", () => {
  expect(responsiveCss).toContain(".compose-session-trigger-top + .compose-input-main textarea");
  expect(responsiveCss).toContain("padding-right: calc(var(--spacing-xs) + 28px);");
  expect(responsiveCss).toContain("position: static;");
});
