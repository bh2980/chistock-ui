import { tv } from "@utils/customTV";
import { interactionStateVariants } from "@atoms/InteractionState";

export const containerVariants = tv({
  base: "flex flex-col gap-xs text-surface-on-variant",
  variants: {
    error: { true: "text-error" },
    disabled: { true: "text-disabled-on" },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: {
    disabled: false,
    error: false,
    fullWidth: false,
  },
});

export const textFieldVariants = tv({
  extend: interactionStateVariants,
  base: [
    "flex",
    "justify-between",
    "items-center",
    "gap-md",
    "w-[320rem]",
    "bg-surface-container-highest",
    "px-md",
    "py-xs",
    "text-left",
    "text-xl",
    "rounded-md",
    "cursor-text",
    "border",
    "border-outline",
  ],
  variants: {
    focus: {
      true: "interactionFocus:opacity-0, interactionFocusVisible:opacity-0, focus-within:border-none, focus-visible:border-none",
    },
    error: {
      true: ["bg-error-container", "border-error", "!outline-error", "font-bold"],
    },
    haveLabel: {
      true: "h-[64rem]",
      false: "h-[40rem]",
    },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: {
    error: false,
    haveLabel: false,
    fullWidth: false,
  },
});

export const labelVariants = tv({
  base: [
    "absolute",
    "flex",
    "gap-3xs",
    "top-3xs",
    "text-xs",
    "transition-['font-size']",
    "peer-placeholder-shown:text-md",
    "peer-placeholder-shown:top-sm",
  ],
  variants: {
    error: {
      true: "peer-focus:text-error",
    },
    required: {
      true: ["after:content-['*']", "after:text-error"],
    },
    readOnly: {
      true: [],
      false: ["peer-focus:text-primary", "peer-focus:top-3xs", "peer-focus:text-xs"],
    },
  },
  compoundVariants: [
    {
      error: true,
      readOnly: false,
      className: "peer-focus:text-error peer-focus:top-3xs peer-focus:text-xs",
    },
  ],
  defaultVariants: {
    required: false,
    readOnly: false,
  },
});

export const inputVariants = tv({
  base: ["peer", "w-full", "bg-transparent", "text-md", "text-surface-on", "mt-[-1rem]"],
  variants: {
    haveLabel: {
      true: ["absolute bottom-0"],
    },
    error: { true: "text-error" },
    disabled: {
      true: ["cursor-not-allowed text-disabled-on", "placeholder:text-disabled-on"],
      false: "placeholder:text-surface-on-variant",
    },
    readOnly: {
      true: [],
    },
  },
  compoundVariants: [
    {
      haveLabel: true,
      readOnly: false,
      className: "placeholder:invisible focus:placeholder:visible",
    },
    {
      haveLabel: true,
      readOnly: true,
      className: "placeholder:invisible",
    },
  ],
  defaultVariants: {
    haveLabel: false,
    error: false,
    disabled: false,
    readOnly: false,
  },
});
