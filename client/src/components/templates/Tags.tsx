import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { tagsInfo } from "../../utils/Data";
import { Heading } from "../atoms/Heading";
import { LinkButton } from "../atoms/LinkButton";
import { SearchBar } from "../molecules/SearchBar";

export default function Tags() {
  function handleSearch(): void {
    throw new Error("Function not implemented.");
  }

  const [search, setSearch] = React.useState("");

  return (
    <div className="min-h-screen w-full bg-neutral-800 pt-14 text-white sm:border-l-2">
      <Heading type="h2" text={"Tags"} className={"pl-6"} />
      <Heading
        type="h6"
        text={
          "A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question."
        }
        className={"w-3/4 pl-6 pt-4"}
      />

      <div className="pl-6">
        <FaSearch
          size={20}
          className="relative top-7 left-1  cursor-pointer text-white sm:block"
          onClick={() => handleSearch()}
        />
        <input
          type="text"
          className="rounded-sm bg-stone-700 px-8 py-2 text-white sm:block"
          placeholder="Filter by Tag name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap p-4">
        {tagsInfo.map(
          (item, index) =>
            (item.title.toLowerCase().includes(search.toLowerCase()) ||
              search === "" ||
              item.description
                .toLowerCase()
                .includes(search.toLowerCase())) && (
              <div className="border-2 p-6 text-white  sm:m-2 sm:w-1/4 sm:p-4">
                <LinkButton
                  to={"/search/tags/" + item.title.toLowerCase()}
                  className="my-4 ml-6 mt-4 w-2/6 border-collapse bg-neutral-200  p-2 text-center text-black"
                >
                  {item.title.toLowerCase()}
                </LinkButton>
                <Heading
                  type="h6"
                  text={item.description}
                  className={"ml-6 mt-4"}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
