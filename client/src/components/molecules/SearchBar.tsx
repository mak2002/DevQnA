import React from "react";
import { FaSearch } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";
import Input from "../atoms/Input";

export const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };

  return (
    <>
      <FaSearch
        size={20}
        className="relative left-6 hidden cursor-pointer text-white sm:block"
        onClick={() => handleSearch()}
      />
      <input
        type="text"
        className="hidden w-4/6 rounded-sm bg-stone-700 px-8 text-white sm:block"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
