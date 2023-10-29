import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "./CartWidget";

export const NavBar = () => {
    return <> 
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="">Atenea</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Collares</Nav.Link>
            <Nav.Link href="">Aretes</Nav.Link>
            <Nav.Link href="">Pulseras</Nav.Link>
            <Nav.Link href="">Outlet</Nav.Link>
          </Nav>
            <CartWidget/>
          
        </Container>
      </Navbar>
    </>
}