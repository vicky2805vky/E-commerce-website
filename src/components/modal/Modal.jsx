import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import ModalButtons from "./ModalButtons";

const Modal = () => {
  const { modal } = useStoreData();
  if (!modal.isVisible) return null;

  return (
    <div className={` ${FLEX_CENTER} absolute inset-0 bg-black bg-opacity-35`}>
      <div
        className={`${FLEX_CENTER_COL} justify-around [background:var(--main-bg-gradient)]  rounded-lg p-3 h-40  w-8/12 max-w-sm`}
      >
        <p>Are you sure?</p>
        <ModalButtons />
      </div>
    </div>
  );
};

export default Modal;
