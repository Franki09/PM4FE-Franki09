"use client";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
import React from "react";

function RenderTotal() {
  const { cart } = useCartContext();
  return (
    <div className="flex flex-col items-start justify-center p-2">
      <h2 className="text-3xl font-unbounded font-bold underline text-primary">Resumen de pago:</h2>
      <p className="text-black font-oswald font-semibold mt-2 text-2xl px-2 py-5">
        Total: ${cart.reduce((total, product) => total + (product.price || 0), 0)}
      </p>
      <h3 className="text-secondary font-roboto-condensed text-xl pb-2">Aceptamos los siguientes metodos de pago:</h3>
      <Image src="/MetodosPago.png" alt="pagos" width={300} height={200} className="ml-0" />
    </div>
  );
}

export default RenderTotal;
