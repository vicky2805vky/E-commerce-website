import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popup: {
    isVisible: false,
    task: () => {},
  },
  theme: localStorage.getItem("theme") || "light",
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
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
    },
  },
});

export default appSlice.reducer;

export const { setPopupVisibility, setPopupTask, toggleTheme } =
  appSlice.actions;
