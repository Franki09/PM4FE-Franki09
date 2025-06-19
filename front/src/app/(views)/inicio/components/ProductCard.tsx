import React from "react";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import CartAddBtn from "@/components/ui/CartAddBtn";

const ProductCard: React.FC<Partial<IProduct>> = (product) => {
  const { id, name, price, image } = product;
  return (
    <div className="w-full max-w-sm bg-secondary border-transparent border-8 rounded-lg shadow-sm hover:border-primary-default">
      <div>
        <Image
          className="p-6 rounded-t-lg object-contain w-full h-64"
          src={image || "/placeholder.png"}
          alt={name || "Producto"}
          width={300}
          height={300}
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-primary-default">{name}</h5>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-yellow-500">${price}</span>
        </div>

        <div className="flex justify-between items-center mt-4 space-x-2">
          <Link
            href={`/detalle-producto/${id}/${name?.toLowerCase().replace(/\s+/g, "-")}`}
            className="w-full text-center rounded-md bg-primary-light hover:bg-primary-default text-white text-sm font-medium px-4 py-2 transition"
          >
            Ver detalles
          </Link>
          <CartAddBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
