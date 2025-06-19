"use server";
import { FormDataLogin } from "@/app/(static)/login/components/loginForm";
import { RegisterFormValues } from "@/app/(static)/register/components/registerForm";
import axios from "axios";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL,
});

export const postRegister = async (userData: RegisterFormValues) => {
  try {
    const res = await axiosApiBack.post("/users/register", userData);

    if (!res.data) {
      return {
        success: false,
        message: "Respuesta inválida del servidor",
        errors: res.data,
      };
    }

    return {
      success: true,
      message: "Usuario registrado correctamente",
      data: res.data,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return {
      success: false,
      message: "Error al registrar usuario",
      errors: errorMessage,
    };
  }
};

export const postLogin = async (userData: FormDataLogin) => {
  try {
    const res = await axiosApiBack.post("/users/login", userData);

    if (!res.data) {
      return {
        success: false,
        message: "Respuesta inválida del servidor",
        errors: res.data,
      };
    }

    return {
      success: true,
      message: "Usuario inició sesión correctamente",
      data: res.data,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return {
      success: false,
      message: "Error al iniciar sesión",
      errors: errorMessage,
    };
  }
};
