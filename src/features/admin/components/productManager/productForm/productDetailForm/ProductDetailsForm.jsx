import InputWithLabel from "components/InputWithLabel";
import ButtonWithURLText from "components/ui/ButtonWithURLText";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { setProductFormData } from "services/slices/adminProductSlice";

const ProductDetailsForm = ({ style }) => {
  const { categories, productFormData } = useStoreData();
  const dispatch = useDispatch();
  const handleChange = (e, key) => {
    dispatch(setProductFormData({ key, value: e.target.value }));
  };

  formElements[1].selectOptions = categories.map((category) => category.name);

  return (
    <div className={`${style} max-h-full overflow-scroll`}>
      {formElements.map((element, i) => {
        return (
          <InputWithLabel
            label={element.label}
            key={i}
            attributes={{
              ...element,
              value: productFormData[element.name],
              onChange: (e) => {
                handleChange(e, element.name);
              },
            }}
          />
        );
      })}
      <ButtonWithURLText
        className={"border border-solid px-4 py-2 rounded-full mx-auto block"}
        buttonText={"product"}
      />
    </div>
  );
};

export default ProductDetailsForm;

const formElements = [
  {
    name: "name",
  },
  {
    type: "select",
    name: "category",
    selectOptions: [],
  },
  {
    type: "text-area",
    name: "description",
    extraStyles: " h-40",
    label: null,
  },
  {
    type: "number",
    name: "mrp",
  },
  {
    type: "number",
    name: "price",
  },
  {
    type: "number",
    name: "rating",
    max: 5,
    step: 0.1,
  },
];
