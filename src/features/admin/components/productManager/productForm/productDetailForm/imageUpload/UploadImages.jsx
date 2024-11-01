import ImageColorInputs from "./ImageColorInputs";
import ImageFileInput from "./ImageFileInput";
import UploadedProductsList from "./UploadedProductsList";

const UploadImages = ({ style }) => {
  return (
    <div className={style + "max-h-full overflow-x-hidden overflow-y-auto"}>
      <ImageColorInputs />
      <div className="flex flex-wrap p-1  h-5/6 [&>*]:flex-1 gap-3 [&>*]:p-2">
        <ImageFileInput />
        <UploadedProductsList />
      </div>
    </div>
  );
};

export default UploadImages;
