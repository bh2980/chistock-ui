import type { ScaleBand, ScaleLinear } from "d3";
import type { PropsWithChildren } from "react";
import type { PolymorphicPropsType } from "@customTypes/polymorphicType";
import type { AxisOrient } from "@charts/BandAxis";

type BarChartDataType = { label: number; value: number | null };

export type BarChartProps = {
  orient?: AxisOrient;
  width: number;
  height: number;
  data: BarChartDataType[];
  padding?: number;
};

export type BarProps = PolymorphicPropsType<"g"> &
  PropsWithChildren & {
    xScale: ScaleBand<string>;
    yScale: ScaleLinear<number, number, never>;
    data: BarChartDataType;
    nullBarHeight?: number;
    labelPostfix?: string;
  };
