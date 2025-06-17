import { useNavigate } from "react-router";

function Item({ prod }) {
  const navigate = useNavigate();

  return (
    <div
      key={prod.id}
      className="
        bg-white rounded-lg shadow-md overflow-hidden
        flex flex-col items-center text-center p-5
        transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-xl
      "
    >
      <img
        src={prod.imagen}
        alt={prod.nombre}
        className="
          w-full max-w-[200px] h-[200px] object-contain rounded-md
          mb-4 border border-gray-200
        "
      />
      <p className="text-xl font-bold text-blue-900 mb-2 min-h-[2.8em] line-clamp-2">
        {prod.nombre}
      </p>
      <p className="text-2xl text-yellow-500 font-extrabold mb-4">
        $ {prod.precio.toFixed(2)}
      </p>
      <p className="text-sm text-gray-700 mb-5 leading-relaxed line-clamp-3">
        {prod.descripcion}
      </p>
      <button
        onClick={() => navigate(`/item/${prod.id}`)}
        className="
          bg-blue-900 text-white border-none px-6 py-3 rounded-md
          cursor-pointer text-base font-bold
          transition-colors duration-300 hover:bg-blue-800 hover:scale-105
        "
      >
        Ver más
      </button>
    </div>
  );
}

export default Item;
