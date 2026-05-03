import { expect, test } from "bun:test";
import { computeChartYAxis } from "../../skills/operator/token-chart/chart-axis-scale.js";

test("computeChartYAxis caps at the nearest computed tick above the data", () => {
  expect(computeChartYAxis(514)).toEqual({
    yMax: 600,
    tickStep: 200,
    ticks: [0, 200, 400, 600],
  });

  expect(computeChartYAxis(857_000_000)).toEqual({
    yMax: 1_000_000_000,
    tickStep: 200_000_000,
    ticks: [0, 200_000_000, 400_000_000, 600_000_000, 800_000_000, 1_000_000_000],
  });
});
