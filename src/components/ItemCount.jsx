import { useState } from "react";

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={decrement}
        disabled={count <= 1}
        className="
          bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md text-lg font-bold
          hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400
          disabled:opacity-50
        "
      >
        -
      </button>

      <span
        className="
          bg-gray-100 text-gray-900 px-4 py-1 text-lg font-semibold border border-gray-300
          rounded-md min-w-[40px] text-center select-none
        "
      >
        {count}
      </span>

      <button
        onClick={increment}
        disabled={count >= stock}
        className="
          bg-blue-600 text-white px-3 py-1 rounded-r-md text-lg font-bold
          hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        +
      </button>

      <button
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        className="
          ml-4 bg-yellow-500 text-blue-900 px-5 py-2 rounded-md text-base font-bold
          hover:bg-yellow-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
