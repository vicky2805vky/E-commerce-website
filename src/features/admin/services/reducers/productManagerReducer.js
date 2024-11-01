export const productManagerActions = {
  setFormData: "SET_FORM_DATA",
  setImageVariations: "SET_IMAGE_VARIATIONS",
  setUploadedImages: "SET_UPLOADED_IMAGES",
  setCurrentImageSet: "SET_CURRENT_IMAGE_SET",
  resetState: "RESET_STATE",
};

const productManagerReducer = (state, action) => {
  switch (action.type) {
    case productManagerActions.setFormData:
      return { ...state, productFormData: action.payload };

    case productManagerActions.setImageVariations:
      return { ...state, productImageVariants: action.payload };

    case productManagerActions.setUploadedImages:
      return { ...state, uploadedProductImages: action.payload };

    case productManagerActions.setCurrentImageSet:
      return { ...state, currentImageIndex: action.payload };

    case productManagerActions.resetState:
      return {
        productFormData: {
          name: "",
          category: "",
          description: "",
          mrp: "",
          price: "",
          rating: "",
        },
        productImageVariants: [
          {
            id: 0,
            color: "",
            code: "#000000",
          },
        ],
        currentImageIndex: 0,
        uploadedProductImages: [],
      };

    default:
      return state;
  }
};

export default productManagerReducer;
