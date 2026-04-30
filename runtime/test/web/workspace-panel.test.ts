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

describe("getWorkspaceFileText – edge cases", () => {
  test("returns null for null payload", () => {
    expect(getWorkspaceFileText(null)).toBeNull();
  });

  test("returns null for undefined payload", () => {
    expect(getWorkspaceFileText(undefined)).toBeNull();
  });

  test("returns null when payload has no text property", () => {
    expect(getWorkspaceFileText({
      path: "img.png",
      name: "img.png",
      kind: "image",
      size: 100,
      mtime: null,
    })).toBeNull();
  });

  test("returns empty string text as-is", () => {
    expect(getWorkspaceFileText({
      path: "empty.txt",
      name: "empty.txt",
      kind: "text",
      size: 0,
      mtime: null,
      text: "",
    })).toBe("");
  });
});

describe("getWorkspacePreviewKind – payload.kind overrides", () => {
  test("returns 'image' when payload.kind is 'image'", () => {
    expect(getWorkspacePreviewKind("image.xyz", {
      path: "image.xyz",
      name: "image.xyz",
      kind: "image",
      size: 50,
      mtime: null,
    })).toBe("image");
  });

  test("returns 'binary' when payload.kind is 'binary'", () => {
    expect(getWorkspacePreviewKind("data.bin", {
      path: "data.bin",
      name: "data.bin",
      kind: "binary",
      size: 50,
      mtime: null,
    })).toBe("binary");
  });

  test("returns 'image' when content_type starts with 'image/'", () => {
    expect(getWorkspacePreviewKind("photo.xyz", {
      path: "photo.xyz",
      name: "photo.xyz",
      kind: "text",
      content_type: "image/webp",
      size: 50,
      mtime: null,
    })).toBe("image");
  });
});

describe("getWorkspacePreviewKind – extension fallback", () => {
  const textExtensions = ["ts", "tsx", "js", "jsx", "json", "css", "html", "py", "sh",
    "yaml", "yml", "toml", "txt", "xml", "env", "ini", "conf", "scss"];
  for (const ext of textExtensions) {
    test(`classifies .${ext} as code`, () => {
      expect(getWorkspacePreviewKind(`file.${ext}`, null)).toBe("code");
    });
  }

  test("classifies .md as markdown", () => {
    expect(getWorkspacePreviewKind("README.md", null)).toBe("markdown");
  });

  test("classifies .mdx as markdown", () => {
    expect(getWorkspacePreviewKind("doc.mdx", null)).toBe("markdown");
  });

  test("classifies .png as image", () => {
    expect(getWorkspacePreviewKind("photo.png", null)).toBe("image");
  });

  test("classifies .jpg as image", () => {
    expect(getWorkspacePreviewKind("photo.jpg", null)).toBe("image");
  });

  test("classifies .svg as image", () => {
    expect(getWorkspacePreviewKind("icon.svg", null)).toBe("image");
  });

  test("classifies unknown extension as binary", () => {
    expect(getWorkspacePreviewKind("archive.tar.gz", null)).toBe("binary");
    expect(getWorkspacePreviewKind("compiled.wasm", null)).toBe("binary");
  });
});

describe("buildFolderChartSegments – edge cases", () => {
  test("returns empty array for null children", () => {
    expect(buildFolderChartSegments(null, null)).toHaveLength(0);
  });

  test("returns empty array for empty children array", () => {
    expect(buildFolderChartSegments([], 100)).toHaveLength(0);
  });

  test("returns empty array when all children have zero size", () => {
    expect(buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 0 },
      { name: "b.txt", path: "b.txt", type: "file", size: 0 },
    ], null)).toHaveLength(0);
  });

  test("returns empty array when totalSize is 0", () => {
    expect(buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 100 },
    ], 0)).toHaveLength(0);
  });

  test("computes totalSize from children when totalSize is null", () => {
    const segments = buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 600 },
      { name: "b.txt", path: "b.txt", type: "file", size: 400 },
    ], null, 10);

    expect(segments).toHaveLength(2);
    expect(segments[0]?.pct).toBeCloseTo(60, 1);
    expect(segments[1]?.pct).toBeCloseTo(40, 1);
  });

  test("includes no 'Other' segment when all children fit within maxSlices", () => {
    const segments = buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 500 },
      { name: "b.txt", path: "b.txt", type: "file", size: 300 },
    ], 800, 6);

    expect(segments.find((s) => s.label === "Other")).toBeUndefined();
  });

  test("pct values sum to 100 for exactly fitting segments", () => {
    const segments = buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 500 },
      { name: "b.txt", path: "b.txt", type: "file", size: 300 },
      { name: "c.txt", path: "c.txt", type: "file", size: 200 },
    ], 1000, 3);

    const total = segments.reduce((sum, s) => sum + s.pct, 0);
    expect(Math.round(total)).toBe(100);
  });

  test("labels directory children with folder emoji", () => {
    const segments = buildFolderChartSegments([
      { name: "src", path: "src", type: "dir", size: 800 },
      { name: "readme.md", path: "readme.md", type: "file", size: 200 },
    ], 1000, 10);

    expect(segments[0]?.label).toBe("📁 src");
    expect(segments[1]?.label).toBe("readme.md");
  });

  test("assigns colors from DOT_COLORS palette", () => {
    const segments = buildFolderChartSegments([
      { name: "a.txt", path: "a.txt", type: "file", size: 100 },
    ], 100, 6);

    expect(segments[0]?.color).toMatch(/^#/);
  });
});
