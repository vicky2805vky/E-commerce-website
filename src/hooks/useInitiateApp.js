import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "services/api/productsApi";

import useReduxData from "./useReduxData";
import { setFilteredProducts } from "services/slices/productSlice";
import { getCartItems, getCartQuantity } from "services/api/userCartApi";

const useInitiateApp = () => {
  const { theme, products, user } = useReduxData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    if (user) {
      dispatch(getCartItems(user));
      dispatch(getCartQuantity(user));
    }
  }, [user]);
  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, [products]);
  useMemo(() => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
  }, [theme]);
};

export default useInitiateApp;
