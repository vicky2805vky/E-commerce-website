import "../stylesheets/ProductCard.css";
import ProductCardDetails from "./productCard/ProductCardDetails";
import ProductCardImage from "./productCard/ProductCardImage";

const ProductCard = ({ product }) => {
  return (
    <section className="product-card" key={product.id}>
      <ProductCardImage product={product} />
      <ProductCardDetails product={product} />
    </section>
  );
};

export default ProductCard;
