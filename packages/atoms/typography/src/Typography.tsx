import React from "react";

interface Props {
  children: React.ReactNode;
}
const Typography = ({ children }: Props) => <p>{children}</p>;

export default Typography;
