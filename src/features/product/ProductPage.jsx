import RedirectPage from "features/redirect/RedirectPage";
import ProductCard from "./components/ProductCard";

import "./stylesheets/ProductPage.css";

import useStoreData from "hooks/useStoreData";
import ProductCardShimmerUi from "./components/ui/shimmer/productCard/ProductCardShimmerUi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ProductPage = () => {
  const { filteredProducts, products } = useStoreData();
  if (products === null || filteredProducts === null) {
    return <ProductCardShimmerUi />;
  } else if (filteredProducts.length === 0) {
    return <RedirectPage redirectionType={"noResult"} />;
  }
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "fit-content" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full h-fit overflow-hidden mt-2 "
      >
        <Link
          to={"/search/ai"}
          className="button-3 w-fit mx-auto my-2 flex gap-3"
        >
          <span>ai powered search</span>
          <img src="/chatgpt.svg" className="w-[var(--fs-l)]" alt="" />
        </Link>
      </motion.div>
      <main>
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </main>
    </>
  );
};

export default ProductPage;
