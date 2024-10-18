import {
  ADD_PRODUCTS_CHILDREN,
  TYPOGRAPHY_XS,
} from "constants/tailwindConstants";
import React from "react";
import UploadImages from "./UploadImages";
import ProductDetailsForm from "./ProductDetailsForm";
import useInitForm from "features/admin/hooks/useInitForm";
import useUpdateProduct from "features/admin/hooks/useUpdateProduct";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { addProductActions } from "features/admin/services/reducers/addProductReducer";

const EditProducts = () => {
  const { dispatch } = useAddProductContext();
  const updateProduct = useUpdateProduct();
  useInitForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={async (e) => {
        const updateStatus = await updateProduct(e);
        updateStatus && dispatch({ type: addProductActions.resetState });
      }}
    >
      <UploadImages style={ADD_PRODUCTS_CHILDREN} />
      <ProductDetailsForm style={ADD_PRODUCTS_CHILDREN} />
    </form>
  );
};

export default EditProducts;
