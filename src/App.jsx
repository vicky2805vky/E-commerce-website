import { Route, Routes } from "react-router-dom";

import { auth } from "configs/firebase";

import Header from "features/header/Header";
import ProductPage from "features/product/ProductPage";
import Cart from "features/cart/Cart";
import ErrorPage from "features/error/ErrorPage";
import Product from "features/product/components/productBuy/Product";
import Account from "features/auth/Account";
import RedirectPage from "features/redirect/RedirectPage";
import LoadingScreen from "components/LoadingScreen";
import ToastNotification from "components/ToastNotification";

import useReduxData from "hooks/useReduxData";
import useInitiateApp from "hooks/useInitiateApp";
import useAuthState from "hooks/useAuthState";
import DeleteAccount from "features/auth/components/profile/DeleteAccount";
import DeleteConfirm from "features/auth/components/profile/DeleteConfirm";
import Admin from "features/admin/Admin";
import AddProducts from "features/admin/components/addProducts/AddProducts";
import ProductManager from "features/admin/components/viewProducts/ProductManager";
import EditProducts from "features/admin/components/addProducts/EditProducts";

function App() {
  const { products, error, isLoggedIn } = useReduxData();
  useAuthState();

  useInitiateApp(auth.currentUser);

  if (!window.navigator.onLine)
    return (
      <>
        <Header />
        <RedirectPage image={"offline.png"} message={"retry"} destination={0}>
          It seems you are offline
        </RedirectPage>
      </>
    );

  if (error.hasError) return <ErrorPage />;

  if (products.length === 0) return <LoadingScreen />;

  if (window.navigator.onLine)
    return (
      <div className="App">
        <Header />
        <div style={{ width: "100%", height: "calc(85vh - 51px)" }}>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Account />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="/admin/products" element={<ProductManager />} />
              <Route
                path="/admin/products/:id/edit"
                element={<EditProducts />}
              />
              <Route path="/admin/products/add" element={<AddProducts />} />
            </Route>
            {isLoggedIn && <Route path="/delete" element={<DeleteAccount />} />}
            <Route path="/delete-confirmation" element={<DeleteConfirm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ToastNotification />
        </div>
      </div>
    );
}

export default App;
