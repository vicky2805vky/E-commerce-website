import { MANAGER_BUTTON } from "constants/tailwindConstants";
import useModal from "hooks/useModal";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerLayoutEditDelete = ({ data, deleteFunction }) => {
  const modal = useModal();

  return (
    <>
      <div>
        <Link to={`${data.id}/edit`} className={"bg-blue-400" + MANAGER_BUTTON}>
          <FaRegEdit />
        </Link>
      </div>
      <div>
        <div
          className={"bg-red-400" + MANAGER_BUTTON}
          onClick={() => {
            modal(() => deleteFunction(data));
          }}
        >
          <FaTrash />
        </div>
      </div>
    </>
  );
};
export default ManagerLayoutEditDelete;
