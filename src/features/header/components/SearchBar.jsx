import { useEffect, useRef } from "react";

import "../stylesheets/SearchBar.css";

import { useForm } from "react-hook-form";

import useAiSearch from "../hooks/useAiSearch";
import useSetFilteredProduct from "../hooks/useSetFilteredProduct";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const searchValue = watch("search");

  const searchWithAi = useAiSearch();

  useSetFilteredProduct(searchValue, setValue);

  return (
    <form className="search-box" onSubmit={handleSubmit(searchWithAi)}>
      <input
        type="text"
        placeholder="search..."
        readOnly={isSubmitting}
        {...register("search")}
      />
      <button type="submit" className="button-4" disabled={isSubmitting}>
        ai
      </button>
    </form>
  );
};

export default SearchBar;
