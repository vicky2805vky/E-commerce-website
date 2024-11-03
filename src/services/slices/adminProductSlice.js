import { createSlice } from "@reduxjs/toolkit";
import { pushNotification } from "utils/pushNotification";

const initialState = {
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

const adminProductSlice = createSlice({
  name: "adminProductSlice",
  initialState,
  reducers: {
    setAdminProductState: (state, action) => {
      state.productFormData = action.payload.productFormData;
      state.productImageVariants = action.payload.productImageVariants;
      state.uploadedProductImages = action.payload.uploadedProductImages;
    },
    setProductFormData: (state, action) => {
      state.productFormData[action.payload.key] = action.payload.value;
    },
    addProductImageVariants: (state, _) => {
      state.productImageVariants.push({
        id: state.productImageVariants.length,
        color: "",
        code: "#000000",
      });
      state.currentImageIndex = state.productImageVariants.length - 1;
    },
    setProductImageVariants: (state, action) => {
      state.productImageVariants[state.currentImageIndex] = action.payload;
    },
    deleteProductImageVariant: (state, action) => {
      const id = action.payload;
      state.productImageVariants =
        state.productImageVariants.length > 1
          ? state.productImageVariants
              .filter((variation) => variation.id !== id)
              .map((variation, i) => ({ ...variation, id: i }))
          : state.productImageVariants;

      state.uploadedProductImages =
        state.uploadedProductImages.length > 1
          ? state.uploadedProductImages.filter((_, i) => id !== i)
          : state.uploadedProductImages;

      state.currentImageIndex = 0;
    },
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
    addUploadedProductImages: (state, action) => {
      if (state.uploadedProductImages[state.currentImageIndex]?.length) {
        state.uploadedProductImages[state.currentImageIndex] = [
          ...state.uploadedProductImages[state.currentImageIndex],
          ...action.payload,
        ];
      } else {
        state.uploadedProductImages[state.currentImageIndex] = action.payload;
      }
    },
    deleteUploadedProductImage: (state, action) => {
      const filteredImages = state.uploadedProductImages[
        state.currentImageIndex
      ].filter((file) => {
        return (
          file !==
          state.uploadedProductImages[state.currentImageIndex][action.payload]
        );
      });

      state.uploadedProductImages[state.currentImageIndex] = filteredImages;
    },
    resetAdminProductState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setAdminProductState,
  setCurrentImageIndex,
  setProductFormData,
  addProductImageVariants,
  setProductImageVariants,
  deleteProductImageVariant,
  addUploadedProductImages,
  deleteUploadedProductImage,
  resetAdminProductState,
} = adminProductSlice.actions;
export default adminProductSlice.reducer;
