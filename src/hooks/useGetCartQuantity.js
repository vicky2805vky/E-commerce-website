import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCartQuantity } from "services/api/userCartApi";

const useGetCartQuantity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(() => dispatch(getCartQuantity()));
  }, []);
};

export default useGetCartQuantity;
