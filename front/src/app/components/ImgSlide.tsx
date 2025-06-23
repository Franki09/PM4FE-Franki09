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
    "https://i.ytimg.com/vi/CrOo4ukH4hw/maxresdefault.jpg",
    "https://i0.wp.com/folou.co/wp-content/uploads/2020/12/Apple-multa-publicidad-enganosa.jpg?fit=1200%2C675&ssl=1",
    "https://s.wsj.net/public/resources/images/BN-MW517_stern0_M_20160302103513.jpg",
    "https://www.movilzona.es/app/uploads-movilzona.es/2024/01/conectar-dos-auriculares-movil.jpg",
    "https://cdn.shopify.com/s/files/1/0414/9982/0194/files/IMG_7902_bc932d5b-5e81-4ce5-9546-644c7fc92e66_600x600.jpg?v=1638710744",
  ];

  return (
    <div className="w-full overflow-hidden pb-10 bg-blueish">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-oswald font-bold text-center text-gray-800 mb-8 pt-8">
          Un vistazo rapido a nuestros productos
        </h2>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center items-center h-[500px] bg-dark p-4">
                  <Image
                    src={src}
                    alt={`Producto ${index + 1}`}
                    width={800}
                    height={500}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
                    }}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
