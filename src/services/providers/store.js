import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../slices/appSlice";
import productReducer from "../slices/productSlice";
import adminProductReducer from "../slices/adminProductSlice";
import authReducer from "../slices/authSlice";
import userCartReducer from "../slices/userCartSlice";
import categoryReducer from "../slices/categorySlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    adminProduct: adminProductReducer,
    auth: authReducer,
    userCart: userCartReducer,
    categories: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
