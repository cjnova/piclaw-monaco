#!/usr/bin/env bun
/**
 * scripts/generate-pwa-icons.ts – Regenerate all PWA icon sizes from the 512px source.
 *
 * Usage: bun run scripts/generate-pwa-icons.ts
 *
 * Generates optimized PNG icons from icon-512.png for:
 * - PWA manifest icons (192px, 512px)
 * - Apple touch icons (152px, 167px, 180px)
 * - favicon.ico (multi-size PNG-compressed ICO, preserves transparency)
 */

import sharp from "sharp";
import { resolve } from "node:path";
import { writeFile } from "node:fs/promises";

const STATIC_DIR = resolve(import.meta.dir, "..", "runtime", "web", "static");
const SOURCE = resolve(STATIC_DIR, "icon-512.png");

const TARGETS = [
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "apple-touch-icon-precomposed.png", size: 180 },
  { name: "apple-touch-icon-152.png", size: 152 },
  { name: "apple-touch-icon-152x152.png", size: 152 },
  { name: "apple-touch-icon-167.png", size: 167 },
  { name: "apple-touch-icon-167x167.png", size: 167 },
  { name: "apple-touch-icon-180.png", size: 180 },
  { name: "apple-touch-icon-180x180.png", size: 180 },
] as const;

const FAVICON_SIZES = [16, 32, 48, 64, 128, 256] as const;

async function resizeToPngBuffer(sourceBuffer: Buffer, size: number): Promise<Buffer> {
  return await sharp(sourceBuffer)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 90, compressionLevel: 9 })
    .toBuffer();
}

function encodeIco(images: Array<{ size: number; data: Buffer }>): Buffer {
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + (images.length * dirEntrySize);
  const chunks: Buffer[] = [];
  const header = Buffer.alloc(offset);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type=icon
  header.writeUInt16LE(images.length, 4);

  for (const [index, image] of images.entries()) {
    const entryOffset = headerSize + (index * dirEntrySize);
    header[entryOffset] = image.size >= 256 ? 0 : image.size;
    header[entryOffset + 1] = image.size >= 256 ? 0 : image.size;
    header[entryOffset + 2] = 0; // palette colors
    header[entryOffset + 3] = 0; // reserved
    header.writeUInt16LE(1, entryOffset + 4); // planes
    header.writeUInt16LE(32, entryOffset + 6); // RGBA
    header.writeUInt32LE(image.data.length, entryOffset + 8);
    header.writeUInt32LE(offset, entryOffset + 12);
    chunks.push(image.data);
    offset += image.data.length;
  }

  return Buffer.concat([header, ...chunks]);
}

async function writeFavicon(sourceBuffer: Buffer): Promise<void> {
  const faviconPath = resolve(STATIC_DIR, "favicon.ico");
  const before = Bun.file(faviconPath).size;
  const resized = await Promise.all(FAVICON_SIZES.map(async (size) => ({
    size,
    data: await resizeToPngBuffer(sourceBuffer, size),
  })));
  const icoBuffer = encodeIco(resized);
  await writeFile(faviconPath, icoBuffer);
  const after = Bun.file(faviconPath).size;
  const saved = before - after;
  console.log(`  favicon.ico: ${FAVICON_SIZES.join("/")}px multi-size (${after} bytes${saved > 0 ? `, saved ${saved} bytes` : ""})`);
}

async function main() {
  const sourceBuffer = await Bun.file(SOURCE).arrayBuffer();
  const source = await sharp(Buffer.from(sourceBuffer)).metadata();
  console.log(`Source: ${SOURCE} (${source.width}x${source.height})`);

  for (const target of TARGETS) {
    const output = resolve(STATIC_DIR, target.name);
    const before = Bun.file(output).size;
    await sharp(await resizeToPngBuffer(Buffer.from(sourceBuffer), target.size)).toFile(output);
    const after = Bun.file(output).size;
    const saved = before - after;
    console.log(`  ${target.name}: ${target.size}x${target.size} (${after} bytes${saved > 0 ? `, saved ${saved} bytes` : ""})`);
  }

  await writeFavicon(Buffer.from(sourceBuffer));

  console.log("Done.");
}

await main();
