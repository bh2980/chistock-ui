import { tv } from "@utils/customTV";

export const wrapperVariants = tv({
  base: "relative min-w-[1em] overflow-hidden aspect-square",
  variants: {
    /** 이미지의 테두리 반경을 조절합니다
     *
     * @default m
     */
    rounded: {
      none: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      circle: "rounded-circle",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

export const imageVariants = tv({ base: "absolute w-[100%] h-[100%] object-cover" });
