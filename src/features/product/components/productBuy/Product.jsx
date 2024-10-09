import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

import "../../stylesheets/Product.css";

import { useParams } from "react-router-dom";
import useReduxData from "hooks/useReduxData";

import { filterProductById } from "../../utils/filterProductById";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const { products } = useReduxData();

  const product = filterProductById(products, id);

  const [imageSet, setImageSet] = useState(0);

  if (product) {
    return (
      <div className="product-buy-page">
        <ProductImage product={product} imageSet={imageSet} />
        <ProductDetails product={product} setImageSet={setImageSet} />
      </div>
    );
  }
};
export default Product;
