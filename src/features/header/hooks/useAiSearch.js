import useGemini from "hooks/useGemini";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilteredProducts } from "services/slices/productSlice";

const useAiSearch = () => {
  const { products } = useStoreData();
  const callGemini = useGemini();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async (data) => {
    if (!data.search) return;
    dispatch(setFilteredProducts(products));
    const response = await callGemini(data.search);
    const returnedProducts = response
      .split(",")
      .map((productName) => productName.trim());

    const filteredProducts = products.filter((product) =>
      returnedProducts.includes(product.name.toLowerCase()),
    );
    dispatch(setFilteredProducts(filteredProducts));
    navigate("/");
  };
};

export default useAiSearch;
