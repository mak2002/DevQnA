import React, { FunctionComponent, MouseEventHandler } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  text?: string;
  children?: React.ReactNode;
};

const Button: FunctionComponent<Props> = ({
  type,
  onClick,
  className,
  text,
  children,
}) => {
  return (
    <button type={type} onClick={onClick} className={className + " m-0"}>
      {text}
      {children}
    </button>
  );
};

export default Button;
