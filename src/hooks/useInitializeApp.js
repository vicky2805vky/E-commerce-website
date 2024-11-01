import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "services/api/productsApi";

import useStoreData from "./useStoreData";
import { setFilteredProducts } from "services/slices/productSlice";
import { getCartItems, getCartQuantity } from "services/api/userCartApi";
import { getCategories } from "services/api/categoryApi";

const useInitializeApp = () => {
  const { theme, products, user } = useStoreData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
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

export default useInitializeApp;