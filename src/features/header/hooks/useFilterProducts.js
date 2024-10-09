import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setFilteredProducts } from "services/slices/productSlice";

import useReduxData from "hooks/useReduxData";

const useFilterProducts = () => {
  const { products } = useReduxData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (searchQuery) => {
    if (window.location.pathname != "/") {
      navigate("/");
    }
    if (searchQuery !== "") {
      const searchProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch(setFilteredProducts(searchProducts));
    } else {
      dispatch(setFilteredProducts(products));
    }
  };
};

export default useFilterProducts;
