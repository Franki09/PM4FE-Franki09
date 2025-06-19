import React from "react";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  //Al recibir props es necesario que el tipeo sea asi y no React.Fc directamente
  return (
    <>
      <main className="bg-blueish">{children}</main>
    </>
  );
};

export default Layout;
