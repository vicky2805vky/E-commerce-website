import { FLEX_CENTER } from "constants/tailwindConstants";
import usePopup from "hooks/usePopup";
import { FaPlus, FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerLayout = ({ managerName, columns, managerData, popupFn }) => {
  const popup = usePopup();

  const rowStyle =
    "cart-product-card flex justify-between items-center w-11/12 [&_*]:flex-1 p-3";

  const buttonStyle =
    " w-fit mx-auto p-2 rounded-full cursor-pointer " + FLEX_CENTER;

  return (
    <div className={"flex flex-col items-center w-full gap-0 h-full "}>
      <Link to={"add"} className={buttonStyle + " bg-green-400 mb-3 p-3"}>
        <FaPlus /> &nbsp;
        <p> Add {managerName}</p>
      </Link>
      <div className={rowStyle}>
        {columns.map((column) => (
          <p>{column}</p>
        ))}
        <p>edit</p>
        <p>delete</p>
      </div>
      <div
        className={"flex flex-col items-center w-full gap-0 overflow-scroll"}
      >
        {managerData.map((data, i) => {
          return (
            <div key={i} className={rowStyle}>
              {columns.map((column) => (
                <p>{data[column] || data}</p>
              ))}
              <div>
                <Link
                  to={`${data.id}/edit`}
                  className={"bg-blue-400" + buttonStyle}
                >
                  <FaRegEdit />
                </Link>
              </div>
              <div>
                <div
                  className={"bg-red-400" + buttonStyle}
                  onClick={() => {
                    popup(() => popupFn(data));
                  }}
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManagerLayout;
