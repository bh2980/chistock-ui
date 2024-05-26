import { type ScaleBand } from "d3";
import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";
import { BandAxisVariants } from "./BandAxis.styles";

type BandAxisBaseProps = {
  axisScale: ScaleBand<string>;
  outerTickLength?: number;
  innerTickLength?: number;
  direction?: "UP" | "DOWN" | "RIGHT" | "LEFT";
};

export type BandAxisProps = ComponentPropsWithInnerRef<"g"> & VariantProps<typeof BandAxisVariants> & BandAxisBaseProps;
