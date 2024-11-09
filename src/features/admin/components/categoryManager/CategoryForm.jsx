import { GLASS_MORPH_BG, THUMBNAIL_STYLES } from "constants/tailwindConstants";

import { useState } from "react";
import CategoryFormInputs from "./categoryFormElements/CategoryFormInputs";
import CategoryFormIconPreview from "./categoryFormElements/CategoryFormIconPreview";
import ButtonWithURLText from "components/ui/ButtonWithURLText";

const CategoryForm = ({ handleSubmit, category }) => {
  const [name, setName] = useState(category?.name || "");
  const [icon, setIcon] = useState(category?.icon || "");
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, name, icon);
      }}
      className={GLASS_MORPH_BG + " max-w-[600px] mx-auto"}
    >
      <CategoryFormInputs
        names={["name", "icon"]}
        states={[name, icon]}
        setters={[setName, setIcon]}
      />
      <CategoryFormIconPreview icon={icon} />
      <ButtonWithURLText
        buttonText={"category"}
        className={THUMBNAIL_STYLES + " mx-auto mt-6"}
      />
    </form>
  );
};

export default CategoryForm;
