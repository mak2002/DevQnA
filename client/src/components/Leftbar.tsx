import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { leftSidebarContent } from "../utils/Data";

export default function Leftbar() {
  return (
    <React.Fragment>
      <div className="hidden w-2/12 border-r-2 border-gray-600 bg-neutral-800 sm:block">
        <Link
          to="/"
          className="relative top-4 block w-full border-cyan-600 py-2 pl-2 text-left text-sm text-white active:border-r-4 active:bg-gray-700 active:font-bold"
        >
          Home
        </Link>

        <p className="relative top-8 px-2 py-2 text-left text-xs uppercase text-white">
          Public
        </p>
        <ul className="relative top-8 w-full text-left">
          {leftSidebarContent.map((item, index) => (
            <li
              key={index}
              className="w-full  border-cyan-600 py-1 px-4 active:border-r-4 active:bg-gray-700 active:font-bold"
            >
              <Link
                className="text-sm text-gray-300 hover:text-white"
                to={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

/* 
{
  "clientID": "PxObQsBDPGQIZhzEqsCCCUFw"
  "clientSecret": "karxleGyI5QO9YYWJ-fr.QSGpyd1hWucDK+W6Cx0yU9d5SYZ2CmM5+FHzYY15Bwj,I6eK+PwUUTGZXlnRshYXtW1LZQ9kx1JtARFi0p_1Rj6Pack+uHhJzYz3g0qTcJf"
  "token": "AstraCS:PxObQsBDPGQIZhzEqsCCCUFw:c3404cc2109e20cb3e1841f9047d72208b1c54a7b164853569e17fb223696fca"
}
*/
