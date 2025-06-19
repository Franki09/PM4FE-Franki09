import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./arrows";
import Image from "next/image";

export default function ImgSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg",
    "https://media.minutouno.com/p/933e3768d29e99327e71f2a7ebedbd2d/adjuntos/150/imagenes/042/419/0042419890/celulares.jpg",
    "https://images.samsung.com/is/image/samsung/assets/latin/smartphones/galaxy-note20/s-pen/images/galaxy-note20_spen_microsoft_device02.png?$ORIGIN_PNG$",
    "https://storage.googleapis.com/ezetradein-gs-cld/ezewholesale.com/image_prev_ui%20(3)%20(1)%201.webp",
    "https://crediphoneco.com/wp-content/uploads/2024/07/Infixix-8-a-creedtio-en-bogota-celulares-1.png",
  ];

  return (
    <div className="w-screen overflow-hidden pb-10 bg-blueish">
      <h2 className="m-auto p-4 text-center text-3xl text-secondary">Un vistazo a nuestros productos: </h2>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image src={src} alt={`Slide ${index}`} width={800} height={500} className="w-full h-[500px] " unoptimized />
          </div>
        ))}
      </Slider>
    </div>
  );
}
