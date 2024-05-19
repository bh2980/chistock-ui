import { TextFieldProps } from "./TextField.types";

const useTextField = (props: TextFieldProps) => {
  const { label, placeholder, ...otherProps } = props;

  const haveLabel = !!label;
  const tempPlaceholder = placeholder ? placeholder : "";

  return { label, haveLabel, placeholder: tempPlaceholder, ...otherProps };
};

export default useTextField;
