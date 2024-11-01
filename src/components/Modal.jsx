import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { setModalTask, setModalVisibility } from "services/slices/appSlice";

const Modal = () => {
  const { modal } = useStoreData();
  const dispatch = useDispatch();

  if (!modal.isVisible) return null;

  const showModal = (response) => {
    dispatch(setModalVisibility());
    response && modal.task();
    dispatch(setModalTask(() => {}));
  };

  return (
    <div className={` ${FLEX_CENTER} absolute inset-0 bg-black bg-opacity-25`}>
      <div
        className={`${FLEX_CENTER_COL} justify-around bg-white bg-opacity-35 rounded-lg p-3 h-40  w-8/12 max-w-sm`}
      >
        <p>Are you sure?</p>
        <div className="flex gap-3">
          <button
            className="button-1"
            onClick={() => {
              showModal(true);
            }}
          >
            continue
          </button>
          <button
            className="button-1"
            onClick={() => {
              showModal(false);
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
