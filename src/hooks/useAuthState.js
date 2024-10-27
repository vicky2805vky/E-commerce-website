import { auth } from "configs/firebase";
import { setIsLoggedIn, setUser } from "services/slices/authSlice";
import { useDispatch } from "react-redux";
import { resetCart } from "services/slices/userCartSlice";

const useAuthState = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(setIsLoggedIn(true));
      dispatch(setUser(auth.currentUser));
    } else {
      dispatch(setIsLoggedIn(false));
      dispatch(setUser(null));
      dispatch(resetCart());
    }
  });
};

export default useAuthState;
