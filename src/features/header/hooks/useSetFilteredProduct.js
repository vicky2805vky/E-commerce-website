import { setFilteredProducts } from "services/slices/productSlice";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import useFilterProducts from "../hooks/useFilterProducts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useSetFilteredProduct = (searchValue, setValue) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const filterProducts = useFilterProducts();
  const { products } = useStoreData();

  useEffect(() => {
    filterProducts(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setValue("search", "");
      dispatch(setFilteredProducts(products));
    }
  }, [location.pathname]);
};

export default useSetFilteredProduct;
