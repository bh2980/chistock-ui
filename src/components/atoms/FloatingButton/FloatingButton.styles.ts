import { tv } from "@utils/customTV";

export const floatingButtonVariant = tv({
  base: "absolute shadow-floating z-50",
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      primaryContainer: "bg-primary-container text-primary-container-on",
      secondary: "bg-secondary text-secondary-on",
      secondaryContainer: "bg-secondary-container text-secondary-container-on",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
