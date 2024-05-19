import { tv } from "@utils/customTV";
import { interactionStateVariants } from "@atoms/InteractionState";

export const buttonVariants = tv({
  extend: interactionStateVariants,
  base: "relative flex justify-center items-center py-xs cursor-pointer select-none",
  variants: {
    /**
     * 버튼의 형태
     * @default secondary
     * */
    variant: {
      filled: "",
      outlined: "border border-outline",
      ghost: "",
    },
    color: {
      primary: "",
      primaryContainer: "",
      secondary: "",
      secondaryContainer: "",
      danger: "",
      dangerContainer: "",
      default: "",
    },
    /**
     * 버튼의 크기
     * @default md
     * */
    size: {
      sm: "h-[32rem] px-sm text-sm gap-xs",
      md: "h-[40rem] px-md text-md gap-sm",
      lg: "h-[48rem] px-md text-lg gap-sm",
    },
    rounded: {
      rounded: "rounded-md",
      circular: "rounded-circle",
    },
    isIconButton: {
      true: "aspect-square p-0",
    },
    disabled: {
      true: "",
    },
    focusOutlineOffset: {
      true: "",
    },
  },
  compoundVariants: [
    //disabled
    {
      disabled: true,
      variant: ["outlined", "ghost"],
      color: ["primary", "secondary", "danger"],
      className: ["interaction:hidden"],
    },
    //primary
    {
      color: "primary",
      variant: "filled",
      className: "bg-primary text-primary-on",
    },
    {
      color: "primary",
      variant: "outlined",
      className: "text-primary",
    },
    {
      color: "primary",
      variant: "ghost",
      className: "text-primary",
    },
    //secondary
    {
      color: "secondary",
      variant: "filled",
      className: "bg-secondary text-secondary-on",
    },
    {
      color: "secondary",
      variant: "outlined",
      className: "text-secondary",
    },
    {
      color: "secondary",
      variant: "ghost",
      className: "text-secondary",
    },
    //error
    {
      color: "danger",
      variant: "filled",
      className: "bg-error text-error-on",
    },
    {
      color: "danger",
      variant: "outlined",
      className: "text-error",
    },
    {
      color: "danger",
      variant: "ghost",
      className: "text-error",
    },
  ],
  defaultVariants: {
    variant: "filled",
    color: "secondary",
    size: "md",
    rounded: "rounded",
  },
});
