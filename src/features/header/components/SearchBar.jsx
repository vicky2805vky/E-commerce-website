import { useRef } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

import "../stylesheets/SearchBar.css";

import useFilterProducts from "../hooks/useFilterProducts";

const SearchBar = () => {
  const inputRef = useRef();

  const filterProducts = useFilterProducts();

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        name="search box"
        placeholder="search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            filterProducts(inputRef.current.value);
          }
        }}
      />
      <button
        className="flex justify-center align-middle button-4"
        onClick={() => {
          filterProducts(inputRef.current.value);
        }}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBar;
