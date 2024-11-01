import { useSelector } from "react-redux";

const useStoreData = () => {
  const productsData = useSelector((store) => store.product);
  const authData = useSelector((store) => store.auth);
  const appData = useSelector((store) => store.app);
  const userCartData = useSelector((store) => store.userCart);
  const categoryData = useSelector((store) => store.categories);

  return {
    ...appData,
    ...productsData,
    ...authData,
    ...userCartData,
    ...categoryData,
  };
};

export default useStoreData;
