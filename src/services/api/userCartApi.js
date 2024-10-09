import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, auth } from "configs/firebase";

const userCollection = "S-mart-users";

const cartProductsCollection = "S-mart-cart";

export const getCartItems = createAsyncThunk(
  "cart/getCart",
  async (user, thunkApi) => {
    try {
      const response = await getDocs(
        collection(db, userCollection, user?.uid, cartProductsCollection)
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
        collection(db, userCollection, user?.uid, cartProductsCollection)
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
export const postCartProduct = createAsyncThunk(
  "cart/post",
  async (product, thunkApi) => {
    try {
      await setDoc(
        doc(
          db,
          `${userCollection}/${auth.currentUser.uid}/${cartProductsCollection}`,
          product.id
        ),
        product
      );
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const incrementCartProduct = createAsyncThunk(
  "cart/increment",
  async (product, thunkApi) => {
    try {
      await updateDoc(
        doc(
          db,
          `${userCollection}/${auth.currentUser.uid}/${cartProductsCollection}`,
          product.id
        ),
        {
          quantity: product.quantity + 1,
        }
      );
      return product.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const decrementCartProduct = createAsyncThunk(
  "cart/decrement",
  async (product, thunkApi) => {
    try {
      await updateDoc(
        doc(
          db,
          `${userCollection}/${auth.currentUser.uid}/${cartProductsCollection}`,
          product.id
        ),
        {
          quantity: product.quantity - 1,
        }
      );
      return product.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "cart/delete",
  async (id, thunkApi) => {
    try {
      await deleteDoc(
        doc(
          db,
          `${userCollection}/${auth.currentUser.uid}/${cartProductsCollection}`,
          id
        )
      );
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
