import { describe, expect, test } from "bun:test";

import {
  buildFolderChartSegments,
  getWorkspaceFileText,
  getWorkspacePreviewKind,
} from "../../web/frontend/src/panels/workspace-panel-helpers.ts";

describe("WorkspacePanel helpers", () => {
  test("extracts preview text from workspace file payloads", () => {
    expect(getWorkspaceFileText({
      path: "AGENTS.md",
      name: "AGENTS.md",
      kind: "text",
      content_type: "text/markdown",
      size: 42,
      mtime: null,
      text: "# Pi",
    })).toBe("# Pi");
  });

  test("prefers markdown content type over fallback extension guessing", () => {
    expect(getWorkspacePreviewKind("AGENTS.md", {
      path: "AGENTS.md",
      name: "AGENTS.md",
      kind: "text",
      content_type: "text/markdown",
      size: 42,
      mtime: null,
      text: "# Pi",
    })).toBe("markdown");
  });

  test("aggregates long folder breakdowns into donut chart segments", () => {
    const segments = buildFolderChartSegments([
      { name: "alpha.log", path: "alpha.log", type: "file", size: 400 },
      { name: "beta", path: "beta", type: "dir", size: 300 },
      { name: "gamma.json", path: "gamma.json", type: "file", size: 200 },
      { name: "delta.txt", path: "delta.txt", type: "file", size: 100 },
    ], 1000, 2);

    expect(segments).toHaveLength(3);
    expect(segments[0]?.label).toBe("alpha.log");
    expect(segments[1]?.label).toBe("📁 beta");
    expect(segments[2]?.label).toBe("Other");
    expect(segments[2]?.size).toBe(300);
    expect(Math.round(segments[2]?.pct ?? 0)).toBe(30);
  });
});
