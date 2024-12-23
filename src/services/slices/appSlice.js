import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    isVisible: false,
    task: () => {},
  },
  theme: localStorage.getItem("theme") || "light",
  searchStatus: "none",
};

const appSlice = createSlice({
  name: "appSlice",
  initialState: initialState,
  reducers: {
    setModalVisibility: (state) => {
      state.modal.isVisible = !state.modal.isVisible;
    },
    setModalTask: (state, action) => {
      state.modal.task = action.payload;
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
    setSearchStatus: (state, action) => {
      state.searchStatus = action.payload;
    },
  },
});

export default appSlice.reducer;

export const {
  setModalVisibility,
  setModalTask,
  toggleTheme,
  setSearchStatus,
} = appSlice.actions;
