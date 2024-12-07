import { useEffect, useRef } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

import "../stylesheets/SearchBar.css";

import useFilterProducts from "../hooks/useFilterProducts";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import runGemini from "configs/gemini";
import useGemini from "hooks/useGemini";

const SearchBar = () => {
  const inputRef = useRef();
  const location = useLocation();
  const filterProducts = useFilterProducts();
  const callGemini = useGemini();

  useEffect(() => {
    if (location.pathname !== "/") inputRef.current.value = "";
  }, [location.pathname]);
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
      <button
        className="button-4"
        onClick={async () => {
          const response = await callGemini(inputRef.current.value);
          console.log(response);
        }}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
