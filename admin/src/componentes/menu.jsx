import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { List, Send } from "react-bootstrap-icons";

const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <List></List>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MAJOJOLEFA</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/ordenrevision">
                Orden Revision de Solicitudes
                <Send></Send>
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/revision">
                Revision de Solicitudes
              </Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/metodopago">Metodos de Pagos</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/contrato">Gestion de Contratos</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/cliente">Gestion de Clientes</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/prestamo">Prestamos</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/prestamo">Pago Prestamo</Navbar.Brand>
            </Container>
          </Navbar>

          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/prestamo">Gestion de Usuarios</Navbar.Brand>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Menu;
