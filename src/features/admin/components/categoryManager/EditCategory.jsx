import { useParams } from "react-router-dom";
import useReduxData from "hooks/useReduxData";
import CategoryForm from "./CategoryForm";
import useUpdateCategory from "features/admin/hooks/useUpdateCategory";
const EditCategory = () => {
  const { categories } = useReduxData();
  const { id } = useParams();
  const [category] = categories.filter((category) => category.id === id);

  const updateCategory = useUpdateCategory();

  const handleSubmit = (e, name, icon) => {
    e.preventDefault();
    const data = {
      id: name,
      category: name,
      icon,
    };
    updateCategory(data);
  };

  return <CategoryForm handleSubmit={handleSubmit} category={category} />;
};

export default EditCategory;
