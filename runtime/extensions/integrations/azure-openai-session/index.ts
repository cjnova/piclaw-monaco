import type { ExtensionAPI, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";

let cachedProviderModule: Promise<typeof import("../azure-openai.ts")> | null = null;
let cachedImagesModule: Promise<typeof import("../azure-openai-images.ts")> | null = null;

async function loadProviderModule(): Promise<typeof import("../azure-openai.ts")> {
  if (!cachedProviderModule) cachedProviderModule = import("../azure-openai.ts");
  return await cachedProviderModule;
}

async function loadImagesModule(): Promise<typeof import("../azure-openai-images.ts")> {
  if (!cachedImagesModule) cachedImagesModule = import("../azure-openai-images.ts");
  return await cachedImagesModule;
}

let loadProviderModuleImpl = loadProviderModule;
let loadImagesModuleImpl = loadImagesModule;

export function setAzureOpenAiSessionModuleLoadersForTests(loaders?: {
  provider?: (() => Promise<typeof import("../azure-openai.ts")>) | null;
  images?: (() => Promise<typeof import("../azure-openai-images.ts")>) | null;
} | null): void {
  loadProviderModuleImpl = loaders?.provider ?? loadProviderModule;
  loadImagesModuleImpl = loaders?.images ?? loadImagesModule;
  if (!loaders) {
    cachedProviderModule = null;
    cachedImagesModule = null;
  }
}

function isStaleExtensionContextError(error: unknown): boolean {
  const text = error instanceof Error ? error.message : String(error || "");
  return /extension ctx is stale after session replacement or reload/i.test(text);
}

export default function register(pi: ExtensionAPI) {
  pi.on("context", async (event, ctx) => {
    let currentModel: unknown;
    try {
      currentModel = (ctx as { model?: unknown }).model;
    } catch (error) {
      if (isStaleExtensionContextError(error)) return;
      throw error;
    }

    const mod = await loadProviderModuleImpl();
    return await mod.repairAzureContext(event as { messages: any[] }, { model: currentModel });
  });

  pi.registerCommand("image", {
    description: "Generate an image with Azure OpenAI",
    handler: async (input, ctx) => {
      const mod = await loadImagesModuleImpl();
      const messenger = (ctx as ExtensionCommandContext | undefined) ?? pi;
      await mod.executeAzureImageCommand(messenger, input || "");
    },
  });

  pi.registerCommand("flux", {
    description: "Generate an image with Azure Foundry (FLUX.2-pro)",
    handler: async (input, ctx) => {
      const mod = await loadImagesModuleImpl();
      const messenger = (ctx as ExtensionCommandContext | undefined) ?? pi;
      await mod.executeAzureFluxCommand(messenger, input || "");
    },
  });
}
