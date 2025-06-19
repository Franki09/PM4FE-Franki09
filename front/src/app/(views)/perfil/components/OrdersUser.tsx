"use client";
import { useAuthContext } from "@/context/authContext";
import { getOrdersUser } from "@/services/orders";
import { IOrder } from "@/types";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function OrdersUser() {
  const [orders, setOrders] = useState<IOrder[] | null>(null);
  const { token } = useAuthContext();

  useEffect(() => {
    const res = async () => {
      try {
        if (!token) {
          console.warn("No token found, cannot fetch orders");
          return redirect("/inicio");
        }

        const response = await getOrdersUser(token);

        setOrders(response);
      } catch (error) {
        console.warn("Error fetching orders:", error);
      }
    };

    res();
  }, [token]);

  if (orders === null) {
    return <p>Cargando ordenes....</p>;
  }
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="mb-4">
            <h3 className=" text-secondary text-lg font-semibold underline pb-2">Orden #{order.id}</h3>
            <p className="text-neutral">
              <strong className=" text-secondary">Estado:</strong> {order.status}
            </p>
            <p className="text-neutral">
              <strong className=" text-secondary">Fecha:</strong> {new Date(order.date).toLocaleDateString()}
            </p>
            <ul className="text-neutral list-disc pl-5">
              {order.products.map((product) => (
                <li key={product.id}>
                  (x1) {product.name} - <span className="text-accent"> ${product.price} </span>
                </li>
              ))}
            </ul>
            <p className="text-neutral mt-2 list-none text-xl">
              <strong className="text-secondary">Total: </strong>
              <strong className="text-accent">${order.products.reduce((sum, product) => sum + product.price, 0)} </strong>
            </p>
          </div>
        ))
      ) : (
        <p className="text-neutral">No has realizado ninguna orden aún. Agrega algo al carrito para poder crear una orden.</p>
      )}
    </>
  );
}

export default OrdersUser;
