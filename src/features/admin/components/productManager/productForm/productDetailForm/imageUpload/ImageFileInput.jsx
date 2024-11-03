import InputWithLabel from "components/InputWithLabel";
import { FLEX_CENTER_COL, THUMBNAIL_STYLES } from "constants/tailwindConstants";
import { BsCloudUpload } from "react-icons/bs";
import ImagePreview from "./ImagePreview";
import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import { addUploadedProductImages } from "services/slices/adminProductSlice";

const ImageFileInput = () => {
  const { currentImageIndex, uploadedProductImages } = useStoreData();
  const dispatch = useDispatch();
  return (
    <div
      className={`border-dashed ${FLEX_CENTER_COL} gap-2 max-h-full relative`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        dispatch(addUploadedProductImages([...e.dataTransfer.files]));
      }}
    >
      <BsCloudUpload className="text-9xl text-blue-500" />
      <div className="absolute flex gap-1 overflow-scroll top-2 w-full h-3/6 ">
        {uploadedProductImages[currentImageIndex]?.map?.((file, mapIndex) => {
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
        className={" relative"}
        attributes={{
          type: "file",
          id: "file",
          accept: ".png,.jpg,.jpeg",
          multiple: true,
          required: false,
          className: "hidden",
          onChange: (e) => {
            dispatch(addUploadedProductImages([...e.target.files]));
          },
        }}
      />
    </div>
  );
};

export default ImageFileInput;
