import { productManagerActions } from "../services/reducers/productManagerReducer";

export const displayUploadedImage = (
  files,
  { uploadedProductImages, currentImageIndex },
  dispatch
) => {
  files = Array.from(files).filter((file) => {
    return file.type.match(/image\/(jpeg|jpg|png|webp)/);
  });

  if (uploadedProductImages.length) {
    const newImageFiles = [
      ...uploadedProductImages.slice(0, currentImageIndex),

      uploadedProductImages[currentImageIndex]
        ? [...uploadedProductImages[currentImageIndex], ...files]
        : [...files],

      ...uploadedProductImages.slice(
        currentImageIndex + 1,
        uploadedProductImages.length
      ),
    ];
    dispatch({
      type: productManagerActions.setUploadedImages,
      payload: newImageFiles,
    });
  } else {
    dispatch({
      type: productManagerActions.setUploadedImages,
      payload: [[...files]],
    });
  }
};

export const deletePreviewImage = (
  { uploadedProductImages, currentImageIndex },
  dispatch,
  mapIndex
) => {
  const filteredFiles = uploadedProductImages[currentImageIndex].filter(
    (file) => {
      return file !== uploadedProductImages[currentImageIndex][mapIndex];
    }
  );
  const newImageFiles = [
    ...uploadedProductImages.slice(0, currentImageIndex),
    filteredFiles,
    ...uploadedProductImages.slice(
      currentImageIndex + 1,
      uploadedProductImages.length
    ),
  ];
  dispatch({
    type: productManagerActions.setUploadedImages,
    payload: newImageFiles,
  });
};
