import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import useReduxData from "hooks/useReduxData";
import { useDispatch } from "react-redux";
import { setPopupTask, setPopupVisibility } from "services/slices/appSlice";

const Popup = () => {
  const { popup } = useReduxData();
  const dispatch = useDispatch();

  if (!popup.isVisible) return null;

  const showPopup = (response) => {
    dispatch(setPopupVisibility());
    response && popup.task();
    dispatch(setPopupTask(() => {}));
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
              showPopup(true);
            }}
          >
            continue
          </button>
          <button
            className="button-1"
            onClick={() => {
              showPopup(false);
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
