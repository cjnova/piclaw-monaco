export interface ApiErrorResponse {
  error?: string;
  message?: string;
  code?: string;
  details?: unknown;
}

export interface ApiSuccessResponse<T = unknown> {
  data: T;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | T;

export type ConnectionStatus = "connected" | "disconnected";

export interface WebSocketMessage<T = unknown> {
  type?: string;
  payload?: T;
  [key: string]: unknown;
}
