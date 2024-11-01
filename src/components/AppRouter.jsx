import { ADMINS } from "constants/constants";
import Admin from "features/admin/Admin";
import AddProducts from "features/admin/components/productManager/productForm/AddProducts";
import EditProducts from "features/admin/components/productManager/productForm/EditProducts";
import AddCategory from "features/admin/components/categoryManager/AddCategory";
import CategoryManager from "features/admin/components/categoryManager/CategoryManager";
import EditCategory from "features/admin/components/categoryManager/EditCategory";
import ProductManager from "features/admin/components/productManager/ProductManager";
import Account from "features/auth/Account";
import DeleteAccount from "features/auth/components/profile/DeleteAccount";
import DeleteConfirm from "features/auth/components/profile/DeleteConfirm";
import Cart from "features/cart/Cart";
import Product from "features/product/components/productBuy/Product";
import ProductPage from "features/product/ProductPage";
import RedirectPage from "features/redirect/RedirectPage";
import useStoreData from "hooks/useStoreData";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const { isUserLoggedIn, user } = useStoreData();

  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Account />} />

      {ADMINS.includes(user?.uid) && (
        <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<ProductManager />} />
          <Route path="/admin/products/:id/edit" element={<EditProducts />} />
          <Route path="/admin/products/add" element={<AddProducts />} />
          <Route path="/admin/categories" element={<CategoryManager />} />
          <Route path="/admin/categories/add" element={<AddCategory />} />
          <Route path="/admin/categories/:id/edit" element={<EditCategory />} />
        </>
      )}

      {isUserLoggedIn && (
        <>
          <Route path="/delete" element={<DeleteAccount />} />
        </>
      )}
      <Route path="/delete-confirmation" element={<DeleteConfirm />} />
      <Route
        path="*"
        element={
          <RedirectPage
            destination={"/"}
            imageName={"404"}
            buttonText={"go home"}
            iconName={"TbError404"}
          >
            page not found
          </RedirectPage>
        }
      />
    </Routes>
  );
};

export default AppRouter;
