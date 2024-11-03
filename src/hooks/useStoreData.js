import { useSelector } from "react-redux";

const useStoreData = () => {
  const appData = useSelector((store) => store.app);
  const productsData = useSelector((store) => store.product);
  const adminProductsData = useSelector((store) => store.adminProduct);
  const authData = useSelector((store) => store.auth);
  const userCartData = useSelector((store) => store.userCart);
  const categoryData = useSelector((store) => store.categories);

  return {
    ...appData,
    ...productsData,
    ...adminProductsData,
    ...authData,
    ...userCartData,
    ...categoryData,
  };
};

export default useStoreData;
