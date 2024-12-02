import ColorPickerShimmerUi from "./ColorPickerShimmerUi";
import ProductInfoShimmerUi from "./productDetails/ProductInfoShimmerUi";

const ProductDetailsShimmerUi = () => {
  return (
    <div className="product-info-box flex flex-col gap-[1em]">
      <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-9/12 shimmer"></div>
      <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-3/12 shimmer"></div>
      <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-5/12 shimmer"></div>
      <div className="flex flex-col gap-[1em]">
        <ColorPickerShimmerUi />
        <ProductInfoShimmerUi />
      </div>
    </div>
  );
};

export default ProductDetailsShimmerUi;
