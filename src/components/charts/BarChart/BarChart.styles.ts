import { tv } from "@utils/customTV";

export const barChartVariants = tv({
  slots: {
    bar: "",
    labelText: "",
  },
  variants: {
    value: {
      true: { bar: "fill-secondary" },
      false: { bar: "stroke-secondary fill-none" },
    },
    showLabel: {
      false: { labelText: "hidden" },
    },
  },
  defaultVariants: {
    value: true,
    showLabel: false,
  },
});
