import { storage } from "configs/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import {
  validateForm,
  uploadImages,
  saveProductToFirestore,
} from "../utils/postProductUtils";
import { pushNotification } from "utils/pushNotification";
import {
  deleteAllImages,
  deleteNonExistingImages,
  updateStoreProduct,
} from "../utils/updateProductUtils";

const useUpdateProduct = () => {
  const {
    productImageVariants,
    uploadedProductImages,
    productFormData,
    products,
  } = useStoreData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async () => {
    const productFormDataCopy = { ...productFormData };

    if (
      !validateForm(
        productFormDataCopy,
        productImageVariants,
        uploadedProductImages
      )
    )
      return false;

    try {
      const imageData = await uploadImages(
        uploadedProductImages,
        productFormDataCopy,
        productImageVariants,
        storage
      );

      deleteAllImages(productFormDataCopy);

      await saveProductToFirestore(productFormDataCopy, imageData);

      updateStoreProduct(
        productFormDataCopy,
        imageData,
        products,
        id,
        dispatch
      );

      navigate("/admin/products");
      pushNotification("Product updated successfully", true);

      deleteNonExistingImages(productFormDataCopy, imageData);
      return true;
    } catch (error) {
      console.error("Error updating product: ", error);
      pushNotification("Error updating product. Please try again.", false);
      return false;
    }
  };

  return updateProduct;
};

export default useUpdateProduct;
