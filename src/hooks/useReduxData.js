import { useSelector } from "react-redux";

const useReduxData = () => {
  const productsData = useSelector((store) => store.product);
  const authData = useSelector((store) => store.auth);
  const appData = useSelector((store) => store.app);

  return {
    ...appData,
    ...productsData,
    ...authData,
  };
};

export default useReduxData;
