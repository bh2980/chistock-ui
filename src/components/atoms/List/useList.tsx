import type { ListProps } from "./List.types";

export const useList = (props: ListProps) => {
  const { horizontal, className, ...otherProps } = props;

  return { styleVariant: { horizontal, className }, ...otherProps };
};
