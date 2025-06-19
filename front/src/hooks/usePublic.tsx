"use client";
import { useAuthContext } from "@/context/authContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function usePublic() {
  const { isAuth } = useAuthContext();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isAuth && redirect("/inicio");
    // si iniciaste sesion, no podes acceder al login y register
  }, [isAuth]);

  return null;
}

export default usePublic;
