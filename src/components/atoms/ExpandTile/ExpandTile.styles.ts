import { tv } from "@utils/customTV";
import { tileVariants } from "../Tile";

export const expandTileVariants = tv({
  extend: tileVariants,
  base: "flex flex-col gap-sm transition-[max-height]",
  variants: {
    padding: {
      none: "",
      "3xs": "px-3xs pt-3xs pb-[1rem]",
      "2xs": "px-2xs pt-2xs pb-3xs",
      xs: "px-xs pt-xs pb-2xs",
      s: "px-sm pt-sm pb-[6rem]",
      m: "px-md pt-md pb-xs",
      l: "px-lg pt-lg pb-[10rem]",
      xl: "px-xl pt-xl pb-sm",
      "2xl": "px-2xl pt-2xl pb-md",
      "3xl": "px-3xl pt-3xl pb-lg",
    },
    isExpand: {
      true: "!max-h-screen",
    },
  },
  defaultVariants: {
    padding: "2xl",
  },
});
