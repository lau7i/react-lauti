import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="product-list-container">
      {items.map((prod) => (
        <Item prod={prod} />
      ))}
    </div>
  );
}
export default ItemList;
