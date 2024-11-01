import { productManagerActions } from "features/admin/services/reducers/productManagerReducer";
import { pushNotification } from "utils/pushNotification";

export const changeThumbnailFocus = (
  { productImageVariants, uploadedProductImages, currentImageIndex },
  dispatch,
  id
) => {
  if (
    productImageVariants.length !== uploadedProductImages.length &&
    id !== productImageVariants[currentImageIndex].id
  ) {
    return pushNotification("please upload an image");
  }
  dispatch({
    type: productManagerActions.setCurrentImageSet,
    payload: id,
  });
};

export const deleteThumbnail = (
  { productImageVariants, uploadedProductImages },
  dispatch,
  id
) => {
  const updatedImageVariation =
    productImageVariants.length > 1
      ? productImageVariants
          .filter((variation) => variation.id !== id)
          .map((variation, i) => ({ ...variation, id: i }))
      : productImageVariants;

  dispatch({
    type: productManagerActions.setImageVariations,
    payload: updatedImageVariation,
  });

  const updatedImages =
    uploadedProductImages.length > 1
      ? uploadedProductImages.filter((_, i) => id !== i)
      : uploadedProductImages;

  dispatch({
    type: productManagerActions.setUploadedImages,
    payload: updatedImages,
  });

  dispatch({ type: productManagerActions.setCurrentImageSet, payload: 0 });
};
