import { Link } from "react-router-dom";
import PriceDetails from "../PriceDetails";

const ProductCardPrice = ({ product }) => {
  return (
    <section className="product-price-details a-i-c">
      <PriceDetails product={product} />
      <Link to={`/product/${product.id}`} className="btn-link">
        <button className="button-1">view&nbsp;&rarr;</button>
      </Link>
    </section>
  );
};
export default ProductCardPrice;
