/**
 * Shared formatting utilities — consolidates byte, duration, time, and token
 * formatting that was previously scattered across multiple components.
 *
 * @see issue #419
 */

// ---------------------------------------------------------------------------
// Bytes
// ---------------------------------------------------------------------------

/** Format a byte count into a human-readable string (B / KB / MB / GB). */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1_048_576) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1_073_741_824) return `${(bytes / 1_048_576).toFixed(1)} MB`;
  return `${(bytes / 1_073_741_824).toFixed(1)} GB`;
}

/**
 * Compact byte formatter for stat displays.
 * Returns short suffixed strings like "512M", "1.2G", "768K".
 */
export function formatBytesCompact(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  if (mb < 1024) return `${Math.round(mb)}M`;
  return `${(mb / 1024).toFixed(1)}G`;
}

// ---------------------------------------------------------------------------
// Duration
// ---------------------------------------------------------------------------

/**
 * Format a duration in seconds as a human-readable string.
 * Examples: "45s", "1m 23s", "2h 5m"
 */
export function formatDuration(seconds: number): string {
  if (seconds < 0) return "";
  const secs = Math.floor(seconds);
  if (secs < 60) return `${secs}s`;
  const mins = Math.floor(secs / 60);
  const remSecs = secs % 60;
  if (mins < 60) return `${mins}m ${remSecs}s`;
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return `${hours}h ${remMins}m`;
}

/**
 * Format an elapsed duration from an ISO timestamp and an optional reference
 * time in milliseconds (defaults to Date.now()).
 * Returns "" for invalid or future timestamps.
 */
export function formatElapsed(isoTimestamp: string, nowMs: number = Date.now()): string {
  const ts = Date.parse(isoTimestamp);
  if (!Number.isFinite(ts)) return "";
  const diffMs = nowMs - ts;
  if (diffMs < 0) return "";
  return formatDuration(diffMs / 1000);
}

// ---------------------------------------------------------------------------
// Relative time
// ---------------------------------------------------------------------------

/**
 * Format an ISO date string (or numeric timestamp) as a relative time string.
 * Examples: "just now", "5m ago", "3h ago", "2d ago"
 */
export function formatRelativeTime(timestamp: string | number): string {
  const delta = Date.now() - new Date(timestamp).getTime();
  const sec = Math.floor(delta / 1000);
  if (sec < 60) return "just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const days = Math.floor(hr / 24);
  return `${days}d ago`;
}

// ---------------------------------------------------------------------------
// Token window
// ---------------------------------------------------------------------------

/**
 * Format a token count for model context-window display.
 * Examples: "128k", "1.0M"
 */
export function formatTokenWindow(tokens: number): string {
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(1)}M`;
  return `${(tokens / 1000).toFixed(0)}k`;
}
