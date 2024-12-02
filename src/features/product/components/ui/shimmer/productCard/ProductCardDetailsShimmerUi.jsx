const ProductCardDetailsShimmerUi = () => {
  return (
    <>
      <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-6/12 shimmer"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded bg-gray-300 shimmer"></div>
          <div className="w-5 h-5 rounded bg-gray-300 shimmer"></div>
          <div className="w-5 h-5 rounded bg-gray-300 shimmer"></div>
        </div>
        <div className="h-8 w-24 bg-gray-300 rounded-lg shimmer"></div>
      </div>
    </>
  );
};

export default ProductCardDetailsShimmerUi;
