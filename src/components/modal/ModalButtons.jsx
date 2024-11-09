import useShowModal from "hooks/useShowModal";

const ModalButtons = () => {
  const showModal = useShowModal();
  return (
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
  );
};

export default ModalButtons;
