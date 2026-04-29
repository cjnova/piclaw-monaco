/**
 * web/http/dispatch-shell.ts – Shell/static/avatar route dispatch helpers.
 */

import os from "node:os";

// CPU delta tracking — compute current-interval load rather than lifetime average
let _prevCpuTick = 0;
let _prevCpuIdle = 0;
let _lastCpuPercent = 0;
let _lastCpuSampleTime = 0;
const CPU_CACHE_MS = 2_000;
import type { WebChannelLike } from "../core/web-channel-contracts.js";
import type { RouteFlags } from "./route-flags.js";

/**
 * Static asset resolver used when shell-route handlers need a fallback file response.
 * @param req Incoming HTTP request.
 * @param relPath Relative asset path inside the static root.
 * @returns The resolved static-file response.
 */
export type ServeStaticAsset = (req: Request, relPath: string) => Promise<Response>;

/**
 * Dispatch shell/static/avatar routes and return null when no shell path matches.
 * @param channel Web channel contract exposing shell/static handlers.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname.
 * @param flags Precomputed route-classification flags for the current request.
 * @param serveStaticAsset Static resolver used by favicon/apple-icon fallback paths.
 * @returns The matched shell/static response, or null when another dispatcher should continue.
 */
export async function handleShellRoutes(
  channel: WebChannelLike,
  req: Request,
  pathname: string,
  flags: RouteFlags,
  serveStaticAsset: ServeStaticAsset
): Promise<Response | null> {
  if (flags.isIndex) {
    return channel.serveStatic("index.html");
  }

  if (flags.isManifest) {
    return channel.handleManifest(req);
  }

  if (flags.isFavicon) {
    // Serve the agent avatar as a PNG favicon.  The avatar is stored as WebP
    // but Safari cannot render WebP favicons, so we force PNG conversion
    // by appending ?format=png to the internal request.
    const faviconUrl = new URL(req.url);
    faviconUrl.searchParams.set('format', 'png');
    const pngReq = new Request(faviconUrl.toString(), req);
    const avatarResp = await channel.handleAvatar("agent", pngReq);
    if (avatarResp.status === 200) return avatarResp;
    return await serveStaticAsset(req, "favicon.ico");
  }

  if (flags.isAppleIcon) {
    const avatarResp = await channel.handleAvatar("agent", req);
    if (avatarResp.status === 200) return avatarResp;
    return await serveStaticAsset(req, pathname.slice(1));
  }

  if (flags.isServiceWorker) {
    return channel.serveStatic("sw.js");
  }

  if (req.method === "GET" && pathname === "/ghostty-vt.wasm") {
    return channel.serveStatic("js/vendor/ghostty-vt.wasm");
  }

  if (flags.isStaticAsset) {
    const rel = pathname.replace("/static/", "");
    return channel.serveStatic(rel);
  }

  if (flags.isDocsAsset) {
    const rel = pathname.replace("/docs/", "");
    return channel.serveDocsStatic(rel);
  }

  if (pathname === "/sse/stream") {
    return channel.handleSse(req);
  }

  if (req.method === "GET" && pathname === "/terminal/session") {
    return channel.handleTerminalSession(req);
  }

  if (req.method === "POST" && pathname === "/terminal/handoff") {
    return await channel.handleTerminalHandoff(req);
  }

  if (req.method === "GET" && pathname === "/vnc/session") {
    return channel.handleVncSession(req);
  }

  if (req.method === "POST" && pathname === "/vnc/handoff") {
    return await channel.handleVncHandoff(req);
  }

  if (flags.isAvatar) {
    return await channel.handleAvatar("agent", req);
  }

  if (flags.isGetOrHead && pathname === "/avatar/user") {
    return await channel.handleAvatar("user", req);
  }

  if (req.method === "GET" && pathname === "/api/system-stats") {
    const now = Date.now();
    if (now - _lastCpuSampleTime > CPU_CACHE_MS) {
      const cpus = os.cpus();
      let totalIdle = 0;
      let totalTick = 0;
      for (const cpu of cpus) {
        for (const type of Object.keys(cpu.times) as (keyof typeof cpu.times)[]) {
          totalTick += cpu.times[type];
        }
        totalIdle += cpu.times.idle;
      }
      const deltaTick = totalTick - _prevCpuTick;
      const deltaIdle = totalIdle - _prevCpuIdle;
      if (_prevCpuTick > 0 && deltaTick > 0) {
        // Use delta from last sample for current-interval CPU load
        _lastCpuPercent = Math.round(((deltaTick - deltaIdle) / deltaTick) * 1000) / 10;
      } else if (totalTick > 0) {
        // First sample — fall back to lifetime average
        _lastCpuPercent = Math.round(((totalTick - totalIdle) / totalTick) * 1000) / 10;
      }
      _prevCpuTick = totalTick;
      _prevCpuIdle = totalIdle;
      _lastCpuSampleTime = now;
    }
    const cpuPercent = _lastCpuPercent;
    const memTotalGb = Math.round((os.totalmem() / (1024 ** 3)) * 10) / 10;
    const memUsedGb = Math.round(((os.totalmem() - os.freemem()) / (1024 ** 3)) * 10) / 10;
    return new Response(
      JSON.stringify({ cpu_percent: cpuPercent, mem_used_gb: memUsedGb, mem_total_gb: memTotalGb }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  if (req.method === "GET" && (pathname === "/export/timeline" || pathname === "/internal/export/timeline")) {
    const { handleExportTimeline } = await import("../export/export-timeline-endpoint.js");
    const runtimeDir = new URL("../../../../", import.meta.url).pathname.replace(/\/$/, "");
    return handleExportTimeline(req, { runtimeDir });
  }

  return null;
}
