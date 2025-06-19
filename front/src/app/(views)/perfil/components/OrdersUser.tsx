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
            <h3 className=" text-gray-300 text-lg font-semibold">Orden #{order.id}</h3>
            <p className="text-gray-300">
              <strong>Estado:</strong> {order.status}
            </p>
            <p className="text-gray-300">
              <strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}
            </p>
            <ul className="text-gray-300 list-disc pl-5">
              {order.products.map((product) => (
                <li key={product.id}>
                  (x1) {product.name} - ${product.price}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 font-semibold mt-2 list-none">
              Total: ${order.products.reduce((sum, product) => sum + product.price, 0)}
            </p>
          </div>
        ))
      ) : (
        <p>No has realizado ninguna orden aún.</p>
      )}
    </>
  );
}

export default OrdersUser;
