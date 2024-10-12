import { useAddProductContext } from "features/admin/services/contexts/AddProductContext";
import { deletePreviewImage } from "features/admin/utils/imageFileInputUtils";
import { FaRegCircleXmark } from "react-icons/fa6";

const ImagePreview = ({ file, mapIndex }) => {
  const { state, dispatch } = useAddProductContext();
  return (
    <div className="min-w-[70%] flex bg-black/50 relative object-cover">
      <img
        src={typeof file === "object" ? URL.createObjectURL(file) : file}
        alt=""
        className=" mx-auto "
      />
      <FaRegCircleXmark
        className="absolute right-1 top-1 cursor-pointer"
        onClick={() => {
          deletePreviewImage(state, dispatch, mapIndex);
        }}
      />
    </div>
  );
};

export default ImagePreview;
