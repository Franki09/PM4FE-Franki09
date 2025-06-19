import React from "react";
import LoginForm from "./components/loginForm";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className=" w-screen h-screen flex ">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <LoginForm />
        <Link href="/register" className="text-blue-600 hover:underline mt-4">
          ¿No tienes una cuenta? Regístrate aquí
        </Link>
      </div>
      <div className="w-1/2 hidden md:flex relative">
        <Image
          src="https://ik.imagekit.io/1yfqjkehz/imagen-login.png?updatedAt=1749595813606"
          alt="Login Image"
          fill
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default LoginPage;
