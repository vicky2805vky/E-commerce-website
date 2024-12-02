import { GLASS_MORPH_BG, TYPOGRAPHY_XS } from "constants/tailwindConstants";

import UploadImages from "./productDetailForm/imageUpload/UploadImages";
import ProductDetailsForm from "./productDetailForm/ProductDetailsForm";
import useInitializeProductForm from "features/admin/hooks/useInitializeProductForm";
import useUpdateProduct from "features/admin/hooks/useUpdateProduct";
import { useDispatch } from "react-redux";
import { resetAdminProductState } from "services/slices/adminProductSlice";
import { useForm } from "react-hook-form";
import LoadingScreen from "components/LoadingScreen";

const EditProducts = () => {
  const updateProduct = useUpdateProduct();
  const dispatch = useDispatch();
  useInitializeProductForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    const updateStatus = await updateProduct();
    updateStatus && dispatch(resetAdminProductState());
  };
  return (
    <>
      {isSubmitting && <LoadingScreen loader="edit" text="updating" />}
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

export default EditProducts;
