import { type ScaleBand } from "d3";
import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";
import { BandAxisVariants } from "./BandAxis.styles";

export type AxisOrient = "UP" | "DOWN" | "RIGHT" | "LEFT";

type BandAxisBaseProps = {
  axisScale: ScaleBand<string>;
  width: number;
  height: number;
  outerTickLength?: number;
  innerTickLength?: number;
  orient?: AxisOrient;
  labelHide?: boolean;
  lineHide?: boolean;
};

export type BandAxisProps = Omit<ComponentPropsWithInnerRef<"svg">, "width" | "height" | "textAnchor"> &
  VariantProps<typeof BandAxisVariants> &
  BandAxisBaseProps;
