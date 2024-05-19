import { tv } from "@utils/customTV";

export const tileVariants = tv({
  base: "w-fit h-fit text-md shadow-ambient",
  variants: {
    /** Tile의 형태
     * @default default
     */
    variant: {
      default: "bg-surface-container text-surface-on",
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
    },
    /** Tile의 테두리 반경
     * @default m
     */
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    /** Tile의 padding
     * @default none
     */
    padding: {
      none: "",
      "3xs": "p-3xs",
      "2xs": "p-2xs",
      xs: "p-xs",
      sm: "p-sm",
      md: "p-md",
      lg: "p-lg",
      xl: "p-xl",
      "2xl": "p-2xl",
      "3xl": "p-3xl",
    },
    /** Tile의 그림자
     * @default xs
     */
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    padding: "none",
  },
});
