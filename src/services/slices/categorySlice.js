import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCategory,
  getCategories,
  postCategory,
} from "services/api/categoryApi";
import { pushNotification } from "utils/pushNotification";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        console.error(action.payload);
        pushNotification(action.payload.message);
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((category) => {
          category.id !== action.payload;
        });
      })
      .addCase(postCategory.rejected, (state, action) => {
        console.error(action.payload);
        pushNotification(action.payload.message);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        console.log(action.payload);

        state.categories = state.categories.filter(
          (category) => category.id !== action.payload.id
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        console.error(action.payload);
        pushNotification(action.payload.message);
      });
  },
});

export default categorySlice.reducer;

export const {} = categorySlice.actions;
