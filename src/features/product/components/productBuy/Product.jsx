import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

import "../../stylesheets/Product.css";

import { useParams } from "react-router-dom";
import useStoreData from "hooks/useStoreData";

import { findProductById } from "../../utils/findProductById";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const { products } = useStoreData();

  const product = findProductById(products, id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (product) {
    return (
      <div className="product-buy-page">
        <ProductImage product={product} currentImageIndex={currentImageIndex} />
        <ProductDetails
          product={product}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </div>
    );
  }
};
export default Product;
