import type { ApiErrorResponse, ApiResponse } from "./types";

function getBaseUrl(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return "";
}

export class ApiClientError extends Error {
  readonly status: number;
  readonly data?: ApiErrorResponse | string;

  constructor(message: string, status: number, data?: ApiErrorResponse | string) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.data = data;
  }
}

export interface RequestOptions extends RequestInit {
  path: string;
  baseUrl?: string;
}

export async function apiRequest<T = unknown>({ path, baseUrl = getBaseUrl(), ...init }: RequestOptions): Promise<ApiResponse<T>> {
  const url = baseUrl ? new URL(path, baseUrl).toString() : path;
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const text = await response.text();
  const data = text ? safeParseJson(text) : undefined;

  if (!response.ok) {
    const message =
      (typeof data === "object" && data && "message" in data && typeof data.message === "string" && data.message) ||
      response.statusText ||
      `Request failed with status ${response.status}`;

    throw new ApiClientError(message, response.status, (data as ApiErrorResponse | string | undefined) ?? text);
  }

  return (data as ApiResponse<T> | undefined) ?? ({} as ApiResponse<T>);
}

function safeParseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
