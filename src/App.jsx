import "./App.css";
import Navbar from "./components/NavBar";
import Itemlistcontainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <Itemlistcontainer text={"Todavía no hay productos disponibles"} />
    </>
  );
}

export default App;
