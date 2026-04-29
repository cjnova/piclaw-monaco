import { afterEach, expect, test } from 'bun:test';
import { EventEmitter } from 'node:events';

import {
  resetProgressWatchdogForTests,
} from '../../src/runtime/progress-watchdog.js';
import {
  resetProgressWatchdogSupervisorForTests,
  setProgressWatchdogMonitorSpawnForTests,
  startExternalProgressWatchdogMonitor,
  stopExternalProgressWatchdogMonitor,
} from '../../src/runtime/progress-watchdog-supervisor.js';
import { setEnv } from '../helpers.js';

let restoreEnv: (() => void) | null = null;

afterEach(async () => {
  restoreEnv?.();
  restoreEnv = null;
  await stopExternalProgressWatchdogMonitor();
  resetProgressWatchdogSupervisorForTests();
  resetProgressWatchdogForTests();
});

class FakeChild extends EventEmitter {
  pid = 4242;
  exitCode: number | null = null;
  killed = false;
  killSignals: string[] = [];

  once(event: string, listener: (...args: any[]) => void): this {
    return super.once(event, listener);
  }

  unref(): void {
    // noop for tests
  }

  kill(signal: string): boolean {
    this.killSignals.push(signal);
    this.killed = true;
    this.exitCode = 0;
    this.emit('exit', 0, signal);
    return true;
  }
}

test('startExternalProgressWatchdogMonitor skips spawning when disabled', () => {
  restoreEnv = setEnv({
    PICLAW_EXTERNAL_PROGRESS_WATCHDOG: '0',
    PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS: '30',
  });
  const calls: any[] = [];
  setProgressWatchdogMonitorSpawnForTests((command, args, options) => {
    calls.push({ command, args, options });
    return new FakeChild() as any;
  });

  expect(startExternalProgressWatchdogMonitor()).toBe(false);
  expect(calls).toEqual([]);
});

test('startExternalProgressWatchdogMonitor spawns a helper process when enabled', async () => {
  restoreEnv = setEnv({
    PICLAW_PROGRESS_WATCHDOG_TIMEOUT_MS: '45',
    PICLAW_EXTERNAL_PROGRESS_WATCHDOG: '1',
  });
  process.env.PICLAW_DB_IN_MEMORY = '0';
  const calls: any[] = [];
  const child = new FakeChild();
  setProgressWatchdogMonitorSpawnForTests((command, args, options) => {
    calls.push({ command, args, options });
    return child as any;
  });

  expect(startExternalProgressWatchdogMonitor()).toBe(true);
  expect(calls).toHaveLength(1);
  expect(calls[0].command).toBe(process.execPath);
  expect(calls[0].args).toContain('--state');
  expect(calls[0].args).toContain('--parent-pid');

  await stopExternalProgressWatchdogMonitor();
  expect(child.killSignals[0]).toBe('SIGTERM');
});
