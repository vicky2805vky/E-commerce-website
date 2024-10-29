import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import { CATEGORY_COLLECTION } from "constants/firebaseConstants";
import { collection, getDocs } from "firebase/firestore";

export const getCategories = createAsyncThunk(
  "category/get",
  async (_, thunkApi) => {
    try {
      const categories = await getDocs(collection(db, CATEGORY_COLLECTION));
      const data = categories.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
