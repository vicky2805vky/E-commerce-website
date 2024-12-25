import DeleteConfirm from "features/auth/components/profile/DeleteConfirm";
import Cart from "features/cart/Cart";
import Product from "features/product/components/productDetails/Product";
import ProductPage from "features/product/ProductPage";
import Account from "features/auth/Account";
import { Route, Routes } from "react-router-dom";
import FallBackRoute from "./FallBackRoute";
import PageTransition from "components/ui/transitions/PageTransition";
import HomePage from "features/home/HomePage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        }
      />
      <Route
        path="/shop"
        element={
          <PageTransition>
            <ProductPage />
          </PageTransition>
        }
      />
      <Route
        path="/shop/:id"
        element={
          <PageTransition>
            <Product />
          </PageTransition>
        }
      />
      <Route
        path="/cart"
        element={
          <PageTransition>
            <Cart />
          </PageTransition>
        }
      />
      <Route
        path="/profile"
        element={
          <PageTransition>
            <Account />
          </PageTransition>
        }
      />
      <Route path="/delete-confirmation" element={<DeleteConfirm />} />
      <Route path="*" element={<FallBackRoute />} />
    </Routes>
  );
};

export default PublicRoutes;
