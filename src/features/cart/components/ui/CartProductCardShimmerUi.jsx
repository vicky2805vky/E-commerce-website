import "../../stylesheets/CartProductCard.css";
import CartProductCardImageShimmerUi from "./shimmer/CartProductCardImageShimmerUi";
import CartProductCardQtyShimmerUi from "./shimmer/CartProductCardQtyShimmerUi";
import CartProductCardButtonsShimmerUi from "./shimmer/CartProductCardButtonsShimmerUi";

const CartProductCardShimmerUi = () => {
  const array = Array.from(Array(3).keys());
  return array.map((element) => {
    return (
      <div key={element} className="a-i-c cart-product-card gap">
        <CartProductCardImageShimmerUi />
        <CartProductCardQtyShimmerUi />
        <CartProductCardButtonsShimmerUi />
      </div>
    );
  });
};

export default CartProductCardShimmerUi;
