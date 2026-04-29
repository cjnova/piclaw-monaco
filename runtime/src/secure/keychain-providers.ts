/**
 * secure/keychain-providers.ts – External keychain provider registry.
 *
 * Allows extensions to register platform-native or third-party secret
 * management backends (macOS Keychain, 1Password CLI, HashiCorp Vault,
 * Azure Key Vault, etc.) as fallback providers.
 *
 * Lookup order:
 *   1. Internal encrypted SQLite keychain (always checked first)
 *   2. Registered external providers (in registration order)
 *
 * This keeps the internal keychain authoritative while letting extensions
 * transparently bridge secrets from external sources without duplicating
 * them into the local store.
 */

import { createLogger } from "../utils/logger.js";

const log = createLogger("secure.keychain-providers");

// ── Provider interface ──────────────────────────────────────────────

export interface KeychainProviderEntry {
  name: string;
  type: "token" | "password" | "basic" | "secret";
  secret: string;
  username?: string | null;
}

export interface KeychainProviderMetadata {
  name: string;
  type: "token" | "password" | "basic" | "secret";
  source: string;
}

export interface KeychainProvider {
  /** Unique identifier for this provider (e.g. "macos-keychain", "1password", "azure-keyvault"). */
  id: string;

  /** Human-readable label for logging and diagnostics. */
  label: string;

  /**
   * Retrieve a secret by name. Return null if the entry is not found in
   * this provider. Throw only on real failures (network, auth, etc.).
   */
  get(name: string): Promise<KeychainProviderEntry | null>;

  /**
   * List available entry metadata from this provider.
   * Return an empty array if listing is not supported or yields nothing.
   */
  list(): Promise<KeychainProviderMetadata[]>;

  /**
   * Optional: store a secret in this provider.
   * Return true if stored, false if storage is not supported.
   */
  set?(entry: KeychainProviderEntry): Promise<boolean>;

  /**
   * Optional: delete a secret from this provider.
   * Return true if deleted, false if deletion is not supported or entry not found.
   */
  delete?(name: string): Promise<boolean>;
}

// ── Registry ────────────────────────────────────────────────────────

const providers: KeychainProvider[] = [];

/** Register an external keychain provider. */
export function registerKeychainProvider(provider: KeychainProvider): void {
  if (!provider?.id || typeof provider.get !== "function") {
    log.warn("Attempted to register invalid keychain provider", { id: provider?.id });
    return;
  }
  // Prevent duplicate registration
  if (providers.some((p) => p.id === provider.id)) {
    log.debug("Keychain provider already registered", { id: provider.id });
    return;
  }
  providers.push(provider);
  log.info("Registered keychain provider", { id: provider.id, label: provider.label });
}

/** Unregister a keychain provider by id. */
export function unregisterKeychainProvider(id: string): boolean {
  const index = providers.findIndex((p) => p.id === id);
  if (index === -1) return false;
  providers.splice(index, 1);
  log.info("Unregistered keychain provider", { id });
  return true;
}

/** Get all registered providers (read-only snapshot). */
export function getRegisteredKeychainProviders(): readonly KeychainProvider[] {
  return providers;
}

/** Clear all registered providers (for tests). */
export function clearKeychainProviders(): void {
  providers.length = 0;
}

// ── Fallback lookup ─────────────────────────────────────────────────

/**
 * Query registered external providers for an entry by name.
 * Returns the first hit (in registration order) or null.
 */
export async function getFromExternalProviders(name: string): Promise<KeychainProviderEntry | null> {
  for (const provider of providers) {
    try {
      const entry = await provider.get(name);
      if (entry) {
        log.debug("Resolved entry from external provider", { name, provider: provider.id });
        return entry;
      }
    } catch (err) {
      log.warn("External keychain provider error during get", {
        provider: provider.id,
        name,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
  return null;
}

/**
 * List metadata from all external providers, tagged with source.
 */
export async function listFromExternalProviders(): Promise<KeychainProviderMetadata[]> {
  const results: KeychainProviderMetadata[] = [];
  for (const provider of providers) {
    try {
      const entries = await provider.list();
      for (const entry of entries) {
        results.push({ ...entry, source: provider.id });
      }
    } catch (err) {
      log.warn("External keychain provider error during list", {
        provider: provider.id,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
  return results;
}
