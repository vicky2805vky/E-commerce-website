import DeleteConfirm from "features/auth/components/profile/DeleteConfirm";
import Cart from "features/cart/Cart";
import Product from "features/product/components/productDetails/Product";
import ProductPage from "features/product/ProductPage";
import Account from "features/auth/Account";
import { Route, Routes } from "react-router-dom";
import FallBackRoute from "./FallBackRoute";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Account />} />
      <Route path="/delete-confirmation" element={<DeleteConfirm />} />
      <Route path="*" element={<FallBackRoute />} />
    </Routes>
  );
};

export default PublicRoutes;
