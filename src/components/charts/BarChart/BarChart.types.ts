import type { AxisOrient } from "@charts/BandAxis";

export type BarChartDataType = { label: string; value: number };

export type NullableBarChartType = BarChartDataType | { label: string; value: number | null };

export type BarChartProps = {
  orient?: AxisOrient;
  width: number;
  height: number;
  data: NullableBarChartType[];
  padding?: number;
  showLabel?: boolean;
  labelOffset?: number;
};
