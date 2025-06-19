import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blueish">
        <h1 className="text-7xl font-bold text-red-800">404</h1>
        <p className="mt-4 text-lg text-dark">
          <strong className="text-2xl">UPS!</strong> Parece que la pagina que buscas no existe.
        </p>
        <Link href="/inicio" className="mt-6 px-4 py-2 text-white bg-secondary rounded hover:bg-primary transition">
          Volver al inicio
        </Link>
      </div>
    </>
  );
}
