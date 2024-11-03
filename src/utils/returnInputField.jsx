export const returnInputField = (inputAttributes) => {
  const inputStyles =
    "py-2 px-4 rounded-lg bg-transparent border-solid border text-[--main-color] border-[--main-color] w-full";

  const inputProps = {
    className: `${inputStyles} ${inputAttributes.extraStyles || ""}`,
    placeholder: inputAttributes.name,
    required: true,
    ...inputAttributes,
  };
  const selectOptions = inputAttributes.selectOptions;
  delete inputProps.extraStyles;
  delete inputProps.selectOptions;

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
      return (
        <input
          type="color"
          {...inputProps}
          className={inputAttributes.extraStyles}
        />
      );
    case "number":
      return <input type="number" min={0} {...inputProps} />;

    default:
      return <input {...inputProps} />;
  }
};
