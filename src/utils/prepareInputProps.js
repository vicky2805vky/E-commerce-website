import { INPUT_STYLES } from "constants/tailwindConstants";

export const prepareInputProps = (inputAttributes) => {
  const inputProps = {
    className: `${INPUT_STYLES} ${inputAttributes.extraStyles || ""}`,
    placeholder: inputAttributes.placeholder || inputAttributes.name,
    required: inputAttributes.required || true,
    type: inputAttributes.type || "text",
    ...inputAttributes,
  };
  const selectOptions = inputAttributes.selectOptions || [];
  delete inputProps.extraStyles;
  delete inputProps.selectOptions;

  for (const key in inputProps) {
    if (!Boolean(inputProps[key] && key !== "value")) {
      delete inputProps[key];
    }
  }

  return { inputProps, selectOptions };
};
