import { tv } from "@utils/customTV";

export const imageNewsItemVariants = tv({
  slots: {
    root: "relative inline-block rounded-md overflow-hidden",
    newsItemWrapper: [
      "absolute",
      "bottom-0",
      "flex",
      "flex-col",
      "gap-xs",
      "p-xl",
      "bg-surface-inverse/90",
      "rounded-b-md",
      "pointer-events-none",
    ],
    newsInfoWrapper: "flex gap-sm text-sm ",
    categoryText: "text-primary-inverse font-bold capitalize",
    sourceDateWrapper: "text-surface-on-inverse gap-2xs",
    titleText: "text-lg text-surface-on-inverse font-bold line-clamp-1",
    contentText: "text-md text-surface-on-variant-inverse line-clamp-1",
  },
});
