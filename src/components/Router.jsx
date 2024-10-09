import Admin from "features/admin/Admin";
import Account from "features/auth/Account";
import Cart from "features/cart/Cart";
import ErrorPage from "features/error/ErrorPage";
import Product from "features/product/components/productBuy/Product";
import ProductPage from "features/product/ProductPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Router = () => {
  createBrowserRouter([
    { path: "/", element: <ProductPage />, errorElement: <ErrorPage /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/profile", element: <Account /> },
    { path: "/admin", element: <Admin /> },
    { path: "/delete", element: <Admin /> },
  ]);

  return <div>Router</div>;
};

export default Router;
