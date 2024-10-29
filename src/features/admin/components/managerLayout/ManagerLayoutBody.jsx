import IconComponent from "components/IconComponent";
import { MANAGER_BUTTON, MANAGER_ROW } from "constants/tailwindConstants";
import usePopup from "hooks/usePopup";
import React from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerLayoutBody = ({ columns, data, deleteFunction }) => {
  const popup = usePopup();

  return (
    <div className={MANAGER_ROW}>
      {columns.map((column, i) => {
        if (column === "icon") {
          return (
            <IconComponent
              key={i}
              iconName={data.icon}
              library={data.library}
            />
          );
        }
        return <p key={i}>{data[column]}</p>;
      })}

      <div>
        <Link to={`${data.id}/edit`} className={"bg-blue-400" + MANAGER_BUTTON}>
          <FaRegEdit />
        </Link>
      </div>
      <div>
        <div
          className={"bg-red-400" + MANAGER_BUTTON}
          onClick={() => {
            popup(() => deleteFunction(data));
          }}
        >
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default ManagerLayoutBody;
