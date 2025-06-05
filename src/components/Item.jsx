function Item({ prod }) {
  return (
    <div className="Contenedor-de-las-card" key={prod.id}>
      <img className="img-de-items" src={prod.imagen} alt={prod.nombre} />
      <p className="nombre-de-items">{prod.nombre}</p>
      <p className="precio-de-items">$ {prod.precio}</p>
      <p className="descripcion-de-items">{prod.descripcion}</p>
      <button className="button-de-items">Ver más</button>
    </div>
  );
}
export default Item;
