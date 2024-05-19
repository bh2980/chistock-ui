import { tv } from "@utils/customTV";

export const newsItemVariants = tv({
  slots: {
    root: "flex flex-col gap-xs rounded-md p-lg",
    newsInfoWrapper: "flex gap-sm text-sm",
    categoryText: "text-primary font-bold capitalize",
    sourceDateWrapper: "gap-2xs text-surface-on-variant",
    titleText: "text-lg text-surface-on font-bold line-clamp-1",
    contentText: "text-md text-surface-on-variant line-clamp-1",
  },
});
