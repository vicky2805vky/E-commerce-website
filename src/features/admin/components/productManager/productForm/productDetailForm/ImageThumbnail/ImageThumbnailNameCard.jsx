import { THUMBNAIL_STYLES } from "constants/tailwindConstants";
import useChangeThumbnailFocus from "features/admin/hooks/useChangeThumbnailFocus";
import { FaImages } from "react-icons/fa";

const ImageThumbnailNameCard = ({ imageVariant }) => {
  const changeThumbnailFocus = useChangeThumbnailFocus(imageVariant);
  return (
    <div
      className={`${THUMBNAIL_STYLES} justify-start  gap-4 text-nowrap  flex-1`}
      onClick={changeThumbnailFocus}
      style={{ backgroundColor: imageVariant.code + "55" }}
    >
      <FaImages />
      {imageVariant.color}
    </div>
  );
};

export default ImageThumbnailNameCard;
