"use client";
import { useAuthContext } from "@/context/authContext";
import usePrivate from "@/hooks/usePrivate";
import { redirect } from "next/navigation";
import React from "react";

const DataUser = () => {
  usePrivate();
  const { user } = useAuthContext();

  if (!user) {
    redirect("/inicio");
    return null; // Redirección en curso, no se renderiza nada
  }

  return (
    <>
      <p className="text-neutral font-roboto-condensed text-xl">
        <strong className="text-secondary">Nombre:</strong> {user.name}
      </p>
      <p className="text-neutral font-roboto-condensed text-xl">
        <strong className="text-secondary">Email:</strong> {user.email}
      </p>
      <p className="text-neutral font-roboto-condensed text-xl">
        <strong className="text-secondary">Dirección:</strong> {user.address}
      </p>
      <p className="text-neutral font-roboto-condensed text-xl">
        <strong className="text-secondary">Teléfono:</strong> {user.phone}
      </p>
    </>
  );
};

export default DataUser;
