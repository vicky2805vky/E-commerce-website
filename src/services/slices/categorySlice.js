import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCategory,
  getCategories,
  postCategory,
  updateCategory,
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
        state.categories.push({
          ...action.payload,
          id: action.payload.name,
        });
      })
      .addCase(postCategory.rejected, (state, action) => {
        pushNotification(action.payload.message);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.categories = [
          ...state.categories.filter(
            (category) => category.name !== action.payload.name
          ),
          { id: action.payload.name, ...action.payload },
        ];
      })
      .addCase(updateCategory.rejected, (state, action) => {
        console.error(action.payload);
        pushNotification(action.payload.message);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload.id
        );
        pushNotification("category deleted successfully", true);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        console.error(action.payload);
        pushNotification(action.payload.message);
      });
  },
});

export default categorySlice.reducer;

export const {} = categorySlice.actions;
