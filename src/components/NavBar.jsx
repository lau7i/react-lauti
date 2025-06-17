import CartWidget from "./CartWidget";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full flex justify-between items-center
        bg-blue-900 text-yellow-400 p-4 shadow-lg z-50
      "
    >
      <h1 className="text-2xl font-bold uppercase m-0 text-yellow-400 no-underline hover:text-yellow-300 transition duration-300">
        Tienda Lauti
      </h1>

      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300  font-bold "
              : "text-white  hover:text-yellow-300 "
          }
        >
          Todos
        </NavLink>

        <NavLink
          to="/category/Camiseta"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300  font-bold "
              : "text-white  hover:text-yellow-300 "
          }
        >
          Camisetas
        </NavLink>

        <NavLink
          to="/category/Pantalón"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300  font-bold "
              : "text-white  hover:text-yellow-300 "
          }
        >
          Pantalones
        </NavLink>

        <NavLink
          to="/category/Conjunto"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300  font-bold "
              : "text-white  hover:text-yellow-300 "
          }
        >
          Conjuntos
        </NavLink>

        <NavLink
          to="/category/Accesorios"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300  font-bold "
              : "text-white  hover:text-yellow-300 "
          }
        >
          Accesorios
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
}
export default Navbar;
