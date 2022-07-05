import React from "react";

export interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Button;
