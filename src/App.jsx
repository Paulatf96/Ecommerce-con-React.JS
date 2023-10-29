import {NavBar} from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo="Bienvenido"> </ItemListContainer>
    </>
  )
}

export default App
