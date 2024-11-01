import UploadImages from "./productDetailForm/imageUpload/UploadImages";
import ProductDetailsForm from "./productDetailForm/ProductDetailsForm";
import { GLASS_MORPH_BG, TYPOGRAPHY_XS } from "constants/tailwindConstants";
import usePostProduct from "features/admin/hooks/usePostProduct";
import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
import { productManagerActions } from "features/admin/services/reducers/productManagerReducer";
import useInitializeProductForm from "features/admin/hooks/useInitializeProductForm";

const AddProducts = () => {
  const { dispatch } = useProductManagerContext();
  const postProduct = usePostProduct();
  useInitializeProductForm();
  return (
    <form
      className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
      onSubmit={async (e) => {
        const postStatus = await postProduct(e);
        postStatus && dispatch({ type: productManagerActions.resetState });
      }}
    >
      <UploadImages style={GLASS_MORPH_BG} />
      <ProductDetailsForm style={GLASS_MORPH_BG} />
    </form>
  );
};

export default AddProducts;
