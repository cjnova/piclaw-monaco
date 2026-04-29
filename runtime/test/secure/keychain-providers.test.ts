import { test, expect, beforeEach } from "bun:test";

import {
  registerKeychainProvider,
  unregisterKeychainProvider,
  getRegisteredKeychainProviders,
  clearKeychainProviders,
  getFromExternalProviders,
  listFromExternalProviders,
  type KeychainProvider,
  type KeychainProviderEntry,
} from "../../src/secure/keychain-providers.js";

beforeEach(() => {
  clearKeychainProviders();
});

function createMockProvider(id: string, entries: Record<string, KeychainProviderEntry>): KeychainProvider {
  return {
    id,
    label: `Mock ${id}`,
    async get(name) {
      return entries[name] || null;
    },
    async list() {
      return Object.values(entries).map((e) => ({ name: e.name, type: e.type, source: id }));
    },
  };
}

test("registerKeychainProvider adds a provider to the registry", () => {
  const provider = createMockProvider("test-vault", {});
  registerKeychainProvider(provider);
  expect(getRegisteredKeychainProviders()).toHaveLength(1);
  expect(getRegisteredKeychainProviders()[0].id).toBe("test-vault");
});

test("registerKeychainProvider prevents duplicate registration", () => {
  const provider = createMockProvider("test-vault", {});
  registerKeychainProvider(provider);
  registerKeychainProvider(provider);
  expect(getRegisteredKeychainProviders()).toHaveLength(1);
});

test("registerKeychainProvider rejects invalid providers", () => {
  registerKeychainProvider(null as any);
  registerKeychainProvider({ id: "", get: async () => null, list: async () => [], label: "" } as any);
  expect(getRegisteredKeychainProviders()).toHaveLength(0);
});

test("unregisterKeychainProvider removes a provider", () => {
  registerKeychainProvider(createMockProvider("a", {}));
  registerKeychainProvider(createMockProvider("b", {}));
  expect(unregisterKeychainProvider("a")).toBe(true);
  expect(getRegisteredKeychainProviders()).toHaveLength(1);
  expect(getRegisteredKeychainProviders()[0].id).toBe("b");
});

test("unregisterKeychainProvider returns false for unknown id", () => {
  expect(unregisterKeychainProvider("nonexistent")).toBe(false);
});

test("getFromExternalProviders returns first matching entry", async () => {
  registerKeychainProvider(createMockProvider("vault-a", {
    "my/secret": { name: "my/secret", type: "token", secret: "from-a" },
  }));
  registerKeychainProvider(createMockProvider("vault-b", {
    "my/secret": { name: "my/secret", type: "token", secret: "from-b" },
  }));

  const entry = await getFromExternalProviders("my/secret");
  expect(entry).not.toBeNull();
  expect(entry!.secret).toBe("from-a"); // First registered wins
});

test("getFromExternalProviders returns null when no provider has the entry", async () => {
  registerKeychainProvider(createMockProvider("vault-a", {}));
  const entry = await getFromExternalProviders("nonexistent");
  expect(entry).toBeNull();
});

test("getFromExternalProviders returns null when no providers registered", async () => {
  const entry = await getFromExternalProviders("anything");
  expect(entry).toBeNull();
});

test("getFromExternalProviders handles provider errors gracefully", async () => {
  registerKeychainProvider({
    id: "broken",
    label: "Broken provider",
    async get() { throw new Error("Network timeout"); },
    async list() { return []; },
  });
  registerKeychainProvider(createMockProvider("fallback", {
    "my/key": { name: "my/key", type: "secret", secret: "fallback-value" },
  }));

  // Should skip the broken provider and find it in the fallback
  const entry = await getFromExternalProviders("my/key");
  expect(entry).not.toBeNull();
  expect(entry!.secret).toBe("fallback-value");
});

test("listFromExternalProviders aggregates from all providers", async () => {
  registerKeychainProvider(createMockProvider("vault-a", {
    "secret-1": { name: "secret-1", type: "token", secret: "x" },
  }));
  registerKeychainProvider(createMockProvider("vault-b", {
    "secret-2": { name: "secret-2", type: "password", secret: "y" },
    "secret-3": { name: "secret-3", type: "secret", secret: "z" },
  }));

  const all = await listFromExternalProviders();
  expect(all).toHaveLength(3);
  expect(all.map((e) => e.name).sort()).toEqual(["secret-1", "secret-2", "secret-3"]);
});

test("listFromExternalProviders handles provider errors gracefully", async () => {
  registerKeychainProvider({
    id: "broken",
    label: "Broken",
    async get() { return null; },
    async list() { throw new Error("Auth failed"); },
  });
  registerKeychainProvider(createMockProvider("ok", {
    "good-key": { name: "good-key", type: "token", secret: "v" },
  }));

  const all = await listFromExternalProviders();
  expect(all).toHaveLength(1);
  expect(all[0].name).toBe("good-key");
});

test("clearKeychainProviders removes all providers", () => {
  registerKeychainProvider(createMockProvider("a", {}));
  registerKeychainProvider(createMockProvider("b", {}));
  clearKeychainProviders();
  expect(getRegisteredKeychainProviders()).toHaveLength(0);
});
