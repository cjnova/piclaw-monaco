import { afterEach, describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

import azureOpenAiSessionExtension, {
  setAzureOpenAiSessionModuleLoadersForTests,
} from "../../extensions/integrations/azure-openai-session/index.ts";

type CommandDef = { name: string; handler: (...args: any[]) => Promise<any> | any };

afterEach(() => {
  setAzureOpenAiSessionModuleLoadersForTests(null);
});

describe("azure-openai session shim", () => {
  test("registers the lightweight context hook plus image/flux commands", () => {
    const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
    const commands = new Map<string, CommandDef>();

    const api: ExtensionAPI = {
      on(event: string, handler: (...args: any[]) => any) { handlers.push({ event, handler }); },
      registerTool() {},
      registerCommand(name: string, command: any) { commands.set(name, { name, ...command }); },
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as any,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    azureOpenAiSessionExtension(api);

    expect(handlers.some((entry) => entry.event === "context")).toBe(true);
    expect(commands.has("image")).toBe(true);
    expect(commands.has("flux")).toBe(true);
    expect(handlers.some((entry) => entry.event === "session_start")).toBe(false);
    expect(handlers.some((entry) => entry.event === "session_shutdown")).toBe(false);
  });

  test("captures context model before lazy provider import", async () => {
    const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
    let stale = false;
    let observedModel: unknown = null;

    setAzureOpenAiSessionModuleLoadersForTests({
      provider: async () => {
        stale = true;
        return {
          repairAzureContext: async (_event: unknown, ctx: { model?: unknown }) => {
            observedModel = ctx.model;
            return undefined;
          },
        } as any;
      },
    });

    const api: ExtensionAPI = {
      on(event: string, handler: (...args: any[]) => any) { handlers.push({ event, handler }); },
      registerTool() {},
      registerCommand() {},
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as any,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    const model = { id: "azure-test" };
    const ctx = {
      get model() {
        if (stale) throw new Error("stale ctx access");
        return model;
      },
    };

    azureOpenAiSessionExtension(api);
    await handlers.find((entry) => entry.event === "context")?.handler({ messages: [] }, ctx);

    expect(observedModel).toBe(model);
  });

  test("ignores stale context getters during context replay", async () => {
    const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
    let providerLoaded = 0;

    setAzureOpenAiSessionModuleLoadersForTests({
      provider: async () => {
        providerLoaded += 1;
        return {
          repairAzureContext: async () => ({ messages: [] }),
        } as any;
      },
    });

    const api: ExtensionAPI = {
      on(event: string, handler: (...args: any[]) => any) { handlers.push({ event, handler }); },
      registerTool() {},
      registerCommand() {},
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as any,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    const ctx = {
      get model() {
        throw new Error("This extension ctx is stale after session replacement or reload.");
      },
    };

    azureOpenAiSessionExtension(api);
    await handlers.find((entry) => entry.event === "context")?.handler({ messages: [] }, ctx);

    expect(providerLoaded).toBe(0);
  });

  test("keeps provider and image modules lazy until the matching hook runs", async () => {
    const handlers: Array<{ event: string; handler: (...args: any[]) => any }> = [];
    const commands = new Map<string, CommandDef>();
    const calls = {
      provider: 0,
      images: 0,
      repaired: 0,
      image: [] as string[],
      flux: [] as string[],
      imageMessenger: null as unknown,
      fluxMessenger: null as unknown,
    };

    setAzureOpenAiSessionModuleLoadersForTests({
      provider: async () => ({
        repairAzureContext: async () => {
          calls.provider += 1;
          calls.repaired += 1;
          return { messages: [] };
        },
      } as any),
      images: async () => ({
        executeAzureImageCommand: async (messenger: unknown, input: string) => {
          calls.images += 1;
          calls.imageMessenger = messenger;
          calls.image.push(input);
        },
        executeAzureFluxCommand: async (messenger: unknown, input: string) => {
          calls.images += 1;
          calls.fluxMessenger = messenger;
          calls.flux.push(input);
        },
      } as any),
    });

    const api: ExtensionAPI = {
      on(event: string, handler: (...args: any[]) => any) { handlers.push({ event, handler }); },
      registerTool() {},
      registerCommand(name: string, command: any) { commands.set(name, { name, ...command }); },
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as any,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    azureOpenAiSessionExtension(api);

    expect(calls).toEqual({
      provider: 0,
      images: 0,
      repaired: 0,
      image: [],
      flux: [],
      imageMessenger: null,
      fluxMessenger: null,
    });

    await handlers.find((entry) => entry.event === "context")?.handler({ messages: [] }, { model: undefined });
    expect(calls.provider).toBe(1);
    expect(calls.repaired).toBe(1);
    expect(calls.images).toBe(0);

    const commandCtx = { sendMessage() {} };

    await commands.get("image")?.handler("draw cat", commandCtx);
    expect(calls.images).toBe(1);
    expect(calls.image).toEqual(["draw cat"]);
    expect(calls.flux).toEqual([]);
    expect(calls.imageMessenger).toBe(commandCtx);

    await commands.get("flux")?.handler("draw dog", commandCtx);
    expect(calls.images).toBe(2);
    expect(calls.image).toEqual(["draw cat"]);
    expect(calls.flux).toEqual(["draw dog"]);
    expect(calls.fluxMessenger).toBe(commandCtx);
  });
});
