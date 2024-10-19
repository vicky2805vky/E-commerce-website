import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { storage } from "configs/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useReduxData from "hooks/useReduxData";
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
  const { state } = useAddProductContext();
  const { imageVariations, uploadedImageFiles, formData } = state;
  const { products } = useReduxData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();

    if (!validateForm(formData, imageVariations, uploadedImageFiles))
      return false;

    try {
      const imageData = await uploadImages(
        uploadedImageFiles,
        formData,
        imageVariations,
        storage
      );

      deleteAllImages(formData);

      await saveProductToFirestore(formData, imageData);

      updateStoreProduct(formData, imageData, products, id, dispatch);

      navigate("/admin/products");
      pushNotification("Product updated successfully", true);

      deleteNonExistingImages(formData, imageData);
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
