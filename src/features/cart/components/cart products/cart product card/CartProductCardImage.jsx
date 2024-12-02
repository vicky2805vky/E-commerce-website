const CartProductCardImage = ({ item }) => {
  const placeholderImageId = "image" + Math.random().toString().slice(2);
  const productImageId = "image" + Math.random().toString().slice(2);
  return (
    <div>
      <img
        id={placeholderImageId}
        className="opacity-0"
        src="/placeholder-image-500x500.svg"
        alt=""
      />
      <img
        id={productImageId}
        src={item.images.imageURLs[0]}
        alt={item.name}
        className="hidden"
        onLoad={() => {
          document.getElementById(placeholderImageId)?.remove();
          document.getElementById(productImageId)?.classList.remove("hidden");
        }}
      />
      <p>{`${item.name} (${item.images.color})`}</p>
    </div>
  );
};

export default CartProductCardImage;
