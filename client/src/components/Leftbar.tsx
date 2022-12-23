import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Leftbar() {
  const leftSidebarContent = [
    {
      title: "Questions",
      link: "/questions",
    },
    {
      title: "Tags",
      link: "/tags",
    },
    {
      title: "Users",
      link: "/users",
    },
    {
      title: "Companies",
      link: "/companies",
    },
  ];
  return (
    <React.Fragment>
      <div className="h-screen bg-neutral-800 w-2/12 hidden sm:block border-r-2 border-gray-600">
        <Link to="/" className="relative block pl-2 py-2 top-4 text-left w-full text-sm text-white active:bg-gray-700 active:border-r-4 active:font-bold border-cyan-600">
          Home
        </Link>

          <p className="relative top-8 text-left px-2 py-2 text-white uppercase text-xs">
            Public
          </p>
          <ul className="text-left relative top-8 w-full">
            {leftSidebarContent.map((item, index) => (
              <li
                key={index}
                className="w-full  active:bg-gray-700 active:border-r-4 active:font-bold border-cyan-600 py-1 px-4"
              >
                <Link className="text-sm hover:text-white text-gray-300" to={item.link}>
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