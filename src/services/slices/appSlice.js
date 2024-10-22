import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    isVisible: false,
    task: () => {},
  },
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    setPopupVisibility: (state) => {
      state.popup.isVisible = !state.popup.isVisible;
    },
    setPopupTask: (state, action) => {
      state.popup.task = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { setPopupVisibility, setPopupTask } = appSlice.actions;
