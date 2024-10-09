import { addProductActions } from "../services/reducers/addProductReducer";

export const changeColorName = (
  { imageVariations, currentImageSet },
  dispatch,
  colorRef
) => {
  const updatedImageVariation = imageVariations.map((variation) => {
    if (variation.id === currentImageSet) {
      return { ...variation, color: colorRef.current.value };
    } else {
      return variation;
    }
  });

  dispatch({
    type: addProductActions.setImageVariations,
    payload: updatedImageVariation,
  });
};

export const changeColorCode = (
  { imageVariations, currentImageSet },
  dispatch,
  colorCodeRef
) => {
  const updatedImageVariation = imageVariations.map((variation) => {
    if (variation.id === currentImageSet) {
      return { ...variation, code: colorCodeRef.current.value };
    } else {
      return variation;
    }
  });
  dispatch({
    type: addProductActions.setImageVariations,
    payload: updatedImageVariation,
  });
};
