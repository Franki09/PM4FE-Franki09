import AuthNav from "@/components/ui/NavBar/navbarAuth";
import React from "react";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <AuthNav />
      </header>
      <main className="bg-blueish min-h-screen">{children}</main>
      <footer className=" flex justify-between bg-secondary font-roboto-condensed text-2xl text-neutral p-4">
        <span>Franco Gomez | Proyecto M4</span>
        <span>2025</span>
      </footer>
    </>
  );
};

export default Layout;
