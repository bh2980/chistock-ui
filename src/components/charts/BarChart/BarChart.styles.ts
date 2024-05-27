import { tv } from "@utils/customTV";

export const barChartVariants = tv({
  base: "font-bold text-sm",
  variants: {
    value: {
      true: "fill-secondary",
      false: "stroke-secondary fill-none",
    },
  },
  defaultVariants: {
    value: true,
  },
});
