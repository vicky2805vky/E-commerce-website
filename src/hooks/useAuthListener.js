import { auth } from "configs/firebase";
import { updateLoginStatus, setUser } from "services/slices/authSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "services/slices/userCartSlice";

const useAuthListener = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(updateLoginStatus(true));
      dispatch(setUser(auth.currentUser));
    } else {
      dispatch(updateLoginStatus(false));
      dispatch(setUser(null));
      dispatch(clearCart());
    }
  });
};

export default useAuthListener;
