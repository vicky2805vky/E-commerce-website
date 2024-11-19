import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "configs/firebase";
import { PRODUCT_COLLECTION } from "constants/firebaseConstants";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const postProductDetails = createAsyncThunk(
  "admin/product/details/post",
  (productDetails, thunkApi) => {
    try {
      const newProductDetails = {
        ...productDetails,
        description: productDetails.description
          .split("\n")
          .map((sentence) => sentence.trim())
          .filter(Boolean),
        mrp: parseInt(productDetails.mrp),
        price: parseInt(productDetails.price),
        rating: parseFloat(productDetails.rating),
      };

      setDoc(
        doc(db, PRODUCT_COLLECTION, productDetails.name.replaceAll(" ", "-")),
        newProductDetails
      );

      return newProductDetails;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const postProductImages = createAsyncThunk(
  "admin/product/images/post",
  async (
    { uploadedProductImages, productImageVariants, productFormData },
    thunkApi
  ) => {
    try {
      const imageData = await Promise.all(
        uploadedProductImages.map(async (uploadedImage, i) => {
          const imageURLs = await Promise.all(
            uploadedImage.map(async (url) => {
              if (url instanceof File) {
                const storageRef = ref(
                  storage,
                  `${productFormData.category}/${productFormData.name}/${url.name}`
                );
                await uploadBytes(storageRef, url);
                return await getDownloadURL(storageRef);
              }
              return url;
            })
          );
          await setDoc(
            doc(
              db,
              PRODUCT_COLLECTION,
              productFormData.name.replaceAll(" ", "-"),
              "images",
              `${i}`
            ),
            {
              ...productImageVariants[i],
              imageURLs,
            }
          );

          return imageURLs;
        })
      );
      return imageData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Image upload failed.");
    }
  }
);
