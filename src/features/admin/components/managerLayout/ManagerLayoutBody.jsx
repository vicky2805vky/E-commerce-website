import { MANAGER_ROW } from "constants/tailwindConstants";
import ManagerLayoutColumns from "./layoutBody/ManagerLayoutColumns";
import ManagerLayoutEditDelete from "./layoutBody/ManagerLayoutEditDelete";

const ManagerLayoutBody = ({ columns, data, deleteFunction }) => {
  return (
    <div className={MANAGER_ROW}>
      <ManagerLayoutColumns columns={columns} data={data} />
      <ManagerLayoutEditDelete data={data} deleteFunction={deleteFunction} />
    </div>
  );
};

export default ManagerLayoutBody;
