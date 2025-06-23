import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";

const Perfil = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-unbounded font-bold mb-4 py-4">Perfil de Usuario</h1>
      <div className="bg-dark border-4 border-accent shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-primary text-3xl font-oswald font-semibold mb-2 py-2">Información del Usuario</h2>
        <DataUser />
      </div>

      <div className=" bg-dark border-4 border-accent shadow-md rounded-lg p-6">
        <h2 className=" text-primary text-3xl font-oswald font-semibold mb-4 py-2">Órdenes Realizadas</h2>
        <div className="grid grid-cols-3 gap-7">
          <OrdersUser />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
