import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { storage } from "configs/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useReduxData from "hooks/useReduxData";
import {
  validateForm,
  uploadImages,
  saveProductToFirestore,
  addProductToRedux,
} from "../utils/postImageUtils";
import { pushNotification } from "utils/pushNotification";

const usePostProduct = () => {
  const { state } = useAddProductContext();
  const { imageVariations, uploadedImageFiles, formData } = state;
  const { products } = useReduxData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postProduct = async (e) => {
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
      await saveProductToFirestore(formData, imageData);
      addProductToRedux(dispatch, products, formData, imageData);

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
