import { type ScaleBand } from "d3";
import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";
import { BandAxisVariants } from "./BandAxis.styles";

export type AxisOrient = "UP" | "DOWN" | "RIGHT" | "LEFT";

type BandAxisBaseProps = {
  axisScale: ScaleBand<string>;
  outerTickLength?: number;
  innerTickLength?: number;
  orient?: AxisOrient;
  labelHide?: boolean;
  lineHide?: boolean;
};

export type BandAxisProps = Omit<ComponentPropsWithInnerRef<"g">, "textAnchor"> &
  VariantProps<typeof BandAxisVariants> &
  BandAxisBaseProps;
