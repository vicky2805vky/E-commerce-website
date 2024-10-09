import InputWithLabel from "components/InputWithLabel";
import { FLEX_CENTER } from "constants/tailwindConstants";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import {
  changeColorCode,
  changeColorName,
} from "features/admin/utils/imageColorInputUtils";

const ImageSetColorInputs = () => {
  const { state, dispatch, colorRef, colorCodeRef } = useAddProductContext();
  const { imageVariations, currentImageSet } = state;
  return (
    <div className={`${FLEX_CENTER} h-1/6`}>
      <InputWithLabel
        label={"color"}
        optionalParameters={{
          ref: colorRef,
          value: imageVariations[currentImageSet]?.color,
          onChange: () => {
            changeColorName(state, dispatch, colorRef);
          },
        }}
      />
      <InputWithLabel
        type={"color"}
        optionalParameters={{
          ref: colorCodeRef,
          value: imageVariations[currentImageSet]?.code,
          onChange: () => {
            changeColorCode(state, dispatch, colorCodeRef);
          },
        }}
      />
    </div>
  );
};

export default ImageSetColorInputs;
