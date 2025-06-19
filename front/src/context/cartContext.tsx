"use client";

import { IProduct } from "@/types";
import React, { createContext, useContext, useEffect } from "react";

type CartContextType = {
  //states
  cart: Partial<IProduct>[];
  total: number;
  //actions
  addToCart: (product: Partial<IProduct>) => void;
  removeFromCart: (productId: number) => void;
  isProductInCart: (productId: number) => boolean;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_LOCAL_STORAGE_KEY = "cart";
const CART_TOTAL_LOCAL_STORAGE_KEY = "cartTotal";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CartContextType["cart"] | undefined>();
  const [total, setTotal] = React.useState<number>();

  const addToCart = (product: Partial<IProduct>) => {
    // setCart([...(cart || []), product]);
    setCart((prevCart) => [...(prevCart || []), product]);
    setTotal((prevTotal) => (prevTotal || 0) + 1);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      if (!prevCart) {
        return [];
      }

      const updatedCart = prevCart.filter((item) => item.id !== productId);
      return updatedCart;
    });

    setTotal((prevTotal) => {
      if (prevTotal === undefined || prevTotal <= 0) {
        return 0;
      }
      return prevTotal - 1;
    });
  };

  const resetCart = () => {
    setCart([]); // Vacía el estado del carrito
    setTotal(0); // Reinicia el total de productos a 0

    // Elimina los datos del carrito almacenados en localStorage
    localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    localStorage.removeItem(CART_TOTAL_LOCAL_STORAGE_KEY);
  };

  const isProductInCart = (productId: number) => {
    return cart ? cart.some((item) => item.id === productId) : false;
  };

  //guardado
  useEffect(() => {
    if (!cart) {
      return;
    }

    //guardar el carrito en el local storage
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(CART_TOTAL_LOCAL_STORAGE_KEY, JSON.stringify(total || 0));
  }, [cart, total]);

  useEffect(() => {
    // Recuperar el carrito del localStorage
    const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const storedTotal = localStorage.getItem(CART_TOTAL_LOCAL_STORAGE_KEY);

    if (!storedCart || !storedTotal) {
      setCart([]);
      setTotal(0);
      return;
    }

    setCart(JSON.parse(storedCart));
    setTotal(JSON.parse(storedTotal));
  }, []);

  return (
    <CartContext.Provider
      value={{
        // Aquí puedes definir los valores y funciones que quieres exponer
        cart: cart || [],
        total: total || 0,

        addToCart,
        removeFromCart,
        isProductInCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
// const {...las props del context} = useCartContext();
export const useCartContext = () => {
  // Component
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un AuthProvider");
  }

  return context;
};
