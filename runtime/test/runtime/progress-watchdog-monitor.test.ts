import { expect, test } from 'bun:test';

import {
  evaluatePersistedProgressWatchdogState,
  parseProgressWatchdogMonitorArgs,
} from '../../src/runtime/progress-watchdog-monitor.js';

test('evaluatePersistedProgressWatchdogState returns a stalled entry when heartbeat age exceeds timeout', () => {
  const now = Date.now();
  const evaluation = evaluatePersistedProgressWatchdogState({
    pid: 123,
    updatedAt: new Date(now).toISOString(),
    timeoutMs: 30_000,
    shuttingDown: false,
    entries: [{
      chatJid: 'web:test',
      phase: 'streaming',
      startedAt: now - 60_000,
      lastProgressAt: now - 31_000,
      metadata: { source: 'test' },
    }],
  }, now);

  expect(evaluation.timeoutMs).toBe(30_000);
  expect(evaluation.stalledEntry).toEqual(expect.objectContaining({
    chatJid: 'web:test',
    phase: 'streaming',
  }));
});

test('evaluatePersistedProgressWatchdogState ignores empty or shutting-down state', () => {
  expect(evaluatePersistedProgressWatchdogState(null).stalledEntry).toBeNull();
  expect(evaluatePersistedProgressWatchdogState({
    pid: 123,
    updatedAt: new Date().toISOString(),
    timeoutMs: 30_000,
    shuttingDown: true,
    entries: [{ chatJid: 'web:test', phase: 'prompt', startedAt: Date.now(), lastProgressAt: Date.now() }],
  }).stalledEntry).toBeNull();
});

test('parseProgressWatchdogMonitorArgs reads explicit state path and parent pid', () => {
  const parsed = parseProgressWatchdogMonitorArgs([
    '--state', '/tmp/progress-watchdog.json',
    '--parent-pid', '4321',
    '--scan-ms', '1500',
    '--grace-ms', '7000',
  ]);

  expect(parsed).toEqual({
    statePath: '/tmp/progress-watchdog.json',
    parentPid: 4321,
    scanMs: 1500,
    graceMs: 7000,
  });
});
