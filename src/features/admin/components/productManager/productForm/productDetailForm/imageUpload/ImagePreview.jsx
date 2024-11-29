import { IoIosRemoveCircle } from "react-icons/io";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useDispatch } from "react-redux";
import { deleteUploadedProductImage } from "services/slices/adminProductSlice";

const ImagePreview = ({ file, mapIndex }) => {
  const dispatch = useDispatch();
  const imageSrc = typeof file === "object" ? URL.createObjectURL(file) : file;
  return (
    <div
      className="min-w-full object-cover flex bg-black/50 relative"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <PhotoProvider>
        <PhotoView src={imageSrc}>
          <img className="cursor-zoom-in mx-auto" src={imageSrc} alt="" />
        </PhotoView>
      </PhotoProvider>
      <IoIosRemoveCircle
        className="absolute right-1 top-1 cursor-pointer -scale-125"
        onClick={() => {
          dispatch(deleteUploadedProductImage(mapIndex));
        }}
      />
    </div>
  );
};

export default ImagePreview;
