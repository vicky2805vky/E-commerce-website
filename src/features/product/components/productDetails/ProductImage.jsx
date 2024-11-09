import ProductImageButtons from "./ProductPreview/ProductImageButtons";
import ProductImageSlider from "./ProductPreview/ProductImageSlider";
import "../../stylesheets/ProductImage.css";

const ProductImage = ({ product, currentImageIndex }) => {
  return (
    <div className="image flex justify-center items-center f-column">
      <div className="image-box">
        <ProductImageSlider
          product={product}
          currentImageIndex={currentImageIndex}
        />
      </div>
      <ProductImageButtons
        product={product}
        currentImageIndex={currentImageIndex}
      />
    </div>
  );
};

export default ProductImage;
