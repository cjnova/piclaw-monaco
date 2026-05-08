import { describe, expect, test } from "bun:test";
import path from "node:path";
import {
  buildAuditCommandEnv,
  buildFollowupTicketMarkdown,
} from "../../../scripts/audit-baseline-quality-deterministic.ts";

const repoRoot = path.resolve(import.meta.dir, "../../..");
const auditScriptPath = path.join(repoRoot, "scripts", "audit-baseline-quality-deterministic.ts");

describe("audit-baseline-quality-deterministic", () => {
  test("buildAuditCommandEnv isolates runtime state away from the live workspace", () => {
    const env = buildAuditCommandEnv({ PATH: process.env.PATH, PICLAW_WORKSPACE: "/workspace" });

    expect(env.PATH).toBe(process.env.PATH);
    expect(env.PICLAW_WORKSPACE).not.toBe("/workspace");
    expect(env.PICLAW_WORKSPACE).toContain("artifacts/baseline-quality-deterministic");
    expect(env.PICLAW_STORE).toContain("isolated-state/store");
    expect(env.PICLAW_DATA).toContain("isolated-state/data");
    expect(env.PICLAW_DB_IN_MEMORY).toBe("1");
  });

  test("list-groups exposes finer deterministic subgroup coverage", async () => {
    const proc = Bun.spawn(["bun", "run", auditScriptPath, "--list-groups"], {
      cwd: repoRoot,
      stdout: "pipe",
      stderr: "pipe",
      env: {
        ...process.env,
        TZ: "UTC",
        LANG: "C.UTF-8",
        LC_ALL: "C.UTF-8",
        CI: "1",
        FORCE_COLOR: "0",
      },
    });

    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
      proc.exited,
    ]);

    expect(exitCode).toBe(0);
    expect(stderr.trim()).toBe("");

    const lines = stdout.trim().split(/\r?\n/);
    const groups = new Map<string, { count: number; label: string }>();
    for (const line of lines) {
      const [id = "", countText = "", label = ""] = line.split("\t");
      const count = Number.parseInt(countText, 10);
      if (!id || !label || !Number.isFinite(count)) continue;
      groups.set(id, { count, label });
    }

    const expectGroup = (id: string, label: string) => {
      const group = groups.get(id);
      expect(group).toBeDefined();
      expect(group?.label).toBe(label);
      expect((group?.count ?? 0) > 0).toBe(true);
    };

    expectGroup("channels-web-agent-flow", "channels web agent flow");
    expectGroup("channels-web-auth-security", "channels web auth and security");
    expectGroup("channels-web-http-routes", "channels web http and route surfaces");
    expectGroup("channels-web-media-workspace-remote", "channels web media, workspace, and remote surfaces");
    expectGroup("web-ui-interaction-and-state", "web ui interaction and state");
    expectGroup("web-ui-rendering-and-panes", "web ui rendering and panes");
    expectGroup("web-ui-remote-and-workspace", "web ui remote and workspace");
  });

  test("follow-up ticket markdown captures reproducible failure evidence", () => {
    const markdown = buildFollowupTicketMarkdown({
      id: "01-web-agent-flow",
      title: "Fix deterministic channels web agent flow sweep failures",
      slug: "01-web-agent-flow",
      category: "consistent_fail",
      groupId: "channels-web-agent-flow",
      groupLabel: "channels web agent flow",
      command: "cd runtime && bun test test/channels/web/web-channel.test.ts",
      logPaths: [
        "/tmp/audit/logs/group-channels-web-agent-flow-attempt-1.log",
        "/tmp/audit/logs/group-channels-web-agent-flow-attempt-2.log",
      ],
      artifactPath: "/tmp/audit",
      artifactTicketPath: "/tmp/audit/followups/01-web-agent-flow.md",
      boardTicketPath: "/tmp/board/01-web-agent-flow.md",
      excerpt: [
        "Expected queue item to be removed before steer enqueue",
        "1 fail, 0 pass",
      ],
      fileCount: 2,
      files: [
        "channels/web/web-channel.test.ts",
        "channels/web/agent-message-handler.test.ts",
      ],
    });

    expect(markdown).toContain("id: deterministic-sweep-01-web-agent-flow");
    expect(markdown).toContain("# Fix deterministic channels web agent flow sweep failures");
    expect(markdown).toContain("The deterministic sweep left the `channels-web-agent-flow` group in a `consistent_fail` state");
    expect(markdown).toContain("- Artifact dir: `/tmp/audit`");
    expect(markdown).toContain("- Artifact ticket path: `/tmp/audit/followups/01-web-agent-flow.md`");
    expect(markdown).toContain("- Board ticket path: `/tmp/board/01-web-agent-flow.md`");
    expect(markdown).toContain("- Logs: `/tmp/audit/logs/group-channels-web-agent-flow-attempt-1.log`, `/tmp/audit/logs/group-channels-web-agent-flow-attempt-2.log`");
    expect(markdown).toContain("- `channels/web/web-channel.test.ts`");
    expect(markdown).toContain("- Expected queue item to be removed before steer enqueue");
  });
});
