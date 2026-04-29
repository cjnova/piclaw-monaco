import type { ConnectionStatus } from "./types";

type MessageHandler = (event: MessageEvent) => void;
type StatusHandler = (status: ConnectionStatus) => void;

const DEFAULT_MAX_RECONNECT_DELAY_MS = 30_000;
const DEFAULT_INITIAL_RECONNECT_DELAY_MS = 1_000;

function resolveWebSocketUrl(path = "/ws"): string {
  if (typeof window !== "undefined" && window.location) {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${window.location.host}${path}`;
  }

  return `ws://localhost${path}`;
}

export class WebSocketManager {
  private socket: WebSocket | null = null;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private reconnectAttempts = 0;
  private shouldReconnect = true;
  private readonly messageHandlers = new Set<MessageHandler>();
  private readonly statusHandlers = new Set<StatusHandler>();

  constructor(
    private readonly url: string = resolveWebSocketUrl(),
    private readonly initialReconnectDelayMs = DEFAULT_INITIAL_RECONNECT_DELAY_MS,
    private readonly maxReconnectDelayMs = DEFAULT_MAX_RECONNECT_DELAY_MS,
  ) {}

  connect(): void {
    this.clearReconnectTimer();

    if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
      return;
    }

    try {
      this.socket = new WebSocket(this.url);
      this.emitStatus("disconnected");
      this.attachSocketListeners(this.socket);
    } catch {
      this.emitStatus("disconnected");
      this.scheduleReconnect();
    }
  }

  disconnect(): void {
    this.shouldReconnect = false;
    this.clearReconnectTimer();
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.emitStatus("disconnected");
  }

  onMessage(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler);
    return () => this.messageHandlers.delete(handler);
  }

  onStatusChange(handler: StatusHandler): () => void {
    this.statusHandlers.add(handler);
    return () => this.statusHandlers.delete(handler);
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    }
  }

  private attachSocketListeners(socket: WebSocket): void {
    socket.onopen = () => {
      this.reconnectAttempts = 0;
      this.emitStatus("connected");
    };

    socket.onmessage = (event) => {
      for (const handler of this.messageHandlers) {
        handler(event);
      }
    };

    socket.onclose = () => {
      this.emitStatus("disconnected");
      this.socket = null;
      if (this.shouldReconnect) {
        this.scheduleReconnect();
      }
    };

    socket.onerror = () => {
      this.emitStatus("disconnected");
    };
  }

  private scheduleReconnect(): void {
    if (!this.shouldReconnect || this.reconnectTimer) {
      return;
    }

    const delay = Math.min(this.maxReconnectDelayMs, this.initialReconnectDelayMs * 2 ** this.reconnectAttempts);
    this.reconnectAttempts += 1;

    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private emitStatus(status: ConnectionStatus): void {
    for (const handler of this.statusHandlers) {
      handler(status);
    }
  }
}
