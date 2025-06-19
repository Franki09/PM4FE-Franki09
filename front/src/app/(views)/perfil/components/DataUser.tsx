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
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Dirección:</strong> {user.address}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
    </>
  );
};

export default DataUser;
