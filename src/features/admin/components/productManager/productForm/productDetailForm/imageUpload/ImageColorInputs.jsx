import InputWithLabel from "components/InputWithLabel";
import { FLEX_CENTER } from "constants/tailwindConstants";
import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
import {
  changeColorCode,
  changeColorName,
} from "features/admin/utils/imageColorInputUtils";

const ImageColorInputs = () => {
  const { state, dispatch, colorInputRef, colorCodeInputRef } =
    useProductManagerContext();
  const { productImageVariants, currentImageIndex } = state;
  return (
    <div className={`${FLEX_CENTER} h-1/6`}>
      <InputWithLabel
        label={"color"}
        optionalParameters={{
          ref: colorInputRef,
          value: productImageVariants[currentImageIndex]?.color,
          onChange: () => {
            changeColorName(state, dispatch, colorInputRef);
          },
        }}
      />
      <InputWithLabel
        type={"color"}
        optionalParameters={{
          ref: colorCodeInputRef,
          value: productImageVariants[currentImageIndex]?.code,
          onChange: () => {
            changeColorCode(state, dispatch, colorCodeInputRef);
          },
        }}
      />
    </div>
  );
};

export default ImageColorInputs;
