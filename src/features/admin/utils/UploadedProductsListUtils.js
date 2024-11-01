import { productManagerActions } from "features/admin/services/reducers/productManagerReducer";
import { pushNotification } from "utils/pushNotification";

export const createNewItem = (
  { productImageVariants, uploadedProductImages },
  dispatch,
  colorInputRef
) => {
  if (productImageVariants.length !== uploadedProductImages.length) {
    return pushNotification("please upload an image");
  }
  const updatedImageVariations = [
    ...productImageVariants,
    {
      id: productImageVariants.length,
      color: "",
      code: "#000000",
    },
  ];
  dispatch({
    type: productManagerActions.setImageVariations,
    payload: updatedImageVariations,
  });
  dispatch({
    type: productManagerActions.setCurrentImageSet,
    payload: productImageVariants.length,
  });
  colorInputRef.current.focus();
};
