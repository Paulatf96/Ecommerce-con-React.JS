import {Link, NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "./CartWidget";
import products from "../../products.json"


const categories = products.map(product => product.categoria)
const categoriesSet= new Set(categories)



export const NavBar = () => {
    return <> 
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          
            <Navbar.Brand ><Link to="/">Atenea </Link></Navbar.Brand>
          
          
          <Nav className="me-auto">
            {[...categoriesSet].map((category) => (
              
              <NavLink key={category} to={`/category/${category}`}>
              <span className="nav-link">{category}</span>
            </NavLink>
            ) )}
          </Nav>
            <CartWidget/>
        </Container>
      </Navbar>
    </>
}