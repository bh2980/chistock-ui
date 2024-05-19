import { tv } from "@utils/customTV";

export const flowStockItemVariants = tv({
  slots: {
    root: "flex gap-lg text-surface-on text-md",
    changePercentageText: "font-bold",
  },
  variants: {
    numType: {
      POSITIVE: { changePercentageText: "text-error" },
      NEGATIVE: { changePercentageText: "text-primary" },
      ZERO: { changePercentageText: "" },
    },
  },
});
