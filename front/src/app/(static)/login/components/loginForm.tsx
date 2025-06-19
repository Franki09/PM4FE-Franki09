"use client";
import { useAuthContext } from "@/context/authContext";
import usePublic from "@/hooks/usePublic";
import { postLogin } from "@/services/auth";
import { redirect } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export interface FormDataLogin {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  usePublic();
  const [formData, setFormData] = useState<FormDataLogin>({ email: "fran@gmail.com", password: "Franki123" });
  const [errors, setErrors] = useState<FormErrors>({});

  // const [saveUserData] = useAuthContext();
  const { saveUserData } = useAuthContext();

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres.";
    }

    return newErrors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    const res = await postLogin(formData);

    if (res.success) {
      /////////////////////////////////////////
      const { user, ...data } = res.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { credential: _, ...rest } = user;
      saveUserData({ ...data, user: rest });
      /////////////////////////////////////////
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido a la pagina!",
        text: res.message,
      }).then(() => {
        redirect("/inicio");
      });
    } else {
      console.log(res.message);

      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: res.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-sm mx-auto mt-5 space-y-4 bg-dark rounded-lg p-6">
      <div>
        <label htmlFor="email" className="block text-sm text-white font-medium">
          Correo electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full border bg-blueish p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-white font-medium">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 w-full border bg-blueish p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Iniciar sesión
      </button>
    </form>
  );
}
