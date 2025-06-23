import ProductList from "@/app/(views)/inicio/components/ProductList";
import { getProducts } from "@/services/products";
import Image from "next/image";

const getData = async () => {
  const products = await getProducts();
  return {
    products,
  };
};

const Inicio = async () => {
  const { products } = await getData();
  return (
    <>
      <Image
        src={"/bannerInicioFinal.png"}
        alt="Banner"
        width={1400}
        height={500}
        quality={100}
        className="mx-auto object-cover"
      />
      <h1 className="text-3xl font-bold underline p-10 font-unbounded">Nuestros Productos:</h1>
      <ProductList products={products || []} />
    </>
  );
};

export default Inicio;
