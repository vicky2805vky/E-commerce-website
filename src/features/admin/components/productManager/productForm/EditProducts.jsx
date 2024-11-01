import { GLASS_MORPH_BG, TYPOGRAPHY_XS } from "constants/tailwindConstants";
import React from "react";
import UploadImages from "./productDetailForm/imageUpload/UploadImages";
import ProductDetailsForm from "./productDetailForm/ProductDetailsForm";
import useInitializeProductForm from "features/admin/hooks/useInitializeProductForm";
import useUpdateProduct from "features/admin/hooks/useUpdateProduct";
import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
import { productManagerActions } from "features/admin/services/reducers/productManagerReducer";

const EditProducts = () => {
  const { dispatch } = useProductManagerContext();
  const updateProduct = useUpdateProduct();
  useInitializeProductForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={async (e) => {
        const updateStatus = await updateProduct(e);
        updateStatus && dispatch({ type: productManagerActions.resetState });
      }}
    >
      <UploadImages style={GLASS_MORPH_BG} />
      <ProductDetailsForm style={GLASS_MORPH_BG} />
    </form>
  );
};

export default EditProducts;
