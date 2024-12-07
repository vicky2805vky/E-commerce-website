import ProductCardDetailsShimmerUi from "./ProductCardDetailsShimmerUi";
import ProductCardImageShimmerUi from "./ProductCardImageShimmerUi";
import { motion } from "motion/react";

const ProductCardShimmerUi = () => {
  const array = Array.from(Array(6).keys());
  return (
    <main>
      {array.map((element) => {
        return (
          <motion.section
            key={element}
            className="[background:var(--secondary-bg-gradient)] p-10 rounded-3xl flex flex-col gap-10 product-card scale-90 hover:scale-95 [transition:var(--transition)]"
          >
            <ProductCardImageShimmerUi />
            <ProductCardDetailsShimmerUi />
          </motion.section>
        );
      })}
    </main>
  );
};

export default ProductCardShimmerUi;
