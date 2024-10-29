import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushNotification } from "utils/pushNotification";
import { postCategory } from "services/api/categoryApi";

const usePostCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postProduct = async (e, data) => {
    e.preventDefault();

    try {
      dispatch(postCategory(data));
      navigate("/admin/categories");
      pushNotification("category added successfully", true);
      return true;
    } catch (error) {
      console.error("Error adding product:", error);
      pushNotification("Error adding category. Please try again.", false);
    }
  };

  return postProduct;
};

export default usePostCategory;
