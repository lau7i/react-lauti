import Item from "./Item";

function ItemList({ items }) {
  return (
    <div
      className="
        grid gap-8 p-8 max-w-6xl mx-auto
        bg-gray-50 rounded-lg shadow-md
        mt-20 mb-8
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
      "
    >
      {items.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
}
export default ItemList;
