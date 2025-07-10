import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router";

function CartContainer() {
  const {
    cart,
    getCantidad,
    getTotalPrice,
    removerDelCarrito,
    modificarCantidad,
  } = useContext(CartContext);

  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <NavLink
          to="/"
          className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded no-underline hover:bg-blue-700 transition duration-300"
        >
          Ir a comprar
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {cart.map((prod) => (
          <li key={prod.id} className="mb-6 border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src={prod.imagen}
                alt={prod.nombre}
                className="w-24 h-24 object-contain rounded-md border border-gray-200"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-blue-900">
                  {prod.nombre}
                </h2>
                <div className="flex items-center space-x-3 mt-2">
                  <p className="text-lg">Cantidad:</p>
                  <button
                    onClick={() => modificarCantidad(prod.id, -1)}
                    className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{prod.count}</span>
                  <button
                    onClick={() => modificarCantidad(prod.id, 1)}
                    className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                <p className="text-lg text-yellow-500 font-extrabold">
                  Subtotal: $ {prod.precio * prod.count}
                </p>
              </div>
              <button
                onClick={() => removerDelCarrito(prod.id)}
                className="cursor-pointer text-white font-bold bg-red-500 rounded px-3 py-1 hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Items totales: {getCantidad()}</h3>

        <h2 className="text-2xl font-extrabold text-blue-900">
          Total a pagar: $ {getTotalPrice()}
        </h2>
        <button
          className="cursor-pointer inline-block mt-4 mr-2 bg-green-600 text-white px-4 py-2 rounded no-underline hover:bg-green-700 transition duration-300"
          onClick={() => navigate("/checkout")}
        >
          Ir al Checkout
        </button>
        <NavLink
          to="/"
          className="cursor-pointer inline-block mt-4 bg-gray-600 text-white px-4 py-2 rounded no-underline hover:bg-gray-700 transition duration-300"
        >
          Seguir comprando
        </NavLink>
      </div>
    </div>
  );
}
export default CartContainer;
