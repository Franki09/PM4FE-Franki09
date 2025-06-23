"use client";

import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { postOrder } from "@/services/orders";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export interface ICreateOrderPayload {
  products: number[];
  userId: number;
}

const CreateOrderBtn = () => {
  const { user, token } = useAuthContext();
  const { cart, resetCart } = useCartContext();

  const handleCreateOrder = async () => {
    const payload: ICreateOrderPayload = {
      userId: user?.id || 0,
      products: cart.map((item) => item.id as number),
    };

    // console.log("Payload enviado al backend:", payload);

    const result = await Swal.fire({
      title: "Seguro de que que quieres finalizar la compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, crear orden",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        if (!token) {
          console.warn("No token found, cannot fetch orders");
          return redirect("/inicio");
        }
        const res = await postOrder(payload, token);

        toast.success("Orden creada exitosamente: #" + res.id);

        resetCart();
        setTimeout(() => {
          redirect("/perfil");
        }, 2500);

        // Podés limpiar el carrito o redirigir si querés
        // clearCart();
      } catch (error) {
        console.error("Error al crear la orden:", error);
        toast.error("Ocurrió un error al crear la orden");
      }
    }
  };
  return (
    <>
      <button
        onClick={handleCreateOrder}
        className=" font-roboto-condensed text-lg self-center rounded-full w-[80%] bg-primary hover:opacity-70 p-3 mb-5 transform"
      >
        Finalizar Compra
      </button>
    </>
  );
};

export default CreateOrderBtn;
