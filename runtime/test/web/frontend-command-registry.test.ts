/**
 * test/web/frontend-command-registry.test.ts – Tests for services/CommandRegistry.ts.
 *
 * Covers register, unregister, search, execute, and getAll.
 */

import { describe, expect, test } from "bun:test";

import { CommandRegistry } from "../../web/frontend/src/services/CommandRegistry.ts";

describe("CommandRegistry.register / getAll", () => {
  test("returns all registered commands", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "nav.open", label: "Open File", category: "navigation", handler: () => {} });
    registry.register({ id: "term.new", label: "New Terminal", category: "terminal", handler: () => {} });
    expect(registry.getAll()).toHaveLength(2);
  });

  test("starts empty", () => {
    const registry = new CommandRegistry();
    expect(registry.getAll()).toHaveLength(0);
  });

  test("overrides existing command when same id is registered again", () => {
    const registry = new CommandRegistry();
    let v1Called = false;
    let v2Called = false;
    registry.register({ id: "cmd.x", label: "V1", category: "general", handler: () => { v1Called = true; } });
    registry.register({ id: "cmd.x", label: "V2", category: "general", handler: () => { v2Called = true; } });
    expect(registry.getAll()).toHaveLength(1);
    expect(registry.getAll()[0]?.label).toBe("V2");
    registry.execute("cmd.x");
    expect(v1Called).toBe(false);
    expect(v2Called).toBe(true);
  });
});

describe("CommandRegistry.unregister", () => {
  test("removes a registered command by id", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "test.cmd", label: "Test", category: "general", handler: () => {} });
    registry.unregister("test.cmd");
    expect(registry.getAll()).toHaveLength(0);
  });

  test("is a no-op for an unknown id", () => {
    const registry = new CommandRegistry();
    expect(() => registry.unregister("not-registered")).not.toThrow();
  });

  test("only removes the targeted command", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "keep", label: "Keep Me", category: "general", handler: () => {} });
    registry.register({ id: "remove", label: "Remove Me", category: "general", handler: () => {} });
    registry.unregister("remove");
    expect(registry.getAll()).toHaveLength(1);
    expect(registry.getAll()[0]?.id).toBe("keep");
  });
});

describe("CommandRegistry.search", () => {
  test("returns all commands for empty query string", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "a", label: "Alpha", category: "general", handler: () => {} });
    registry.register({ id: "b", label: "Beta", category: "general", handler: () => {} });
    expect(registry.search("")).toHaveLength(2);
  });

  test("returns all commands for whitespace-only query", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "a", label: "Alpha", category: "general", handler: () => {} });
    registry.register({ id: "b", label: "Beta", category: "general", handler: () => {} });
    expect(registry.search("   ")).toHaveLength(2);
  });

  test("filters by label substring case-insensitively", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "open-file", label: "Open File", category: "general", handler: () => {} });
    registry.register({ id: "close-tab", label: "Close Tab", category: "general", handler: () => {} });
    registry.register({ id: "find-files", label: "Find in Files", category: "general", handler: () => {} });

    const results = registry.search("file");
    expect(results).toHaveLength(2);
    const ids = results.map((c) => c.id).sort();
    expect(ids).toEqual(["find-files", "open-file"]);
  });

  test("is case-insensitive", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "cmd", label: "Open Terminal", category: "terminal", handler: () => {} });
    expect(registry.search("TERMINAL")).toHaveLength(1);
    expect(registry.search("terminal")).toHaveLength(1);
    expect(registry.search("Terminal")).toHaveLength(1);
  });

  test("returns empty array when nothing matches", () => {
    const registry = new CommandRegistry();
    registry.register({ id: "a", label: "Alpha", category: "general", handler: () => {} });
    expect(registry.search("zzz")).toHaveLength(0);
  });

  test("returns empty array on empty registry", () => {
    const registry = new CommandRegistry();
    expect(registry.search("anything")).toHaveLength(0);
  });
});

describe("CommandRegistry.execute", () => {
  test("calls the handler for a registered command", () => {
    const registry = new CommandRegistry();
    let called = false;
    registry.register({ id: "test.cmd", label: "Test", category: "general", handler: () => { called = true; } });
    registry.execute("test.cmd");
    expect(called).toBe(true);
  });

  test("is a no-op for an unknown id", () => {
    const registry = new CommandRegistry();
    expect(() => registry.execute("missing")).not.toThrow();
  });

  test("does not call other command handlers", () => {
    const registry = new CommandRegistry();
    let aCount = 0;
    let bCount = 0;
    registry.register({ id: "a", label: "A", category: "general", handler: () => { aCount++; } });
    registry.register({ id: "b", label: "B", category: "general", handler: () => { bCount++; } });
    registry.execute("a");
    expect(aCount).toBe(1);
    expect(bCount).toBe(0);
  });
});
