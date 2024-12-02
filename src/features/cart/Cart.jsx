import NonEmptyCart from "./components/NonEmptyCart";
import RedirectPage from "features/redirect/RedirectPage";

import useStoreData from "hooks/useStoreData";
import CartProductCardShimmerUi from "./components/ui/CartProductCardShimmerUi";

const Cart = () => {
  const { cartQuantity, isUserLoggedIn, cartItems } = useStoreData();
  if (!isUserLoggedIn) return <RedirectPage redirectionType={"login"} />;
  if (cartItems === null) return <CartProductCardShimmerUi />;

  return (
    <div className="cart ">
      {cartQuantity !== 0 && isUserLoggedIn ? (
        <NonEmptyCart />
      ) : (
        <RedirectPage redirectionType={"emptyCart"} />
      )}
    </div>
  );
};

export default Cart;
