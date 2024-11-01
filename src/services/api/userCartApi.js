import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "configs/firebase";
import { CART_COLLECTION, USER_COLLECTION } from "constants/firebaseConstants";

export const getCartItems = createAsyncThunk(
  "cart/getCart",
  async (user, thunkApi) => {
    try {
      const response = await getDocs(
        collection(db, USER_COLLECTION, user?.uid, CART_COLLECTION)
      );
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getCartQuantity = createAsyncThunk(
  "cart/getQty",
  async (user, thunkApi) => {
    try {
      const response = await getDocs(
        collection(db, USER_COLLECTION, user?.uid, CART_COLLECTION)
      );
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      return data.length;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const addCartItem = createAsyncThunk(
  "cart/post",
  async (product, thunkApi) => {
    try {
      await setDoc(
        doc(
          db,
          `${USER_COLLECTION}/${auth.currentUser.uid}/${CART_COLLECTION}/${
            product.id
          }-${product.images.color.replaceAll(" ", "-")}`
        ),
        product
      );
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const increaseProductQuantity = createAsyncThunk(
  "cart/increment",
  async (product, thunkApi) => {
    try {
      await updateDoc(
        doc(
          db,
          `${USER_COLLECTION}/${auth.currentUser.uid}/${CART_COLLECTION}/${
            product.id
          }-${product.images.color.replaceAll(" ", "-")}`
        ),
        {
          quantity: product.quantity + 1,
        }
      );
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const decreaseProductQuantity = createAsyncThunk(
  "cart/decrement",
  async (product, thunkApi) => {
    try {
      await updateDoc(
        doc(
          db,
          `${USER_COLLECTION}/${auth.currentUser.uid}/${CART_COLLECTION}/${
            product.id
          }-${product.images.color.replaceAll(" ", "-")}`
        ),
        {
          quantity: product.quantity - 1,
        }
      );
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "cart/delete",
  async (product, thunkApi) => {
    try {
      await deleteDoc(
        doc(
          db,
          `${USER_COLLECTION}/${auth.currentUser.uid}/${CART_COLLECTION}/${
            product.id
          }-${product.images.color.replaceAll(" ", "-")}`
        )
      );
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
