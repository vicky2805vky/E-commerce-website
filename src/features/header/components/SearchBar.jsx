import "../stylesheets/SearchBar.css";

import { useForm } from "react-hook-form";

import useAiSearch from "../hooks/useAiSearch";
import useSetFilteredProduct from "../hooks/useSetFilteredProduct";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const searchValue = watch("search");

  const searchWithAi = useAiSearch();

  useSetFilteredProduct(searchValue);

  return (
    <form
      className="search-box flex items-center"
      onSubmit={handleSubmit(searchWithAi)}
    >
      <input
        type="text"
        id="search"
        placeholder="search..."
        readOnly={isSubmitting}
        {...register("search")}
        required
      />
      <button type="submit" className="button-4" disabled={isSubmitting}>
        ai
      </button>
    </form>
  );
};

export default SearchBar;
