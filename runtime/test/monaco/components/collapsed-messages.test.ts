/**
 * Tests for the collapsed messages localStorage persistence logic.
 * We test the helper functions by extracting the core logic inline
 * (no browser globals required beyond mocked localStorage).
 */

import { describe, it, expect, beforeEach } from "bun:test";

// ── Inline replica of the core logic from useCollapsedMessages.ts ──────────
// (avoids importing preact/signals in pure test environment)

const STORAGE_KEY = (jid: string) => `piclaw:collapsed-messages:${jid}`;

function loadCollapsed(jid: string): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(jid));
    if (raw) return new Set(JSON.parse(raw) as number[]);
  } catch {}
  return new Set();
}

function saveCollapsed(jid: string, ids: Set<number>): void {
  try {
    const arr = [...ids].slice(-500);
    localStorage.setItem(STORAGE_KEY(jid), JSON.stringify(arr));
  } catch {}
}

// ── Minimal localStorage mock ──────────────────────────────────────────────

class FakeStorage {
  private store: Map<string, string> = new Map();
  getItem(key: string): string | null { return this.store.get(key) ?? null; }
  setItem(key: string, value: string): void { this.store.set(key, value); }
  removeItem(key: string): void { this.store.delete(key); }
  clear(): void { this.store.clear(); }
}

// biome-ignore lint/suspicious/noExplicitAny: test shim
(globalThis as any).localStorage = new FakeStorage();

describe("useCollapsedMessages logic", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("loads empty set when localStorage is empty", () => {
    const set = loadCollapsed("web:default");
    expect(set.size).toBe(0);
  });

  it("saves and loads collapsed ids", () => {
    const ids = new Set<number>([1, 2, 3]);
    saveCollapsed("web:default", ids);
    const loaded = loadCollapsed("web:default");
    expect(loaded.has(1)).toBe(true);
    expect(loaded.has(2)).toBe(true);
    expect(loaded.has(3)).toBe(true);
    expect(loaded.size).toBe(3);
  });

  it("scopes storage key per JID", () => {
    const ids = new Set<number>([42]);
    saveCollapsed("web:chat1", ids);
    const other = loadCollapsed("web:chat2");
    expect(other.size).toBe(0);
  });

  it("toggle logic — adds id when absent", () => {
    const next = new Set<number>();
    next.add(7);
    expect(next.has(7)).toBe(true);
  });

  it("toggle logic — removes id when present", () => {
    const next = new Set<number>([7]);
    next.delete(7);
    expect(next.has(7)).toBe(false);
  });

  it("limits to 500 entries on save", () => {
    const big = new Set<number>(Array.from({ length: 600 }, (_, i) => i));
    saveCollapsed("web:default", big);
    const loaded = loadCollapsed("web:default");
    expect(loaded.size).toBeLessThanOrEqual(500);
  });

  it("returns empty set on malformed localStorage data", () => {
    localStorage.setItem(STORAGE_KEY("web:default"), "not-json{{");
    const loaded = loadCollapsed("web:default");
    expect(loaded.size).toBe(0);
  });
});
