import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MenuOrdenRevision = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        MENU
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
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuOrdenRevision;
