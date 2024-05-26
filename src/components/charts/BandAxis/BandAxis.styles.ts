import { tv } from "@utils/customTV";

export const BandAxisVariants = tv({
  variants: {
    lineHide: {
      true: "stroke-none",
      false: "stroke-black",
    },
  },
  defaultVariants: {
    lineHide: false,
  },
});
