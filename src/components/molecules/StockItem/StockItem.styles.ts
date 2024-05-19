import { tv } from "@utils/customTV";

export const stockItemVariants = tv({
  slots: {
    root: "flex w-full justify-between",
    stockInfoContainer: "flex gap-md",
    stockPriceContainer: "flex flex-col items-end",
    stockTextContainer: "flex flex-col",
    subtitleContainer: "flex",
    stockLogo: "rounded-circle",
    stockPriceSize: "",
    StockChangeLabelSize: "",
    titleText: "font-bold",
    subtitleText: "",
    marketText: "text-surface-on-variant",
    tickerMarketDivider: "my-2xs",
    labelText: "",
    priceText: "font-bold",
  },
  variants: {
    tickerAccent: { true: "" },
    size: {
      md: {
        subtitleContainer: "gap-xs",
        stockLogo: "w-[48rem] h-[48rem]",
        titleText: "text-lg",
        subtitleText: "text-sm",
        marketText: "text-sm",
        labelText: "text-sm",
        priceText: "text-lg",
      },
      lg: {
        subtitleContainer: "gap-sm",
        stockLogo: "w-[56rem] h-[56rem]",
        titleText: "text-xl",
        subtitleText: "text-md",
        marketText: "text-md",
        labelText: "text-md",
        priceText: "text-xl",
      },
    },
  },
  compoundVariants: [
    {
      tickerAccent: true,
      className: {
        subtitleText: "text-surface-on-variant",
      },
    },
    {
      tickerAccent: false,
      className: {
        subtitleText: "font-bold text-primary",
      },
    },
  ],
  defaultVariants: {
    tickerAccent: false,
    size: "md",
  },
});
