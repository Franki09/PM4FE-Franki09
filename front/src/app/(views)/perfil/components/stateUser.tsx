import { getOrdersUser } from "@/services/orders";
import React from "react";

export default function StateUser() {
  const orders = getOrdersUser;
  if (orders?.length >= 2) {
    return <h1> Eres un usuario premium</h1>;
  } else {
    return <h2> Eres un usuario regular</h2>;
  }
}
