import RedirectPage from "features/redirect/RedirectPage";
import ProductCard from "./components/ProductCard";

import "./stylesheets/ProductPage.css";

import useStoreData from "hooks/useStoreData";

const ProductPage = () => {
  const { filteredProducts } = useStoreData();
  if (filteredProducts.length === 0) {
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
