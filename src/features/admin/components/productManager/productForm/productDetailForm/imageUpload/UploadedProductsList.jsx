import { FaPlus } from "react-icons/fa";
import ImageThumbnail from "../ImageThumbnail";
import { FLEX_CENTER } from "constants/tailwindConstants";
import { useProductManagerContext } from "features/admin/services/contexts/ProductManagerContext";
import { createNewItem } from "features/admin/utils/UploadedProductsListUtils";

const UploadedProductsList = () => {
  const { state, dispatch, colorInputRef } = useProductManagerContext();

  const { productImageVariants } = state;

  return (
    <div className=" flex flex-col gap-2 max-h-full">
      <button
        type="button"
        className={`border border-solid ${FLEX_CENTER} text-nowrap p-3 rounded-lg cursor-pointer hover:bg-white/35 hover:text-black transition-colors`}
        onClick={() => {
          createNewItem(state, dispatch, colorInputRef);
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
