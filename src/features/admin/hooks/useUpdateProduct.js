import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
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
  const { state } = useProductManagerContext();
  const { productImageVariants, uploadedProductImages, productFormData } =
    state;
  const { products } = useStoreData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();

    if (
      !validateForm(
        productFormData,
        productImageVariants,
        uploadedProductImages
      )
    )
      return false;

    try {
      const imageData = await uploadImages(
        uploadedProductImages,
        productFormData,
        productImageVariants,
        storage
      );

      deleteAllImages(productFormData);

      await saveProductToFirestore(productFormData, imageData);

      updateStoreProduct(productFormData, imageData, products, id, dispatch);

      navigate("/admin/products");
      pushNotification("Product updated successfully", true);

      deleteNonExistingImages(productFormData, imageData);
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
