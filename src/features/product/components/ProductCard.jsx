import { useState } from "react";
import ProductCardImage from "./productCard/ProductCardImage";
import ProductCardPrice from "./productCard/ProductCardPrice";
import ProductCardOptions from "./productCard/ProductCardOptions";
import { motion } from "motion/react";

const ProductCard = ({ product }) => {
  const [imageSet, setImageSet] = useState(0);

  return (
    <motion.section
      initial={{
        y: 200,
        opacity: 0,
        scale: 0.9,
        rotate: 45,
      }}
      whileInView={{
        rotate: 0,
        y: 0,
        opacity: 1,
      }}
      whileHover={{
        y: 0,
        scale: 0.95,
      }}
      whileTap={{
        scale: 0.85,
      }}
      transition={{ type: "spring", duration: 0.5 }}
      viewport={{ once: true }}
      className="[background:var(--secondary-bg-gradient)] p-10 rounded-3xl flex flex-col gap-10 scale-90 hover:scale-95"
      key={product.id}
    >
      <ProductCardImage product={product} imageSet={imageSet} />
      <ProductCardPrice product={product} />
      <ProductCardOptions product={product} setImageSet={setImageSet} />
    </motion.section>
  );
};

export default ProductCard;
