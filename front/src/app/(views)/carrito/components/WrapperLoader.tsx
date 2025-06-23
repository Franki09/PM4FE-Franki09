"use client";
import { useCartContext } from "@/context/cartContext";
import usePrivate from "@/hooks/usePrivate";
import Link from "next/link";
import React from "react";

function WrapperLoader({ children }: { children: React.ReactNode }) {
  usePrivate();

  const { cart } = useCartContext();
  if (cart === undefined || !Boolean(cart?.length)) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark rounded-lg border-4 border-accent shadow-md p-8 max-w-md text-center">
        <h2 className="text-3xl font-oswald font-semibold mb-4 text-primary text-center">
          No hay productos en el carrito de momento...
        </h2>
        <h2 className="text-xl font-roboto-condensed text-neutral text-center">
          Puedes empezar a agregar productos{""}
          <Link href="/inicio" className="text-secondary hover:underline font-medium pl-2">
            AQUI
          </Link>
          .
        </h2>
      </div>
    );
  }
  return children;
}

export default WrapperLoader;
