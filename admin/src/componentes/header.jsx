import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Menu from "./menu";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Menu></Menu>
      <Container>
        <Navbar.Brand href="/dashboard">MAJOJOLEFA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Usuario: <Link to="/">Mark Otto</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
