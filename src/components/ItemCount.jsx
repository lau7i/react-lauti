import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

function ItemCount({ item, initial = 1 }) {
  const [count, setCount] = useState(initial);
  const { agregarAlCarrito } = useContext(CartContext);

  const notify = () => toast("Producto agregado con exito!");
  const handleSumar = () => setCount(count + 1);
  const handleRestar = () => setCount(count - 1);
  const handleAgregar = () => {
    agregarAlCarrito({ ...item, count });
    notify();
  };

  return (
    <div>
      <p
        className="
          bg-gray-100 text-gray-900 px-4 py-1 text-lg font-semibold border border-gray-300
          rounded-md min-w-[40px] text-center select-none
        "
      >
        {count}
      </p>
      <button
        onClick={handleSumar}
        className="
          bg-blue-600 text-white px-3 py-1 rounded-r-md text-lg font-bold
          hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={handleRestar}
        disabled={count <= 1}
        className="
          bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md text-lg font-bold
          hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {" "}
        -{" "}
      </button>
      <button
        onClick={handleAgregar}
        className="
          ml-4 bg-yellow-500 text-blue-900 px-5 py-2 rounded-md text-base font-bold
          hover:bg-yellow-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400
          disabled:opacity-50
        "
      >
        {" "}
        agregar al carrito{" "}
      </button>
      <ToastContainer />
    </div>
  );
}

export default ItemCount;
