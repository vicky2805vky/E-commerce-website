import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
import { storage } from "configs/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import {
  validateForm,
  uploadImages,
  saveProductToFirestore,
  addProductToRedux,
} from "../utils/postProductUtils";
import { pushNotification } from "utils/pushNotification";

const usePostProduct = () => {
  const { state } = useProductManagerContext();
  const { productImageVariants, uploadedProductImages, productFormData } =
    state;
  const { products } = useStoreData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postProduct = async (e) => {
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
      await saveProductToFirestore(productFormData, imageData);
      addProductToRedux(dispatch, products, productFormData, imageData);

      navigate("/admin/products");
      pushNotification("Product added successfully", true);
      return true;
    } catch (error) {
      console.error("Error adding product:", error);
      pushNotification("Error adding product. Please try again.", false);
    }
  };

  return postProduct;
};

export default usePostProduct;
