export const returnInputField = (type, label, optionalParameters = {}) => {
  const inputStyle =
    "py-2 px-4 rounded-lg bg-transparent border-solid border text-[--main-color] border-[--main-color] w-full";

  const { options = [], ref, onChange, value } = optionalParameters;

  const inputProps = {
    className: inputStyle,
    name: label,
    required: true,
  };

  switch (type) {
    case "text-area":
      return <textarea placeholder={label} {...inputProps}></textarea>;

    case "select":
      return (
        <select {...inputProps}>
          {options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
      );

    case "file":
      return (
        <input
          type="file"
          id="file"
          accept=".png,.jpg,.jpeg"
          multiple
          required
          className="absolute opacity-1 pointer-events-none -top-20 opacity-0"
          ref={ref}
          onChange={onChange}
        />
      );

    case "color":
      return (
        <input
          type="color"
          className="cursor-pointer"
          ref={ref}
          value={value}
          onChange={onChange}
          required
        />
      );

    case "number":
      return (
        <input
          type="number"
          placeholder={label}
          min={0}
          max={label === "rating" ? 5 : undefined}
          step={0.01}
          {...inputProps}
        />
      );

    default:
      return (
        <input
          type={type}
          placeholder={label}
          id={label}
          ref={ref}
          onChange={onChange}
          value={label === "color" ? value : undefined}
          {...inputProps}
        />
      );
  }
};
