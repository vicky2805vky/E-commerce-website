import { memo } from "react";
import InputField from "./InputField";
import Label from "./ui/Label";

const InputWithLabel = ({ label, attributes, className = "" }) => {
  return (
    <div
      className={`flex items-center  relative mb-3 [&>*]:flex-1 ${className}`}
    >
      {label !== null && <Label labelText={label || attributes.name} />}
      <InputField inputAttributes={attributes} />
    </div>
  );
};
export default memo(InputWithLabel);
