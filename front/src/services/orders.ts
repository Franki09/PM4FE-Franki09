"use server";
import { ICreateOrderPayload } from "@/app/(views)/carrito/components/CreateOrderBtn";
import { IOrder } from "@/types";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, //"http://localhost:3001",
});

export const getOrdersUser = async (token: string) => {
  try {
    const response = await axiosApiBack.get("/users/orders", {
      headers: {
        Authorization: token,
      }, // objeto options para la petición
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};

export const postOrder = async (data: ICreateOrderPayload, token: string): Promise<IOrder> => {
  try {
    console.log("Enviando datos:", data); // Debug
    console.log("API URL:", process.env.API_URL); // Debug

    const response = await axiosApiBack.post("/orders", data, {
      headers: {
        Authorization: token,
      }, // objeto options para la petición
    });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);

    if (axios.isAxiosError(error)) {
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);
    }

    throw error;
  }
};
