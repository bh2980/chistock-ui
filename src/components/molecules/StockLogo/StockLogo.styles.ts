import { tv } from "@utils/customTV";

export const stockLogoVariants = tv({
  base: "flex justify-center items-center rounded-circle bg-secondary text-secondary-on overflow-hidden",
});

export const stockImageVariants = tv({
  base: "w-full h-full",
  variants: {
    hasError: {
      true: "hidden",
      false: "block",
    },
  },
});
