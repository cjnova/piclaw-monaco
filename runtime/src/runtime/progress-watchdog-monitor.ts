import { readFileSync } from "node:fs";

import { createLogger, debugSuppressedError } from "../utils/logger.js";
import type { PersistedProgressWatchdogState, ProgressWatchdogEntry } from "./progress-watchdog.js";

const log = createLogger("runtime.progress-watchdog-monitor");
const DEFAULT_MONITOR_GRACE_MS = 5_000;
const DEFAULT_MONITOR_SCAN_MS = 2_000;

export interface ProgressWatchdogMonitorArgs {
  statePath: string;
  parentPid: number;
  scanMs: number;
  graceMs: number;
}

export interface ProgressWatchdogMonitorEvaluation {
  stalledEntry: ProgressWatchdogEntry | null;
  timeoutMs: number;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function isPidAlive(pid: number): boolean {
  if (!Number.isFinite(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

export function readPersistedProgressWatchdogState(statePath: string): PersistedProgressWatchdogState | null {
  try {
    const raw = readFileSync(statePath, "utf8");
    const parsed = JSON.parse(raw) as PersistedProgressWatchdogState;
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function evaluatePersistedProgressWatchdogState(
  state: PersistedProgressWatchdogState | null | undefined,
  now = Date.now(),
): ProgressWatchdogMonitorEvaluation {
  if (!state || state.shuttingDown) {
    return { stalledEntry: null, timeoutMs: 0 };
  }
  const timeoutMs = Number.isFinite(state.timeoutMs) ? Math.max(0, Number(state.timeoutMs)) : 0;
  if (timeoutMs <= 0) {
    return { stalledEntry: null, timeoutMs };
  }
  const entries = Array.isArray(state.entries) ? state.entries : [];
  const stalledEntry = entries.find((entry) => {
    const lastProgressAt = Number(entry?.lastProgressAt);
    if (!Number.isFinite(lastProgressAt)) return false;
    return now - lastProgressAt > timeoutMs;
  }) ?? null;
  return { stalledEntry, timeoutMs };
}

async function terminateParentProcess(parentPid: number, graceMs: number): Promise<void> {
  if (!isPidAlive(parentPid)) return;
  try {
    process.kill(parentPid, "SIGTERM");
  } catch (error) {
    debugSuppressedError(log, "Failed to SIGTERM stalled runtime from watchdog monitor.", error, {
      operation: "progress_watchdog_monitor.sigterm",
      parentPid,
    });
    return;
  }

  const deadline = Date.now() + Math.max(0, graceMs);
  while (Date.now() < deadline) {
    if (!isPidAlive(parentPid)) return;
    await Bun.sleep(250);
  }

  if (!isPidAlive(parentPid)) return;
  try {
    process.kill(parentPid, "SIGKILL");
  } catch (error) {
    debugSuppressedError(log, "Failed to SIGKILL stalled runtime after watchdog grace window.", error, {
      operation: "progress_watchdog_monitor.sigkill",
      parentPid,
    });
  }
}

export function parseProgressWatchdogMonitorArgs(args = process.argv.slice(2)): ProgressWatchdogMonitorArgs {
  let statePath = "";
  let parentPid = Number.NaN;
  let scanMs = DEFAULT_MONITOR_SCAN_MS;
  let graceMs = DEFAULT_MONITOR_GRACE_MS;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--state" && typeof args[index + 1] === "string") {
      statePath = args[index + 1] || "";
      index += 1;
      continue;
    }
    if (arg.startsWith("--state=")) {
      statePath = arg.slice("--state=".length);
      continue;
    }
    if (arg === "--parent-pid" && typeof args[index + 1] === "string") {
      parentPid = Number(args[index + 1]);
      index += 1;
      continue;
    }
    if (arg.startsWith("--parent-pid=")) {
      parentPid = Number(arg.slice("--parent-pid=".length));
      continue;
    }
    if (arg === "--scan-ms" && typeof args[index + 1] === "string") {
      scanMs = parsePositiveInt(args[index + 1], DEFAULT_MONITOR_SCAN_MS);
      index += 1;
      continue;
    }
    if (arg.startsWith("--scan-ms=")) {
      scanMs = parsePositiveInt(arg.slice("--scan-ms=".length), DEFAULT_MONITOR_SCAN_MS);
      continue;
    }
    if (arg === "--grace-ms" && typeof args[index + 1] === "string") {
      graceMs = parsePositiveInt(args[index + 1], DEFAULT_MONITOR_GRACE_MS);
      index += 1;
      continue;
    }
    if (arg.startsWith("--grace-ms=")) {
      graceMs = parsePositiveInt(arg.slice("--grace-ms=".length), DEFAULT_MONITOR_GRACE_MS);
    }
  }

  if (!statePath.trim()) throw new Error("Missing --state <path> for progress-watchdog monitor.");
  if (!Number.isFinite(parentPid) || parentPid <= 0) throw new Error("Missing valid --parent-pid <pid> for progress-watchdog monitor.");

  return {
    statePath: statePath.trim(),
    parentPid,
    scanMs: Math.max(250, scanMs),
    graceMs: Math.max(250, graceMs),
  };
}

export async function runProgressWatchdogMonitorFromArgs(args = process.argv.slice(2)): Promise<void> {
  const options = parseProgressWatchdogMonitorArgs(args);

  while (true) {
    if (!isPidAlive(options.parentPid)) return;

    const state = readPersistedProgressWatchdogState(options.statePath);
    if (state?.pid && Number.isFinite(state.pid) && state.pid !== options.parentPid) {
      return;
    }
    const evaluation = evaluatePersistedProgressWatchdogState(state, Date.now());
    if (evaluation.stalledEntry) {
      log.error("External progress-watchdog monitor detected a stale heartbeat; terminating the runtime.", {
        operation: "progress_watchdog_monitor.stall",
        parentPid: options.parentPid,
        chatJid: evaluation.stalledEntry.chatJid,
        phase: evaluation.stalledEntry.phase,
        timeoutMs: evaluation.timeoutMs,
        startedAt: new Date(evaluation.stalledEntry.startedAt).toISOString(),
        lastProgressAt: new Date(evaluation.stalledEntry.lastProgressAt).toISOString(),
        metadata: evaluation.stalledEntry.metadata,
      });
      await terminateParentProcess(options.parentPid, options.graceMs);
      return;
    }

    await Bun.sleep(options.scanMs);
  }
}

if (import.meta.main) {
  runProgressWatchdogMonitorFromArgs().catch((error) => {
    log.error("Progress-watchdog monitor failed", {
      operation: "progress_watchdog_monitor.run",
      err: error,
    });
    process.exitCode = 1;
  });
}
