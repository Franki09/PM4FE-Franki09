"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NextPage } from "next";
import { postRegister } from "@/services/auth";
import Swal from "sweetalert2";
import { redirect } from "next/navigation";
import usePublic from "@/hooks/usePublic";

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

const initialValues: RegisterFormValues = {
  name: "Franco Gomez Rosell",
  email: "fran@gmail.com",
  password: "Franki123",
  address: "Avenida Calle Falsa 123",
  phone: "12345678",
};

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  address: Yup.string().required("La dirección es obligatoria"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Sólo números")
    .min(8, "Debe tener al menos 8 dígitos")
    .required("El teléfono es obligatorio"),
});

const RegisterForm: NextPage = () => {
  usePublic();
  const handleSubmit = async (values: RegisterFormValues) => {
    console.log(values);

    const res = await postRegister(values);

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: res.message,
      }).then(() => {
        redirect("/login");
      });
    } else {
      console.log(res.message);

      Swal.fire({
        icon: "error",
        title: "Ya existe un usuario con ese correo",
        text: res.message,
      });
    }
  };

  return (
    <div className="bg-dark rounded-md shadow-lg p-6 max-w-md mx-auto mt-5">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {/* {({ isValid, dirty }) => ( */}
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-white">
                  Nombre
                </label>
                <Field name="name" type="text" className="w-full border rounded px-3 py-2 bg-blueish" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-white">
                  Correo
                </label>
                <Field name="email" type="email" className="w-full border rounded px-3 py-2 bg-blueish" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-medium text-white">
                  Contraseña
                </label>
                <Field name="password" type="password" className="w-full border rounded px-3 py-2 bg-blueish" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="address" className="block mb-1 font-medium text-white">
                  Dirección
                </label>
                <Field name="address" type="text" className="w-full border rounded px-3 py-2 bg-blueish" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-white">
                  Teléfono
                </label>
                <Field name="phone" type="text" className="w-full border rounded px-3 py-2 bg-blueish" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            // disabled={!(isValid && dirty)}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Registrar
          </button>
        </Form>
        {/* )} */}
      </Formik>
    </div>
  );
};

export default RegisterForm;
