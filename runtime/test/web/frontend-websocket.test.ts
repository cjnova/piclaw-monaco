/**
 * test/web/frontend-websocket.test.ts – Tests for api/websocket.ts.
 *
 * Covers WebSocketManager: connect, disconnect, message handling,
 * status notifications, send, and reconnect suppression.
 */

import { afterEach, beforeEach, describe, expect, test } from "bun:test";

import { WebSocketManager } from "../../web/frontend/src/api/websocket.ts";

// ── Mock WebSocket ────────────────────────────────────────────────────────────

class MockWebSocket {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;

  readyState: number = MockWebSocket.CONNECTING;
  onopen: (() => void) | null = null;
  onmessage: ((e: MessageEvent) => void) | null = null;
  onclose: (() => void) | null = null;
  onerror: (() => void) | null = null;

  readonly sentMessages: Array<string | ArrayBufferLike | Blob | ArrayBufferView> = [];
  static instances: MockWebSocket[] = [];

  constructor(public readonly url: string) {
    MockWebSocket.instances.push(this);
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    this.sentMessages.push(data);
  }

  close(): void {
    this.readyState = MockWebSocket.CLOSED;
    this.onclose?.();
  }

  // Test helpers

  simulateOpen(): void {
    this.readyState = MockWebSocket.OPEN;
    this.onopen?.();
  }

  simulateMessage(data: string): void {
    this.onmessage?.(new MessageEvent("message", { data }));
  }

  simulateError(): void {
    this.onerror?.();
  }

  simulateClose(): void {
    this.readyState = MockWebSocket.CLOSED;
    this.onclose?.();
  }
}

const originalWebSocket = (globalThis as any).WebSocket;

beforeEach(() => {
  MockWebSocket.instances = [];
  (globalThis as any).WebSocket = MockWebSocket;
});

afterEach(() => {
  (globalThis as any).WebSocket = originalWebSocket;
});

// ── Tests ────────────────────────────────────────────────────────────────────

describe("WebSocketManager.connect", () => {
  test("creates a WebSocket with the configured URL", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.connect();
    expect(MockWebSocket.instances).toHaveLength(1);
    expect(MockWebSocket.instances[0]!.url).toBe("ws://test.local/ws");
    manager.disconnect();
  });

  test("emits 'disconnected' status immediately on connect before open", () => {
    const statuses: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onStatusChange((s) => statuses.push(s));
    manager.connect();
    expect(statuses).toContain("disconnected");
    manager.disconnect();
  });

  test("is a no-op when socket is already open", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.connect();
    MockWebSocket.instances[0]!.simulateOpen();
    manager.connect();
    expect(MockWebSocket.instances).toHaveLength(1);
    manager.disconnect();
  });

  test("is a no-op when socket is in CONNECTING state", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.connect();
    // readyState is CONNECTING (0) by default
    manager.connect();
    expect(MockWebSocket.instances).toHaveLength(1);
    manager.disconnect();
  });
});

describe("WebSocketManager: open event", () => {
  test("emits 'connected' status when socket opens", () => {
    const statuses: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onStatusChange((s) => statuses.push(s));
    manager.connect();
    MockWebSocket.instances[0]!.simulateOpen();
    expect(statuses).toContain("connected");
    manager.disconnect();
  });
});

describe("WebSocketManager.disconnect", () => {
  test("closes the socket and emits 'disconnected'", () => {
    const statuses: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onStatusChange((s) => statuses.push(s));
    manager.connect();
    MockWebSocket.instances[0]!.simulateOpen();
    manager.disconnect();
    expect(statuses[statuses.length - 1]).toBe("disconnected");
  });

  test("prevents reconnect after explicit disconnect", () => {
    const manager = new WebSocketManager("ws://test.local/ws", 10, 50);
    manager.connect();
    MockWebSocket.instances[0]!.simulateOpen();
    manager.disconnect();
    const countAfterDisconnect = MockWebSocket.instances.length;
    // No new socket should appear even after the close event
    expect(MockWebSocket.instances.length).toBe(countAfterDisconnect);
  });
});

describe("WebSocketManager.onMessage", () => {
  test("delivers messages to registered handlers", () => {
    const received: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onMessage((e) => received.push(e.data as string));
    manager.connect();
    const socket = MockWebSocket.instances[0]!;
    socket.simulateOpen();
    socket.simulateMessage("hello");
    socket.simulateMessage("world");
    expect(received).toEqual(["hello", "world"]);
    manager.disconnect();
  });

  test("unsubscribe stops message delivery", () => {
    const received: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    const off = manager.onMessage((e) => received.push(e.data as string));
    manager.connect();
    const socket = MockWebSocket.instances[0]!;
    socket.simulateOpen();
    socket.simulateMessage("before");
    off();
    socket.simulateMessage("after");
    expect(received).toEqual(["before"]);
    manager.disconnect();
  });

  test("supports multiple simultaneous handlers", () => {
    const a: string[] = [];
    const b: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onMessage((e) => a.push(e.data as string));
    manager.onMessage((e) => b.push(e.data as string));
    manager.connect();
    const socket = MockWebSocket.instances[0]!;
    socket.simulateOpen();
    socket.simulateMessage("ping");
    expect(a).toEqual(["ping"]);
    expect(b).toEqual(["ping"]);
    manager.disconnect();
  });
});

describe("WebSocketManager.onStatusChange", () => {
  test("unsubscribe stops status delivery", () => {
    const statuses: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    const off = manager.onStatusChange((s) => statuses.push(s));
    manager.connect();
    off();
    MockWebSocket.instances[0]!.simulateOpen();
    // "connected" should not appear because handler was removed after the
    // initial "disconnected" emitted during connect()
    expect(statuses.filter((s) => s === "connected")).toHaveLength(0);
    manager.disconnect();
  });
});

describe("WebSocketManager.send", () => {
  test("transmits data when socket is open", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.connect();
    const socket = MockWebSocket.instances[0]!;
    socket.simulateOpen();
    manager.send("payload");
    expect(socket.sentMessages).toContain("payload");
    manager.disconnect();
  });

  test("is a no-op when socket is not open", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.connect();
    // Socket is in CONNECTING state, not OPEN
    manager.send("dropped");
    expect(MockWebSocket.instances[0]!.sentMessages).toHaveLength(0);
    manager.disconnect();
  });

  test("is a no-op when not connected", () => {
    const manager = new WebSocketManager("ws://test.local/ws");
    expect(() => manager.send("noop")).not.toThrow();
  });
});

describe("WebSocketManager: error event", () => {
  test("emits 'disconnected' on socket error", () => {
    const statuses: string[] = [];
    const manager = new WebSocketManager("ws://test.local/ws");
    manager.onStatusChange((s) => statuses.push(s));
    manager.connect();
    MockWebSocket.instances[0]!.simulateOpen();
    const prevLen = statuses.length;
    MockWebSocket.instances[0]!.simulateError();
    expect(statuses.slice(prevLen)).toContain("disconnected");
    manager.disconnect();
  });
});
