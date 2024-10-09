import NonEmptyCart from "./components/NonEmptyCart";
import RedirectPage from "features/redirect/RedirectPage";

import useReduxData from "hooks/useReduxData";

const Cart = () => {
  const { cartQuantity, isLoggedIn } = useReduxData();
  if (!isLoggedIn)
    return (
      <RedirectPage destination="/profile" image="login.svg" message="login">
        You have To login to access cart items
      </RedirectPage>
    );

  return (
    <div className="cart ">
      {cartQuantity !== 0 && isLoggedIn ? (
        <NonEmptyCart />
      ) : (
        <RedirectPage destination="/" image="empty-cart.png" message="shop now">
          Your cart is empty
        </RedirectPage>
      )}
    </div>
  );
};

export default Cart;
