/**
 * utils/image-processing.ts – Shared image processing utilities using sharp.
 *
 * Provides resize, optimize, and format conversion helpers for avatars,
 * link preview images, and attachment thumbnails.
 */

import { createLogger, debugSuppressedError } from "./logger.js";
import type sharp from "sharp";

const log = createLogger("utils.image-processing");

export interface ResizeOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: "webp" | "jpeg" | "png";
}

export interface ProcessedImage {
  data: Buffer;
  mimeType: string;
  width: number;
  height: number;
}

let _sharp: typeof sharp | null = null;

async function getSharp(): Promise<typeof sharp> {
  if (_sharp) return _sharp;
  const mod = await import("sharp");
  // sharp uses `export = sharp` (CJS), so Bun/ESM interop puts it on .default
  _sharp = (mod as unknown as { default: typeof sharp }).default ?? (mod as unknown as typeof sharp);
  return _sharp;
}

/**
 * Resize and optimize an image buffer.
 * Returns null if processing fails (caller should use the original).
 */
export async function resizeImage(
  input: Buffer | Uint8Array,
  options: ResizeOptions = {},
): Promise<ProcessedImage | null> {
  const {
    maxWidth = 800,
    maxHeight = 800,
    quality = 80,
    format = "webp",
  } = options;

  try {
    const sharp = await getSharp();
    const pipeline = sharp(input)
      .rotate() // auto-rotate from EXIF
      .resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      });

    let output: Buffer;
    let mimeType: string;

    switch (format) {
      case "jpeg":
        output = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
        mimeType = "image/jpeg";
        break;
      case "png":
        output = await pipeline.png({ quality }).toBuffer();
        mimeType = "image/png";
        break;
      case "webp":
      default:
        output = await pipeline.webp({ quality }).toBuffer();
        mimeType = "image/webp";
        break;
    }

    const metadata = await sharp(output).metadata();
    return {
      data: output,
      mimeType,
      width: metadata.width ?? 0,
      height: metadata.height ?? 0,
    };
  } catch (error) {
    debugSuppressedError(log, "Image processing failed; returning null so caller can use the original.", error);
    return null;
  }
}

/**
 * Generate a thumbnail from an image buffer.
 * Returns null if processing fails.
 */
export async function generateThumbnail(
  input: Buffer | Uint8Array,
  options: { maxWidth?: number; maxHeight?: number; quality?: number } = {},
): Promise<ProcessedImage | null> {
  return resizeImage(input, {
    maxWidth: options.maxWidth ?? 320,
    maxHeight: options.maxHeight ?? 320,
    quality: options.quality ?? 70,
    format: "webp",
  });
}

/**
 * Process an avatar image: resize, strip EXIF, convert to WebP.
 * Returns null if processing fails.
 */
export async function processAvatar(
  input: Buffer | Uint8Array,
  options: { size?: number; quality?: number } = {},
): Promise<ProcessedImage | null> {
  const size = options.size ?? 256;
  return resizeImage(input, {
    maxWidth: size,
    maxHeight: size,
    quality: options.quality ?? 85,
    format: "webp",
  });
}

/**
 * Optimize a link preview OG image: resize to timeline-friendly dimensions.
 * Returns null if processing fails.
 */
export async function optimizeLinkPreviewImage(
  input: Buffer | Uint8Array,
  options: { maxWidth?: number; quality?: number } = {},
): Promise<ProcessedImage | null> {
  return resizeImage(input, {
    maxWidth: options.maxWidth ?? 400,
    maxHeight: 400,
    quality: options.quality ?? 75,
    format: "webp",
  });
}
