import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { getCantidad } = useContext(CartContext);
  const cantidad = getCantidad();

  return (
    <div className="flex items-center">
      <button
        className="
          text-1xl text-black font-bold uppercase m-0 bg-yellow-400 rounded
        "
      >
        Carrito 🛒 {cantidad}
      </button>
    </div>
  );
}

export default CartWidget;
