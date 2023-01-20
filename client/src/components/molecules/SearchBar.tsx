import React from "react";
import { FaSearch } from "react-icons/fa";
import Input from "../atoms/Input";

export const SearchBar = () => {
  return (
    <>
      <FaSearch
        size={20}
        className="relative left-6 hidden text-white sm:block"
      />
      <input
        type="text"
        className="hidden w-4/6 rounded-sm bg-stone-700 px-8 text-white sm:block"
        placeholder="Search..."
      />
    </>
  );
};
