import { addProductActions } from "../services/reducers/addProductReducer";

export const displayUploadedImage = (
  event,
  { uploadedImageFiles, currentImageSet },
  dispatch
) => {
  if (uploadedImageFiles.length) {
    const newImageFiles = [
      ...uploadedImageFiles.slice(0, currentImageSet),

      uploadedImageFiles[currentImageSet]
        ? [...uploadedImageFiles[currentImageSet], ...event.target.files]
        : [...event.target.files],

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
      payload: [[...event.target.files]],
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
