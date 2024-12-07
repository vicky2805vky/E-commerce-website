import useStoreData from "hooks/useStoreData";
import CartProductCard from "./CartProductCard";

const CartProductCards = () => {
  const { cartItems } = useStoreData();
  return (
    <div className="cart-products-container">
      {cartItems.map((item, i) => (
        <CartProductCard item={item} key={i} />
      ))}
    </div>
  );
};

export default CartProductCards;
