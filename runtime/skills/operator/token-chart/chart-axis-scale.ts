/**
 * SCRIPT_JDOC:
 * {
 *   "summary": "Shared chart axis scaling helpers for token usage and cost charts.",
 *   "role": "module"
 * }
 */
export interface ChartYAxisScale {
  yMax: number;
  tickStep: number;
  ticks: number[];
}

export function niceMax(value: number): number {
  if (value <= 0) return 1;
  const exponent = 10 ** Math.floor(Math.log10(value));
  const fraction = value / exponent;
  let nice = 1;
  if (fraction <= 1) nice = 1;
  else if (fraction <= 2) nice = 2;
  else if (fraction <= 5) nice = 5;
  else nice = 10;
  return nice * exponent;
}

export function computeChartYAxis(maxValue: number, targetTickIntervals = 5): ChartYAxisScale {
  const safeMax = Number.isFinite(maxValue) && maxValue > 0 ? maxValue : 1;
  const intervals = Math.max(1, Math.round(targetTickIntervals));
  const tickStep = niceMax(safeMax) / intervals;
  const yMax = Math.max(
    tickStep,
    Number((Math.ceil((safeMax - tickStep * 1e-9) / tickStep) * tickStep).toPrecision(12))
  );
  const tickCount = Math.max(1, Math.round(yMax / tickStep));
  const ticks = Array.from({ length: tickCount + 1 }, (_, index) => Number((index * tickStep).toPrecision(12)));
  return { yMax, tickStep, ticks };
}
