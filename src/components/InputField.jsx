import { prepareInputProps } from "utils/prepareInputProps";

const InputField = ({ inputAttributes }) => {
  const { inputProps, selectOptions } = prepareInputProps(inputAttributes);

  switch (inputAttributes.type) {
    case "text-area":
      return <textarea spellCheck="false" {...inputProps}></textarea>;

    case "select":
      return (
        <select {...inputProps}>
          <option value="">select</option>
          {selectOptions.map((selectOption, i) => (
            <option key={i} value={selectOption}>
              {selectOption}
            </option>
          ))}
        </select>
      );

    case "color":
      return <input type="color" {...inputProps} />;
    case "number":
      return <input type="number" min={0} {...inputProps} />;

    default:
      return <input {...inputProps} />;
  }
};

export default InputField;
