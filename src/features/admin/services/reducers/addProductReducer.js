export const addProductActions = {
  setFormData: "SET_FORM_DATA",
  setImageVariations: "SET_IMAGE_VARIATIONS",
  setUploadedImages: "SET_UPLOADED_IMAGES",
  setCurrentImageSet: "SET_CURRENT_IMAGE_SET",
  resetState: "RESET_STATE",
};

const addProductReducer = (state, action) => {
  switch (action.type) {
    case addProductActions.setFormData:
      return { ...state, formData: action.payload };

    case addProductActions.setImageVariations:
      return { ...state, imageVariations: action.payload };

    case addProductActions.setUploadedImages:
      return { ...state, uploadedImageFiles: action.payload };

    case addProductActions.setCurrentImageSet:
      return { ...state, currentImageSet: action.payload };

    case addProductActions.resetState:
      return {
        formData: {
          name: "",
          category: "",
          description: "",
          mrp: "",
          price: "",
          rating: "",
        },
        imageVariations: [
          {
            id: 0,
            color: "",
            code: "#000000",
          },
        ],
        currentImageSet: 0,
        uploadedImageFiles: [],
      };

    default:
      return state;
  }
};

export default addProductReducer;
