import { tv } from "@utils/customTV";

export const BandAxisVariants = tv({
  slots: {
    root: "stroke-surface-on",
    axisLine: "fill-none stroke-surface-on",
    labelText: "stroke-none fill-surface-on",
  },
  variants: {
    lineHide: {
      true: {
        axisLine: "hidden",
      },
    },
    labelHide: {
      true: {
        labelText: "hidden",
      },
    },
  },
  defaultVariants: {
    lineHide: false,
    labelHide: false,
  },
});
