import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "configs/firebase";

const productsCollection = "S-mart-products";

const productsCollectionData = collection(db, productsCollection);

export const getProducts = createAsyncThunk(
  "ecommerce/getProducts",
  async (_, thunkApi) => {
    try {
      const response = await getDocs(productsCollectionData);
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      for (let i = 0; i < data.length; i++) {
        const imageResponse = await getDocs(
          collection(db, productsCollection, data[i].id, "images")
        );

        const images = imageResponse.docs.map((doc, index) => {
          return {
            id: index,
            ...doc.data(),
          };
        });

        data[i] = { ...data[i], images: images };
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
