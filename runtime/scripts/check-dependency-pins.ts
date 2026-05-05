#!/usr/bin/env bun
/**
 * Verify package dependency metadata follows the repository exact-pin policy.
 *
 * The lockfile prevents routine drift, but package.json should not advertise
 * caret/tilde/range dependencies when x-dependency-policy requires exact pins.
 */

import { readFileSync } from "fs";
import { resolve } from "path";

const PACKAGE_JSON = resolve(import.meta.dir, "..", "..", "package.json");
const DEPENDENCY_FIELDS = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies",
  "overrides",
] as const;

const RANGE_PREFIX_RE = /^(?:\^|~|>=?|<=?|=|\*)/;
const RANGE_OPERATOR_RE = /\s(?:\|\||-|>=?|<=?|=)\s/;
const WILDCARD_RE = /(?:^|[.])(?:x|X|\*)(?:$|[.])/;
const EXACT_PROTOCOL_RE = /^(?:github|git\+https|git\+ssh|https|file|link|workspace|catalog):/;

function isRangeSpecifier(specifier: string): boolean {
  const value = specifier.trim();
  if (!value) return true;
  if (EXACT_PROTOCOL_RE.test(value)) return false;
  return RANGE_PREFIX_RE.test(value)
    || RANGE_OPERATOR_RE.test(value)
    || WILDCARD_RE.test(value)
    || value === "latest";
}

const pkg = JSON.parse(readFileSync(PACKAGE_JSON, "utf8")) as Record<string, Record<string, string> | unknown>;
const violations: Array<{ field: string; name: string; specifier: string }> = [];

for (const field of DEPENDENCY_FIELDS) {
  const deps = pkg[field];
  if (!deps || typeof deps !== "object" || Array.isArray(deps)) continue;
  for (const [name, specifier] of Object.entries(deps as Record<string, unknown>)) {
    if (typeof specifier !== "string") continue;
    if (isRangeSpecifier(specifier)) violations.push({ field, name, specifier });
  }
}

if (violations.length > 0) {
  console.error("Dependency pin policy violation: package.json contains range specifiers.");
  for (const violation of violations) {
    console.error(`- ${violation.field}.${violation.name}: ${violation.specifier}`);
  }
  process.exit(1);
}

console.log("Dependency pin policy ok: package.json dependency specs are exact.");
