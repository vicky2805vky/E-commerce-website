import IconComponent from "components/IconComponent";
import InputWithLabel from "components/InputWithLabel";
import {
  FLEX_CENTER_COL,
  GLASS_MORPH_BG,
  THUMBNAIL_STYLES,
  TYPOGRAPHY_3XL,
} from "constants/tailwindConstants";
import usePostCategory from "features/admin/hooks/usePostCategory";
import { useState } from "react";

const CategoryForm = () => {
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [library, setLibrary] = useState();
  const postCategory = usePostCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      category: name,
      icon,
      library,
    };
    postCategory(e, data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={GLASS_MORPH_BG + " max-w-[600px] mx-auto"}
    >
      <InputWithLabel
        label={"category"}
        optionalParameters={{
          value: name,
          onChange: (e) => {
            setName(e.target.value);
          },
        }}
      />
      <InputWithLabel
        label={"icon"}
        optionalParameters={{
          value: icon,
          onChange: (e) => {
            setIcon(e.target.value);
          },
        }}
      />
      <InputWithLabel
        label={"icon library"}
        optionalParameters={{
          value: library,
          onChange: (e) => {
            setLibrary(e.target.value);
          },
        }}
      />
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
          <IconComponent iconName={icon} library={library} />
        </div>
      </div>
      <button type="submit" className={THUMBNAIL_STYLES + " mx-auto mt-6"}>
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
