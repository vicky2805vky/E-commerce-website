import { returnInputField } from "utils/returnInputField";

const InputWithLabel = ({ type = "text", label, optionalParameters = {} }) => {
  return (
    <div className="flex items-center relative mb-3 [&>*]:flex-1">
      {type !== "text-area" && <label>{label}</label>}
      {returnInputField(type, label, optionalParameters)}
    </div>
  );
};
export default InputWithLabel;
