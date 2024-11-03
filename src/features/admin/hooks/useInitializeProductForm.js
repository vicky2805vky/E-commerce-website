import { useParams } from "react-router-dom";
import { findProductById } from "features/product/utils/findProductById";
import useStoreData from "hooks/useStoreData";
import { useEffect } from "react";
import {
  resetAdminProductState,
  setAdminProductState,
} from "services/slices/adminProductSlice";
import { useDispatch } from "react-redux";

function useInitializeProductForm() {
  const { products } = useStoreData();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) {
      dispatch(resetAdminProductState());
      return;
    }
    const filteredProduct = findProductById(products, id);

    if (filteredProduct) {
      const productFormData = {
        name: filteredProduct.name,
        category: filteredProduct.category,
        description: filteredProduct.description.join("\n\n"),
        mrp: filteredProduct.mrp,
        price: filteredProduct.price,
        rating: filteredProduct.rating,
      };
      const productImageVariants = filteredProduct.images.map(
        (imageDetails) => {
          const newImageDetails = { ...imageDetails };
          newImageDetails.imageURLs && delete newImageDetails.imageURLs;
          return newImageDetails;
        }
      );
      const uploadedProductImages = filteredProduct.images.map(
        (image) => image.imageURLs
      );

      dispatch(
        setAdminProductState({
          productFormData,
          productImageVariants,
          uploadedProductImages,
        })
      );
    }
  }, [id]);
}

export default useInitializeProductForm;
