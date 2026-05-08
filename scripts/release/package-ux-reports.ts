#!/usr/bin/env bun
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";

const PDF_NAME = "piclaw-e2e-report.pdf";

type Options = {
  inputDir: string;
  version: string;
  outDir: string;
};

function usage(): never {
  console.error(`Usage: bun run scripts/release/package-ux-reports.ts --input <artifact-dir> --version <x.y.z> [--out <dir>]\n\nCreates:\n  <out>/piclaw-v<version>-ux-report.pdf       concatenated shard PDFs\n  <out>/piclaw-v<version>-ux-report-data.zip  HTML/JSON report data, PDFs excluded\n`);
  process.exit(2);
}

function parseArgs(argv: string[]): Options {
  let inputDir = "";
  let version = "";
  let outDir = "/workspace/tmp";
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--input") inputDir = argv[++i] || "";
    else if (arg === "--version") version = argv[++i] || "";
    else if (arg === "--out") outDir = argv[++i] || "";
    else if (arg === "--help" || arg === "-h") usage();
    else usage();
  }
  if (!inputDir || !version || !outDir) usage();
  return { inputDir: resolve(inputDir), version: version.replace(/^v/, ""), outDir: resolve(outDir) };
}

function walkFiles(root: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(root)) {
    const path = join(root, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) out.push(...walkFiles(path));
    else if (stat.isFile()) out.push(path);
  }
  return out;
}

function run(command: string, args: string[], cwd?: string): void {
  const result = spawnSync(command, args, { cwd, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} exited with ${result.status}`);
}

function copyDataFiles(inputDir: string, dataDir: string): void {
  for (const file of walkFiles(inputDir)) {
    if (basename(file) === PDF_NAME) continue;
    const dest = join(dataDir, relative(inputDir, file));
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(file, dest);
  }
}

const options = parseArgs(process.argv.slice(2));
if (!existsSync(options.inputDir)) throw new Error(`Input directory not found: ${options.inputDir}`);
mkdirSync(options.outDir, { recursive: true });

const releasePrefix = `piclaw-v${options.version}-ux-report`;
const pdfOut = join(options.outDir, `${releasePrefix}.pdf`);
const dataRootName = `${releasePrefix}-data`;
const dataDir = join(options.outDir, dataRootName);
const dataZip = join(options.outDir, `${dataRootName}.zip`);
const pdfs = walkFiles(options.inputDir).filter((file) => basename(file) === PDF_NAME).sort();
if (pdfs.length === 0) throw new Error(`No ${PDF_NAME} files found under ${options.inputDir}`);

rmSync(pdfOut, { force: true });
rmSync(dataDir, { force: true, recursive: true });
rmSync(dataZip, { force: true });

run("pdfunite", [...pdfs, pdfOut]);
mkdirSync(dataDir, { recursive: true });
copyDataFiles(options.inputDir, dataDir);
writeFileSync(join(dataDir, "README.md"), `# PiClaw v${options.version} UX report data\n\nThis archive contains the non-PDF Playwright shard report artifacts for the v${options.version} UX/E2E gate.\n\nThe shard PDFs were concatenated separately into \`${releasePrefix}.pdf\`.\n`);
run("zip", ["-qr", dataZip, dataRootName], options.outDir);

console.log(JSON.stringify({ pdf: pdfOut, dataZip, pdfCount: pdfs.length }, null, 2));
