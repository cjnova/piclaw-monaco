// Tests written by gpt-5.3-codex
import { describe, expect, it } from "bun:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const repoRoot = resolve(import.meta.dir, "../../../../");
const frontendSrc = resolve(repoRoot, "runtime/web/frontend/src");

const markdownTs = resolve(frontendSrc, "utils/markdown.ts");
const sanitizeRenderedMarkdownTs = resolve(frontendSrc, "utils/sanitizeRenderedMarkdown.ts");
const commandPaletteParamsTs = resolve(frontendSrc, "components/command-palette-params.ts");
const markdownPipelineTs = resolve(frontendSrc, "utils/markdown-pipeline.ts");

function grepOutput(pattern: string, target: string): string {
  try {
    return execSync(`grep -RInE '${pattern}' '${target}'`, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error: any) {
    if (error?.status === 1) return "";
    throw error;
  }
}

describe("dead code cleanup regression", () => {
  it("deletes deprecated utils/markdown.ts", () => {
    expect(existsSync(markdownTs)).toBe(false);
  });

  it("deletes deprecated utils/sanitizeRenderedMarkdown.ts", () => {
    expect(existsSync(sanitizeRenderedMarkdownTs)).toBe(false);
  });

  it("has no imports from deprecated modules in src", () => {
    const hits = grepOutput("from.*sanitizeRenderedMarkdown|from.*\\/markdown\"", frontendSrc);
    expect(hits.trim()).toBe("");
  });

  it("keeps command-palette-params.ts as single source of COMMAND_PARAMS", () => {
    expect(existsSync(commandPaletteParamsTs)).toBe(true);
    const content = grepOutput("COMMAND_PARAMS", commandPaletteParamsTs);
    expect(content).toContain("COMMAND_PARAMS");
  });

  it("uses markdown-pipeline.ts as the replacement module", () => {
    expect(existsSync(markdownPipelineTs)).toBe(true);
  });
});
