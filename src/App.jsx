import { BrowserRouter,Routes, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";
import { Item } from "./components/Item"
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
