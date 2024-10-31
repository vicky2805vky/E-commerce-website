import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { addProductActions } from "features/admin/services/reducers/addProductReducer";

export const returnInputField = (type, label, optionalParameters = {}) => {
  const inputStyle =
    "py-2 px-4 rounded-lg bg-transparent border-solid border text-[--main-color] border-[--main-color] w-full";

  const { state, dispatch } = useAddProductContext();
  const { formData } = state;

  const { options, ref, onChange, value } = optionalParameters;

  const inputProps = {
    className: inputStyle,
    name: label,
    required: true,
    value: label in formData ? formData[label] : value,
    onChange:
      label in formData
        ? (e) => {
            formData[label] = parseFloat(e.target.value) || e.target.value;
            dispatch({
              type: addProductActions.setFormData,
              payload: formData,
            });
          }
        : onChange,
  };

  switch (type) {
    case "text-area":
      return (
        <textarea
          placeholder={label}
          {...inputProps}
          spellCheck="false"
          className={inputStyle + " h-40"}
        ></textarea>
      );

    case "select":
      return (
        <select
          {...inputProps}
          disabled={window.location.href.split("/").at(-1) === "edit"}
          className={`${inputStyle} disabled:opacity-65 disabled:cursor-not-allowed`}
        >
          <option value="">select</option>
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
      const valueExceptions = ["color", "category", "icon", "name"];
      return (
        <input
          {...inputProps}
          type={type}
          placeholder={label}
          id={label}
          ref={ref}
          onChange={onChange}
          value={
            valueExceptions.includes(label)
              ? formData[label] || value || ""
              : undefined
          }
        />
      );
  }
};
