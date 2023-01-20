import { Link } from "react-router-dom";
import React, { Fragment } from "react";

export const LinkButton: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  text?: string;
}> = ({ to, children, className, id, text }) => {
  return (
    <Link to={to} className={className} id={id}>
        {text}
      {children}
    </Link>
  );
};
