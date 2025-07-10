import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

function CartWidget() {
  const { getCantidad } = useContext(CartContext);
  const cantidad = getCantidad();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate("/CartContainer");
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleGoToCart}
        className="
          cursor-pointer text-1xl text-black font-bold uppercase m-0 bg-yellow-400 rounded
        "
      >
        Carrito 🛒 {cantidad}
      </button>
    </div>
  );
}

export default CartWidget;
