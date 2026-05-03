import { test, expect } from "bun:test";

test("mermaid render module loads without errors", async () => {
  const mod = await import("../../../web/frontend/src/utils/mermaid-render.ts");
  expect(mod.renderMermaidDiagrams).toBeFunction();
});
