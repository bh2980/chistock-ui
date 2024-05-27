import type { AxisOrient } from "@charts/BandAxis";

type BarChartDataType = { label: number; value: number | null };

export type BarChartProps = {
  orient?: AxisOrient;
  width: number;
  height: number;
  data: BarChartDataType[];
  padding?: number;
  showLabel?: boolean;
  labelOffset?: number;
};
