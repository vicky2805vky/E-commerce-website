const ProductCardImageShimmerUi = () => {
  return (
    <>
      <div className="h-[var(--fs-xl)] bg-gray-300 rounded-full w-8/12 shimmer"></div>

      <div className="bg-gray-300 mx-auto rounded-lg w-6/12 shimmer">
        <img
          src="/placeholder-image-500x500.svg"
          alt=""
          className="opacity-0"
        />
      </div>
    </>
  );
};

export default ProductCardImageShimmerUi;
