import React from "react";

interface Props {
  children: React.ReactNode;
}

const Typography = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Typography;
