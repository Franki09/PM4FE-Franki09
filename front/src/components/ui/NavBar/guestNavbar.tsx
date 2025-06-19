import Image from "next/image";
import Link from "next/link";

//iconos
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const GuestNavbar = () => {
  return (
    <nav className="bg-primary flex justify-between items-center p-1 px-14 ">
      <Image src="/logoPagina.png" alt="Logo" className="h-24 w-24" width={40} height={40} />
      <ul className="flex gap-6">
        <li>
          <Link href="/inicio" className="group flex flex-col items-center relative text-dark">
            <div className="flex items-center gap-2">
              <FaHome className="text-2xl" />
              <span>Inicio</span>
            </div>

            {/* Línea inferior */}
            <div className="h-1 w-0 bg-secondary transition-all duration-300 group-hover:w-full mt-1"></div>
          </Link>
        </li>

        <li className="group flex flex-col items-center relative text-dark">
          <div className="flex items-center gap-2">
            <FiLogIn className="text-2xl" />
            <Link href="/login">Iniciar Sesion</Link>
          </div>

          {/* Línea inferior */}
          <div className="h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full mt-1"></div>
        </li>
      </ul>
    </nav>
  );
};

export default GuestNavbar;
