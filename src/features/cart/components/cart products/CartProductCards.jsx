import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import CartProductCard from "./CartProductCard";
import { deleteCartProduct, getCartItems } from "services/api/userCartApi";

const CartProductCards = () => {
  const { cartItems } = useStoreData();
  const dispatch = useDispatch();
  return (
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
  );
};

export default CartProductCards;
