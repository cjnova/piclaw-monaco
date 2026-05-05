/**
 * Runtime stream/session primitives for long-lived tool integrations.
 *
 * This is intentionally transport-agnostic: add-ons publish framed output and
 * lifecycle state here, while protocol-specific code remains in the add-on or
 * adapter that owns the remote transport.
 */

import { registerPreShutdownHook } from "../runtime/shutdown-registry.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("runtime-stream-sessions");

export type RuntimeStreamSessionStatus = "open" | "completed" | "failed" | "cancelled" | "timed_out";
export type RuntimeStreamFrameKind = "stdout" | "stderr" | "event" | "status";

export interface RuntimeStreamFrame {
  id: number;
  kind: RuntimeStreamFrameKind;
  data: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface RuntimeStreamSessionSnapshot {
  id: string;
  chatJid: string;
  kind: string;
  label: string;
  toolName?: string;
  status: RuntimeStreamSessionStatus;
  createdAt: string;
  updatedAt: string;
  endedAt?: string;
  timeoutAt?: string;
  reason?: string;
  metadata: Record<string, unknown>;
  frameCount: number;
  frames: RuntimeStreamFrame[];
}

export interface RuntimeStreamSessionOptions {
  chatJid: string;
  kind: string;
  label?: string;
  toolName?: string;
  metadata?: Record<string, unknown>;
  timeoutMs?: number;
  maxFrames?: number;
  maxFrameBytes?: number;
  onCancel?: (reason: string, snapshot: RuntimeStreamSessionSnapshot) => void | Promise<void>;
  onCleanup?: (snapshot: RuntimeStreamSessionSnapshot) => void | Promise<void>;
}

export interface RuntimeStreamWriteOptions {
  kind?: RuntimeStreamFrameKind;
  metadata?: Record<string, unknown>;
}

export type RuntimeStreamSessionEventType =
  | "created"
  | "frame"
  | "completed"
  | "failed"
  | "cancelled"
  | "timed_out"
  | "removed";

export interface RuntimeStreamSessionEvent {
  type: RuntimeStreamSessionEventType;
  session: RuntimeStreamSessionSnapshot;
  frame?: RuntimeStreamFrame;
}

export interface RuntimeStreamSessionHandle {
  id: string;
  signal: AbortSignal;
  write(data: unknown, options?: RuntimeStreamWriteOptions): RuntimeStreamFrame;
  complete(reason?: string): RuntimeStreamSessionSnapshot;
  fail(error: unknown): RuntimeStreamSessionSnapshot;
  cancel(reason?: string): RuntimeStreamSessionSnapshot;
  snapshot(): RuntimeStreamSessionSnapshot;
}

export interface RuntimeStreamSessionFilter {
  chatJid?: string;
  status?: RuntimeStreamSessionStatus | "active" | "ended";
  kind?: string;
  toolName?: string;
}

interface RuntimeStreamSessionRecord {
  id: string;
  chatJid: string;
  kind: string;
  label: string;
  toolName?: string;
  status: RuntimeStreamSessionStatus;
  createdAt: string;
  updatedAt: string;
  endedAt?: string;
  timeoutAt?: string;
  reason?: string;
  metadata: Record<string, unknown>;
  frames: RuntimeStreamFrame[];
  totalFrameCount: number;
  nextFrameId: number;
  maxFrames: number;
  maxFrameBytes: number;
  controller: AbortController;
  timeout: ReturnType<typeof setTimeout> | null;
  onCancel?: RuntimeStreamSessionOptions["onCancel"];
  onCleanup?: RuntimeStreamSessionOptions["onCleanup"];
}

const DEFAULT_MAX_FRAMES = 200;
const DEFAULT_MAX_FRAME_BYTES = 64 * 1024;
const MAX_TIMEOUT_MS = 24 * 60 * 60 * 1000;

const sessions = new Map<string, RuntimeStreamSessionRecord>();
const listeners = new Set<(event: RuntimeStreamSessionEvent) => void>();
let shutdownHookRegistered = false;

function nowIso(): string {
  return new Date().toISOString();
}

function createId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `stream-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

function normalizeText(value: unknown): string {
  if (typeof value === "string") return value;
  if (value instanceof Uint8Array) return Buffer.from(value).toString("utf8");
  if (Buffer.isBuffer(value)) return value.toString("utf8");
  return value === undefined || value === null ? "" : String(value);
}

function truncateFrameData(value: unknown, maxBytes: number): string {
  const text = normalizeText(value);
  const bytes = Buffer.byteLength(text, "utf8");
  if (bytes <= maxBytes) return text;
  const suffix = `\n[stream frame truncated from ${bytes} bytes to ${maxBytes} bytes]`;
  const budget = Math.max(0, maxBytes - Buffer.byteLength(suffix, "utf8"));
  let out = "";
  let used = 0;
  for (const char of text) {
    const next = Buffer.byteLength(char, "utf8");
    if (used + next > budget) break;
    out += char;
    used += next;
  }
  return `${out}${suffix}`;
}

function snapshot(record: RuntimeStreamSessionRecord): RuntimeStreamSessionSnapshot {
  return {
    id: record.id,
    chatJid: record.chatJid,
    kind: record.kind,
    label: record.label,
    ...(record.toolName ? { toolName: record.toolName } : {}),
    status: record.status,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
    ...(record.endedAt ? { endedAt: record.endedAt } : {}),
    ...(record.timeoutAt ? { timeoutAt: record.timeoutAt } : {}),
    ...(record.reason ? { reason: record.reason } : {}),
    metadata: { ...record.metadata },
    frameCount: record.totalFrameCount,
    frames: record.frames.map((frame) => ({
      ...frame,
      ...(frame.metadata ? { metadata: { ...frame.metadata } } : {}),
    })),
  };
}

function emit(type: RuntimeStreamSessionEventType, record: RuntimeStreamSessionRecord, frame?: RuntimeStreamFrame): void {
  const event: RuntimeStreamSessionEvent = { type, session: snapshot(record), ...(frame ? { frame } : {}) };
  for (const listener of listeners) {
    try {
      listener(event);
    } catch (error) {
      debugSuppressedError(log, "Runtime stream session listener failed; continuing lifecycle event delivery.", error, {
        operation: "runtime_stream_sessions.emit.listener",
        sessionId: record.id,
        eventType: type,
      });
    }
  }
}

function isEnded(status: RuntimeStreamSessionStatus): boolean {
  return status !== "open";
}

function assertOpen(record: RuntimeStreamSessionRecord): void {
  if (isEnded(record.status)) {
    throw new Error(`Runtime stream session ${record.id} is ${record.status}.`);
  }
}

async function runCleanup(record: RuntimeStreamSessionRecord): Promise<void> {
  if (!record.onCleanup) return;
  try {
    await record.onCleanup(snapshot(record));
  } catch (error) {
    debugSuppressedError(log, "Runtime stream session cleanup failed; continuing session finalization.", error, {
      operation: "runtime_stream_sessions.cleanup",
      sessionId: record.id,
      status: record.status,
    });
  }
}

function finish(record: RuntimeStreamSessionRecord, status: RuntimeStreamSessionStatus, reason?: string): RuntimeStreamSessionSnapshot {
  if (isEnded(record.status)) return snapshot(record);
  if (record.timeout) {
    clearTimeout(record.timeout);
    record.timeout = null;
  }
  record.status = status;
  record.reason = reason || record.reason;
  record.updatedAt = nowIso();
  record.endedAt = record.updatedAt;
  if (!record.controller.signal.aborted) {
    record.controller.abort(record.reason || status);
  }
  void runCleanup(record);
  const eventType: RuntimeStreamSessionEventType = status === "completed"
    ? "completed"
    : status === "failed"
      ? "failed"
      : status === "timed_out"
        ? "timed_out"
        : "cancelled";
  emit(eventType, record);
  return snapshot(record);
}

function writeFrame(record: RuntimeStreamSessionRecord, data: unknown, options: RuntimeStreamWriteOptions = {}): RuntimeStreamFrame {
  assertOpen(record);
  const frame: RuntimeStreamFrame = {
    id: record.nextFrameId,
    kind: options.kind || "stdout",
    data: truncateFrameData(data, record.maxFrameBytes),
    createdAt: nowIso(),
    ...(options.metadata ? { metadata: { ...options.metadata } } : {}),
  };
  record.nextFrameId += 1;
  record.totalFrameCount += 1;
  record.frames.push(frame);
  if (record.frames.length > record.maxFrames) {
    record.frames.splice(0, record.frames.length - record.maxFrames);
  }
  record.updatedAt = frame.createdAt;
  emit("frame", record, frame);
  return frame;
}

export function createRuntimeStreamSession(options: RuntimeStreamSessionOptions): RuntimeStreamSessionHandle {
  registerRuntimeStreamSessionShutdownHook();
  const chatJid = typeof options.chatJid === "string" && options.chatJid.trim() ? options.chatJid.trim() : "web:default";
  const kind = typeof options.kind === "string" && options.kind.trim() ? options.kind.trim() : "stream";
  const id = createId();
  const createdAt = nowIso();
  const timeoutMs = Number.isFinite(options.timeoutMs)
    ? Math.max(1, Math.min(MAX_TIMEOUT_MS, Math.round(Number(options.timeoutMs))))
    : null;
  const record: RuntimeStreamSessionRecord = {
    id,
    chatJid,
    kind,
    label: typeof options.label === "string" && options.label.trim() ? options.label.trim() : kind,
    ...(typeof options.toolName === "string" && options.toolName.trim() ? { toolName: options.toolName.trim() } : {}),
    status: "open",
    createdAt,
    updatedAt: createdAt,
    ...(timeoutMs ? { timeoutAt: new Date(Date.now() + timeoutMs).toISOString() } : {}),
    metadata: options.metadata && typeof options.metadata === "object" ? { ...options.metadata } : {},
    frames: [],
    totalFrameCount: 0,
    nextFrameId: 1,
    maxFrames: Number.isFinite(options.maxFrames) ? Math.max(1, Math.min(1000, Math.round(Number(options.maxFrames)))) : DEFAULT_MAX_FRAMES,
    maxFrameBytes: Number.isFinite(options.maxFrameBytes) ? Math.max(1024, Math.min(1024 * 1024, Math.round(Number(options.maxFrameBytes)))) : DEFAULT_MAX_FRAME_BYTES,
    controller: new AbortController(),
    timeout: null,
    ...(options.onCancel ? { onCancel: options.onCancel } : {}),
    ...(options.onCleanup ? { onCleanup: options.onCleanup } : {}),
  };
  sessions.set(id, record);
  if (timeoutMs) {
    record.timeout = setTimeout(() => {
      if (record.status !== "open") return;
      void record.onCancel?.("timeout", snapshot(record));
      finish(record, "timed_out", "timeout");
    }, timeoutMs);
  }
  emit("created", record);

  return {
    id,
    signal: record.controller.signal,
    write: (data, writeOptions) => writeFrame(record, data, writeOptions),
    complete: (reason) => finish(record, "completed", reason),
    fail: (error) => finish(record, "failed", error instanceof Error ? error.message : String(error || "failed")),
    cancel: (reason = "cancelled") => cancelRuntimeStreamSession(id, reason) || snapshot(record),
    snapshot: () => snapshot(record),
  };
}

export function getRuntimeStreamSession(id: string): RuntimeStreamSessionSnapshot | null {
  const record = sessions.get(String(id || "").trim());
  return record ? snapshot(record) : null;
}

export function listRuntimeStreamSessions(filter: RuntimeStreamSessionFilter = {}): RuntimeStreamSessionSnapshot[] {
  const chatJid = typeof filter.chatJid === "string" && filter.chatJid.trim() ? filter.chatJid.trim() : "";
  const kind = typeof filter.kind === "string" && filter.kind.trim() ? filter.kind.trim() : "";
  const toolName = typeof filter.toolName === "string" && filter.toolName.trim() ? filter.toolName.trim() : "";
  return Array.from(sessions.values())
    .filter((record) => !chatJid || record.chatJid === chatJid)
    .filter((record) => !kind || record.kind === kind)
    .filter((record) => !toolName || record.toolName === toolName)
    .filter((record) => {
      if (!filter.status) return true;
      if (filter.status === "active") return record.status === "open";
      if (filter.status === "ended") return record.status !== "open";
      return record.status === filter.status;
    })
    .map(snapshot);
}

export function cancelRuntimeStreamSession(id: string, reason = "cancelled"): RuntimeStreamSessionSnapshot | null {
  const record = sessions.get(String(id || "").trim());
  if (!record) return null;
  if (record.status !== "open") return snapshot(record);
  void record.onCancel?.(reason, snapshot(record));
  return finish(record, "cancelled", reason);
}

export function removeRuntimeStreamSession(id: string): boolean {
  const normalizedId = String(id || "").trim();
  const record = sessions.get(normalizedId);
  if (!record) return false;
  if (record.timeout) clearTimeout(record.timeout);
  if (record.status === "open") {
    if (!record.controller.signal.aborted) record.controller.abort("removed");
    record.status = "cancelled";
    record.reason = "removed";
    record.updatedAt = nowIso();
    record.endedAt = record.updatedAt;
    void record.onCleanup?.(snapshot(record));
  }
  sessions.delete(normalizedId);
  emit("removed", record);
  return true;
}

export function subscribeRuntimeStreamSessions(listener: (event: RuntimeStreamSessionEvent) => void): () => void {
  if (typeof listener !== "function") return () => {};
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function shutdownRuntimeStreamSessions(reason = "runtime shutdown"): void {
  for (const record of Array.from(sessions.values())) {
    if (record.status === "open") {
      void record.onCancel?.(reason, snapshot(record));
      finish(record, "cancelled", reason);
    } else if (record.timeout) {
      clearTimeout(record.timeout);
      record.timeout = null;
    }
  }
}

export function resetRuntimeStreamSessionsForTests(): void {
  shutdownRuntimeStreamSessions("test reset");
  sessions.clear();
  listeners.clear();
}

export function registerRuntimeStreamSessionShutdownHook(): void {
  if (shutdownHookRegistered) return;
  shutdownHookRegistered = true;
  registerPreShutdownHook(() => {
    shutdownRuntimeStreamSessions("runtime shutdown");
  });
}

export const runtimeStreamSessions = {
  open: createRuntimeStreamSession,
  get: getRuntimeStreamSession,
  list: listRuntimeStreamSessions,
  cancel: cancelRuntimeStreamSession,
  remove: removeRuntimeStreamSession,
  subscribe: subscribeRuntimeStreamSessions,
};
