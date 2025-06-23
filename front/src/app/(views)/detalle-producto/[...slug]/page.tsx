import CartAddBtn from "@/components/ui/CartAddBtn";
import { getProductById } from "@/services/products";
import { Params, SearchParams } from "@/types";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

//repasar
export default async function ProductDetail(props: { params: Params; searchParams: SearchParams }) {
  const params = await props.params;
  const [id = undefined] = params.slug;

  if (!id) {
    return redirect("/not_found");
  }

  const product = await getProductById(id);

  return (
    <div className="relative min-h-screen pt-10">
      <h1 className="text-4xl font-bold text-dark mb-8 text-center font-unbounded">Detalle del producto</h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] bg-dark rounded-lg p-8 border-4 border-accent">
        {product ? (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg object-cover bg-secondary"
              priority
            />

            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-primary mb-4 font-oswald">{product.name}</h2>
              <p className="text-neutral mb-4 font-roboto-condensed text-lg">{product.description}</p>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-2xl font-bold text-accent font-oswald">Precio: ${product.price}</span>
                <span
                  className={`px-3 py-1 rounded-full text-lg font-medium font-roboto-condensed ${
                    product.stock > 0 ? "bg-blueish text-dark" : "bg-blueish text-red-700"
                  }`}
                >
                  {product.stock > 0 ? `Stock: ${product.stock}` : "Stock 0"}
                </span>
              </div>
              <CartAddBtn product={product} />
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-red-500 font-semibold">Producto no encontrado</p>
        )}
      </div>
    </div>
  );
}
