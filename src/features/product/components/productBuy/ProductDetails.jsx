import PriceDetails from "../PriceDetails";
import List from "components/List";

import "../../stylesheets/ProductDetails.css";

import { getStars } from "../../utils/getStars.jsx";
import ColorPicker from "../ui/ColorPicker";

const ProductDetails = ({ product, setImageSet }) => {
  const stars = getStars(product.rating);

  return (
    <div className="product-info-box">
      <p className="product-name">{product.name}</p>
      <p className="rating">
        {product.rating} {stars.map((star) => star)}
      </p>
      <PriceDetails product={product} />
      <div>
        <ColorPicker images={product.images} setImageSet={setImageSet} />
        <div className="product-info">
          <p>Product Details</p>
          <div className="details">
            <List array={product.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
