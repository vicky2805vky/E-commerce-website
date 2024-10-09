import UploadImages from "./UploadImages";
import ProductDetailsForm from "./ProductDetailsForm";
import {
  ADD_PRODUCTS_CHILDREN,
  TYPOGRAPHY_XS,
} from "constants/tailwindConstants";
import usePostProduct from "features/admin/hooks/usePostProduct";
import { useRef } from "react";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { addProductActions } from "features/admin/services/reducers/addProductReducer";

const AddProducts = () => {
  const formRef = useRef();

  const { dispatch } = useAddProductContext();

  const postProduct = usePostProduct();

  const handleSubmit = (e) => {
    postProduct(e);
    formRef.current.reset();
    dispatch({ type: addProductActions.resetState });
  };

  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <UploadImages style={ADD_PRODUCTS_CHILDREN} />
      <ProductDetailsForm style={ADD_PRODUCTS_CHILDREN} />
    </form>
  );
};

export default AddProducts;
