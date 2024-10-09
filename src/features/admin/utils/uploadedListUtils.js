import { addProductActions } from "features/admin/services/reducers/addProductReducer";
import { pushNotification } from "utils/pushNotification";

export const createNewItem = (
  { imageVariations, uploadedImageFiles },
  dispatch,
  colorRef
) => {
  if (imageVariations.length !== uploadedImageFiles.length) {
    return pushNotification("please upload an image");
  }
  const updatedImageVariations = [
    ...imageVariations,
    {
      id: imageVariations.length,
      color: "",
      code: "#000000",
    },
  ];
  dispatch({
    type: addProductActions.setImageVariations,
    payload: updatedImageVariations,
  });
  dispatch({
    type: addProductActions.setCurrentImageSet,
    payload: imageVariations.length,
  });
  colorRef.current.focus();
};
