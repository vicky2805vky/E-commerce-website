import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushNotification } from "utils/pushNotification";
import { postCategory } from "services/api/categoryApi";

const usePostCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createCategory = async (data) => {
    try {
      dispatch(postCategory(data));
      navigate("/admin/categories");
      pushNotification("category added successfully", true);
    } catch (error) {
      console.error("Error adding category:", error);
      pushNotification("Error adding category. Please try again.", false);
    }
  };

  return createCategory;
};

export default usePostCategory;
