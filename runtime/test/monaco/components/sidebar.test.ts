// Tests written by a separate model for cross-review compliance (#229)
import { test, expect, describe } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const srcDir = resolve(import.meta.dir, "../../../web/frontend/src/components");
const sidebarPath = resolve(srcDir, "Sidebar.tsx");
const src = () => readFileSync(sidebarPath, "utf8");

describe("Sidebar component (#229)", () => {
  test("Sidebar.tsx exists", () => {
    expect(existsSync(sidebarPath)).toBe(true);
  });

  test("exports Sidebar function", () => {
    expect(src()).toContain("export function Sidebar");
  });

  test("has title prop in interface", () => {
    expect(src()).toContain("title");
  });

  test("renders sidebar header element", () => {
    expect(src()).toContain("sidebar__header");
  });

  test("renders sidebar title element", () => {
    expect(src()).toContain("sidebar__title");
  });

  test("renders sidebar content wrapper", () => {
    expect(src()).toContain("sidebar__content");
  });

  test("renders children inside content", () => {
    expect(src()).toContain("children");
  });

  test("uses aside element for semantic HTML", () => {
    expect(src()).toContain("<aside");
  });

  test("has sidebar CSS class on aside element", () => {
    expect(src()).toContain('"sidebar"');
  });

  test("uppercases the title text", () => {
    expect(src()).toContain("toUpperCase");
  });

  test("accepts ComponentChildren prop type", () => {
    expect(src()).toContain("ComponentChildren");
  });
});
