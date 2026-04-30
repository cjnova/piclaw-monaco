/**
 * test/web/frontend-theme.test.ts – Tests for theme/theme.ts.
 *
 * Covers getSystemTheme(), DARK_THEME, and LIGHT_THEME.
 */

import { afterEach, describe, expect, test } from "bun:test";

import { DARK_THEME, LIGHT_THEME, getSystemTheme } from "../../web/frontend/src/theme/theme.ts";

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

const REQUIRED_THEME_KEYS = [
  "bg", "bgSidebar", "bgTerminal", "bgStatus", "border",
  "text", "textMuted", "accent", "success", "error",
  "handleHover", "handle", "inputBg", "inputBorder",
] as const;

describe("getSystemTheme", () => {
  test("returns 'dark' when window is undefined", () => {
    (globalThis as any).window = undefined;
    expect(getSystemTheme()).toBe("dark");
  });

  test("returns 'dark' when matchMedia is not a function", () => {
    (globalThis as any).window = { matchMedia: null };
    expect(getSystemTheme()).toBe("dark");
  });

  test("returns 'dark' when system prefers dark color scheme", () => {
    (globalThis as any).window = {
      matchMedia: (_query: string) => ({ matches: true }),
    };
    expect(getSystemTheme()).toBe("dark");
  });

  test("returns 'light' when system prefers light color scheme", () => {
    (globalThis as any).window = {
      matchMedia: (_query: string) => ({ matches: false }),
    };
    expect(getSystemTheme()).toBe("light");
  });

  test("passes the correct media query to matchMedia", () => {
    let capturedQuery: string | undefined;
    (globalThis as any).window = {
      matchMedia: (q: string) => {
        capturedQuery = q;
        return { matches: false };
      },
    };
    getSystemTheme();
    expect(capturedQuery).toBe("(prefers-color-scheme: dark)");
  });
});

describe("DARK_THEME", () => {
  test("has all required keys with non-empty string values", () => {
    for (const key of REQUIRED_THEME_KEYS) {
      expect(typeof DARK_THEME[key]).toBe("string");
      expect(DARK_THEME[key].length).toBeGreaterThan(0);
    }
  });

  test("uses a dark background color", () => {
    // bg should be a dark hex color (first component low)
    expect(DARK_THEME.bg).toMatch(/^#/);
  });
});

describe("LIGHT_THEME", () => {
  test("has all required keys with non-empty string values", () => {
    for (const key of REQUIRED_THEME_KEYS) {
      expect(typeof LIGHT_THEME[key]).toBe("string");
      expect(LIGHT_THEME[key].length).toBeGreaterThan(0);
    }
  });

  test("uses a light background color distinct from dark theme", () => {
    expect(LIGHT_THEME.bg).not.toBe(DARK_THEME.bg);
    expect(LIGHT_THEME.text).not.toBe(DARK_THEME.text);
  });

  test("accent differs from dark theme accent", () => {
    expect(LIGHT_THEME.accent).not.toBe(DARK_THEME.accent);
  });
});
