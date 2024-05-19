import { tv } from "@utils/customTV";
import { buttonVariants } from "@atoms/Button";

//TODO font bold시 움직이는 문제 수정
export const tabVariant = tv({
  extend: buttonVariants,
  base: ["overflow-visible", "interaction:h-[3rem]", "interaction:top-[calc(100%-3rem)]", "interaction:rounded-circle"],
  compoundVariants: [
    { variant: "ghost", className: "text-surface-on-variant" },
    {
      selected: true,
      variant: "ghost",
      className: ["text-primary", "[&_>_svg]:fill-current", "interaction:bg-primary", "interaction:!opacity-100"],
    },
  ],
  defaultVariants: {
    variant: "ghost",
    size: "md",
  },
});
