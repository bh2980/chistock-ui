import { tv } from "@utils/customTV";

export const SpinnerVariants = tv({
  base: "h-fit",
  variants: {
    size: {
      sm: "w-[96rem]",
      md: "w-[120rem]",
      lg: "w-[148rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
