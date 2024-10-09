import { useDispatch } from "react-redux";

import { deleteCartProduct, getCartItems } from "services/api/userCartApi";

import CartProductCard from "./cart products/CartProductCard";
import CartSummary from "./cart summary/CartSummary";

import "../stylesheets/NonEmptyCart.css";

import useReduxData from "hooks/useReduxData";

const NonEmptyCart = () => {
  const { cartItems } = useReduxData();
  const dispatch = useDispatch();

  return (
    <div className="non-empty-cart w-100 gap f-column">
      <div className="cart-products-container">
        {cartItems.map((item) => (
          <CartProductCard
            item={item}
            key={item.id}
            removeCartItem={() => {
              dispatch(deleteCartProduct(item.id));
              dispatch(getCartItems());
            }}
          />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};
export default NonEmptyCart;
