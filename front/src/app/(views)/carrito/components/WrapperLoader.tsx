"use client";
import { useCartContext } from "@/context/cartContext";
import React from "react";

function WrapperLoader({ children }: { children: React.ReactNode }) {
  const { cart } = useCartContext();
  if (cart === undefined || !Boolean(cart?.length)) {
    return <p>No hay productos en el carrito de momento...</p>;
  }
  return children;
}

export default WrapperLoader;
