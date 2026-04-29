/**
 * runtime/progress-watchdog.ts – Detect active chat runs that stop making progress.
 *
 * This is an in-process watchdog intended to turn silent stalls into explicit
 * failures that the service manager can recover from. Callers mark the current
 * phase for a chat (prompt, streaming, tool execution, recovery, etc.) and
 * periodically heartbeat it while work is progressing.
 */

import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("runtime.progress-watchdog");

export type ProgressWatchdogPhase =
  | "preprompt_compaction"
  | "prompt"
  | "streaming"
  | "tool_execution"
  | "recovery";

export interface ProgressWatchdogEntry {
  chatJid: string;
  phase: ProgressWatchdogPhase;
  startedAt: number;
  lastProgressAt: number;
  metadata?: Record<string, unknown>;
}

export interface ProgressWatchdogStall extends ProgressWatchdogEntry {
  ageMs: number;
  timeoutMs: number;
}

const DEFAULT_PROGRESS_WATCHDOG_TIMEOUT_MS = 120_000;
const MIN_SCAN_INTERVAL_MS = 1_000;
const MAX_SCAN_INTERVAL_MS = 5_000;

const activeByChat = new Map<string, ProgressWatchdogEntry & { stallReported?: boolean }>();

let scanTimer: ReturnType<typeof setInterval> | null = null;
let terminateProcess: (stall: ProgressWatchdogStall) => void = (_stall) => {
  process.exit(1);
};

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function getProgressWatchdogTimeoutMs(): number {
  const raw = String(process.env.PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS || "").trim();
  if (!raw) return DEFAULT_PROGRESS_WATCHDOG_TIMEOUT_MS;
  if (["0", "false", "off", "disabled", "no"].includes(raw.toLowerCase())) return 0;
  return parsePositiveInt(raw, DEFAULT_PROGRESS_WATCHDOG_TIMEOUT_MS);
}

function getProgressWatchdogScanIntervalMs(timeoutMs: number): number {
  if (timeoutMs <= 0) return 0;
  return Math.max(MIN_SCAN_INTERVAL_MS, Math.min(MAX_SCAN_INTERVAL_MS, Math.floor(timeoutMs / 4)));
}

function ensureScanLoop(): void {
  if (scanTimer || activeByChat.size === 0) return;
  const timeoutMs = getProgressWatchdogTimeoutMs();
  if (timeoutMs <= 0) return;
  const intervalMs = getProgressWatchdogScanIntervalMs(timeoutMs);
  scanTimer = setInterval(() => {
    scanForStalls();
  }, intervalMs);
  if (typeof scanTimer.unref === "function") scanTimer.unref();
}

function stopScanLoopIfIdle(): void {
  if (activeByChat.size > 0 || !scanTimer) return;
  clearInterval(scanTimer);
  scanTimer = null;
}

export function beginTrackedPhase(
  chatJid: string,
  phase: ProgressWatchdogPhase,
  metadata?: Record<string, unknown>,
): void {
  const now = Date.now();
  activeByChat.set(chatJid, {
    chatJid,
    phase,
    startedAt: now,
    lastProgressAt: now,
    metadata: metadata ? { ...metadata } : undefined,
    stallReported: false,
  });
  ensureScanLoop();
}

export function heartbeatTrackedPhase(
  chatJid: string,
  phase?: ProgressWatchdogPhase,
  metadata?: Record<string, unknown>,
): void {
  const now = Date.now();
  const current = activeByChat.get(chatJid);
  if (!current) {
    if (!phase) return;
    activeByChat.set(chatJid, {
      chatJid,
      phase,
      startedAt: now,
      lastProgressAt: now,
      metadata: metadata ? { ...metadata } : undefined,
      stallReported: false,
    });
    ensureScanLoop();
    return;
  }

  activeByChat.set(chatJid, {
    ...current,
    phase: phase ?? current.phase,
    lastProgressAt: now,
    metadata: metadata ? { ...(current.metadata || {}), ...metadata } : current.metadata,
    stallReported: false,
  });
}

export function endTrackedPhase(chatJid: string): void {
  activeByChat.delete(chatJid);
  stopScanLoopIfIdle();
}

export function getTrackedPhasesSnapshot(): ProgressWatchdogEntry[] {
  return Array.from(activeByChat.values()).map(({ stallReported: _stallReported, ...entry }) => ({ ...entry }));
}

export function scanForStalls(now = Date.now()): ProgressWatchdogStall[] {
  const timeoutMs = getProgressWatchdogTimeoutMs();
  if (timeoutMs <= 0) return [];

  const stalls: ProgressWatchdogStall[] = [];
  for (const [chatJid, current] of activeByChat) {
    const ageMs = Math.max(0, now - current.lastProgressAt);
    if (ageMs < timeoutMs) continue;

    const stall: ProgressWatchdogStall = {
      chatJid,
      phase: current.phase,
      startedAt: current.startedAt,
      lastProgressAt: current.lastProgressAt,
      metadata: current.metadata,
      ageMs,
      timeoutMs,
    };
    stalls.push(stall);

    if (current.stallReported) continue;

    activeByChat.set(chatJid, { ...current, stallReported: true });
    log.error("Progress watchdog detected a stalled active phase; terminating the process.", {
      operation: "progress_watchdog.stall",
      chatJid,
      phase: current.phase,
      ageMs,
      timeoutMs,
      startedAt: new Date(current.startedAt).toISOString(),
      lastProgressAt: new Date(current.lastProgressAt).toISOString(),
      metadata: current.metadata,
    });
    try {
      terminateProcess(stall);
    } catch (error) {
      debugSuppressedError(log, "Progress watchdog termination hook threw unexpectedly.", error, {
        operation: "progress_watchdog.termination_hook",
        chatJid,
        phase: current.phase,
      });
    }
  }

  return stalls;
}

export function setProgressWatchdogTerminationHook(
  hook: ((stall: ProgressWatchdogStall) => void) | null,
): () => void {
  const previous = terminateProcess;
  terminateProcess = hook || ((_stall) => {
    process.exit(1);
  });
  return () => {
    terminateProcess = previous;
  };
}

export function resetProgressWatchdogForTests(): void {
  activeByChat.clear();
  if (scanTimer) {
    clearInterval(scanTimer);
    scanTimer = null;
  }
  terminateProcess = () => {
    process.exit(1);
  };
}
