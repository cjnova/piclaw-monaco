import { expect, test } from "bun:test";
import { COMMAND_PARAMS, getCommandParam } from "../../web/frontend/src/components/command-palette-params";

test("command palette parameter metadata matches the backend command surface", () => {
  expect(getCommandParam("/compact")?.type).toBe("text");
  expect(getCommandParam("/tree")?.type).toBe("text");
  expect(getCommandParam("/auto-compact")?.type).toBe("autocomplete");
  expect(getCommandParam("/auto-compact")?.options).toEqual(["on", "off"]);
  expect(getCommandParam("/auto-retry")?.options).toEqual(["on", "off"]);
  expect(getCommandParam("/cycle-model")?.options).toEqual(["forward", "backward"]);
  expect(getCommandParam("/new-session")?.type).toBe("text");
  expect(getCommandParam("/fork")?.placeholder).toBe("Entry ID");
  expect(getCommandParam("/session-rotate")?.type).toBe("text");
  expect(getCommandParam("/switch-session")?.type).toBe("text");
  expect(getCommandParam("/search")?.type).toBe("text");
  expect(getCommandParam("/effort")?.type).toBe("autocomplete");
  expect(getCommandParam("/passkeys")?.type).toBe("text");
  expect(getCommandParam("!")?.type).toBe("text");
  expect(COMMAND_PARAMS["/fork"]?.placeholder).toBe("Entry ID");
});
