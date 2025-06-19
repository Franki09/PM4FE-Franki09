"use client";
import { useAuthContext } from "@/context/authContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function usePrivate() {
  const { isAuth } = useAuthContext();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAuth === false && redirect("/inicio");
    // si no iniciste secion, no podes acceder a carrito y perfil
  }, [isAuth]);

  return null;
}

export default usePrivate;
