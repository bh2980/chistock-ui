import type { VariantProps } from "tailwind-variants";
import type { ButtonProps } from "@atoms/Button";
import { floatingButtonVariant } from "./FloatingButton.styles";

export type FloatingButtonProps = Omit<ButtonProps<"button">, "variant" | "rounded"> &
  VariantProps<typeof floatingButtonVariant> & {
    renderAs?: "button";
  };
