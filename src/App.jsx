import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Item } from "./components/ItemListContainer/Item";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { CartContext } from "./Context/CartContext";

function App() {
  return (
    <CartContext.Provider value={{}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
   
  );
}

export default App;
