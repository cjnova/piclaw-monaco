import { describe, expect, test } from "bun:test";
import { AuthStorage, ModelRegistry } from "@mariozechner/pi-coding-agent";

import { PROVIDER_DEFS, getProviderDefs, getProviderDisplayName } from "../../src/agent-control/provider-defs.js";

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

  test("tracks current built-in providers and drops removed Google subscription providers", () => {
    const ids = getProviderDefs().map((entry) => entry.id);
    expect(ids).toContain("cloudflare-ai-gateway");
    expect(ids).toContain("cloudflare-workers-ai");
    expect(ids).toContain("moonshotai");
    expect(ids).toContain("moonshotai-cn");
    expect(ids).not.toContain("google-gemini-cli");
    expect(ids).not.toContain("google-antigravity");
    expect(ids).not.toContain("antigravity");
  });

  test("can enrich provider names from ModelRegistry when available", () => {
    const registry = ModelRegistry.inMemory(AuthStorage.inMemory()) as ModelRegistry & { getProviderDisplayName?: (provider: string) => string };
    const defs = getProviderDefs(registry, registry.authStorage);
    expect(defs.some((entry) => entry.id === "amazon-bedrock")).toBe(true);
    expect(getProviderDisplayName("cloudflare-ai-gateway", registry)).toBe("Cloudflare AI Gateway");
  });
});
