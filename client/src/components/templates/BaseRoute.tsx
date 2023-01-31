import React, { Component, FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";

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
