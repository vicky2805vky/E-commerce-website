import { THUMBNAIL_STYLES } from "constants/tailwindConstants";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import {
  changeThumbnailFocus,
  deleteThumbnail,
} from "features/admin/utils/thumbnailUtils";
import { FaImages, FaTrash } from "react-icons/fa";

const ImageThumbnail = ({ thisImage }) => {
  const { state, dispatch, colorRef } = useAddProductContext();

  return (
    <div
      className="flex gap-1"
      onClick={() => {
        colorRef.current.focus();
      }}
    >
      <div
        className={`${THUMBNAIL_STYLES} justify-start  gap-4 text-nowrap  flex-1`}
        onClick={() => {
          changeThumbnailFocus(state, dispatch, thisImage.id);
        }}
        style={{ backgroundColor: thisImage.code + "55" }}
      >
        <FaImages />
        {thisImage.color}
      </div>
      <div
        className={`${THUMBNAIL_STYLES} justify-center`}
        onClick={() => {
          deleteThumbnail(state, dispatch, thisImage.id);
        }}
      >
        <FaTrash />
      </div>
    </div>
  );
};

export default ImageThumbnail;
