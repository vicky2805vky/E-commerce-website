import { setPopupTask, setPopupVisibility } from "services/slices/appSlice";
import { useDispatch } from "react-redux";

const usePopup = () => {
  const dispatch = useDispatch();

  return (popupFunction) => {
    dispatch(setPopupVisibility());
    dispatch(setPopupTask(popupFunction));
  };
};

export default usePopup;
