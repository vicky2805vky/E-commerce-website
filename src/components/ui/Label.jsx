const Label = ({ inputId, labelText = "" }) => {
  return (
    <label htmlFor={inputId || labelText.replaceAll(" ", "-")}>
      {labelText}
    </label>
  );
};

export default Label;
