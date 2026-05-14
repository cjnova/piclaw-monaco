import { beforeEach, expect, test } from "bun:test";

import "../helpers.js";
import {
  estimateContextTokensFromSession,
  maybeAutoCompactSessionBeforePrompt,
  runCompactionWithTimeout,
} from "../../src/agent-pool/compaction.js";
import { initDatabase, setChatCompactionBackoff } from "../../src/db.js";

beforeEach(() => {
  initDatabase();
});

function deferred<T = void>(): { promise: Promise<T>; resolve: (value: T) => void } {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((r) => {
    resolve = r;
  });
  return { promise, resolve };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function makeSession(messages: any[], usageTokens?: number): any {
  return {
    getContextUsage: usageTokens === undefined ? undefined : () => ({ tokens: usageTokens }),
    sessionManager: {
      buildSessionContext: () => ({ messages }),
    },
  };
}

test("estimateContextTokensFromSession trusts native usage before compaction", () => {
  const session = makeSession([
    { role: "user", content: [{ type: "text", text: "hello" }] },
    { role: "assistant", content: [{ type: "text", text: "hi" }] },
  ], 123_456);

  expect(estimateContextTokensFromSession(session)).toBe(123_456);
});

test("runCompactionWithTimeout joins concurrent compaction calls for the same chat", async () => {
  const previousTimeout = process.env.PICLAW_COMPACTION_TIMEOUT_MS;
  process.env.PICLAW_COMPACTION_TIMEOUT_MS = "5000";
  try {
    const release = deferred<string>();
    const warnings: string[] = [];
    let calls = 0;
    const session = makeSession([]);
    const options = { onWarn: (message: string) => warnings.push(message) };

    const first = runCompactionWithTimeout(session, "web:test", options, async () => {
      calls += 1;
      return await release.promise;
    });
    await Promise.resolve();
    const second = runCompactionWithTimeout(session, "web:test", options, async () => {
      calls += 1;
      return "second";
    });

    release.resolve("first");

    expect(await first).toEqual({ ok: true, result: "first" });
    expect(await second).toEqual({ ok: true, result: "first" });
    expect(calls).toBe(1);
    expect(warnings).toEqual(["Compaction already in progress; joining existing compaction"]);
  } finally {
    if (previousTimeout === undefined) delete process.env.PICLAW_COMPACTION_TIMEOUT_MS;
    else process.env.PICLAW_COMPACTION_TIMEOUT_MS = previousTimeout;
  }
});

test("runCompactionWithTimeout keeps the single-flight lock until timed-out compaction settles", async () => {
  const previousTimeout = process.env.PICLAW_COMPACTION_TIMEOUT_MS;
  process.env.PICLAW_COMPACTION_TIMEOUT_MS = "5";
  try {
    const release = deferred<void>();
    let calls = 0;
    let aborts = 0;
    const session = {
      ...makeSession([]),
      isCompacting: true,
      abortCompaction: () => {
        aborts += 1;
        // Simulate abort causing the compaction to settle shortly after
        setTimeout(() => release.resolve(), 10);
      },
    };
    const options = { onWarn: () => undefined };

    const first = await runCompactionWithTimeout(session, "web:timeout-settle", options, async () => {
      calls += 1;
      await release.promise;
      return "late";
    });

    // First call timed out, but settlement grace waited for the compaction
    // promise to settle — so the lock is already released by the time the
    // caller gets the result.
    expect(first.ok).toBe(false);
    expect(calls).toBe(1);
    expect(aborts).toBe(1);

    // Second call should now succeed independently (lock was released
    // after settlement).
    const second = await runCompactionWithTimeout(session, "web:timeout-settle", options, async () => {
      calls += 1;
      return "second";
    });
    expect(second).toEqual({ ok: true, result: "second" });
    expect(calls).toBe(2);
  } finally {
    if (previousTimeout === undefined) delete process.env.PICLAW_COMPACTION_TIMEOUT_MS;
    else process.env.PICLAW_COMPACTION_TIMEOUT_MS = previousTimeout;
  }
});

test("maybeAutoCompactSessionBeforePrompt suppresses retry after an expired non-cancellation failure", async () => {
  const previousThreshold = process.env.PICLAW_COMPACTION_THRESHOLD_PERCENT;
  process.env.PICLAW_COMPACTION_THRESHOLD_PERCENT = "75";
  try {
    const events: any[] = [];
    const warnings: string[] = [];
    let compactCalls = 0;
    const chatJid = "web:previous-failure";
    setChatCompactionBackoff(chatJid, {
      chatJid,
      failureCount: 1,
      lastFailedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
      backoffUntil: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      lastErrorMessage: "Compaction timed out after 180s",
    });
    const session = {
      ...makeSession([
        { role: "user", content: [{ type: "text", text: "x".repeat(4000) }] },
      ], 80_000),
      model: { provider: "test", id: "large", contextWindow: 100_000 },
      settingsManager: { getCompactionSettings: () => ({ enabled: true, reserveTokens: 25_000 }) },
      isStreaming: false,
      isCompacting: false,
      isRetrying: false,
      async compact() {
        compactCalls += 1;
      },
    };

    await maybeAutoCompactSessionBeforePrompt(
      session as any,
      chatJid,
      { onWarn: (message) => warnings.push(message), onInfo: () => undefined },
      (event) => events.push(event),
    );

    expect(compactCalls).toBe(0);
    expect(warnings).toContain("Pre-prompt auto-compaction suppressed for chat after recent failures");
    expect(events).toContainEqual(expect.objectContaining({
      type: "compaction_suppressed",
      reason: "previous_failure",
      errorMessage: "Compaction timed out after 180s",
    }));
  } finally {
    if (previousThreshold === undefined) delete process.env.PICLAW_COMPACTION_THRESHOLD_PERCENT;
    else process.env.PICLAW_COMPACTION_THRESHOLD_PERCENT = previousThreshold;
  }
});

test("estimateContextTokensFromSession ignores stale assistant usage after compaction", () => {
  const stalePreCompactionUsage = {
    input: 220_000,
    output: 8_000,
    cacheRead: 0,
    cacheWrite: 0,
    totalTokens: 228_000,
  };
  const session = makeSession([
    {
      role: "compactionSummary",
      summary: "short compacted summary",
      tokensBefore: 228_000,
    },
    {
      role: "assistant",
      content: [{ type: "text", text: "kept assistant message" }],
      usage: stalePreCompactionUsage,
      stopReason: "stop",
    },
    {
      role: "toolResult",
      content: [{ type: "text", text: "small result" }],
    },
  ], 230_000);

  const estimated = estimateContextTokensFromSession(session);

  expect(estimated).toBeLessThan(100);
  expect(estimated).not.toBe(230_000);
});
