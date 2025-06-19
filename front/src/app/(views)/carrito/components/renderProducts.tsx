"use client";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

function RenderProducts() {
  const { cart, removeFromCart } = useCartContext();
  const showCartItems = cart && cart.length > 0;

  const onDelete = (product: Partial<IProduct>) => {
    // eslint-disable-next-line
    product.id && removeFromCart(product.id);
    toast.info(`Producto ${product.name} fue eliminado del carrito`, {
      autoClose: 2000,
    });
  };

  return (
    <>
      {showCartItems
        ? cart.map((product) => (
            <div
              key={product.id}
              className="group flex flex-row justify-between items-center w-full pr-8 bg-dark border-8 border-transparent rounded-lg  hover:border-accent"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={product.image || "/placeholder.png"}
                alt={product.name || "Producto"}
                width={192}
                height={384}
              />

              <div className="flex flex-col items-start p-4 leading-normal">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary">{product.name}</h2>
                <h3 className="mb-1 text-lg font-semibold text-yellow-500">Precio: {product.price}</h3>
                <p className="text-sm font-medium text-dark rounded-full bg-blueish p-1">Stock: {product.stock}</p>
              </div>
              <div className="flex flex-col w-max items-center self-center">
                <button
                  onClick={() => onDelete(product)}
                  className="rounded-full w-full bg-red-600 transform p-4 hover:animate-shake"
                >
                  Eliminar del <br /> Carrito{" "}
                </button>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default RenderProducts;
