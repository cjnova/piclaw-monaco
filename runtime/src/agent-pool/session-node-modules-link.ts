import { existsSync, lstatSync, mkdirSync, symlinkSync } from "fs";
import { dirname, join } from "path";

import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("agent-pool.session");

const FRAMEWORK_EXTENSION_MODULE_ALIASES = [
  ["@sinclair/typebox", "typebox"],
] as const;

function pathExists(path: string): boolean {
  return existsSync(path);
}

function isDirectoryOrSymlink(path: string): boolean {
  try {
    const stat = lstatSync(path);
    return stat.isDirectory() || stat.isSymbolicLink();
  } catch {
    return false;
  }
}

function ensurePackageAlias(nodeModulesLink: string, packageName: string, targetPackageDir: string): void {
  if (!pathExists(targetPackageDir)) return;
  const aliasPath = join(nodeModulesLink, ...packageName.split("/"));
  if (isDirectoryOrSymlink(aliasPath)) return;
  try {
    mkdirSync(dirname(aliasPath), { recursive: true });
    symlinkSync(targetPackageDir, aliasPath);
  } catch (error) {
    if (isDirectoryOrSymlink(aliasPath)) return;
    debugSuppressedError(log, "Failed to create extension package alias symlink.", error, {
      aliasPath,
      targetPackageDir,
    });
  }
}

function ensureFrameworkPackageAliases(nodeModulesLink: string, nodeModulesDir: string): void {
  if (!isDirectoryOrSymlink(nodeModulesLink)) return;
  for (const [aliasName, targetName] of FRAMEWORK_EXTENSION_MODULE_ALIASES) {
    const scopedTarget = join(nodeModulesDir, ...aliasName.split("/"));
    const genericTarget = join(nodeModulesDir, ...targetName.split("/"));
    ensurePackageAlias(nodeModulesLink, aliasName, pathExists(scopedTarget) ? scopedTarget : genericTarget);
  }
}

export function ensureExtensionNodeModulesLink(extensionsDir: string, nodeModulesDir: string | null): void {
  if (!nodeModulesDir) return;

  const link = join(extensionsDir, "node_modules");
  if (existsSync(link)) {
    ensureFrameworkPackageAliases(link, nodeModulesDir);
    return;
  }

  try {
    symlinkSync(nodeModulesDir, link);
    ensureFrameworkPackageAliases(link, nodeModulesDir);
  } catch (error) {
    if (existsSync(link)) {
      ensureFrameworkPackageAliases(link, nodeModulesDir);
      return;
    }
    debugSuppressedError(log, "Failed to create bundled extension node_modules symlink.", error, {
      extensionsDir,
      link,
      nodeModulesDir,
    });
  }
}
