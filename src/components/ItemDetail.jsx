import { NavLink } from "react-router";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        {product.nombre}
      </h2>
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-full h-80 object-contain mb-4 rounded-md border border-gray-200"
      />
      <p className="text-xl text-yellow-500 font-extrabold mb-3">
        Precio: $ {product.precio.toFixed(2)}
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        {product.descripcion}
      </p>
      <ItemCount item={product} />
      <NavLink
        to="/"
        className="inline-block mt-6 bg-gray-600 text-white px-4 py-2 rounded no-underline hover:bg-gray-700 transition duration-300"
      >
        Volver
      </NavLink>
    </div>
  );
}
export default ItemDetail;
