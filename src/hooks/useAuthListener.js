import { auth } from "configs/firebase";
import { updateLoginStatus } from "services/slices/authSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "services/slices/userCartSlice";
import { useEffect } from "react";

const useAuthListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateLoginStatus(true));
      } else {
        dispatch(updateLoginStatus(false));
        dispatch(clearCart());
      }
    });
  }, []);
};

export default useAuthListener;
