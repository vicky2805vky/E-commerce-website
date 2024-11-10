import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "services/api/productsApi";

import useStoreData from "./useStoreData";
import { setFilteredProducts } from "services/slices/productSlice";
import { getCartItems, getCartQuantity } from "services/api/userCartApi";
import { getCategories } from "services/api/categoryApi";
import { auth } from "configs/firebase";

const useInitializeApp = () => {
  const { theme, products } = useStoreData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    if (auth.currentUser) {
      dispatch(getCartItems(auth.currentUser));
      dispatch(getCartQuantity(auth.currentUser));
    }
  }, [auth.currentUser]);
  useEffect(() => {
    dispatch(setFilteredProducts(products));
  }, [products]);

  useEffect(() => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
  }, [theme]);
};

export default useInitializeApp;
