import {
  ADD_PRODUCTS_CHILDREN,
  TYPOGRAPHY_XS,
} from "constants/tailwindConstants";
import React from "react";
import UploadImages from "./UploadImages";
import ProductDetailsForm from "./ProductDetailsForm";
import useInitForm from "features/admin/hooks/useInitForm";

const EditProducts = () => {
  useInitForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
    >
      <UploadImages style={ADD_PRODUCTS_CHILDREN} />
      <ProductDetailsForm style={ADD_PRODUCTS_CHILDREN} />
    </form>
  );
};

export default EditProducts;
