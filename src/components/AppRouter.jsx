import Admin from "features/admin/Admin";
import AddProducts from "features/admin/components/addProducts/AddProducts";
import EditProducts from "features/admin/components/addProducts/EditProducts";
import ProductManager from "features/admin/components/viewProducts/ProductManager";
import Account from "features/auth/Account";
import DeleteAccount from "features/auth/components/profile/DeleteAccount";
import DeleteConfirm from "features/auth/components/profile/DeleteConfirm";
import Cart from "features/cart/Cart";
import ErrorPage from "features/error/ErrorPage";
import Product from "features/product/components/productBuy/Product";
import ProductPage from "features/product/ProductPage";
import useReduxData from "hooks/useReduxData";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const { isLoggedIn } = useReduxData();

  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Account />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/products" element={<ProductManager />} />
        <Route path="/admin/products/:id/edit" element={<EditProducts />} />
        <Route path="/admin/products/add" element={<AddProducts />} />
      </Route>
      {isLoggedIn && <Route path="/delete" element={<DeleteAccount />} />}
      <Route path="/delete-confirmation" element={<DeleteConfirm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
