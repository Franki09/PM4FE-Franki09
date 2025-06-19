import Link from "next/link";
import RenderProducts from "./components/renderProducts";
import RenderTotal from "./components/renderTotal";
import CreateOrderBtn from "./components/CreateOrderBtn";
import WrapperLoader from "./components/WrapperLoader";

const CarritoPage = () => {
  return (
    <WrapperLoader>
      <div className="flex">
        {/*//* Card product */}
        <div className="flex flex-col items-start w-[55%] gap-4 p-4 ">
          <RenderProducts />
        </div>
        {/* //* Total */}
        <div className="fixed -right-2 flex flex-col items-end gap-4 p-4 w-[45%] rounded-lg mt-4 mr-4 bg-gray-600">
          <RenderTotal />

          <Link
            href="/inicio"
            className="text-center self-center rounded-full w-[80%] bg-blue-400 hover:bg-blue-800 transform p-2"
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
