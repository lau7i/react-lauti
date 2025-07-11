import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const notify = () => toast("Orden de compra creada con exito!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const nombre = form.nombre.value;
    createOrder({
      email,
      nombre,
      telefono,
      products: cart,
      time: serverTimestamp(),
    });
    notify();
    clearCart();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ¡Completa tus datos!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Ej: Juanito Pérez"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Ej: juanitoperez@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Ej: 123456789"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Checkout;
