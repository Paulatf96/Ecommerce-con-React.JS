import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Atenea </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to={`/category/Pulseras`}>
              <span className="nav-link">Pulseras</span>
            </NavLink>
            <NavLink to={`/category/Cadenas`}>
              <span className="nav-link">Cadenas</span>
            </NavLink>
            <NavLink to={`/category/Aretes`}>
              <span className="nav-link">Aretes</span>
            </NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
