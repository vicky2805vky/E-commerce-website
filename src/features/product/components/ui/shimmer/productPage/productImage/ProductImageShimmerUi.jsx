import ProductImageButtonsShimmerUi from "./ProductImageButtonsShimmerUi";
import ProductImageSliderShimmerUi from "./ProductImageSliderShimmerUi";

const ProductImageShimmerUi = () => {
  return (
    <div className="image flex justify-center items-center f-column">
      <ProductImageSliderShimmerUi />
      <ProductImageButtonsShimmerUi />
    </div>
  );
};

export default ProductImageShimmerUi;
