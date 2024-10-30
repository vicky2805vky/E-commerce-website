import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushNotification } from "utils/pushNotification";
import { updateCategory } from "services/api/categoryApi";

const useUpdateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editCategory = async (data) => {
    try {
      dispatch(updateCategory(data));
      navigate("/admin/categories");
      pushNotification("category updated successfully", true);
      return true;
    } catch (error) {
      console.error("Error updating category:", error);
      pushNotification("Error updating category. Please try again.", false);
    }
  };

  return editCategory;
};

export default useUpdateCategory;
