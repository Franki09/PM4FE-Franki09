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

  if (!isAuth === null) {
    return null;
    // No renderizar nada si isAuth es null, pero prodria ser un boton cargando
  }

  if (!isAuth) {
    return (
      <button
        className="flex gap-2 w-full items-center justify-center rounded-md bg-gray-400 text-white text-sm font-medium px-4 py-2 opacity-60 cursor-not-allowed"
        disabled
      >
        <FaShoppingCart className="text-2xl" />
        Iniciar sesión
      </button>
    );
  } else {
    return (
      <button
        onClick={addOnClick}
        disabled={isProductInCart(product.id || 0)}
        className={`flex gap-2 items-center justify-center w-full rounded-md text-white text-sm font-medium px-4 py-2 transition
          bg-secondary hover:bg-primary
          ${isProductInCart(product.id || 0) ? "opacity-60 cursor-not-allowed bg-gray-400 hover:bg-gray-400" : ""}
        `}
      >
        <FaShoppingCart className="text-2xl" />
        {isProductInCart(product.id || 0) ? "MAX" : "Agregar carrito"}
      </button>
    );
  }
}

export default CartAddBtn;
