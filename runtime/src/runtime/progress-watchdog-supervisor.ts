import { spawn, type ChildProcess, type SpawnOptions } from "node:child_process";
import { resolve } from "node:path";

import { createLogger, debugSuppressedError } from "../utils/logger.js";
import {
  flushProgressWatchdogState,
  getProgressWatchdogStatePath,
  getProgressWatchdogTimeoutMs,
  markProgressWatchdogShuttingDown,
} from "./progress-watchdog.js";
import { registerPreShutdownHook } from "./shutdown-registry.js";

const log = createLogger("runtime.progress-watchdog-supervisor");
const ENTRY_PATH = resolve(import.meta.dir, "./progress-watchdog-monitor.ts");

type ProgressWatchdogSpawn = (command: string, args: string[], options: SpawnOptions) => ChildProcess;

let spawnProgressWatchdogMonitorImpl: ProgressWatchdogSpawn = (command, args, options) => spawn(command, args, options);
let activeProgressWatchdogChild: ChildProcess | null = null;
let preShutdownHookRegistered = false;

function isChildStillActive(child: ChildProcess | null): boolean {
  if (!child) return false;
  return child.exitCode === null && !child.killed;
}

function ensurePreShutdownHookRegistered(): void {
  if (preShutdownHookRegistered) return;
  preShutdownHookRegistered = true;
  registerPreShutdownHook(async () => {
    await stopExternalProgressWatchdogMonitor();
  });
}

export function startExternalProgressWatchdogMonitor(): boolean {
  const disabled = ["0", "false", "off", "disabled", "no"].includes(String(process.env.PICLAW_EXTERNAL_PROGRESS_WATCHDOG || "").trim().toLowerCase());
  if (disabled || process.env.PICLAW_DB_IN_MEMORY === "1") return false;
  const timeoutMs = getProgressWatchdogTimeoutMs();
  if (timeoutMs <= 0) return false;
  if (isChildStillActive(activeProgressWatchdogChild)) return false;

  ensurePreShutdownHookRegistered();
  flushProgressWatchdogState();

  const child = spawnProgressWatchdogMonitorImpl(process.execPath, [
    ENTRY_PATH,
    "--state",
    getProgressWatchdogStatePath(),
    "--parent-pid",
    String(process.pid),
  ], {
    cwd: process.cwd(),
    env: process.env,
    stdio: "ignore",
  });

  activeProgressWatchdogChild = child;
  child.once("exit", () => {
    if (activeProgressWatchdogChild === child) {
      activeProgressWatchdogChild = null;
    }
  });
  child.once("error", (error) => {
    log.warn("External progress-watchdog monitor failed to start.", {
      operation: "progress_watchdog_supervisor.spawn",
      err: error,
    });
    if (activeProgressWatchdogChild === child) {
      activeProgressWatchdogChild = null;
    }
  });
  child.unref();

  log.info("Started external progress-watchdog monitor.", {
    operation: "progress_watchdog_supervisor.start",
    pid: child.pid,
    timeoutMs,
    statePath: getProgressWatchdogStatePath(),
  });
  return true;
}

export async function stopExternalProgressWatchdogMonitor(): Promise<void> {
  markProgressWatchdogShuttingDown();

  const child = activeProgressWatchdogChild;
  activeProgressWatchdogChild = null;
  if (!child || !isChildStillActive(child)) return;

  try {
    child.kill("SIGTERM");
  } catch (error) {
    debugSuppressedError(log, "Failed to stop external progress-watchdog monitor.", error, {
      operation: "progress_watchdog_supervisor.stop",
      pid: child.pid,
    });
    return;
  }

  const deadline = Date.now() + 2_000;
  while (Date.now() < deadline) {
    if (!isChildStillActive(child)) return;
    await Bun.sleep(50);
  }

  if (!isChildStillActive(child)) return;
  try {
    child.kill("SIGKILL");
  } catch (error) {
    debugSuppressedError(log, "Failed to SIGKILL external progress-watchdog monitor after timeout.", error, {
      operation: "progress_watchdog_supervisor.stop_force",
      pid: child.pid,
    });
  }
}

export function setProgressWatchdogMonitorSpawnForTests(factory: ProgressWatchdogSpawn | null): void {
  spawnProgressWatchdogMonitorImpl = factory ?? ((command, args, options) => spawn(command, args, options));
}

export function resetProgressWatchdogSupervisorForTests(): void {
  activeProgressWatchdogChild = null;
  spawnProgressWatchdogMonitorImpl = (command, args, options) => spawn(command, args, options);
  preShutdownHookRegistered = false;
}
