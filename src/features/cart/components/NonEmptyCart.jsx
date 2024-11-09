import CartSummary from "./cart summary/CartSummary";

import "../stylesheets/NonEmptyCart.css";

import CartProductCards from "./cart products/CartProductCards";

const NonEmptyCart = () => {
  return (
    <div className="non-empty-cart w-100 gap f-column">
      <CartProductCards />
      <CartSummary />
    </div>
  );
};
export default NonEmptyCart;
