import { setModalTask, setModalVisibility } from "services/slices/appSlice";
import { useDispatch } from "react-redux";

const useModal = () => {
  const dispatch = useDispatch();

  return (modalFunction) => {
    dispatch(setModalVisibility());
    dispatch(setModalTask(modalFunction));
  };
};

export default useModal;
