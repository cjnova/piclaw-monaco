#!/usr/bin/env bun
/**
 * Compatibility wrapper for the Linux self-extracting .run builder.
 * New portable artifact support lives in build-portable-artifact.ts.
 */

import { buildPortableArtifactFromCli } from "./build-portable-artifact.ts";

if (process.platform !== "linux") {
  console.error(`Linux .run artifacts must be built on Linux, got ${process.platform}`);
  process.exit(1);
}

await buildPortableArtifactFromCli();
