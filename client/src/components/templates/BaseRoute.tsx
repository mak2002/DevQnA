import React, { Component, FC, PropsWithChildren } from "react";
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
