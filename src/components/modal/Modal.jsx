import { FLEX_CENTER, FLEX_CENTER_COL } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import ModalButtons from "./ModalButtons";
import { motion } from "motion/react";

const Modal = () => {
  const { modal } = useStoreData();
  if (!modal.isVisible) return null;

  return (
    <div className={`${FLEX_CENTER} absolute inset-0 bg-black bg-opacity-35`}>
      <motion.div
        className={`${FLEX_CENTER_COL} justify-around [background:var(--main-bg-gradient)] rounded-lg p-3 h-40 w-8/12 max-w-sm`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <p>Are you sure?</p>
        <ModalButtons />
      </motion.div>
    </div>
  );
};

export default Modal;
