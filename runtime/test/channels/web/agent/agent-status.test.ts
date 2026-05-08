import { describe, expect, test } from "bun:test";
import {
  handleAgentContextRequest,
  handleAgentModelsRequest,
  handleAgentStatusRequest,
  type AgentStatusContext,
} from "../../../../src/channels/web/agent/agent-status.js";
import { createJsonResponder } from "../helpers/http.js";

function createContext(overrides: Partial<AgentStatusContext> = {}): AgentStatusContext {
  return {
    defaultChatJid: "web:default",
    json: createJsonResponder(),
    getAgentStatus: () => null,
    recoverStaleInflightRun: () => false,
    getBuffer: () => undefined,
    getContextUsageForChat: async () => null,
    getAvailableModels: async () => ({ models: [] }),
    getProviderReadyCompletedForInstance: () => false,
    ...overrides,
  };
}

describe("web agent status helpers", () => {
  test("handleAgentStatusRequest returns idle status when no active agent", async () => {
    const req = new Request("https://example.com/agent/status");
    const res = handleAgentStatusRequest(req, createContext());

    expect(res.status).toBe(200);
    expect(res.headers.get("Server-Timing")).toContain("agent_status;dur=");
    expect(await res.json()).toEqual({
      status: "idle",
      state: "idle",
      chat_jid: "web:default",
      data: null,
      addon_api: { degraded: false, entries: [] },
    });
  });

  test("handleAgentStatusRequest triggers stale inflight recovery when no active status exists", async () => {
    const req = new Request("https://example.com/agent/status?chat_jid=web:ux");
    const calls: Array<{ chatJid: string; hasActiveStatus?: boolean }> = [];
    const res = handleAgentStatusRequest(req, createContext({
      getAgentStatus: () => null,
      recoverStaleInflightRun: (chatJid, options) => {
        calls.push({ chatJid, hasActiveStatus: options?.hasActiveStatus });
        return true;
      },
    }));

    expect(res.status).toBe(200);
    expect(calls).toEqual([{ chatJid: "web:ux", hasActiveStatus: false }]);
    expect(await res.json()).toEqual({
      status: "idle",
      state: "idle",
      chat_jid: "web:ux",
      data: null,
      addon_api: { degraded: false, entries: [] },
    });
  });

  test("handleAgentStatusRequest includes thought/draft buffers when available", async () => {
    const req = new Request("https://example.com/agent/status?chat_jid=web:custom");
    const res = handleAgentStatusRequest(
      req,
      createContext({
        getAgentStatus: (chatJid) => ({ chatJid, turn_id: "turn-1", state: "thinking" }),
        getBuffer: (_turnId, panel) =>
          panel === "thought"
            ? { text: "thought text", totalLines: 2, updatedAt: 1 }
            : { text: "draft text", totalLines: 1, updatedAt: 1 },
      })
    );

    expect(res.headers.get("Server-Timing")).toContain("agent_status;dur=");
    const body = await res.json();
    expect(body.status).toBe("active");
    expect(body.state).toBe("thinking");
    expect(body.chat_jid).toBe("web:custom");
    expect(body.data.chatJid).toBe("web:custom");
    expect(body.thought).toEqual({ text: "thought text", totalLines: 2 });
    expect(body.draft).toEqual({ text: "draft text", totalLines: 1 });
  });

  test("handleAgentStatusRequest classifies auth failures as blocked_auth", async () => {
    const req = new Request("https://example.com/agent/status?chat_jid=web:auth");
    const res = handleAgentStatusRequest(req, createContext({
      getAgentStatus: () => ({
        type: "error",
        title: "No API key for provider: openai-codex",
        detail: "Token refresh failed: 401",
      }),
    }));

    const body = await res.json();
    expect(body.status).toBe("active");
    expect(body.state).toBe("blocked_auth");
    expect(body.classifier).toBeNull();
  });

  test("handleAgentStatusRequest exposes recovery_suppressed classifier state", async () => {
    const req = new Request("https://example.com/agent/status?chat_jid=web:suppressed");
    const res = handleAgentStatusRequest(req, createContext({
      getAgentStatus: () => ({
        type: "error",
        title: "Automatic recovery suppressed",
        classifier: "recovery_suppressed",
        recovery_suppressed_reason: "Repeated identical failures in recovery window.",
      }),
    }));

    const body = await res.json();
    expect(body.state).toBe("recovery_suppressed");
    expect(body.recovery_suppressed_reason).toBe("Repeated identical failures in recovery window.");
  });

  test("handleAgentContextRequest returns null fields when usage is unavailable", async () => {
    const req = new Request("https://example.com/agent/context");
    const res = await handleAgentContextRequest(req, createContext());

    expect(res.status).toBe(200);
    expect(res.headers.get("Server-Timing")).toContain("agent_context;dur=");
    expect(await res.json()).toEqual({ tokens: null, contextWindow: null, percent: null });
  });

  test("handleAgentModelsRequest returns payload from model provider", async () => {
    const req = new Request("https://example.com/agent/models");
    const payload = { models: [{ id: "openai/gpt-5" }] };
    const res = await handleAgentModelsRequest(
      req,
      createContext({
        getAvailableModels: async () => payload,
        getProviderReadyCompletedForInstance: () => true,
      })
    );

    expect(res.status).toBe(200);
    expect(res.headers.get("Server-Timing")).toContain("agent_models;dur=");
    expect(await res.json()).toEqual({
      ...payload,
      oobe: {
        provider_ready_completed_instance: true,
      },
    });
  });
});
