import "../../stylesheets/CartProductCard.css";
import CartProductCardButtons from "./cart product card/CartProductCardButtons";
import CartProductCardImage from "./cart product card/CartProductCardImage";
import CartProductCardQuantity from "./cart product card/CartProductCardQuantity";

const CartProductCard = ({ item }) => {
  return (
    <div className="a-i-c cart-product-card gap">
      <CartProductCardImage item={item} />
      <CartProductCardQuantity item={item} />

      <div>&#8377;{item.price * item.quantity}</div>
      <CartProductCardButtons item={item} />
    </div>
  );
};

export default CartProductCard;
