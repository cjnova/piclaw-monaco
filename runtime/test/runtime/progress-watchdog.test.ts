import { afterEach, expect, test } from "bun:test";

import {
  beginTrackedPhase,
  endTrackedPhase,
  getTrackedPhasesSnapshot,
  heartbeatTrackedPhase,
  resetProgressWatchdogForTests,
  scanForStalls,
  setProgressWatchdogTerminationHook,
} from "../../src/runtime/progress-watchdog.js";
import { setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;
let restoreTerminationHook: (() => void) | null = null;

afterEach(() => {
  restoreTerminationHook?.();
  restoreTerminationHook = null;
  restoreEnv?.();
  restoreEnv = null;
  resetProgressWatchdogForTests();
});

test("progress watchdog records and clears tracked phases", () => {
  beginTrackedPhase("web:test", "prompt", { source: "test" });

  expect(getTrackedPhasesSnapshot()).toEqual([
    expect.objectContaining({
      chatJid: "web:test",
      phase: "prompt",
      metadata: { source: "test" },
    }),
  ]);

  endTrackedPhase("web:test");
  expect(getTrackedPhasesSnapshot()).toEqual([]);
});

test("progress watchdog heartbeat refreshes the active phase", () => {
  restoreEnv = setEnv({ PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS: "50" });
  beginTrackedPhase("web:test", "prompt", { source: "test" });
  const started = getTrackedPhasesSnapshot()[0];
  expect(started).toBeTruthy();

  heartbeatTrackedPhase("web:test", "streaming", { eventType: "message_update" });
  const after = getTrackedPhasesSnapshot()[0];
  expect(after?.phase).toBe("streaming");
  expect((after?.lastProgressAt ?? 0)).toBeGreaterThanOrEqual(started?.lastProgressAt ?? 0);
  expect(after?.metadata).toMatchObject({ source: "test", eventType: "message_update" });
});

test("progress watchdog reports and terminates stalled phases", () => {
  restoreEnv = setEnv({ PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS: "25" });
  const stalls: any[] = [];
  restoreTerminationHook = setProgressWatchdogTerminationHook((stall) => {
    stalls.push(stall);
  });

  beginTrackedPhase("web:test", "preprompt_compaction", { source: "test" });
  const tracked = getTrackedPhasesSnapshot()[0];
  expect(tracked).toBeTruthy();

  const results = scanForStalls((tracked?.lastProgressAt ?? 0) + 30);
  expect(results).toHaveLength(1);
  expect(results[0]).toMatchObject({
    chatJid: "web:test",
    phase: "preprompt_compaction",
    timeoutMs: 25,
  });
  expect(stalls).toEqual([expect.objectContaining({ chatJid: "web:test", phase: "preprompt_compaction" })]);
});
