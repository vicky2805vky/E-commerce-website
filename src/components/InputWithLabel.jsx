import { returnInputField } from "utils/returnInputField";

const InputWithLabel = ({ label, attributes, className }) => {
  return (
    <div
      className={`flex items-center relative mb-3 [&>*]:flex-1 ${
        className ? className : ""
      }`}
    >
      {attributes.type !== "text-area" && (
        <label>{label || attributes.name}</label>
      )}
      {returnInputField(attributes)}
    </div>
  );
};
export default InputWithLabel;
