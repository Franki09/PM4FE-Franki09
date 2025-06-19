import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";

const Perfil = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <div className="bg-dark border-4 border-accent shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-primary text-xl font-semibold mb-2">Información del Usuario</h2>
        <DataUser />
      </div>

      <div className=" bg-dark border-4 border-accent shadow-md rounded-lg p-6">
        <h2 className=" text-primary text-xl font-semibold mb-4">Órdenes Realizadas</h2>
        <div className="grid grid-cols-4 gap-10">
          <OrdersUser />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
