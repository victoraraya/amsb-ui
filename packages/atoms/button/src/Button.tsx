import React from "react";

interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => <button>{children}</button>;

export default Button;
