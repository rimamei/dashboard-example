import React from "react";

interface EmptyLayoutProps {
  children: JSX.Element;
}
export const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return <div>{children}</div>;
};
