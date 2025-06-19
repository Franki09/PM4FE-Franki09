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
    <>
      <div className="max-w-3xl mx-auto my-5 bg-dark rounded-lg p-8 border-4 border-primary">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Detalle del producto</h1>
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
              <h2 className="text-2xl font-semibold text-secondary mb-4">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center gap-6 mb-4">
                <span className="text-lg font-bold text-primary">Precio: ${product.price}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stock > 0 ? `Stock: ${product.stock}` : "Sin stock"}
                </span>
              </div>
              <CartAddBtn product={product} />
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-red-500 font-semibold">Producto no encontrado</p>
        )}
      </div>
    </>
  );
}
