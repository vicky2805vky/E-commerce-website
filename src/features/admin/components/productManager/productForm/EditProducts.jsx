import { GLASS_MORPH_BG, TYPOGRAPHY_XS } from "constants/tailwindConstants";
import React from "react";
import UploadImages from "./productDetailForm/imageUpload/UploadImages";
import ProductDetailsForm from "./productDetailForm/ProductDetailsForm";
import useInitializeProductForm from "features/admin/hooks/useInitializeProductForm";
import useUpdateProduct from "features/admin/hooks/useUpdateProduct";
import { useDispatch } from "react-redux";
import { resetAdminProductState } from "services/slices/adminProductSlice";

const EditProducts = () => {
  const updateProduct = useUpdateProduct();
  const dispatch = useDispatch();
  useInitializeProductForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={async (e) => {
        const updateStatus = await updateProduct(e);
        // updateStatus && dispatch(resetAdminProductState());
      }}
    >
      <UploadImages style={GLASS_MORPH_BG} />
      <ProductDetailsForm style={GLASS_MORPH_BG} />
    </form>
  );
};

export default EditProducts;
