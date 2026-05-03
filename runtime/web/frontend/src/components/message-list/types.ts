// Shared types for message-list modules

export interface ContentBlock {
  type: "tool_use" | "tool_result" | "text" | string;
  id?: string;
  name?: string;
  input?: unknown;
  content?: unknown;
  tool_use_id?: string;
}

export interface Interaction {
  id: number;
  type: "user" | "agent";
  content: string;
  content_blocks?: ContentBlock[];
  created_at: string;
  data?: Record<string, unknown>;
}

export interface TimelineResponse {
  posts?: Array<Record<string, unknown>>;
  has_more?: boolean;
}
