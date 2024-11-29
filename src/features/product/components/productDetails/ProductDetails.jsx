import PriceDetails from "../PriceDetails";
import List from "components/ui/List";

import "../../stylesheets/ProductDetails.css";

import { getStars } from "../../utils/getStars.jsx";
import ColorPicker from "../ui/ColorPicker";

const ProductDetails = ({
  product,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  return (
    <div className="product-info-box">
      <p className="product-name">{`${product.name} (${product.images[currentImageIndex].color})`}</p>
      <p className="rating">
        {product.rating} {getStars(product.rating)}
      </p>
      <PriceDetails product={product} />
      <div>
        <ColorPicker
          images={product.images}
          setCurrentImageIndex={setCurrentImageIndex}
        />
        <div className="product-info">
          <p>Product Details</p>
          <div className="details">
            <List listItems={product.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
