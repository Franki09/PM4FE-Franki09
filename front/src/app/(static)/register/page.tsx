import React from "react";
import RegisterForm from "./components/registerForm";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 hidden md:flex relative">
        <Image
          src="https://ik.imagekit.io/1yfqjkehz/imagen-register.png?updatedAt=1749595852877"
          alt="Login Image"
          width={500}
          height={500}
          className="object-center object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold  text-center">Registro</h1>
        <RegisterForm />
        <Link href="/login" className="text-blue-600 hover:underline mt-4">
          ¿Ya tienes una cuenta? Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
