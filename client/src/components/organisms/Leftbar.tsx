import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { leftSidebarContent } from "../../utils/Data";
import { LinkButton } from "../atoms/LinkButton";

export default function Leftbar() {
  return (
    <div className="hidden w-2/12 bg-neutral-800 md:block">
      <div className="relative top-8">
        <LinkButton
          to="/"
          className="relative top-4 block w-full border-cyan-600 py-2 pl-2 text-left text-sm text-white active:border-r-4 active:bg-gray-700 active:font-bold"
        >
          Home
        </LinkButton>

        <p className="relative top-8 px-2 py-2 text-left text-xs uppercase text-white">
          Public
        </p>
        <ul className="relative top-8 w-full text-left">
          {leftSidebarContent.map((item, index) => (
            <li
              key={index}
              className="w-full  border-cyan-600 py-1 px-4 active:border-r-4 active:bg-gray-700 active:font-bold"
            >
              <LinkButton
                className="text-sm text-gray-300 hover:text-white"
                to={item.link}
              >
                {item.title}
              </LinkButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
