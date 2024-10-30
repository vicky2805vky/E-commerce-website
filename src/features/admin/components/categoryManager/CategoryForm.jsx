import IconComponent from "components/IconComponent";
import InputWithLabel from "components/InputWithLabel";
import {
  FLEX_CENTER_COL,
  GLASS_MORPH_BG,
  THUMBNAIL_STYLES,
  TYPOGRAPHY_3XL,
} from "constants/tailwindConstants";

import { useState } from "react";

const CategoryForm = ({ handleSubmit, category }) => {
  const [name, setName] = useState(category?.category || "");
  const [icon, setIcon] = useState(category?.icon || "");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, name, icon);
      }}
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
      <button type="submit" className={THUMBNAIL_STYLES + " mx-auto mt-6"}>
        {window.location.href.split("/").at(-1)} Category
      </button>
    </form>
  );
};

export default CategoryForm;
