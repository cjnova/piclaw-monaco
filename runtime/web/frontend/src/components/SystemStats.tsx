import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useTheme } from "../theme/ThemeProvider";

interface StatsData {
  cpu_percent: number;
  mem_used_gb: number;
  mem_total_gb: number;
}

function formatClock(date: Date): string {
  const dayName = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date);
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${dayName}, ${day} ${month} ${year} \u2014 ${hours}:${minutes}`;
}

function formatStats(stats: StatsData | null): string {
  if (!stats) return "\u2197 --  \uD83E\uDDE0 --/-- GB";
  return `\u2197 ${stats.cpu_percent.toFixed(1)}%  \u00B7\u00B7\u00B7 ${stats.mem_used_gb.toFixed(1)}/${stats.mem_total_gb.toFixed(1)} GB`;
}

export function SystemStats() {
  const theme = useTheme();
  const clockText = useSignal<string>(formatClock(new Date()));
  const stats = useSignal<StatsData | null>(null);

  // Clock: align to next full minute, then tick every 60s
  useEffect(() => {
    const tick = () => {
      clockText.value = formatClock(new Date());
    };

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    let interval: ReturnType<typeof setInterval> | null = null;
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60_000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval !== null) clearInterval(interval);
    };
  }, [clockText]);

  // System stats: poll every 3 seconds
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/system-stats");
        if (res.ok) {
          stats.value = await res.json() as StatsData;
        }
      } catch (err) {
        console.warn("[SystemStats] fetch failed:", err);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10_000);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <span
      style={{
        color: theme.textMuted,
        fontSize: "13px",
        whiteSpace: "nowrap",
      }}
    >
      {formatStats(stats.value)}&nbsp;&nbsp;&mdash;&nbsp;&nbsp;{clockText.value}
    </span>
  );
}
