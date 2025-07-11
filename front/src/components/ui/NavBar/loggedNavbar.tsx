import Image from "next/image";
import Link from "next/link";

//iconos
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";

const LoggedNavbar = () => {
  const { resetUserData } = useAuthContext();
  const { total, resetCart } = useCartContext();
  const logout = () => {
    resetUserData();
    resetCart();
    location.href = "/inicio";
  };

  return (
    <nav className="bg-primary flex justify-between items-center p-1 px-14 ">
      <Image src="/LogoPagFinal.png" alt="Logo" className="h-24 w-24" width={40} height={40} />
      <ul className="flex gap-6">
        <li>
          <Link href="/inicio" className="group flex flex-col items-center relative text-dark">
            <div className="flex items-center gap-2">
              <FaHome className="text-2xl" />
              <span className="font-oswald text-2xl">Inicio</span>
            </div>

            {/* Línea inferior */}
            <div className="h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full mt-1"></div>
          </Link>
        </li>
        <li>
          <Link href="/carrito" className="group flex flex-col items-center relative text-dark">
            <div className="flex items-center gap-2">
              <FaShoppingCart className="text-2xl" />
              {Boolean(total) && (
                <span className="absolute -top-1.5 -right-3.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {total}
                </span>
              )}

              <span className="font-oswald text-2xl">Ver Carrito</span>
            </div>

            {/* Línea inferior */}
            <div className="h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full mt-1"></div>
          </Link>
        </li>
        <li>
          <Link href="/perfil" className="group flex flex-col items-center relative text-dark">
            <div className="flex items-center gap-2">
              <MdAccountCircle className="text-2xl" />
              <span className="font-oswald text-2xl">Perfil</span>
            </div>

            {/* Línea inferior */}
            <div className="h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full mt-1"></div>
          </Link>
        </li>
        <li className="group flex flex-col items-center relative text-dark">
          <div className="flex items-center gap-2">
            <BiLogOut className="text-2xl" />
            <button onClick={logout} className="font-oswald text-2xl">
              Cerrar Sesion
            </button>
          </div>

          {/* Línea inferior */}
          <div className="h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full mt-1"></div>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedNavbar;
