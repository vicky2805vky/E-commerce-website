import usePostCategory from "features/admin/hooks/usePostCategory";
import CategoryForm from "./CategoryForm";
import useReduxData from "hooks/useReduxData";
import { pushNotification } from "utils/pushNotification";

const AddCategory = () => {
  const { categories } = useReduxData();
  const postCategory = usePostCategory();

  const handleSubmit = (e, name, icon) => {
    e.preventDefault();

    const doesCategoryAlreadyExist = categories.some(
      (category) => category.category.toLowerCase() === name.toLowerCase()
    );

    if (doesCategoryAlreadyExist)
      return pushNotification("category already exists");

    const data = {
      category: name,
      icon,
    };

    postCategory(data);
  };

  return <CategoryForm handleSubmit={handleSubmit} />;
};

export default AddCategory;
