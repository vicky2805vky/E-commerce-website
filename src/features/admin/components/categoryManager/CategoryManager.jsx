import { CATEGORIES } from "constants/constants";
import ManagerLayout from "../ui/ManagerLayout";

const CategoryManager = () => {
  return (
    <ManagerLayout
      managerName={"category"}
      managerData={CATEGORIES}
      columns={["category"]}
      deleteFunction={() => {}}
    />
  );
};

export default CategoryManager;
