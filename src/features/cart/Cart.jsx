import NonEmptyCart from "./components/NonEmptyCart";
import RedirectPage from "features/redirect/RedirectPage";

import useStoreData from "hooks/useStoreData";

const Cart = () => {
  const { cartQuantity, isUserLoggedIn } = useStoreData();
  if (!isUserLoggedIn)
    return (
      <RedirectPage
        destination="/profile"
        imageName="login"
        iconName={"RiLoginBoxLine"}
        buttonText="login"
      >
        please To login to access cart items
      </RedirectPage>
    );

  return (
    <div className="cart ">
      {cartQuantity !== 0 && isUserLoggedIn ? (
        <NonEmptyCart />
      ) : (
        <RedirectPage
          destination="/"
          imageName="empty-cart"
          iconName={"TbShoppingCartExclamation"}
          buttonText="shop now"
        >
          Your cart is empty
        </RedirectPage>
      )}
    </div>
  );
};

export default Cart;
