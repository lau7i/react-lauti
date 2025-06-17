import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProductDetail = async () => {
      try {
        const res = await fetch("/db/data.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const allProducts = await res.json();

        const foundProduct = allProducts.find((p) => p.id === id);

        if (foundProduct) {
          setDetail(foundProduct);
        } else {
          setError("Producto no encontrado.");
        }
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Error al cargar los detalles del producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-8 text-lg font-semibold text-blue-900">
        Cargando detalles del producto...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-8 text-lg text-red-600">
        Error: {error}
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="text-center mt-8 text-lg text-gray-600">
        No se pudo cargar el producto.
      </div>
    );
  }

  return <ItemDetail product={detail} />;
}

export default ItemDetailContainer;
