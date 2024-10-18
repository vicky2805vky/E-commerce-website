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

export const deleteThumbnail = (
  { imageVariations, uploadedImageFiles },
  dispatch,
  id
) => {
  const updatedImageVariation =
    imageVariations.length > 1
      ? imageVariations
          .filter((variation) => variation.id !== id)
          .map((variation, i) => ({ ...variation, id: i }))
      : imageVariations;

  dispatch({
    type: addProductActions.setImageVariations,
    payload: updatedImageVariation,
  });

  const updatedImages =
    uploadedImageFiles.length > 1
      ? uploadedImageFiles.filter((_, i) => id !== i)
      : uploadedImageFiles;

  dispatch({
    type: addProductActions.setUploadedImages,
    payload: updatedImages,
  });

  dispatch({ type: addProductActions.setCurrentImageSet, payload: 0 });
};
