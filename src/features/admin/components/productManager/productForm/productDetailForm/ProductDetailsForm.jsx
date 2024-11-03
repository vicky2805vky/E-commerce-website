import InputWithLabel from "components/InputWithLabel";
import { FORM_ELEMENTS } from "constants/constants";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { setProductFormData } from "services/slices/adminProductSlice";

const ProductDetailsForm = ({ style }) => {
  const { categories, productFormData } = useStoreData();
  const dispatch = useDispatch();
  const handleChange = (e, key) => {
    dispatch(setProductFormData({ key, value: e.target.value }));
  };

  return (
    <div className={`${style} max-h-full overflow-scroll`}>
      {/* {FORM_ELEMENTS.map((element, i) => {
        if (element.name === "category") {
          return (
            <InputWithLabel
              key={i}
              label={element.name}
              type={element.type}
              optionalParameters={
                {
                  ...element.optionalParameters,
                  options: categories.map((category) => {
                    return category.category;
                  }),
                } || {}
              }
            />
          );
        }
        return (
          <InputWithLabel
            key={i}
            label={element.name}
            type={element.type}
            optionalParameters={element.optionalParameters || {}}
          />
        );
      })} */}
      <InputWithLabel
        attributes={{
          type: "text",
          name: "name",
          value: productFormData["name"],
          onChange: (e) => {
            handleChange(e, "name");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "select",
          name: "category",
          selectOptions: categories.map((category) => category.category),
          value: productFormData["category"],
          onChange: (e) => {
            handleChange(e, "category");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "text-area",
          name: "description",
          extraStyles: " h-40",
          value: productFormData["description"],
          onChange: (e) => {
            handleChange(e, "description");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "number",
          name: "mrp",
          value: productFormData["mrp"],
          onChange: (e) => {
            handleChange(e, "mrp");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "number",
          name: "price",
          value: productFormData["price"],
          onChange: (e) => {
            handleChange(e, "price");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "number",
          name: "rating",
          max: 5,
          step: 0.01,
          value: productFormData["rating"],
          onChange: (e) => {
            handleChange(e, "rating");
          },
        }}
      />
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
