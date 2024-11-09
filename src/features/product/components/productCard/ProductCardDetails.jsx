import { FaStar } from "react-icons/fa";
import ProductCardPrice from "./ProductCardPrice";

const ProductCardDetails = ({ product }) => {
  return (
    <section className="product-details f-column">
      <p className="product-name">{product.name}</p>
      <p>
        {product.rating} <FaStar />
      </p>
      <ProductCardPrice product={product} />
    </section>
  );
};
export default ProductCardDetails;
