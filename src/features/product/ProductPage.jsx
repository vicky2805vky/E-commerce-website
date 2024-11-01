import ProductCard from "./components/ProductCard";

import "./stylesheets/ProductPage.css";

import useStoreData from "hooks/useStoreData";

const ProductPage = () => {
  const { filteredProducts } = useStoreData();
  return (
    <main>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </main>
  );
};

export default ProductPage;
