#!/usr/bin/env bun
/**
 * Build a platform-native experimental Piclaw desktop shell artifact.
 *
 * This wraps the Electrobun desktop shell build output in a release-friendly
 * archive with a piclaw-desktop prefix. Build on the target OS/architecture.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

interface Options {
  outputDir: string;
  keepBuild: boolean;
}

type Platform = "linux" | "macos" | "windows";
type Arch = "x64" | "arm64";

const repoRoot = resolve(import.meta.dir, "..", "..");
const defaultOutputDir = join(repoRoot, "artifacts", "release");

function parseOptions(argv = process.argv.slice(2)): Options {
  const options: Options = {
    outputDir: defaultOutputDir,
    keepBuild: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--output-dir" && typeof argv[index + 1] === "string") {
      options.outputDir = resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg.startsWith("--output-dir=")) {
      options.outputDir = resolve(arg.slice("--output-dir=".length));
      continue;
    }
    if (arg === "--clean-build") {
      options.keepBuild = false;
      continue;
    }
    if (arg === "--help" || arg === "-h") printHelpAndExit();
    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelpAndExit(): never {
  console.log(`Usage: bun run scripts/release/build-experimental-shell-artifact.ts [options]\n\nOptions:\n  --output-dir DIR   Directory for the generated artifact (default: artifacts/release)\n  --clean-build      Remove the Electrobun build directory after packaging\n  -h, --help         Show this help\n`);
  process.exit(0);
}

function run(command: string, args: string[], options: { cwd?: string } = {}): void {
  const pretty = [command, ...args].join(" ");
  console.error(`[experimental-shell] ${pretty}`);
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    env: process.env,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Command failed (${result.status ?? "signal"}): ${pretty}`);
}

function readPackageVersion(): string {
  const pkg = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")) as { version?: string };
  if (!pkg.version) throw new Error("package.json has no version");
  return pkg.version;
}

function platform(): Platform {
  if (process.platform === "linux") return "linux";
  if (process.platform === "darwin") return "macos";
  if (process.platform === "win32") return "windows";
  throw new Error(`Unsupported platform for experimental shell artifacts: ${process.platform}`);
}

function arch(): Arch {
  if (process.arch === "x64") return "x64";
  if (process.arch === "arm64") return "arm64";
  throw new Error(`Unsupported architecture for experimental shell artifacts: ${process.arch}`);
}

function artifactExtension(currentPlatform: Platform): ".tar.gz" | ".zip" {
  return currentPlatform === "windows" ? ".zip" : ".tar.gz";
}

function expectedBuildDir(currentPlatform: Platform, currentArch: Arch): string {
  return join(repoRoot, "build", `stable-${currentPlatform}-${currentArch}`);
}

function findBuildDir(currentPlatform: Platform, currentArch: Arch): string {
  const expected = expectedBuildDir(currentPlatform, currentArch);
  if (existsSync(expected)) return expected;

  const buildRoot = join(repoRoot, "build");
  const suffix = `-${currentArch}`;
  const candidates = existsSync(buildRoot)
    ? readdirSync(buildRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("stable-") && entry.name.endsWith(suffix))
      .map((entry) => join(buildRoot, entry.name))
    : [];
  if (candidates.length === 1) return candidates[0];
  throw new Error(`Could not find Electrobun stable build directory for ${currentPlatform}-${currentArch}; expected ${expected}`);
}

function findShellRoot(buildDir: string): string {
  const children = readdirSync(buildDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  if (children.length === 1) return join(buildDir, children[0].name);
  const named = children.find((entry) => /^PiClaw/i.test(entry.name));
  if (named) return join(buildDir, named.name);
  throw new Error(`Could not identify Electrobun app directory in ${buildDir}`);
}

function packageArtifact(shellRoot: string, artifactPath: string, currentPlatform: Platform): void {
  const parent = resolve(shellRoot, "..");
  const name = shellRoot.slice(parent.length + 1);
  if (currentPlatform === "windows") {
    run("tar", ["-acf", artifactPath, "-C", parent, name]);
    return;
  }
  run("tar", ["-czf", artifactPath, "-C", parent, name]);
}

async function main(): Promise<void> {
  const options = parseOptions();
  const version = readPackageVersion();
  const currentPlatform = platform();
  const currentArch = arch();
  const outputName = `piclaw-desktop-${version}-${currentPlatform}-${currentArch}${artifactExtension(currentPlatform)}`;
  const outputPath = join(options.outputDir, outputName);

  // Electrobun clears/recreates the repo-level artifacts directory during its
  // build, so create the release output directory after the shell build has
  // finished. Otherwise tar/zip can fail because artifacts/release vanished.
  run("bun", ["run", "build:desktop:stable"]);
  mkdirSync(options.outputDir, { recursive: true });

  const buildDir = findBuildDir(currentPlatform, currentArch);
  const shellRoot = findShellRoot(buildDir);
  packageArtifact(shellRoot, outputPath, currentPlatform);

  const stat = statSync(outputPath);
  console.log(JSON.stringify({ artifact: outputPath, version, platform: `${currentPlatform}-${currentArch}`, experimental: true, bytes: stat.size }, null, 2));

  if (!options.keepBuild) rmSync(buildDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
