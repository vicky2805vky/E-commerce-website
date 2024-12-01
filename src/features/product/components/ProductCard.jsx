import { useState } from "react";
import ProductCardImage from "./productCard/ProductCardImage";
import ProductCardPrice from "./productCard/ProductCardPrice";
import ProductCardOptions from "./productCard/ProductCardOptions";

const ProductCard = ({ product }) => {
  const [imageSet, setImageSet] = useState(0);

  return (
    <section
      className="[background:var(--secondary-bg-gradient)] p-10 rounded-3xl flex flex-col gap-10 scale-90 hover:scale-95 product-card"
      key={product.id}
      style={{
        transition: "transform var(--transition)",
      }}
    >
      <ProductCardImage product={product} imageSet={imageSet} />
      <ProductCardPrice product={product} />
      <ProductCardOptions product={product} setImageSet={setImageSet} />
    </section>
  );
};

export default ProductCard;
