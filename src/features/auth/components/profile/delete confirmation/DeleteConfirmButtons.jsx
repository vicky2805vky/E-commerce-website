import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DeleteConfirmButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="button-3" type="submit">
        {<FaTrashAlt className="icon" />} Delete
      </button>
      <button
        className="button-3"
        onClick={(e) => {
          e.preventDefault();
          navigate("/profile");
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteConfirmButtons;
