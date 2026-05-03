/**
 * web/ui-state.ts – Server-persisted web UI preferences.
 *
 * Stores instance-wide UI state in extension_kv so it survives browser storage
 * clears, device changes, and restarts. Legacy config-backed theme values remain
 * a migration/fallback path for older installs.
 */

import { getUiThemeConfig as getLegacyUiThemeConfig, setUiThemeConfig as setLegacyUiThemeConfig } from "../../core/config.js";
import { extensionKvGet, extensionKvSet } from "../../db.js";

const UI_EXTENSION_ID = "piclaw-ui";
const THEME_KEY = "theme";
const METERS_KEY = "meters";

export interface ServerUiThemeConfig {
  theme: string;
  tint: string | null;
}

export interface ServerUiMetersConfig {
  enabled: boolean;
  collapsed: boolean;
}

function normalizeThemeValue(value: unknown, fallback = "default"): string {
  const raw = typeof value === "string" ? value.trim().toLowerCase() : "";
  return raw || fallback;
}

function normalizeTintValue(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function normalizeThemeConfig(value: unknown, fallback: ServerUiThemeConfig): ServerUiThemeConfig {
  if (!value || typeof value !== "object") return fallback;
  const record = value as Record<string, unknown>;
  return {
    theme: normalizeThemeValue(record.theme, fallback.theme),
    tint: record.tint === undefined ? fallback.tint : normalizeTintValue(record.tint),
  };
}

function normalizeMetersConfig(value: unknown, fallback: ServerUiMetersConfig): ServerUiMetersConfig {
  if (!value || typeof value !== "object") return fallback;
  const record = value as Record<string, unknown>;
  return {
    enabled: typeof record.enabled === "boolean" ? record.enabled : fallback.enabled,
    collapsed: typeof record.collapsed === "boolean" ? record.collapsed : fallback.collapsed,
  };
}

function kvGet<T>(key: string): T | null {
  try {
    return extensionKvGet<T>(UI_EXTENSION_ID, key, "global");
  } catch {
    return null;
  }
}

function kvSet(key: string, value: unknown): void {
  try {
    extensionKvSet(UI_EXTENSION_ID, key, value, "global");
  } catch {
    return;
  }
}

export function getServerUiThemeConfig(): ServerUiThemeConfig {
  const legacy = getLegacyUiThemeConfig();
  const fallback: ServerUiThemeConfig = {
    theme: normalizeThemeValue(legacy.theme, "default"),
    tint: normalizeTintValue(legacy.tint),
  };
  const stored = kvGet<unknown>(THEME_KEY);
  if (stored !== null) return normalizeThemeConfig(stored, fallback);
  kvSet(THEME_KEY, fallback);
  return fallback;
}

export function setServerUiThemeConfig(patch: { theme?: string; tint?: string | null }): ServerUiThemeConfig {
  const current = getServerUiThemeConfig();
  const next: ServerUiThemeConfig = {
    theme: patch.theme !== undefined ? normalizeThemeValue(patch.theme, "default") : current.theme,
    tint: patch.tint !== undefined ? normalizeTintValue(patch.tint) : current.tint,
  };
  kvSet(THEME_KEY, next);
  // Keep the legacy config in sync for older code paths and downgrade safety.
  setLegacyUiThemeConfig(next);
  return next;
}

export function getServerUiMetersConfig(): ServerUiMetersConfig {
  return normalizeMetersConfig(kvGet<unknown>(METERS_KEY), { enabled: false, collapsed: false });
}

export function setServerUiMetersConfig(patch: Partial<ServerUiMetersConfig>): ServerUiMetersConfig {
  const current = getServerUiMetersConfig();
  const next: ServerUiMetersConfig = {
    enabled: typeof patch.enabled === "boolean" ? patch.enabled : current.enabled,
    collapsed: typeof patch.collapsed === "boolean" ? patch.collapsed : current.collapsed,
  };
  kvSet(METERS_KEY, next);
  return next;
}

export function getServerUiState(): { ui_theme: ServerUiThemeConfig; ui_meters: ServerUiMetersConfig } {
  return {
    ui_theme: getServerUiThemeConfig(),
    ui_meters: getServerUiMetersConfig(),
  };
}
