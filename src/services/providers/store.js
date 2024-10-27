import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/appSlice";
import productReducer from "../slices/productSlice";
import authReducer from "../slices/authSlice";
import userCartReducer from "../slices/userCartSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    auth: authReducer,
    userCart: userCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
