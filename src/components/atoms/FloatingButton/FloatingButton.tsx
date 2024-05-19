import Button, { type ButtonProps } from "../Button";
import { floatingButtonVariant } from "./FloatingButton.styles";
import type { FloatingButtonProps } from "./FloatingButton.types";

const FloatingButton = ({ variant, className, ...props }: FloatingButtonProps) => {
  return (
    <Button
      className={floatingButtonVariant({ variant, className })}
      rounded="circular"
      {...(props as ButtonProps<"button">)}
    />
  );
};

export default FloatingButton;
