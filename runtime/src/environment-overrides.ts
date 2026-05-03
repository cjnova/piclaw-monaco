import {
  extensionKvDelete,
  extensionKvGet,
  extensionKvSet,
} from "./db.js";
import { listInjectableKeychainEnvNames } from "./secure/keychain.js";

const ENVIRONMENT_SETTINGS_EXTENSION_ID = "piclaw.environment-settings";
const ENVIRONMENT_OVERRIDES_KEY = "overrides";
const ENV_NAME_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;

export type EnvironmentOverrideMap = Record<string, string>;

export interface EnvironmentVariableRow {
  name: string;
  value: string;
  overridden: boolean;
  source: "process" | "override";
}

export interface EnvironmentSettingsData {
  variables: EnvironmentVariableRow[];
  overrides: EnvironmentOverrideMap;
  keychainEnvNames: string[];
  count: number;
  overrideCount: number;
}

const inheritedProcessEnv: Record<string, string> = { ...(process.env as Record<string, string>) };
const preOverrideProcessEnv = new Map<string, string | undefined>();

function isValidEnvName(name: string): boolean {
  return ENV_NAME_REGEX.test(name);
}

function normalizeName(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeOverrides(input: unknown, keychainEnvNames = getKeychainEnvNameSet()): EnvironmentOverrideMap {
  if (!input || typeof input !== "object") return {};
  const entries = Object.entries(input as Record<string, unknown>)
    .map(([key, value]) => [normalizeName(key), typeof value === "string" ? value : String(value ?? "")] as const)
    .filter(([key]) => isValidEnvName(key) && !keychainEnvNames.has(key))
    .sort(([a], [b]) => a.localeCompare(b));
  return Object.fromEntries(entries);
}

export function getKeychainEnvNameSet(): Set<string> {
  try {
    return new Set(listInjectableKeychainEnvNames());
  } catch {
    return new Set();
  }
}

export function loadEnvironmentOverrides(): EnvironmentOverrideMap {
  return sanitizeOverrides(extensionKvGet<EnvironmentOverrideMap>(
    ENVIRONMENT_SETTINGS_EXTENSION_ID,
    ENVIRONMENT_OVERRIDES_KEY,
    "global",
    "",
  ));
}

function persistEnvironmentOverrides(overrides: EnvironmentOverrideMap): EnvironmentOverrideMap {
  const sanitized = sanitizeOverrides(overrides);
  if (Object.keys(sanitized).length === 0) {
    extensionKvDelete(ENVIRONMENT_SETTINGS_EXTENSION_ID, ENVIRONMENT_OVERRIDES_KEY, "global", "");
    return {};
  }
  extensionKvSet(ENVIRONMENT_SETTINGS_EXTENSION_ID, ENVIRONMENT_OVERRIDES_KEY, sanitized, "global", "");
  return sanitized;
}

function restoreProcessEnvValue(name: string): void {
  if (preOverrideProcessEnv.has(name)) {
    const value = preOverrideProcessEnv.get(name);
    preOverrideProcessEnv.delete(name);
    if (value === undefined) {
      delete process.env[name];
    } else {
      process.env[name] = value;
    }
    return;
  }
  if (Object.prototype.hasOwnProperty.call(inheritedProcessEnv, name)) {
    process.env[name] = inheritedProcessEnv[name];
  } else {
    delete process.env[name];
  }
}

export function applyEnvironmentOverrides(overrides: EnvironmentOverrideMap = loadEnvironmentOverrides()): EnvironmentOverrideMap {
  const keychainEnvNames = getKeychainEnvNameSet();
  const sanitized = sanitizeOverrides(overrides, keychainEnvNames);
  const nextOverrideNames = new Set(Object.keys(sanitized));

  for (const name of Object.keys(loadEnvironmentOverrides())) {
    if (nextOverrideNames.has(name)) continue;
    restoreProcessEnvValue(name);
  }

  for (const [name, value] of Object.entries(sanitized)) {
    process.env[name] = value;
  }
  return sanitized;
}

export function getEnvironmentSettingsData(): EnvironmentSettingsData {
  const keychainEnvNames = getKeychainEnvNameSet();
  const overrides = loadEnvironmentOverrides();
  applyEnvironmentOverrides(overrides);

  const names = new Set<string>();
  for (const name of Object.keys(process.env)) {
    if (!isValidEnvName(name) || keychainEnvNames.has(name)) continue;
    names.add(name);
  }
  for (const name of Object.keys(overrides)) {
    if (!isValidEnvName(name) || keychainEnvNames.has(name)) continue;
    names.add(name);
  }

  const variables = Array.from(names)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const overridden = Object.prototype.hasOwnProperty.call(overrides, name);
      return {
        name,
        value: overridden ? overrides[name] : (process.env[name] || ""),
        overridden,
        source: overridden ? "override" as const : "process" as const,
      };
    });

  return {
    variables,
    overrides,
    keychainEnvNames: Array.from(keychainEnvNames).sort((a, b) => a.localeCompare(b)),
    count: variables.length,
    overrideCount: Object.keys(overrides).length,
  };
}

export function setEnvironmentOverride(nameValue: unknown, value: unknown): EnvironmentSettingsData {
  const name = normalizeName(nameValue);
  if (!isValidEnvName(name)) throw new Error("Invalid environment variable name.");
  if (getKeychainEnvNameSet().has(name)) throw new Error("Keychain-injected environment variables cannot be overridden here.");
  const current = loadEnvironmentOverrides();
  if (!Object.prototype.hasOwnProperty.call(current, name) && !preOverrideProcessEnv.has(name)) {
    preOverrideProcessEnv.set(name, process.env[name]);
  }
  const next = persistEnvironmentOverrides({ ...current, [name]: typeof value === "string" ? value : String(value ?? "") });
  applyEnvironmentOverrides(next);
  return getEnvironmentSettingsData();
}

export function clearEnvironmentOverride(nameValue: unknown): EnvironmentSettingsData {
  const name = normalizeName(nameValue);
  if (!isValidEnvName(name)) throw new Error("Invalid environment variable name.");
  const current = loadEnvironmentOverrides();
  if (!Object.prototype.hasOwnProperty.call(current, name)) return getEnvironmentSettingsData();
  const next = { ...current };
  delete next[name];
  const persisted = persistEnvironmentOverrides(next);
  restoreProcessEnvValue(name);
  applyEnvironmentOverrides(persisted);
  return getEnvironmentSettingsData();
}
