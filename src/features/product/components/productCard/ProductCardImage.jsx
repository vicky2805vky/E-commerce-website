const ProductCardImage = ({ product }) => {
  return (
    <div className="image-box flex justify-center items-center">
      <img src={product.images[0].imageURLs[0]} alt={product.name + "image"} />
    </div>
  );
};
export default ProductCardImage;
