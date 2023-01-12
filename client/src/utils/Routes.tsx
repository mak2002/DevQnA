import React, { Component, FC, PropsWithChildren } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";

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
        <div className="content flex w-full">
          <Leftbar />
            <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export const BaseRoute: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};
