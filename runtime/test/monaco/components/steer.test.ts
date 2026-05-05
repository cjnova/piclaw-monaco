/**
 * Tests for #270: steer — queue stack with steer/edit actions.
 * Matches upstream: Enter queues when busy, queue cards appear with Steer/Edit.
 */
import { describe, test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";

const CHAT_PANEL = readFileSync("runtime/web/frontend/src/panels/ChatPanel.tsx", "utf8");
const QUEUE_STACK = readFileSync("runtime/web/frontend/src/components/QueueStack.tsx", "utf8");
const SSE_STREAM = readFileSync("runtime/web/frontend/src/components/message-list/useTimelineStream.ts", "utf8");
const SHELL_CSS = readFileSync("runtime/web/static/css/shell.css", "utf8");

describe("Queue Stack + Steer (#270)", () => {
  test("QueueStack component exists", () => {
    expect(existsSync("runtime/web/frontend/src/components/QueueStack.tsx")).toBe(true);
  });

  test("QueueStack is rendered in ChatPanel", () => {
    expect(CHAT_PANEL).toContain("QueueStack");
    expect(CHAT_PANEL).toContain("handleQueueEdit");
  });

  test("ChatPanel auto-queues with mode: queue when agent is running", () => {
    expect(CHAT_PANEL).toContain('isAgentRunning.value ? "queue" : undefined');
  });

  test("SSE stream relays followup events", () => {
    expect(SSE_STREAM).toContain("agent_followup_queued");
    expect(SSE_STREAM).toContain("agent_followup_consumed");
    expect(SSE_STREAM).toContain("agent_followup_removed");
    expect(SSE_STREAM).toContain("piclaw:followup-queued");
  });

  test("QueueStack listens for followup events", () => {
    expect(QUEUE_STACK).toContain("piclaw:followup-queued");
    expect(QUEUE_STACK).toContain("piclaw:followup-consumed");
    expect(QUEUE_STACK).toContain("piclaw:followup-removed");
  });

  test("QueueStack has Steer button that calls /agent/queue-steer", () => {
    expect(QUEUE_STACK).toContain("/agent/queue-steer");
    expect(QUEUE_STACK).toContain("row_id: item.row_id");
    expect(QUEUE_STACK).toContain("Steer");
  });

  test("QueueStack has Edit button that returns content to compose", () => {
    expect(QUEUE_STACK).toContain("codicon-edit");
    expect(QUEUE_STACK).toContain("onEdit(item)");
  });

  test("QueueStack clears on agent turn end", () => {
    expect(QUEUE_STACK).toContain("piclaw:agent-turn-end");
  });

  test("CSS styles queue stack items", () => {
    expect(SHELL_CSS).toContain(".queue-stack__item");
    expect(SHELL_CSS).toContain(".queue-stack__btn--steer");
    expect(SHELL_CSS).toContain(".queue-stack__btn--edit");
  });

  test("Steer button styled with accent border and pill shape", () => {
    expect(SHELL_CSS).toContain("border: 1px solid var(--accent)");
    expect(SHELL_CSS).toContain("border-radius: 12px");
  });
});
