import UploadImages from "./UploadImages";
import ProductDetailsForm from "./ProductDetailsForm";
import {
  ADD_PRODUCTS_CHILDREN,
  TYPOGRAPHY_XS,
} from "constants/tailwindConstants";
import usePostProduct from "features/admin/hooks/usePostProduct";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { addProductActions } from "features/admin/services/reducers/addProductReducer";
import useInitForm from "features/admin/hooks/useInitForm";

const AddProducts = () => {
  const { dispatch } = useAddProductContext();
  const postProduct = usePostProduct();
  useInitForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={async (e) => {
        const postStatus = await postProduct(e);
        postStatus && dispatch({ type: addProductActions.resetState });
      }}
    >
      <UploadImages style={ADD_PRODUCTS_CHILDREN} />
      <ProductDetailsForm style={ADD_PRODUCTS_CHILDREN} />
    </form>
  );
};

export default AddProducts;
