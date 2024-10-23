import { addProductActions } from "../services/reducers/addProductReducer";

export const displayUploadedImage = (
  files,
  { uploadedImageFiles, currentImageSet },
  dispatch
) => {
  files = Array.from(files).filter((file) => {
    return file.type.match(/image\/(jpeg|jpg|png|webp)/);
  });

  if (uploadedImageFiles.length) {
    const newImageFiles = [
      ...uploadedImageFiles.slice(0, currentImageSet),

      uploadedImageFiles[currentImageSet]
        ? [...uploadedImageFiles[currentImageSet], ...files]
        : [...files],

      ...uploadedImageFiles.slice(
        currentImageSet + 1,
        uploadedImageFiles.length
      ),
    ];
    dispatch({
      type: addProductActions.setUploadedImages,
      payload: newImageFiles,
    });
  } else {
    dispatch({
      type: addProductActions.setUploadedImages,
      payload: [[...files]],
    });
  }
};

export const deletePreviewImage = (
  { uploadedImageFiles, currentImageSet },
  dispatch,
  mapIndex
) => {
  const filteredFiles = uploadedImageFiles[currentImageSet].filter((file) => {
    return file !== uploadedImageFiles[currentImageSet][mapIndex];
  });
  const newImageFiles = [
    ...uploadedImageFiles.slice(0, currentImageSet),
    filteredFiles,
    ...uploadedImageFiles.slice(currentImageSet + 1, uploadedImageFiles.length),
  ];
  dispatch({
    type: addProductActions.setUploadedImages,
    payload: newImageFiles,
  });
};
