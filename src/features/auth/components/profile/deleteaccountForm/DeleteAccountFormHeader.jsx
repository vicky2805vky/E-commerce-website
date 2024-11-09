import { FaTrashAlt } from "react-icons/fa";

const DeleteAccountFormHeader = () => {
  return (
    <div className="f-column">
      <span className="trash-icon flex justify-center items-center ">
        <FaTrashAlt />
      </span>
      <p className="delete-warning">
        For security reasons, please re-enter your details to confirm your
        identity.
      </p>
    </div>
  );
};

export default DeleteAccountFormHeader;
