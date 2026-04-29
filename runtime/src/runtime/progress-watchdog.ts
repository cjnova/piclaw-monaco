/**
 * runtime/progress-watchdog.ts – Detect active chat runs that stop making progress.
 *
 * Maintains both an in-process watchdog and a persisted heartbeat snapshot that
 * an external helper process can monitor. Callers mark the current phase for a
 * chat (prompt, streaming, tool execution, recovery, etc.) and periodically
 * heartbeat it while work is progressing.
 */

import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import { DATA_DIR, getCompactionRuntimeConfig } from "../core/config.js";
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

export interface PersistedProgressWatchdogState {
  pid: number;
  updatedAt: string;
  timeoutMs: number;
  shuttingDown: boolean;
  entries: ProgressWatchdogEntry[];
}

const MIN_SCAN_INTERVAL_MS = 1_000;
const MAX_SCAN_INTERVAL_MS = 5_000;
const STATE_PERSIST_DEBOUNCE_MS = 250;
const WATCHDOG_STATE_PATH = join(DATA_DIR, "runtime", "progress-watchdog-state.json");

const activeByChat = new Map<string, ProgressWatchdogEntry & { stallReported?: boolean }>();

let scanTimer: ReturnType<typeof setInterval> | null = null;
let persistTimer: ReturnType<typeof setTimeout> | null = null;
let terminateProcess: (stall: ProgressWatchdogStall) => void = (_stall) => {
  process.exit(1);
};

function getProgressWatchdogScanIntervalMs(timeoutMs: number): number {
  if (timeoutMs <= 0) return 0;
  return Math.max(MIN_SCAN_INTERVAL_MS, Math.min(MAX_SCAN_INTERVAL_MS, Math.floor(timeoutMs / 4)));
}

export function getProgressWatchdogStatePath(): string {
  return WATCHDOG_STATE_PATH;
}

export function getProgressWatchdogTimeoutMs(): number {
  return getCompactionRuntimeConfig().progressWatchdogTimeoutMs;
}

function buildPersistedProgressWatchdogState(shuttingDown = false): PersistedProgressWatchdogState {
  return {
    pid: process.pid,
    updatedAt: new Date().toISOString(),
    timeoutMs: getProgressWatchdogTimeoutMs(),
    shuttingDown,
    entries: getTrackedPhasesSnapshot(),
  };
}

function persistProgressWatchdogStateNow(shuttingDown = false): void {
  try {
    mkdirSync(dirname(WATCHDOG_STATE_PATH), { recursive: true });
    writeFileSync(WATCHDOG_STATE_PATH, `${JSON.stringify(buildPersistedProgressWatchdogState(shuttingDown), null, 2)}\n`, "utf8");
  } catch (error) {
    debugSuppressedError(log, "Failed to persist progress-watchdog heartbeat state.", error, {
      operation: "progress_watchdog.persist_state",
      statePath: WATCHDOG_STATE_PATH,
      shuttingDown,
    });
  }
}

function schedulePersistProgressWatchdogState(): void {
  if (persistTimer) return;
  persistTimer = setTimeout(() => {
    persistTimer = null;
    persistProgressWatchdogStateNow(false);
  }, STATE_PERSIST_DEBOUNCE_MS);
  if (typeof persistTimer.unref === "function") persistTimer.unref();
}

export function flushProgressWatchdogState(): void {
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }
  persistProgressWatchdogStateNow(false);
}

export function markProgressWatchdogShuttingDown(): void {
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }
  persistProgressWatchdogStateNow(true);
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
  flushProgressWatchdogState();
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
    flushProgressWatchdogState();
    return;
  }

  activeByChat.set(chatJid, {
    ...current,
    phase: phase ?? current.phase,
    lastProgressAt: now,
    metadata: metadata ? { ...(current.metadata || {}), ...metadata } : current.metadata,
    stallReported: false,
  });
  schedulePersistProgressWatchdogState();
}

export function endTrackedPhase(chatJid: string): void {
  activeByChat.delete(chatJid);
  stopScanLoopIfIdle();
  flushProgressWatchdogState();
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
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
  }
  terminateProcess = () => {
    process.exit(1);
  };
  try {
    rmSync(WATCHDOG_STATE_PATH, { force: true });
  } catch (error) {
    debugSuppressedError(log, "Failed to remove progress-watchdog state during test reset.", error, {
      operation: "progress_watchdog.reset_tests_cleanup",
      statePath: WATCHDOG_STATE_PATH,
    });
  }
}
