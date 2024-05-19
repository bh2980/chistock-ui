import useSelectedList from "@hooks/useSelected";
import { ButtonProps, useButton } from "@atoms/Button";
import { ChipProps } from "./Chip.types";

const useChip = (props: ChipProps) => {
  const buttonProps = useButton(props as ButtonProps<"button">);

  const selectedProps = useSelectedList(buttonProps);

  return selectedProps;
};

export default useChip;
