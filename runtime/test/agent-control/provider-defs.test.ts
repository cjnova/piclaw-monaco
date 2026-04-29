import { describe, expect, test } from "bun:test";

import { PROVIDER_DEFS } from "../../src/agent-control/provider-defs.js";

describe("provider defs", () => {
  test("OpenCode ZEN is exposed as a custom provider only", () => {
    const provider = PROVIDER_DEFS.find((entry) => entry.id === "opencode-zen");
    expect(provider).toBeDefined();
    expect(provider?.name).toBe("OpenCode ZEN");
    expect(provider?.isCustom).toBe(true);
    expect(provider?.hasApiKey).toBe(false);
    expect(provider?.customApi).toBe("openai-completions");
    expect(provider?.customFields?.map((field) => field.key)).toEqual(["baseUrl", "apiKey", "modelId", "modelIds"]);
  });
});
