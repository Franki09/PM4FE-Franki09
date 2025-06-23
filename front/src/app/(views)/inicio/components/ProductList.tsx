import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/types";

interface ProductListProps {
  products: Partial<IProduct>[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="min-h-[45vh] text-center flex items-center justify-center">
        <h2 className="font-oswald text-4xl">No hay productos disponibles</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center pb-10">
      {products.map((cardProduct: Partial<IProduct>) => (
        <ProductCard key={cardProduct.id} {...cardProduct} />

        //!Esto es otra forma de hacer esto:
        // id={cardProduct.id}
        // name={cardProduct.name}
        // price={cardProduct.price}
        // description={cardProduct.description}
        // image={cardProduct.image}
        // categoryId={cardProduct.categoryId}
        // stock={cardProduct.stock}
        //? Y agregarle una key al principio
      ))}
    </div>
  );
};

export default ProductList;
