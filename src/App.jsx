import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-25">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cartContainer" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
