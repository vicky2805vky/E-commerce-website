import { productManagerActions } from "../services/reducers/productManagerReducer";

export const changeColorName = (
  { productImageVariants, currentImageIndex },
  dispatch,
  colorInputRef
) => {
  const updatedImageVariation = productImageVariants.map((variation) => {
    if (variation.id === currentImageIndex) {
      return { ...variation, color: colorInputRef.current.value };
    } else {
      return variation;
    }
  });

  dispatch({
    type: productManagerActions.setImageVariations,
    payload: updatedImageVariation,
  });
};

export const changeColorCode = (
  { productImageVariants, currentImageIndex },
  dispatch,
  colorCodeInputRef
) => {
  const updatedImageVariation = productImageVariants.map((variation) => {
    if (variation.id === currentImageIndex) {
      return { ...variation, code: colorCodeInputRef.current.value };
    } else {
      return variation;
    }
  });
  dispatch({
    type: productManagerActions.setImageVariations,
    payload: updatedImageVariation,
  });
};
