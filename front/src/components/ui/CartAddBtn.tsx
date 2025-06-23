"use client";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/types";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

function CartAddBtn({ product }: { product: Partial<IProduct> }) {
  const { isAuth } = useAuthContext();
  const { addToCart, isProductInCart } = useCartContext();

  const addOnClick = () => {
    toast.success(`Producto ${product.name} agregado al carrito exitosamente`, {
      autoClose: 2000,
    });
    return addToCart(product);
  };

  if (isAuth === null) {
    return (
      <>
        <button className="flex w-full items-center justify-center rounded-md bg-gray-400 px-4 py-2 opacity-60 cursor-not-allowed">
          <div className="w-6 h-6 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        </button>
      </>
    );
  }

  if (!isAuth) {
    return (
      <button
        className="flex gap-2 w-full items-center justify-center rounded-md bg-gray-400 text-white text-lg font-roboto-condensed font-medium px-4 py-2 opacity-60 cursor-not-allowed"
        disabled
      >
        <FaShoppingCart className="text-2xl " />
        Iniciar sesión
      </button>
    );
  }

  if (product.stock === 0) {
    return (
      <button
        className="flex gap-2 w-full items-center justify-center rounded-md bg-red-600 text-white text-lg font-roboto-condensed font-medium px-4 py-2 opacity-70 cursor-not-allowed"
        disabled
      >
        SIN STOCK
      </button>
    );
  }

  return (
    <button
      onClick={addOnClick}
      disabled={isProductInCart(product.id || 0)}
      className={`flex gap-2 items-center justify-center w-full rounded-md text-white text-sm font-roboto-condensed font-medium px-4 py-[10px] transition
          bg-secondary hover:bg-primary
          ${isProductInCart(product.id || 0) ? "opacity-60 cursor-not-allowed bg-gray-400 hover:bg-gray-400" : ""}
        `}
    >
      <FaShoppingCart className="text-2xl" />
      {isProductInCart(product.id || 0) ? "MAX" : "Agregar carrito"}
    </button>
  );
}

export default CartAddBtn;
