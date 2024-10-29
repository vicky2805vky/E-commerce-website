import ManagerLayout from "../managerLayout/ManagerLayout";
import useReduxData from "hooks/useReduxData";

const CategoryManager = () => {
  const { categories } = useReduxData();
  return (
    <ManagerLayout
      managerName={"category"}
      managerData={categories || []}
      columns={["category", "icon"]}
      deleteFunction={() => {}}
    />
  );
};

export default CategoryManager;
