import { createSlice } from "@reduxjs/toolkit";

import { deleteProduct, getProducts } from "../api/productsApi";
import { pushNotification } from "utils/pushNotification";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (_, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id != action.payload.id
        );
        pushNotification("product deleted successfully", true);
      })
      .addCase(deleteProduct.rejected, (_, action) => {
        pushNotification(
          `${action.payload.name || "error"}: ${action.payload.message}`
        );
      });
  },
});

export const { setProducts, setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
