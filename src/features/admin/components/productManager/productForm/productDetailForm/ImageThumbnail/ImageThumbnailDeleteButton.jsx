import { THUMBNAIL_STYLES } from "constants/tailwindConstants";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProductImageVariant } from "services/slices/adminProductSlice";

const ImageThumbnailDeleteButton = ({ imageVariant }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${THUMBNAIL_STYLES} justify-center`}
      onClick={() => {
        dispatch(deleteProductImageVariant(imageVariant.id));
      }}
    >
      <FaTrash />
    </div>
  );
};
export default ImageThumbnailDeleteButton;
