import IconComponent from "components/IconComponent";
import {
  FLEX_CENTER_COL,
  THUMBNAIL_STYLES,
  TYPOGRAPHY_3XL,
} from "constants/tailwindConstants";

const CategoryFormIconPreview = ({ icon }) => {
  return (
    <div className={FLEX_CENTER_COL + " gap-3 mt-6"}>
      <a
        href="https://react-icons.github.io/react-icons/"
        target="_blank"
        className={THUMBNAIL_STYLES}
      >
        Browse Icons
      </a>
      <b>preview</b>
      <div className={TYPOGRAPHY_3XL + " border border-solid p-4 rounded-lg"}>
        <IconComponent iconName={icon} />
      </div>
    </div>
  );
};

export default CategoryFormIconPreview;
