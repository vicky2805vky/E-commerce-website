import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import PriceDetails from "./PriceDetails";

import "../stylesheets/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <section className="product-card" key={product.id}>
      <div className="image-box flex justify-center items-center">
        <img
          src={product.images[0].imageURLs[0]}
          alt={product.name + "image"}
        />
      </div>
      <section className="product-details f-column">
        <p className="product-name">{product.name}</p>
        <p>
          {product.rating} <FaStar />
        </p>
        <section className="product-price-details a-i-c">
          <PriceDetails product={product} />
          <Link to={`/product/${product.id}`} className="btn-link">
            <button className="button-1">view&nbsp;&rarr;</button>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default ProductCard;
