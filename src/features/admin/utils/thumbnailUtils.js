import { addProductActions } from "features/admin/services/reducers/addProductReducer";
import { pushNotification } from "utils/pushNotification";

export const changeThumbnailFocus = (
  { imageVariations, uploadedImageFiles, currentImageSet },
  dispatch,
  id
) => {
  if (
    imageVariations.length !== uploadedImageFiles.length &&
    id !== imageVariations[currentImageSet].id
  ) {
    return pushNotification("please upload an image");
  }
  dispatch({
    type: addProductActions.setCurrentImageSet,
    payload: id,
  });
};

export const deleteThumbnail = ({ imageVariations }, dispatch, id) => {
  const updatedImageVariation =
    imageVariations.length > 1
      ? imageVariations
          .filter((variation) => {
            return variation.id !== id;
          })
          .map((variation, i) => {
            variation["id"] = i;
            return variation;
          })
      : imageVariations;
  dispatch({
    type: addProductActions.setImageVariations,
    payload: updatedImageVariation,
  });
  dispatch({ type: addProductActions.setCurrentImageSet, payload: 0 });
};
