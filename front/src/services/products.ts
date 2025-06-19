"use server";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL,
});

export const getProducts = async () => {
  try {
    //? FETCH PRODUCTS FROM BACKEND
    // const res = await fetch("http://localhost:3008" + "/products");
    // const products = await res.json();

    const res = await axiosApiBack.get("/products");

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Formato de datos de productos inválido", res.data);
      return [];
    }

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn("Error al obtener la lista de productos", error.message);
    } else {
      console.warn("Error al obtener la lista de productos", error);
    }
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await axiosApiBack.get(`/products/${id}`);

    if (!res.data || typeof res.data !== "object") {
      console.warn("Formato de datos del producto inválido", res.data);
      return null;
    }

    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn("Error al obtener el producto por ID", error.message);
    } else {
      console.warn("Error al obtener el producto por ID", error);
    }
    return null;
  }
};
