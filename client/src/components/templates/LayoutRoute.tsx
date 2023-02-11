import React, { FC, PropsWithChildren } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Leftbar from "../organisms/Leftbar";
import Navbar from "../organisms/Navbar";
import Rightbar from "../organisms/Rightbar";

interface Props {
  title?: string;
  path?: string;
  element?: React.ReactElement;
  children?: React.ReactElement;
  exact?: boolean;
}

export const LayoutRoute: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  ...props
}) => {
  console.log("children", children, props);
  return (
    <React.Fragment>
      <div className="layout justify-between">
        <Navbar />
        <div className="content relative top-14 flex">
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    </React.Fragment>
  );
};
