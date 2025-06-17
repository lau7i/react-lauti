import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/db/data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const allProducts = await res.json();

        if (categoryName) {
          const filteredProducts = allProducts.filter(
            (prod) => prod.categoria === categoryName
          );
          setItems(filteredProducts);
        } else {
          setItems(allProducts);
        }
      } catch (error) {
        console.error("Error filtering products:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
