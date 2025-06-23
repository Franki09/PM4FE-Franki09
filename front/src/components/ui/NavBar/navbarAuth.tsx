"use client";

import React from "react";
import { useAuthContext } from "@/context/authContext";
import LoggedNavbar from "./loggedNavbar";
import GuestNavbar from "./guestNavbar";
import Image from "next/image";

const AuthNav = () => {
  const { user, isAuth } = useAuthContext();
  console.log("user", user);

  if (isAuth === null) {
    // Si isAuth es null, significa que la verificación de autenticación aún está en curso
    return (
      <>
        <nav className="bg-primary flex justify-between items-center p-1 px-14 ">
          <Image src="/LogoPagFinal.png" alt="Logo" className="h-24 w-24" width={40} height={40} />
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl text-neutral font-oswald">Cargando la barra de navegacion...</h2>
            <div className="w-8 h-8 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
          </div>
          ;
        </nav>
      </>
    );
  }

  if (isAuth) {
    return <LoggedNavbar />;
  } else {
    return <GuestNavbar />;
  }
};

export default AuthNav;
