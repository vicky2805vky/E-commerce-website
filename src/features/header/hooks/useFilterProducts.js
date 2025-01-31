import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setFilteredProducts } from "services/slices/productSlice";

import useStoreData from "hooks/useStoreData";

const useFilterProducts = () => {
  const { products } = useStoreData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (searchQuery) => {
    if (!products) {
      return;
    }
    if (window.location.pathname != "/shop") {
      navigate("/shop");
    }
    if (searchQuery !== "") {
      const searchProducts = products.filter((product) => {
        const productNameWithCategory = product.name + product.category;
        return productNameWithCategory
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());
      });
      dispatch(setFilteredProducts(searchProducts));
    } else {
      dispatch(setFilteredProducts(products));
    }
  };
};

export default useFilterProducts;
