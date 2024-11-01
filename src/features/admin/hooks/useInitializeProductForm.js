import { useParams } from "react-router-dom";
import { useProductManagerContext } from "../services/contexts/ProductManagerContext";
import { findProductById } from "features/product/utils/findProductById";
import useStoreData from "hooks/useStoreData";
import { useEffect } from "react";
import { productManagerActions } from "../services/reducers/productManagerReducer";

function useInitializeProductForm() {
  const { dispatch } = useProductManagerContext();
  const { products } = useStoreData();
  const { id } = useParams();
  useEffect(() => {
    if (!id) {
      dispatch({ type: productManagerActions.resetState });
      return;
    }
    const filteredProduct = findProductById(products, id);

    if (filteredProduct) {
      const initialFormData = {
        name: filteredProduct.name,
        category: filteredProduct.category,
        description: filteredProduct.description.join("\n\n"),
        mrp: filteredProduct.mrp,
        price: filteredProduct.price,
        rating: filteredProduct.rating,
      };
      const initialImageVariations = filteredProduct.images.map(
        (imageDetails) => {
          const newImageDetails = { ...imageDetails };
          newImageDetails.imageURLs && delete newImageDetails.imageURLs;
          return newImageDetails;
        }
      );
      const initialImages = filteredProduct.images.map(
        (image) => image.imageURLs
      );
      dispatch({
        type: productManagerActions.setFormData,
        payload: initialFormData,
      });
      dispatch({
        type: productManagerActions.setImageVariations,
        payload: initialImageVariations,
      });
      dispatch({
        type: productManagerActions.setUploadedImages,
        payload: initialImages,
      });
    }
  }, [id]);
}

export default useInitializeProductForm;
