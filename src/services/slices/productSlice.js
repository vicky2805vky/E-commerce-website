import { createSlice } from "@reduxjs/toolkit";

import { deleteProduct, getProducts } from "../api/productsApi";
import {
  postCartProduct,
  decrementCartProduct,
  deleteCartProduct,
  getCartItems,
  getCartQuantity,
  incrementCartProduct,
} from "services/api/userCartApi";

const initialState = {
  products: [],
  filteredProducts: [],
  cartItems: [],
  cartQuantity: 0,
  error: { hasError: false, statusCode: 404 },
  theme: localStorage.getItem("theme") || "light",
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cartItems.length = 0;
      state.cartQuantity = 0;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
    },
    setCartQuantity: (state, action) => {
      state.cartQuantity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = [...action.payload];
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(getCartQuantity.fulfilled, (state, action) => {
        state.cartQuantity = action.payload;
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(getCartQuantity.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(postCartProduct.fulfilled, (state, action) => {
        state.cartItems = [...state.cartItems, action.payload];
        state.cartQuantity++;
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(postCartProduct.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(incrementCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
              }
            : item
        );
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(incrementCartProduct.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(decrementCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        );
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(decrementCartProduct.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id != action.payload
        );
        state.cartQuantity--;
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(deleteCartProduct.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id != action.payload
        );
        state.error = { hasError: false, statusCode: 404 };
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        console.error({
          error: action.payload.message,
          type: action.payload.name,
          code: action.payload.code,
        });
        state.error = { hasError: true, statusCode: 500 };
      });
  },
});

export const {
  setProducts,
  setFilteredProducts,
  toggleTheme,
  setCartQuantity,
  resetCart,
} = productSlice.actions;
export default productSlice.reducer;
