import { FaPlus } from "react-icons/fa";
import ImageThumbnail from "../ImageThumbnail";
import { FLEX_CENTER } from "constants/tailwindConstants";
import { useDispatch } from "react-redux";
import useStoreData from "hooks/useStoreData";
import { addProductImageVariants } from "services/slices/adminProductSlice";
import { pushNotification } from "utils/pushNotification";
import { focusColorNameInput } from "features/admin/utils/thumbnailUtils";

const UploadedProductsList = () => {
  const { productImageVariants, uploadedProductImages } = useStoreData();

  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col gap-2 max-h-full">
      <button
        type="button"
        className={`border border-solid ${FLEX_CENTER} text-nowrap p-3 rounded-lg cursor-pointer hover:bg-white/35 hover:text-black transition-colors`}
        onClick={() => {
          if (productImageVariants.length !== uploadedProductImages.length) {
            return pushNotification("please upload an image");
          }
          dispatch(addProductImageVariants());
          focusColorNameInput();
        }}
      >
        add variation&nbsp;
        <FaPlus />
      </button>
      <div className="flex flex-col gap-2 overflow-scroll max-h-[70%]">
        {productImageVariants.map((variation) => {
          return (
            variation && (
              <ImageThumbnail key={variation.id} thisImage={variation} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default UploadedProductsList;
