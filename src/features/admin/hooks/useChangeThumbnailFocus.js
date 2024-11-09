import useStoreData from "hooks/useStoreData";
import { useDispatch } from "react-redux";
import { setCurrentImageIndex } from "services/slices/adminProductSlice";
import { pushNotification } from "utils/pushNotification";

const useChangeThumbnailFocus = (imageVariant) => {
  const { productImageVariants, uploadedProductImages, currentImageIndex } =
    useStoreData();
  const dispatch = useDispatch();
  return () => {
    if (
      productImageVariants.length !== uploadedProductImages.length &&
      imageVariant.id !== productImageVariants[currentImageIndex].id
    ) {
      return pushNotification("please upload an image");
    }
    dispatch(setCurrentImageIndex(imageVariant.id));
  };
};

export default useChangeThumbnailFocus;
