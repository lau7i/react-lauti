import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer text={"Todavía no hay productos disponibles"} />
    </>
  );
}

export default App;
