import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

import {
  deleteSessionRecording,
  getActiveSessionRecording,
  getSessionRecording,
  listSessionRecordings,
  recordSseEvent,
  recordTimelineInteraction,
  resetSessionRecordingsForTests,
  startSessionRecording,
  stopSessionRecording,
} from "../../src/session-recordings/session-recordings.js";

let tempDir = "";
const previousDir = process.env.PICLAW_RECORDINGS_DIR;

beforeEach(() => {
  tempDir = mkdtempSync(join(tmpdir(), "piclaw-recordings-test-"));
  process.env.PICLAW_RECORDINGS_DIR = tempDir;
  resetSessionRecordingsForTests();
});

afterEach(() => {
  resetSessionRecordingsForTests();
  if (previousDir === undefined) delete process.env.PICLAW_RECORDINGS_DIR;
  else process.env.PICLAW_RECORDINGS_DIR = previousDir;
  if (tempDir) rmSync(tempDir, { recursive: true, force: true });
});

describe("session recordings", () => {
  test("records timeline and SSE events into a redacted JSONL trace", () => {
    const meta = startSessionRecording({ chatJid: "web:test", title: "Demo", mode: "redacted" });
    expect(meta.status).toBe("recording");
    expect(getActiveSessionRecording("web:test")?.id).toBe(meta.id);

    recordTimelineInteraction({
      id: 10,
      chat_jid: "web:test",
      timestamp: "2026-05-08T00:00:00.000Z",
      data: { type: "user_message", content: "hello ghp_123456789012345678901234567890123456" },
    });
    recordSseEvent("agent_status", {
      chat_jid: "web:test",
      type: "tool_call",
      tool_name: "bash",
      args: { token: "secret-value" },
    });

    const stopped = stopSessionRecording("web:test");
    expect(stopped?.status).toBe("stopped");
    const recording = getSessionRecording(meta.id);
    expect(recording?.events.map((event) => event.kind)).toEqual([
      "recording_started",
      "user_input",
      "tool_activity",
      "recording_stopped",
    ]);
    expect(JSON.stringify(recording)).not.toContain("ghp_123456789012345678901234567890123456");
    expect(JSON.stringify(recording)).not.toContain("secret-value");
    expect(JSON.stringify(recording)).toContain("[redacted-github-token]");
  });

  test("lists and deletes persisted recordings", () => {
    const first = startSessionRecording({ chatJid: "web:first", title: "First" });
    stopSessionRecording(first.id);
    const second = startSessionRecording({ chatJid: "web:second", title: "Second", mode: "metadata" });
    stopSessionRecording("web:second");

    const list = listSessionRecordings();
    expect(list.map((item) => item.id).sort()).toEqual([first.id, second.id].sort());
    expect(deleteSessionRecording(first.id)).toBe(true);
    expect(getSessionRecording(first.id)).toBeNull();
  });
});
