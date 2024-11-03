import { THUMBNAIL_STYLES } from "constants/tailwindConstants";
import useStoreData from "hooks/useStoreData";
import { FaImages, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteProductImageVariant,
  setCurrentImageIndex,
} from "services/slices/adminProductSlice";
import { pushNotification } from "utils/pushNotification";

const ImageThumbnail = ({ thisImage }) => {
  const { productImageVariants, uploadedProductImages, currentImageIndex } =
    useStoreData();
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1">
      <div
        className={`${THUMBNAIL_STYLES} justify-start  gap-4 text-nowrap  flex-1`}
        onClick={() => {
          if (
            productImageVariants.length !== uploadedProductImages.length &&
            thisImage.id !== productImageVariants[currentImageIndex].id
          ) {
            return pushNotification("please upload an image");
          }
          dispatch(setCurrentImageIndex(thisImage.id));
        }}
        style={{ backgroundColor: thisImage.code + "55" }}
      >
        <FaImages />
        {thisImage.color}
      </div>
      <div
        className={`${THUMBNAIL_STYLES} justify-center`}
        onClick={() => {
          dispatch(deleteProductImageVariant(thisImage.id));
        }}
      >
        <FaTrash />
      </div>
    </div>
  );
};

export default ImageThumbnail;
