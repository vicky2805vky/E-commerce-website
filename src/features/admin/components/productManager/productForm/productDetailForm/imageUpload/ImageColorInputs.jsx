import InputWithLabel from "components/InputWithLabel";
import { FLEX_CENTER } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { setProductImageVariants } from "services/slices/adminProductSlice";

const ImageColorInputs = () => {
  const { productImageVariants, currentImageIndex } = useStoreData();
  const dispatch = useDispatch();
  const handleChange = (e, key) => {
    const newImageVariant = { ...productImageVariants[currentImageIndex] };
    newImageVariant[key] = e.target.value;

    dispatch(setProductImageVariants(newImageVariant));
  };

  return (
    <div className={`${FLEX_CENTER} h-1/6`}>
      <InputWithLabel
        label={"color name"}
        attributes={{
          type: "text",
          name: "color",
          value: productImageVariants[currentImageIndex].color,
          onChange: (e) => {
            handleChange(e, "color");
          },
        }}
      />
      <InputWithLabel
        attributes={{
          type: "color",
          name: "",
          className: "cursor-pointer",
          value: productImageVariants[currentImageIndex].code,
          onChange: (e) => {
            handleChange(e, "code");
          },
        }}
      />
    </div>
  );
};

export default ImageColorInputs;
