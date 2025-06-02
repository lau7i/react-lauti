import CartWidget from "./CartWidget";
function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "darkblue",
        padding: "1rem 2rem",
        color: "yellow",
        boxShadow: " 0 4px 8px black",
      }}
    >
      <h1
        style={{ margin: 0, fontSize: " 1.8rem", textTransform: "uppercase " }}
      >
        Tienda Lauti
      </h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: " white", fontSize: "1rem" }}>
          Camisetas
        </a>
        <a href="#" style={{ color: " white", fontSize: "1rem" }}>
          Pantalones
        </a>
        <a href="#" style={{ color: " white", fontSize: "1rem" }}>
          Conjuntos
        </a>
        <a href="#" style={{ color: " white", fontSize: "1rem" }}>
          Accesorios
        </a>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
}
export default Navbar;
