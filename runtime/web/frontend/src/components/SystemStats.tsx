import { useEffect } from "preact/hooks";
import { useSignal, useComputed } from "@preact/signals";

interface StatsData {
  cpu_percent: number;
  ram_percent: number;
  swap_percent: number | null;
  buffer_cache_bytes: number;
  vram_percent: number | null;
  gpu_provider: string | null;
  process_memory?: {
    rss_bytes: number;
  };
}

type MetricSeverity = "normal" | "warning" | "error";

export function formatClock(date: Date): string {
  const dayName = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date);
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${dayName}, ${day} ${month} ${year} \u2014 ${hours}:${minutes}`;
}

function formatMegabytes(bytes: number): string {
  return `${Math.round(bytes / (1024 * 1024))}M`;
}

function formatBufferCache(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  if (mb < 1024) {
    return `${Math.round(mb)}M`;
  }
  return `${(mb / 1024).toFixed(1)}G`;
}

function percentSeverity(value: number | null): MetricSeverity {
  if (value == null || Number.isNaN(value)) return "normal";
  if (value > 85) return "error";
  if (value >= 60) return "warning";
  return "normal";
}

function swapSeverity(value: number | null): MetricSeverity {
  if (value != null && value > 0) return "warning";
  return "normal";
}

function valueClassName(severity: MetricSeverity): string {
  if (severity === "error") return "sys-stats__value sys-stats__value--error";
  if (severity === "warning") return "sys-stats__value sys-stats__value--warning";
  return "sys-stats__value";
}

function Metric({
  icon,
  title,
  value,
  severity = "normal",
}: {
  icon: string;
  title: string;
  value: string;
  severity?: MetricSeverity;
}) {
  return (
    <span className="sys-stats__metric" title={title}>
      <span className={`sys-stats__icon codicon ${icon}`} aria-hidden="true" />
      <span className={valueClassName(severity)}>{value}</span>
    </span>
  );
}

function StatsDisplay({ stats, isStale }: { stats: StatsData | null; isStale: boolean }) {
  if (!stats) {
    return (
      <span className="sys-stats">
        {isStale && <span className="sys-stats__stale" title="System stats unavailable">⚠</span>}
        <Metric icon="codicon-pulse" title="CPU" value="--" />
        <Metric icon="codicon-circuit-board" title="RAM" value="--" />
        <Metric icon="codicon-package" title="Process RSS" value="--" />
        <Metric icon="codicon-arrow-swap" title="Swap" value="--" />
        <Metric icon="codicon-database" title="Buffer/cache" value="--" />
      </span>
    );
  }

  const rss = formatMegabytes(stats.process_memory?.rss_bytes ?? 0);
  const swapValue = stats.swap_percent != null ? `${stats.swap_percent}%` : "--";

  return (
    <span className="sys-stats">
      {isStale && <span className="sys-stats__stale" title="System stats unavailable">⚠</span>}
      <Metric
        icon="codicon-pulse"
        title="CPU usage"
        value={`${stats.cpu_percent}%`}
        severity={percentSeverity(stats.cpu_percent)}
      />
      <Metric
        icon="codicon-circuit-board"
        title="RAM usage"
        value={`${stats.ram_percent}%`}
        severity={percentSeverity(stats.ram_percent)}
      />
      <Metric icon="codicon-package" title="Process RSS" value={rss} />
      <Metric
        icon="codicon-arrow-swap"
        title="Swap usage"
        value={swapValue}
        severity={swapSeverity(stats.swap_percent)}
      />
      <Metric icon="codicon-database" title="Buffer/cache" value={formatBufferCache(stats.buffer_cache_bytes)} />
      {stats.gpu_provider && (
        <Metric
          icon="codicon-server-process"
          title={`GPU VRAM (${stats.gpu_provider})`}
          value={stats.vram_percent != null ? `${stats.vram_percent}%` : "--"}
          severity={percentSeverity(stats.vram_percent)}
        />
      )}
    </span>
  );
}

export function SystemStats() {
  const stats = useSignal<StatsData | null>(null);
  const statsError = useSignal(false);
  const lastStatsSuccess = useSignal(0);
  const statsPollTick = useSignal(0);
  const isStale = useComputed(() => {
    void statsPollTick.value;
    return statsError.value && lastStatsSuccess.value > 0 && Date.now() - lastStatsSuccess.value > 15000;
  });

  // System stats: poll every 10 seconds
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/agent/system-metrics");
        if (res.ok) {
          stats.value = await res.json() as StatsData;
          statsError.value = false;
          lastStatsSuccess.value = Date.now();
          statsPollTick.value += 1;
        } else {
          statsError.value = true;
          statsPollTick.value += 1;
        }
      } catch (err) {
        console.warn("[SystemStats] fetch failed:", err);
        statsError.value = true;
        statsPollTick.value += 1;
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10_000);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <span className="sys-stats-bar">
      <StatsDisplay stats={stats.value} isStale={isStale.value} />
    </span>
  );
}
