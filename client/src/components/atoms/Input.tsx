import React from "react";

type Props = {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  key?: string;
};

const Input: React.FunctionComponent<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  key,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      name={name}
      key={key}
    />
  );
};

export default Input;