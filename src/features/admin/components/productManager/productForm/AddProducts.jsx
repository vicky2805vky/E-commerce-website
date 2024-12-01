import UploadImages from "./productDetailForm/imageUpload/UploadImages";
import ProductDetailsForm from "./productDetailForm/ProductDetailsForm";
import { GLASS_MORPH_BG, TYPOGRAPHY_XS } from "constants/tailwindConstants";
import usePostProduct from "features/admin/hooks/usePostProduct";
import useInitializeProductForm from "features/admin/hooks/useInitializeProductForm";
import { useDispatch } from "react-redux";
import { resetAdminProductState } from "services/slices/adminProductSlice";
import { useForm } from "react-hook-form";
import LoadingScreen from "components/LoadingScreen";

const AddProducts = () => {
  const postProduct = usePostProduct();
  const dispatch = useDispatch();
  useInitializeProductForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    const postStatus = await postProduct();
    postStatus && dispatch(resetAdminProductState());
  };

  return (
    <>
      {isSubmitting && <LoadingScreen loader="send" text="posting" />}
      <form
        className={`w-full flex h-full gap-4 p-5 flex-wrap overflow-scroll ${TYPOGRAPHY_XS}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploadImages style={GLASS_MORPH_BG} />
        <ProductDetailsForm style={GLASS_MORPH_BG} />
      </form>
    </>
  );
};

export default AddProducts;
