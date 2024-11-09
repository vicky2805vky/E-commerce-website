import { FaTrashAlt } from "react-icons/fa";

const DeleteConfirmTitle = () => {
  return (
    <>
      <span className="trash-icon flex justify-center items-center">
        <FaTrashAlt />
      </span>
      <strong>Are you sure you want to delete your account?</strong>
    </>
  );
};

export default DeleteConfirmTitle;
