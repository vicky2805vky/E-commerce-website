import { ADMINS } from "constants/constants";
import Admin from "features/admin/Admin";
import AddProducts from "features/admin/components/productManager/productForm/AddProducts";
import EditProducts from "features/admin/components/productManager/productForm/EditProducts";
import AddCategory from "features/admin/components/categoryManager/AddCategory";
import CategoryManager from "features/admin/components/categoryManager/CategoryManager";
import EditCategory from "features/admin/components/categoryManager/EditCategory";
import ProductManager from "features/admin/components/productManager/ProductManager";
import { Route, Routes } from "react-router-dom";
import FallBackRoute from "./FallBackRoute";
import { auth } from "configs/firebase";

const AdminRoutes = () => {
  if (!ADMINS.includes(auth.currentUser?.uid)) {
    return <FallBackRoute />;
  }

  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/products" element={<ProductManager />} />
      <Route path="/products/:id" element={<EditProducts />} />
      <Route path="/products/add" element={<AddProducts />} />
      <Route path="/categories" element={<CategoryManager />} />
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/categories/:id" element={<EditCategory />} />
      <Route path="*" element={<FallBackRoute />} />
    </Routes>
  );
};

export default AdminRoutes;
