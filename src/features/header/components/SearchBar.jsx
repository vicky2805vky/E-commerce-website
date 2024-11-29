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
        onChange={() => {
          filterProducts(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
