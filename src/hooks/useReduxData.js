import { useSelector } from "react-redux";

const useReduxData = () => {
  const productsData = useSelector((store) => store.product);
  const authData = useSelector((store) => store.auth);

  return {
    ...productsData,
    ...authData,
  };
};

export default useReduxData;
