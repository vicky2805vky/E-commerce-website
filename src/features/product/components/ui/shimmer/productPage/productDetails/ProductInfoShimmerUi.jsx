const ProductInfoShimmerUi = () => {
  return (
    <div className="product-info">
      <div className="h-[var(--fs-m)] bg-gray-300 rounded-full w-3/12 shimmer mb-[1em]"></div>
      <div className="details flex flex-col gap-[1em]">
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-9/12 shimmer"></div>
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-5/12 shimmer"></div>
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-9/12 shimmer"></div>
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-5/12 shimmer"></div>
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-9/12 shimmer"></div>
        <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-5/12 shimmer"></div>
      </div>
    </div>
  );
};

export default ProductInfoShimmerUi;
