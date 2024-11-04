import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "configs/firebase";
import { CATEGORY_COLLECTION } from "constants/firebaseConstants";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

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

export const postCategory = createAsyncThunk(
  "category/post",
  async (data, thunkApi) => {
    try {
      await setDoc(doc(db, CATEGORY_COLLECTION, data.name), data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/update",
  async (data, thunkApi) => {
    try {
      await setDoc(doc(db, CATEGORY_COLLECTION, data.name), data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (data, thunkApi) => {
    try {
      await deleteDoc(doc(db, CATEGORY_COLLECTION, data.id));
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
