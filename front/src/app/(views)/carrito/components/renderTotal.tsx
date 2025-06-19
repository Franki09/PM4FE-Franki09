"use client";
import { useCartContext } from "@/context/cartContext";
import usePrivate from "@/hooks/usePrivate";
import React from "react";

function RenderTotal() {
  usePrivate();
  const { cart } = useCartContext();
  return (
    <>
      <p className="text-black font-semibold mt-2 list-none">
        Total: ${cart.reduce((total, product) => total + (product.price || 0), 0)}
      </p>
    </>
  );
}

export default RenderTotal;
