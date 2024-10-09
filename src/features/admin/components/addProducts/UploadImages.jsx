import ImageSetColorInputs from "./imageUpload/ImageSetColorInputs";
import ImageFileInput from "./imageUpload/ImageFileInput";
import UploadedList from "./imageUpload/UploadedList";

const UploadImages = ({ style }) => {
  return (
    <div className={style + "max-h-full overflow-x-hidden overflow-y-auto"}>
      <ImageSetColorInputs />
      <div className="flex flex-wrap p-1  h-5/6 [&>*]:flex-1 gap-3 [&>*]:p-2">
        <ImageFileInput />
        <UploadedList />
      </div>
    </div>
  );
};

export default UploadImages;
