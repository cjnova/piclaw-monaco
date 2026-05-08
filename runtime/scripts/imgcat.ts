#!/usr/bin/env bun
/**
 * imgcat — display PNG images inline using the kitty graphics protocol.
 *
 * Ships with piclaw. Zero dependencies beyond Bun.
 *
 * Usage:
 *   imgcat [OPTIONS] FILE [FILE...]
 *
 * Options:
 *   -w, --width COLS      Display width in terminal columns (default: auto)
 *   -h, --height ROWS     Display height in terminal rows (default: auto)
 *   --max-width COLS      Maximum width in columns (default: 80)
 *   --max-height ROWS     Maximum height in rows (default: 24)
 *   -i, --id ID           Starting image ID (default: 1)
 *   -q, --quiet           Suppress all protocol responses (q=2 instead of q=1)
 *   --help                Show this help
 */

const CHUNK_SIZE = 4096;
const CELL_ASPECT = 2.0; // terminal cells are ~2x taller than wide

// ---------------------------------------------------------------------------
// PNG dimension parser (reads IHDR)
// ---------------------------------------------------------------------------

function parsePngDimensions(buf: Uint8Array): { width: number; height: number } | null {
  if (buf.length < 24) return null;
  // PNG signature: 137 80 78 71 13 10 26 10
  if (buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) return null;
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const width = view.getUint32(16, false);
  const height = view.getUint32(20, false);
  if (width === 0 || height === 0 || width > 65535 || height > 65535) return null;
  return { width, height };
}

// ---------------------------------------------------------------------------
// Cell-size computation (preserves aspect ratio)
// ---------------------------------------------------------------------------

function computeCellSize(
  imgW: number, imgH: number,
  cols: number | null, rows: number | null,
  maxCols: number, maxRows: number,
): { cols: number; rows: number } {
  if (cols && rows) return { cols, rows };

  if (cols) {
    const r = Math.max(1, Math.round(cols * imgH / imgW / CELL_ASPECT));
    return { cols, rows: Math.min(r, maxRows) };
  }
  if (rows) {
    const c = Math.max(1, Math.round(rows * imgW / imgH * CELL_ASPECT));
    return { cols: Math.min(c, maxCols), rows };
  }

  // Auto-fit
  const scaleW = maxCols / imgW;
  const scaleH = maxRows / (imgH / CELL_ASPECT);
  const scale = Math.min(scaleW, scaleH);
  return {
    cols: Math.min(maxCols, Math.max(1, Math.round(imgW * scale))),
    rows: Math.min(maxRows, Math.max(1, Math.round(imgH * scale / CELL_ASPECT))),
  };
}

// ---------------------------------------------------------------------------
// Kitty graphics protocol emitter
// ---------------------------------------------------------------------------

function sendKittyImage(
  data: Uint8Array, imgW: number, imgH: number,
  cols: number, rows: number, imageId: number, quiet: number,
): void {
  const b64 = Buffer.from(data).toString("base64");
  const out = Bun.stdout.writer();
  let first = true;

  for (let i = 0; i < b64.length; i += CHUNK_SIZE) {
    const chunk = b64.slice(i, i + CHUNK_SIZE);
    const more = i + CHUNK_SIZE < b64.length ? 1 : 0;

    if (first) {
      out.write(`\x1b_Ga=T,q=${quiet},f=100,t=d,i=${imageId},s=${imgW},v=${imgH},c=${cols},r=${rows},m=${more};`);
      first = false;
    } else {
      out.write(`\x1b_Gm=${more};`);
    }
    out.write(chunk);
    out.write("\x1b\\");
  }

  out.write("\n");
  out.flush();
}

// ---------------------------------------------------------------------------
// Display a single file
// ---------------------------------------------------------------------------

async function displayFile(
  path: string, opts: { width: number | null; height: number | null; maxWidth: number; maxHeight: number; quiet: number },
  imageId: number,
): Promise<boolean> {
  const file = Bun.file(path);
  if (!await file.exists()) {
    console.error(`imgcat: ${path}: No such file`);
    return false;
  }

  const buf = new Uint8Array(await file.arrayBuffer());
  const dims = parsePngDimensions(buf);
  if (!dims) {
    console.error(`imgcat: ${path}: Not a valid PNG or cannot read dimensions`);
    return false;
  }

  const cell = computeCellSize(dims.width, dims.height, opts.width, opts.height, opts.maxWidth, opts.maxHeight);
  sendKittyImage(buf, dims.width, dims.height, cell.cols, cell.rows, imageId, opts.quiet);
  return true;
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function printHelp(): void {
  console.log(`Usage: imgcat [OPTIONS] FILE [FILE...]

Display PNG images inline using the kitty graphics protocol.

Options:
  -w, --width COLS      Display width in terminal columns
  -h, --height ROWS     Display height in terminal rows
  --max-width COLS      Maximum width in columns (default: 80)
  --max-height ROWS     Maximum height in rows (default: 24)
  -i, --id ID           Starting image ID (default: 1)
  -q, --quiet           Suppress all protocol responses (default: suppress OK only)
  --help                Show this help`);
}

function parseArgs(args: string[]): {
  files: string[];
  width: number | null;
  height: number | null;
  maxWidth: number;
  maxHeight: number;
  startId: number;
  quiet: number;
} {
  const result = {
    files: [] as string[],
    width: null as number | null,
    height: null as number | null,
    maxWidth: 80,
    maxHeight: 24,
    startId: 1,
    quiet: 1,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help") { printHelp(); process.exit(0); }
    else if ((arg === "-w" || arg === "--width") && i + 1 < args.length) result.width = parseInt(args[++i], 10);
    else if ((arg === "-h" || arg === "--height") && i + 1 < args.length) result.height = parseInt(args[++i], 10);
    else if (arg === "--max-width" && i + 1 < args.length) result.maxWidth = parseInt(args[++i], 10);
    else if (arg === "--max-height" && i + 1 < args.length) result.maxHeight = parseInt(args[++i], 10);
    else if ((arg === "-i" || arg === "--id") && i + 1 < args.length) result.startId = parseInt(args[++i], 10);
    else if (arg === "-q" || arg === "--quiet") result.quiet = 2;
    else if (arg.startsWith("-")) { console.error(`imgcat: unknown option: ${arg}`); process.exit(1); }
    else result.files.push(arg);
  }

  if (result.files.length === 0) {
    console.error("imgcat: no files specified");
    printHelp();
    process.exit(1);
  }

  return result;
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  let id = opts.startId;
  let ok = true;

  for (const path of opts.files) {
    if (await displayFile(path, opts, id)) {
      id++;
    } else {
      ok = false;
    }
  }

  process.exit(ok ? 0 : 1);
}

main();
