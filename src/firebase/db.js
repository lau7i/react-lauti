import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const documentos = await getDocs(collection(db, "productos"));
  const productos = [];

  documentos.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id });
  });
  return productos;
};
