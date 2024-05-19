import InteractionState from "@atoms/InteractionState";
import { containerVariants, inputVariants, labelVariants, textFieldVariants } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";
import useTextField from "./useTextField";

const TextField = (props: TextFieldProps) => {
  const {
    className,
    disabled,
    error,
    readOnly,
    required,
    haveLabel,
    fullWidth,
    label,
    helperText,
    leadingIcon,
    trailingIcon,
    inputClass,
    labelClass,
    helperTextClass,
    ...inputProps
  } = useTextField(props);

  return (
    <div className={containerVariants({ disabled, error, fullWidth })}>
      <label
        className={textFieldVariants({
          focus: true,
          error,
          disabled,
          haveLabel,
          fullWidth,
          className,
        })}
      >
        <InteractionState />
        {leadingIcon}
        <div className="relative flex flex-col w-full h-full">
          <input
            className={inputVariants({
              disabled,
              error,
              haveLabel,
              readOnly,
              className: inputClass,
            })}
            disabled={disabled}
            readOnly={readOnly}
            {...inputProps}
          />
          {label && (
            <span className={labelVariants({ error, required, readOnly, className: labelClass })}>{label}</span>
          )}
        </div>
        {trailingIcon}
      </label>
      {helperText && <span className={`text-sm ml-xs ${helperTextClass}`}>{helperText}</span>}
    </div>
  );
};

export default TextField;
