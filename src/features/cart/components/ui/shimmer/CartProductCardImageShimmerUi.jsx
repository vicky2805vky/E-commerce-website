const CartProductCardImageShimmerUi = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-gray-300 mx-auto rounded-lg w-6/12 shimmer">
        <img
          src="/placeholder-image-500x500.svg"
          alt=""
          className="opacity-0"
        />
      </div>
      <div className="h-[var(--fs-s)] bg-gray-300 rounded-full shimmer"></div>
      <p className="shimmer h-[var(--fs-s)] w-3/6 rounded-full"></p>
    </div>
  );
};

export default CartProductCardImageShimmerUi;
