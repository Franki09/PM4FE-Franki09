import AuthNav from "@/components/ui/NavBar/navbarAuth";
import React from "react";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  //Al recibir props es necesario que el tipeo sea asi y no React.Fc directamente
  return (
    <>
      <header>
        <AuthNav />
      </header>
      <main className="bg-blueish">{children}</main>
      <footer className=" flex justify-between bg-primary-light text-white p-4">
        <span>Franco Gomez | Proyecto M4</span>
        <span>2025</span>
      </footer>
    </>
  );
};

export default Layout;

//* Ejemplos de tipeo
// const [count, setCount] = React.useState<number | undefined>();

// useEffect(() => {
//   setCount(2);
// }, []);

// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//   setCount((prevCount) => (prevCount !== undefined ? prevCount + 1 : 1));
// };
