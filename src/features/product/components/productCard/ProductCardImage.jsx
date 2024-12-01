const ProductCardImage = ({ product, imageSet }) => {
  return (
    <>
      <p className="[font-size:var(--fs-xl)] font-bold">{product.name}</p>
      <img
        className="w-6/12 mx-auto block"
        src={product.images[imageSet].imageURLs[0]}
        alt=""
      />
    </>
  );
};
export default ProductCardImage;
