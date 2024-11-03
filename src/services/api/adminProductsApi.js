import { createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "configs/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const uploadImagesToFirebase = createAsyncThunk(
  "admin/products/images/post",
  async (
    { productImageVariants, uploadedProductImages, productFormData },
    thunkApi
  ) => {
    try {
      uploadedProductImages.map((imageSet, i) => {
        imageSet.map((image) => {
          console.log(image);
        });
      });
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
