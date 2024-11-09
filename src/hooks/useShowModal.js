import { useDispatch } from "react-redux";
import useStoreData from "./useStoreData";
import { setModalTask, setModalVisibility } from "services/slices/appSlice";

const useShowModal = () => {
  const { modal } = useStoreData();
  const dispatch = useDispatch();
  return (response) => {
    dispatch(setModalVisibility());
    response && modal.task();
    dispatch(setModalTask(() => {}));
  };
};

export default useShowModal;
