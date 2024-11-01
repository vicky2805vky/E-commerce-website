import { useDispatch } from "react-redux";

import { deleteCartProduct, getCartItems } from "services/api/userCartApi";

import CartProductCard from "./cart products/CartProductCard";
import CartSummary from "./cart summary/CartSummary";

import "../stylesheets/NonEmptyCart.css";

import useStoreData from "hooks/useStoreData";

const NonEmptyCart = () => {
  const { cartItems } = useStoreData();
  const dispatch = useDispatch();

  return (
    <div className="non-empty-cart w-100 gap f-column">
      <div className="cart-products-container">
        {cartItems.map((item, i) => (
          <CartProductCard
            item={item}
            key={i}
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
