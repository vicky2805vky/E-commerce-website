import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

import "../../stylesheets/Product.css";

import { useParams } from "react-router-dom";
import useStoreData from "hooks/useStoreData";

import { findProductById } from "../../utils/findProductById";
import { useState } from "react";
import ProductShimmerUi from "../ui/shimmer/productPage/ProductShimmerUi";

const Product = () => {
  const { id } = useParams();
  const { products } = useStoreData();

  const product = findProductById(products, id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (products === null) return <ProductShimmerUi />;

  if (product) {
    return (
      <div className="product-buy-page">
        <ProductImage product={product} currentImageIndex={currentImageIndex} />
        <ProductDetails
          product={product}
          setCurrentImageIndex={setCurrentImageIndex}
          currentImageIndex={currentImageIndex}
        />
      </div>
    );
  }
};
export default Product;
