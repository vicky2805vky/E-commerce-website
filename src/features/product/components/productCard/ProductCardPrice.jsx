import { FLEX_BETWEEN } from "constants/tailwindConstants";
import { getStars } from "features/product/utils/getStars";
import { addCommaToNumber } from "utils/addCommaToNumber";

const ProductCardPrice = ({ product }) => {
  return (
    <div className={FLEX_BETWEEN}>
      <p>
        {product.rating} {getStars(product.rating)}
      </p>
      <p className="[font-size:var(--fs-l)] font-bold">
        &#8377;{addCommaToNumber(product.price)}
      </p>
    </div>
  );
};
export default ProductCardPrice;
