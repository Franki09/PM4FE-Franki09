import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";

const Perfil = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
      <div className="bg-secondary border-4 border-primary-default shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-primary-default text-xl font-semibold mb-2">Información del Usuario</h2>
        <DataUser />
      </div>

      <div className="bg-secondary border-4 border-primary-default shadow-md rounded-lg p-6">
        <h2 className=" text-primary-default text-xl font-semibold mb-4">Órdenes Realizadas</h2>
        <OrdersUser />
      </div>
    </div>
  );
};

export default Perfil;
