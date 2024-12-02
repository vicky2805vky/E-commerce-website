import { MANAGER_BUTTON, MANAGER_ROW } from "constants/tailwindConstants";
import { FaPlus } from "react-icons/fa";

const ManagerLayoutHeaderShimmerUi = ({ managerName, columns }) => {
  return (
    <>
      <div
        className={
          MANAGER_BUTTON + " text-[transparent] bg-gray-300 mb-3 p-3 shimmer"
        }
      >
        <FaPlus /> &nbsp;
        <p> Add {managerName}</p>
      </div>
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

export default ManagerLayoutHeaderShimmerUi;
