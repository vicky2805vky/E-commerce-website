import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { deletePreviewImage } from "features/admin/utils/imageFileInputUtils";
import { IoIosRemoveCircle } from "react-icons/io";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ImagePreview = ({ file, mapIndex }) => {
  const { state, dispatch } = useAddProductContext();
  const imageSrc = typeof file === "object" ? URL.createObjectURL(file) : file;
  return (
    <div className="min-w-[90%] object-cover flex bg-black/50 relative">
      <PhotoProvider>
        <PhotoView src={imageSrc}>
          <img className="cursor-zoom-in mx-auto" src={imageSrc} alt="" />
        </PhotoView>
      </PhotoProvider>
      <IoIosRemoveCircle
        className="absolute right-1 top-1 cursor-pointer -scale-125"
        onClick={() => {
          deletePreviewImage(state, dispatch, mapIndex);
        }}
      />
    </div>
  );
};

export default ImagePreview;
