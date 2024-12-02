import { MANAGER_BUTTON, MANAGER_ROW } from "constants/tailwindConstants";
import { FaEdit } from "react-icons/fa";

const ManagerLayoutBodyShimmerUi = ({ columns }) => {
  const array = Array.from(Array(10).keys());

  return (
    <div className="flex flex-col items-center w-full gap-0 overflow-scroll">
      {array.map((element) => {
        return (
          <div key={element} className={MANAGER_ROW}>
            {columns.map((_, i) => {
              return (
                <div key={i}>
                  <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full !w-[10ch] shimmer mx-auto"></div>
                </div>
              );
            })}
            <div>
              <div
                className={` ${MANAGER_BUTTON} text-[transparent] bg-gray-300 shimmer`}
              >
                <FaEdit />
              </div>
            </div>
            <div>
              <div
                className={` ${MANAGER_BUTTON} text-[transparent] bg-gray-300 shimmer`}
              >
                <FaEdit />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManagerLayoutBodyShimmerUi;
