import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";
import { BarChartDataType } from "@charts/BarChart";
import { RecommendChartVariants } from "./RecommendChart.styles";

export type RecommendLabelType = "적극 매수" | "매수" | "보유" | "매도" | "적극 매도";

type RecommendChartBaseProps = {
  data: BarChartDataType[];
  width: number;
  height: number;
};

export type RecommendChartProps = ComponentPropsWithInnerRef<"div"> &
  VariantProps<typeof RecommendChartVariants> &
  RecommendChartBaseProps;
