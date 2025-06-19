"use client";
import ImgSlide from "@/app/components/ImgSlide";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <section className=" p-5  bg-primary-default">
        <h1 className="flex justify-center items-center text-center gap-2 text-4xl font-bold text-secondary">
          Bienvenido a
          <Image src="/logoPagina.png" alt="Logo" className="h-20 w-20" width={40} height={40} />!
        </h1>
      </section>

      <ImgSlide />
      <section className="flex flex-col items-center justify-center p-10 gap-3 bg-blueish">
        <h2 className="text-5xl font-bold text-secondary">Quieres conocer mas?</h2>
        <Link href="/inicio" className="rounded-full bg-primary-light hover:bg-primary-default transform p-3">
          Cliqueame!
        </Link>
      </section>
      <section className="bg-primary-default p-8">
        <div className="flex items-center gap-6">
          <div className="w-3/3">
            <Image src="/equipo.jpg" alt="Team Image" className=" h-72 object-cover rounded" width={800} height={288} />
          </div>

          <div className="w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">¿Quiénes somos?</h2>
            <p className="text-3l text-secondary">
              En L-tronics nos dedicamos a ofrecerte la mejor tecnología al alcance de tu mano. Somos una tienda especializada en
              la venta de productos electrónicos como celulares, notebooks, auriculares, accesorios y mucho más. Combinamos
              calidad, precios competitivos y atención personalizada para que encuentres exactamente lo que necesitás. Creemos en
              la innovación, la confianza y en acompañarte en cada paso de tu experiencia digital.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
