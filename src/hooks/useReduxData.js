import { useSelector } from "react-redux";

const useReduxData = () => {
  const productsData = useSelector((store) => store.product);
  const authData = useSelector((store) => store.auth);
  const appData = useSelector((store) => store.app);
  const userCartData = useSelector((store) => store.userCart);

  return {
    ...appData,
    ...productsData,
    ...authData,
    ...userCartData,
  };
};

export default useReduxData;
