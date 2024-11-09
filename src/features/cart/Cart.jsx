import NonEmptyCart from "./components/NonEmptyCart";
import RedirectPage from "features/redirect/RedirectPage";

import useStoreData from "hooks/useStoreData";

const Cart = () => {
  const { cartQuantity, isUserLoggedIn } = useStoreData();
  if (!isUserLoggedIn) return <RedirectPage redirectionType={"login"} />;

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
