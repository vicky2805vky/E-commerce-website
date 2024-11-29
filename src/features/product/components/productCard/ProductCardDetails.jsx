import ProductCardPrice from "./ProductCardPrice";
import { getStars } from "features/product/utils/getStars";

const ProductCardDetails = ({ product }) => {
  return (
    <section className="product-details f-column">
      <p className="product-name">{product.name}</p>
      <p>
        {product.rating} {getStars(product.rating)}
      </p>
      <ProductCardPrice product={product} />
    </section>
  );
};
export default ProductCardDetails;
