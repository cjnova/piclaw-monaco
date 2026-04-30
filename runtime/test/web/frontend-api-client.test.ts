/**
 * test/web/frontend-api-client.test.ts – Tests for api/client.ts.
 *
 * Covers ApiClientError class and apiRequest() including success,
 * error, and edge-case response handling.
 */

import { afterEach, describe, expect, test } from "bun:test";

import { ApiClientError, apiRequest } from "../../web/frontend/src/api/client.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function mockFetch(body: string, status = 200, headers: Record<string, string> = {}): void {
  globalThis.fetch = async () =>
    new Response(body, {
      status,
      headers: { "Content-Type": "application/json", ...headers },
    });
}

describe("ApiClientError", () => {
  test("stores name, message, status, and data", () => {
    const err = new ApiClientError("Something failed", 422, { error: "invalid" });
    expect(err.name).toBe("ApiClientError");
    expect(err.message).toBe("Something failed");
    expect(err.status).toBe(422);
    expect(err.data).toEqual({ error: "invalid" });
    expect(err instanceof Error).toBe(true);
  });

  test("data is optional and defaults to undefined", () => {
    const err = new ApiClientError("Not found", 404);
    expect(err.data).toBeUndefined();
    expect(err.status).toBe(404);
  });

  test("is instanceof Error", () => {
    const err = new ApiClientError("err", 500);
    expect(err instanceof Error).toBe(true);
    expect(err instanceof ApiClientError).toBe(true);
  });
});

describe("apiRequest", () => {
  test("returns parsed JSON on success", async () => {
    mockFetch('{"data":"ok"}');
    const result = await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    expect(result).toEqual({ data: "ok" });
  });

  test("returns empty object for empty response body", async () => {
    mockFetch("", 204);
    const result = await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    expect(result).toEqual({});
  });

  test("returns non-object JSON (array) directly", async () => {
    mockFetch('[1,2,3]');
    const result = await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    expect(result).toEqual([1, 2, 3]);
  });

  test("throws ApiClientError with JSON message on HTTP error", async () => {
    mockFetch('{"message":"Unauthorized"}', 401);
    let caught: unknown;
    try {
      await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(ApiClientError);
    expect((caught as ApiClientError).message).toBe("Unauthorized");
    expect((caught as ApiClientError).status).toBe(401);
  });

  test("falls back to statusText when JSON has no message field", async () => {
    globalThis.fetch = async () =>
      new Response('{"code":"ERR"}', {
        status: 500,
        statusText: "Internal Server Error",
      });
    let caught: unknown;
    try {
      await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(ApiClientError);
    expect((caught as ApiClientError).message).toBe("Internal Server Error");
  });

  test("falls back to generic status message when no statusText or JSON message", async () => {
    globalThis.fetch = async () =>
      new Response("{}", { status: 503, statusText: "" });
    let caught: unknown;
    try {
      await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(ApiClientError);
    expect((caught as ApiClientError).message).toContain("503");
  });

  test("stores raw string as data when error response body is not JSON", async () => {
    mockFetch("Plain text error", 400);
    let caught: unknown;
    try {
      await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(ApiClientError);
    expect((caught as ApiClientError).data).toBe("Plain text error");
  });

  test("sets Content-Type: application/json header by default", async () => {
    let capturedInit: RequestInit | undefined;
    globalThis.fetch = async (_url: unknown, init?: RequestInit) => {
      capturedInit = init;
      return new Response("{}", { status: 200 });
    };
    await apiRequest({ path: "/test", baseUrl: "http://localhost" });
    const headers = new Headers(capturedInit?.headers as HeadersInit | undefined);
    expect(headers.get("Content-Type")).toBe("application/json");
  });

  test("allows overriding headers", async () => {
    let capturedInit: RequestInit | undefined;
    globalThis.fetch = async (_url: unknown, init?: RequestInit) => {
      capturedInit = init;
      return new Response("{}", { status: 200 });
    };
    await apiRequest({
      path: "/test",
      baseUrl: "http://localhost",
      headers: { "X-Custom": "yes" },
    });
    const headers = new Headers(capturedInit?.headers as HeadersInit | undefined);
    expect(headers.get("X-Custom")).toBe("yes");
    expect(headers.get("Content-Type")).toBe("application/json");
  });

  test("constructs full URL from baseUrl and path", async () => {
    let capturedUrl: string | undefined;
    globalThis.fetch = async (url: unknown) => {
      capturedUrl = String(url);
      return new Response("{}", { status: 200 });
    };
    await apiRequest({ path: "/api/v1/resource", baseUrl: "https://example.com" });
    expect(capturedUrl).toBe("https://example.com/api/v1/resource");
  });

  test("uses path directly when baseUrl is empty", async () => {
    let capturedUrl: string | undefined;
    globalThis.fetch = async (url: unknown) => {
      capturedUrl = String(url);
      return new Response("{}", { status: 200 });
    };
    await apiRequest({ path: "/direct/path", baseUrl: "" });
    expect(capturedUrl).toBe("/direct/path");
  });
});
