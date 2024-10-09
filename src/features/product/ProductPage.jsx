import ProductCard from "./components/ProductCard";

import "./stylesheets/ProductPage.css";

import useReduxData from "hooks/useReduxData";

const ProductPage = () => {
  const { filteredProducts } = useReduxData();
  return (
    <main>
      {filteredProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </main>
  );
};

export default ProductPage;
