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
  const {
    productImageVariants,
    uploadedProductImages,
    productFormData,
    products,
  } = useStoreData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postProduct = async (e) => {
    e.preventDefault();

    const productFormDataCopy = { ...productFormData };
    const productImageVariantsCopy = [...productImageVariants];
    const uploadedProductImagesCopy = [...uploadedProductImages];

    if (
      !validateForm(
        productFormDataCopy,
        productImageVariantsCopy,
        uploadedProductImagesCopy
      )
    )
      return false;

    try {
      const imageData = await uploadImages(
        uploadedProductImagesCopy,
        productFormDataCopy,
        productImageVariantsCopy,
        storage
      );
      await saveProductToFirestore(productFormDataCopy, imageData);
      addProductToRedux(dispatch, products, productFormDataCopy, imageData);

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
