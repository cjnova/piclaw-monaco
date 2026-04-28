import { test, expect } from "bun:test";

import { providerResponseDiagnostics, extractDiagnosticHeaders } from "../../src/extensions/provider-response-diagnostics.js";

function createFakeApi() {
  const handlers: Array<{ event: string; handler: Function }> = [];
  return {
    on: (event: string, handler: Function) => {
      handlers.push({ event, handler });
    },
    handlers,
    fire: async (event: string, payload: unknown) => {
      for (const h of handlers) {
        if (h.event === event) await h.handler(payload);
      }
    },
  };
}

test("providerResponseDiagnostics registers an after_provider_response handler", () => {
  const api = createFakeApi();
  providerResponseDiagnostics(api as any);
  expect(api.handlers.length).toBe(1);
  expect(api.handlers[0].event).toBe("after_provider_response");
});

test("providerResponseDiagnostics handles a healthy response with no diagnostic headers", async () => {
  const api = createFakeApi();
  providerResponseDiagnostics(api as any);
  // Should not throw
  await api.fire("after_provider_response", {
    type: "after_provider_response",
    status: 200,
    headers: { "content-type": "text/event-stream" },
  });
});

test("providerResponseDiagnostics handles a healthy response with rate-limit headers", async () => {
  const api = createFakeApi();
  providerResponseDiagnostics(api as any);
  await api.fire("after_provider_response", {
    type: "after_provider_response",
    status: 200,
    headers: {
      "content-type": "text/event-stream",
      "x-ratelimit-remaining": "42",
      "x-ratelimit-limit": "100",
      "x-request-id": "req-abc123",
    },
  });
});

test("providerResponseDiagnostics handles error status responses", async () => {
  const api = createFakeApi();
  providerResponseDiagnostics(api as any);
  await api.fire("after_provider_response", {
    type: "after_provider_response",
    status: 429,
    headers: {
      "retry-after": "30",
      "x-ratelimit-remaining": "0",
    },
  });
});

test("providerResponseDiagnostics handles empty headers gracefully", async () => {
  const api = createFakeApi();
  providerResponseDiagnostics(api as any);
  await api.fire("after_provider_response", {
    type: "after_provider_response",
    status: 500,
    headers: {},
  });
});

// ---------------------------------------------------------------------------
// extractDiagnosticHeaders unit tests
// ---------------------------------------------------------------------------

test("extractDiagnosticHeaders returns null when no diagnostic headers present", () => {
  expect(extractDiagnosticHeaders({ "content-type": "application/json" })).toBeNull();
  expect(extractDiagnosticHeaders({})).toBeNull();
});

test("extractDiagnosticHeaders extracts rate-limit and request-id headers", () => {
  const result = extractDiagnosticHeaders({
    "content-type": "text/event-stream",
    "X-RateLimit-Remaining": "42",
    "X-RateLimit-Limit": "100",
    "X-Request-Id": "req-abc",
    "x-ms-request-id": "ms-456",
    "cf-ray": "abc-LAX",
    "anthropic-ratelimit-requests-remaining": "99",
    "x-stainless-runtime": "bun",
    "retry-after": "30",
    "x-served-by": "cache-lax",
    "cache-control": "no-cache",
  });
  expect(result).not.toBeNull();
  expect(result!["x-ratelimit-remaining"]).toBe("42");
  expect(result!["x-ratelimit-limit"]).toBe("100");
  expect(result!["x-request-id"]).toBe("req-abc");
  expect(result!["x-ms-request-id"]).toBe("ms-456");
  expect(result!["cf-ray"]).toBe("abc-LAX");
  expect(result!["anthropic-ratelimit-requests-remaining"]).toBe("99");
  expect(result!["x-stainless-runtime"]).toBe("bun");
  expect(result!["retry-after"]).toBe("30");
  expect(result!["x-served-by"]).toBe("cache-lax");
  // Should NOT include non-diagnostic headers
  expect(result!["cache-control"]).toBeUndefined();
});
