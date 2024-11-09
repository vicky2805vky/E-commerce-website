import useAddToCart from "features/product/hooks/useAddToCart";
import { FaCartShopping, FaMoneyBillWave } from "react-icons/fa6";

const ProductImageButtons = ({ product, currentImageIndex }) => {
  const addToCart = useAddToCart();
  return (
    <div className="button-box a-i-c">
      <button
        className="button-3"
        onClick={() => {
          addToCart(product, currentImageIndex);
        }}
      >
        Add to cart&nbsp;{<FaCartShopping />}
      </button>
      <button className="button-3">buy now&nbsp;{<FaMoneyBillWave />}</button>
    </div>
  );
};

export default ProductImageButtons;
