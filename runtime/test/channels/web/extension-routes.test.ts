import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import "../../helpers.js";
import {
  clearExtensionRoutes,
  freezeExtensionRoutes,
  getRegisteredRoutes,
  handleExtensionRoutes,
  registerExtensionRoute,
} from "../../../src/channels/web/http/extension-routes.js";

beforeEach(() => {
  clearExtensionRoutes();
});

afterEach(() => {
  clearExtensionRoutes();
});

describe("extension route registry", () => {
  test("dedupes repeated registrations for the same prefix and extension path", async () => {
    const first = registerExtensionRoute("/example-addon", () => new Response("first"), "/ext/example-addon");
    const second = registerExtensionRoute("/example-addon", () => new Response("second"), "/ext/example-addon");

    expect(first).toBe("created");
    expect(second).toBe("updated");
    expect(getRegisteredRoutes()).toMatchObject([
      { prefix: "/example-addon", extensionPath: "/ext/example-addon" },
    ]);

    const response = await handleExtensionRoutes(new Request("http://localhost/example-addon/edit"), "/example-addon/edit");
    expect(response).not.toBeNull();
    expect(await response!.text()).toBe("second");
  });

  test("keeps distinct registrations when extension paths differ", () => {
    registerExtensionRoute("/example-addon", () => new Response("first"), "/ext/example-addon-a");
    registerExtensionRoute("/example-addon", () => new Response("second"), "/ext/example-addon-b");

    expect(getRegisteredRoutes()).toMatchObject([
      { prefix: "/example-addon", extensionPath: "/ext/example-addon-a" },
      { prefix: "/example-addon", extensionPath: "/ext/example-addon-b" },
    ]);
  });

  test("allows updates to an already-registered route after freeze", async () => {
    registerExtensionRoute("/example-addon", () => new Response("first"), "/ext/example-addon");
    freezeExtensionRoutes();

    const updated = registerExtensionRoute("/example-addon", () => new Response("second"), "/ext/example-addon");

    expect(updated).toBe("updated");
    const response = await handleExtensionRoutes(new Request("http://localhost/example-addon"), "/example-addon");
    expect(await response?.text()).toBe("second");
  });
});
