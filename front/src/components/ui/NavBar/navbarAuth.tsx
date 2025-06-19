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
        <nav className="bg-primary-default flex justify-between items-center p-1 px-14 ">
          <Image src="/logoPagina.png" alt="Logo" className="h-24 w-24" width={40} height={40} />
          <div> Cargando...</div>;
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
