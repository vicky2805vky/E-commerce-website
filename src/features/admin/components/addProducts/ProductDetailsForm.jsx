import InputWithLabel from "components/InputWithLabel";
import { FORM_ELEMENTS } from "constants/constants";

const ProductDetailsForm = ({ style }) => {
  return (
    <div className={`${style} max-h-full overflow-scroll`}>
      {FORM_ELEMENTS.map((element, i) => {
        return (
          <InputWithLabel
            key={i}
            label={element.name}
            type={element.type}
            optionalParameters={element.optionalParameters || {}}
          />
        );
      })}
      <button
        type="submit"
        className="border border-solid px-4 py-2 rounded-full mx-auto block"
      >
        {window.location.href.split("/").at(-1)} Product
      </button>
    </div>
  );
};

export default ProductDetailsForm;
