import { mkdtempSync, rmSync, mkdirSync, existsSync, lstatSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { expect, test } from "bun:test";

import { ensureExtensionNodeModulesLink } from "../../src/agent-pool/session-node-modules-link.js";

test("ensureExtensionNodeModulesLink creates the node_modules symlink when missing", () => {
  const temp = mkdtempSync(join(tmpdir(), "piclaw-ext-modules-link-"));
  try {
    const extensionsDir = join(temp, "extensions");
    const runtimeNodeModules = join(temp, "runtime-node_modules");
    mkdirSync(extensionsDir, { recursive: true });
    mkdirSync(join(runtimeNodeModules, "typebox"), { recursive: true });

    ensureExtensionNodeModulesLink(extensionsDir, runtimeNodeModules);

    const link = join(extensionsDir, "node_modules");
    expect(lstatSync(link).isSymbolicLink()).toBe(true);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});

test("ensureExtensionNodeModulesLink adds @sinclair/typebox inside an existing extension node_modules", () => {
  const temp = mkdtempSync(join(tmpdir(), "piclaw-ext-modules-alias-"));
  try {
    const extensionsDir = join(temp, "extensions");
    const runtimeNodeModules = join(temp, "runtime-node_modules");
    const extensionNodeModules = join(extensionsDir, "node_modules");
    mkdirSync(extensionNodeModules, { recursive: true });
    mkdirSync(join(runtimeNodeModules, "typebox"), { recursive: true });

    ensureExtensionNodeModulesLink(extensionsDir, runtimeNodeModules);

    const alias = join(extensionNodeModules, "@sinclair", "typebox");
    expect(existsSync(alias)).toBe(true);
    expect(lstatSync(alias).isSymbolicLink()).toBe(true);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});
