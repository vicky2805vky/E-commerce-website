import { useParams } from "react-router-dom";
import { useAddProductContext } from "../services/contexts/AddProductContext";
import { filterProductById } from "features/product/utils/filterProductById";
import useReduxData from "hooks/useReduxData";
import { useEffect } from "react";
import { addProductActions } from "../services/reducers/addProductReducer";

function useInitForm() {
  const { id } = useParams();
  const { dispatch } = useAddProductContext();
  const { products } = useReduxData();

  useEffect(() => {
    const filteredProduct = filterProductById(products, id);

    if (filteredProduct) {
      const initialFormData = {
        name: filteredProduct.name,
        category: filteredProduct.category,
        description: filteredProduct.description.join("\n\n"),
        mrp: filteredProduct.mrp,
        price: filteredProduct.price,
        rating: filteredProduct.rating,
      };
      const initialImageVariations = filteredProduct.images;
      const initialImages = filteredProduct.images.map(
        (image) => image.imageURLs
      );
      dispatch({
        type: addProductActions.setFormData,
        payload: initialFormData,
      });
      dispatch({
        type: addProductActions.setImageVariations,
        payload: initialImageVariations,
      });
      dispatch({
        type: addProductActions.setUploadedImages,
        payload: initialImages,
      });
    }
  }, [id, products]);
}

export default useInitForm;