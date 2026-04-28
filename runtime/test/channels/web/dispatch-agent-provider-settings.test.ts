import { afterEach, describe, expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import { createTempWorkspace, setEnv } from "../../helpers.js";
import { handleAgentRoutes } from "../../../src/channels/web/http/dispatch-agent.js";

let restoreEnv: (() => void) | null = null;
let cleanupWorkspace: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  cleanupWorkspace?.();
  restoreEnv = null;
  cleanupWorkspace = null;
});

describe("dispatch-agent settings-data providers", () => {
  test("marks custom model providers as configured from models.json", async () => {
    const ws = createTempWorkspace("piclaw-dispatch-agent-settings-");
    cleanupWorkspace = ws.cleanup;
    const piAgentDir = join(ws.workspace, ".pi-agent-test");
    mkdirSync(piAgentDir, { recursive: true });
    writeFileSync(join(piAgentDir, "models.json"), JSON.stringify({
      providers: {
        "opencode-zen": {
          baseUrl: "https://opencode.ai/zen",
          api: "openai-completions",
          apiKey: "oc-test",
          models: [{ id: "big-pickle" }],
        },
      },
    }, null, 2));

    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_PI_AGENT_DIR: piAgentDir,
    });

    const channel = {
      json: (body: unknown, status = 200) => new Response(JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json" },
      }),
    } as any;

    const url = new URL("http://localhost/agent/settings-data");
    const response = await handleAgentRoutes(channel, new Request(url), "/agent/settings-data", url);
    expect(response).not.toBeNull();

    const payload = await response!.json() as { providers?: Array<Record<string, unknown>> };
    const provider = payload.providers?.find((entry) => entry.id === "opencode-zen");
    expect(provider).toBeDefined();
    expect(provider?.configured).toBe(true);
    expect(provider?.authType).toBe("custom");
    expect(provider?.hasApiKey).toBe(false);
    expect(provider?.isCustom).toBe(true);
  });
});
