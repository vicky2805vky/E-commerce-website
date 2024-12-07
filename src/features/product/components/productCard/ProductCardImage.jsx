const ProductCardImage = ({ product, imageSet }) => {
  const placeholderImageId = "image" + Math.random().toString().slice(2);
  const productImageId = "image" + Math.random().toString().slice(2);
  return (
    <>
      <p className="[font-size:var(--fs-xl)] font-bold">{product.name}</p>
      <img
        id={placeholderImageId}
        className="w-6/12 mx-auto block opacity-0"
        src="/placeholder-image-500x500.svg"
        alt=""
      />
      <img
        id={productImageId}
        className="w-6/12 mx-auto hidden"
        src={product.images[imageSet].imageURLs[0]}
        alt=""
        onLoad={() => {
          document.getElementById(placeholderImageId)?.remove();
          document.getElementById(productImageId).classList.remove("hidden");
        }}
      />
    </>
  );
};
export default ProductCardImage;
