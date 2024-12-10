import RedirectPage from "features/redirect/RedirectPage";
import ProductCard from "./components/ProductCard";

import "./stylesheets/ProductPage.css";

import useStoreData from "hooks/useStoreData";
import ProductCardShimmerUi from "./components/ui/shimmer/productCard/ProductCardShimmerUi";

const ProductPage = () => {
  const { filteredProducts, products, searchStatus } = useStoreData();
  if (products === null || filteredProducts === null) {
    return <ProductCardShimmerUi />;
  } else if (searchStatus === "ai") {
    return <RedirectPage redirectionType={"aiSearch"} />;
  } else if (filteredProducts.length === 0) {
    return <RedirectPage redirectionType={"noResult"} />;
  }
  return (
    <main>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </main>
  );
};

export default ProductPage;
