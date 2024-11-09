import ImageThumbnailDeleteButton from "./ImageThumbnail/ImageThumbnailDeleteButton";
import ImageThumbnailNameCard from "./ImageThumbnail/ImageThumbnailNameCard";

const ImageThumbnail = ({ thisImage }) => {
  return (
    <div className="flex gap-1">
      <ImageThumbnailNameCard imageVariant={thisImage} />
      <ImageThumbnailDeleteButton imageVariant={thisImage} />
    </div>
  );
};

export default ImageThumbnail;
