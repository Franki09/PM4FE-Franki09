import Link from "next/link";
import RenderProducts from "./components/renderProducts";
import RenderTotal from "./components/renderTotal";
import CreateOrderBtn from "./components/CreateOrderBtn";
import WrapperLoader from "./components/WrapperLoader";

const CarritoPage = () => {
  return (
    <WrapperLoader>
      <div className="flex h-full">
        {/*//* Card product */}
        <div className="flex flex-col items-start w-[55%] gap-4 p-4 ">
          <RenderProducts />
        </div>
        {/* //* Total */}
        <div className="fixed -right-2 flex flex-col items-start justify-center gap-4 p-4 w-[45%] rounded-lg mt-4 mr-4 bg-neutral border-4 border-dark">
          <RenderTotal />

          <Link
            href="/inicio"
            className="text-center self-center rounded-full w-[80%]  bg-secondary hover:opacity-80 transform p-2 font-roboto-condensed text-lg"
          >
            Continuar Comprando
          </Link>
          <CreateOrderBtn />
        </div>
      </div>
    </WrapperLoader>
  );
};

export default CarritoPage;
