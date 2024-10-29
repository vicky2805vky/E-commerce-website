import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "services/api/categoryApi";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;

export const {} = categorySlice.actions;
