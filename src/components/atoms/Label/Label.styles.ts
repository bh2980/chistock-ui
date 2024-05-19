import { tv } from "@utils/customTV";

export const labelVariants = tv({
  base: "inline-flex items-center px-xs rounded-sm",
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      primaryContainer: "bg-primary-container text-primary-container-on border border-primary",
      secondary: "bg-secondary text-secondary-on",
      secondaryContainer:
        "bg-secondary-container text-secondary-container-on border border-secondary",
      error: "bg-error text-error-on",
      errorContainer: "bg-error-container text-error-container-on border border-error",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
