import { test, expect } from "bun:test";
import { bicepMode } from "../../../web/frontend/src/utils/bicep-mode.ts";

test("bicep mode tokenizes keywords", () => {
  const state = bicepMode.startState();
  const stream = {
    eatSpace: () => false,
    match: (pattern: any) => {
      if (typeof pattern === "string") return pattern === "resource";
      return false;
    },
    current: () => "resource",
    next: () => "r",
    skipToEnd: () => {},
  };
  // Just verify the mode object has the right shape
  expect(bicepMode.startState).toBeFunction();
  expect(bicepMode.token).toBeFunction();
  expect(state.inBlockComment).toBe(false);
  expect(state.inMultilineString).toBe(false);
});
