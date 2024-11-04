import { useDispatch } from "react-redux";
import ManagerLayout from "../managerLayout/ManagerLayout";
import useStoreData from "hooks/useStoreData";
import { deleteCategory } from "services/api/categoryApi";

const CategoryManager = () => {
  const { categories } = useStoreData();
  const dispatch = useDispatch();
  return (
    <ManagerLayout
      managerName={"category"}
      managerData={categories}
      columns={["name", "icon"]}
      deleteFunction={(data) => {
        dispatch(deleteCategory(data));
      }}
    />
  );
};

export default CategoryManager;
