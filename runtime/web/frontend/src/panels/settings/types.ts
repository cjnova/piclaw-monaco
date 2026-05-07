/* ── Shared types for SettingsPanel section modules ── */

export interface Theme {
  name: string;
  label: string;
  mode: string;
}

export interface Provider {
  id: string;
  name: string;
  hasOAuth?: boolean;
  hasApiKey?: boolean;
  configured?: boolean;
  authType?: string | null;
  apiKeyHint?: string;
}

export interface WatchdogPhase {
  chat?: string;
  phase?: string;
  started?: string;
  lastHeartbeat?: string;
}

export interface WorkspaceSettings {
  webTerminalEnabled?: boolean;
  vncAllowDirect?: boolean;
  treeMaxDepth?: number;
  treeMaxEntries?: number;
}

export interface Toolset {
  name: string;
  description?: string;
  tools?: Tool[];
}

export interface Tool {
  name: string;
  kind?: string;
  weight?: string;
  description?: string;
  summary?: string;
}

export interface SettingsData {
  /* general */
  assistantName?: string;
  userName?: string;
  sessionAutoRotate?: boolean;
  sessionMaxSizeMb?: number;
  toolUseBudget?: number;
  webTerminalEnabled?: boolean;
  sessionIsolation?: "none" | "summary" | "full";
  searchMatchMode?: "or" | "and";
  composeUploadLimitMb?: number;
  workspaceUploadLimitMb?: number;
  instanceTotp?: { configured?: boolean };
  /* appearance */
  uiTheme?: string;
  uiTint?: string | null;
  themes?: Theme[];
  /* compaction */
  compactionTimeoutSec?: number;
  compactionBackoffBaseMin?: number;
  compactionBackoffMaxMin?: number;
  progressWatchdogEnabled?: boolean;
  progressWatchdogTimeoutSec?: number;
  compactionBackoffs?: string[];
  progressWatchdogPhases?: WatchdogPhase[];
  /* workspace */
  workspaceSettings?: WorkspaceSettings;
  /* providers */
  providers?: Provider[];
  /* toolsets */
  toolsets?: Toolset[];
}

export type Category = "general" | "sessions" | "workspace" | "environment" | "models" | "keychain" | "tools" | "appearance" | "compaction" | "providers";
