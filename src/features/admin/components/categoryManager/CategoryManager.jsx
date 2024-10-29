import { useDispatch } from "react-redux";
import ManagerLayout from "../managerLayout/ManagerLayout";
import useReduxData from "hooks/useReduxData";
import { pushNotification } from "utils/pushNotification";
import { deleteCategory } from "services/api/categoryApi";

const CategoryManager = () => {
  const { categories } = useReduxData();
  const dispatch = useDispatch();
  return (
    <ManagerLayout
      managerName={"category"}
      managerData={categories}
      columns={["category", "icon"]}
      deleteFunction={(data) => {
        dispatch(deleteCategory(data));
        pushNotification("category deleted successfully");
      }}
    />
  );
};

export default CategoryManager;
