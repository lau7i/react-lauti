import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (productoNuevo) => {
    const productoEnCarrito = cart.find((item) => item.id === productoNuevo.id);
    if (productoEnCarrito) {
      const cartActualizado = cart.map((item) =>
        item.id === productoNuevo.id
          ? { ...item, count: item.count + productoNuevo.count }
          : item
      );
      setCart(cartActualizado);
    } else {
      setCart([...cart, productoNuevo]);
    }
  };

  const getCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.count, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0);
  };

  const removerDelCarrito = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const modificarCantidad = (itemId, cantidad) => {
    const cartActualizado = cart
      .map((prod) => {
        if (prod.id === itemId) {
          return { ...prod, count: prod.count + cantidad };
        }
        return prod;
      })
      .filter((prod) => prod.count > 0);

    setCart(cartActualizado);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        getCantidad,
        getTotalPrice,
        removerDelCarrito,
        modificarCantidad,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
