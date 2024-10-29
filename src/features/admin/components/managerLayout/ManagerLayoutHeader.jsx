import { MANAGER_BUTTON, MANAGER_ROW } from "constants/tailwindConstants";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManagerLayoutHeader = ({ managerName, columns }) => {
  return (
    <>
      <Link to={"add"} className={MANAGER_BUTTON + " bg-green-400 mb-3 p-3"}>
        <FaPlus /> &nbsp;
        <p> Add {managerName}</p>
      </Link>
      <div className={MANAGER_ROW}>
        {columns.map((column, i) => (
          <p key={i}>{column}</p>
        ))}

        <p>edit</p>
        <p>delete</p>
      </div>
    </>
  );
};

export default ManagerLayoutHeader;
