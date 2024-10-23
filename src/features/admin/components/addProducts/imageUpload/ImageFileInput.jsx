import InputWithLabel from "components/InputWithLabel";
import { FLEX_CENTER_COL, THUMBNAIL_STYLES } from "constants/tailwindConstants";
import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { BsCloudUpload } from "react-icons/bs";
import ImagePreview from "./ImagePreview";
import { displayUploadedImage } from "features/admin/utils/imageFileInputUtils";

const ImageFileInput = () => {
  const { state, dispatch } = useAddProductContext();
  const { currentImageSet, uploadedImageFiles } = state;
  return (
    <div
      className={`border-dashed ${FLEX_CENTER_COL} gap-2 max-h-full relative`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        displayUploadedImage(e.dataTransfer.files, state, dispatch);
      }}
    >
      <BsCloudUpload className="text-9xl text-blue-500" />
      <div className="absolute flex gap-1 overflow-scroll top-2 w-full h-3/6 ">
        {uploadedImageFiles[currentImageSet]?.map?.((file, mapIndex) => {
          return (
            <ImagePreview key={mapIndex} file={file} mapIndex={mapIndex} />
          );
        })}
      </div>

      <p>Drag and Drop or</p>
      <label htmlFor="file" className={THUMBNAIL_STYLES}>
        upload here
      </label>

      <InputWithLabel
        type="file"
        label={""}
        optionalParameters={{
          onChange: (e) => {
            displayUploadedImage(e.target.files, state, dispatch);
          },
        }}
      />
    </div>
  );
};

export default ImageFileInput;
