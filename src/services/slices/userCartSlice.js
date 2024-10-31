import { createSlice } from "@reduxjs/toolkit";

import {
  postCartProduct,
  decrementCartProduct,
  deleteCartProduct,
  getCartItems,
  getCartQuantity,
  incrementCartProduct,
} from "services/api/userCartApi";
import { pushNotification } from "utils/pushNotification";

const initialState = {
  cartItems: [],
  cartQuantity: 0,
};

const userCartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cartItems.length = 0;
      state.cartQuantity = 0;
    },
    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = [...action.payload];
      })
      .addCase(getCartItems.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(getCartQuantity.fulfilled, (state, action) => {
        state.cartQuantity = action.payload;
      })
      .addCase(getCartQuantity.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(postCartProduct.fulfilled, (state, action) => {
        state.cartItems = [...state.cartItems, action.payload];
        state.cartQuantity++;
      })
      .addCase(postCartProduct.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(incrementCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id &&
          item.images.color === action.payload.images.color
            ? {
                ...item,
                quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
              }
            : item
        );
      })
      .addCase(incrementCartProduct.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(decrementCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id &&
          item.images.color === action.payload.images.color
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        );
      })
      .addCase(decrementCartProduct.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.images.color !== action.payload.images.color
        );
        state.cartQuantity--;
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      });
  },
});

export default userCartSlice.reducer;

export const { resetCart, setCartQuantity } = userCartSlice.actions;
