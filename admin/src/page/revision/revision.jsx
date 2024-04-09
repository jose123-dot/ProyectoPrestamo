import { useState } from "react";
import Table from "react-bootstrap/Table";
import header from "../../componentes/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../componentes/header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Revision = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <Row>
        <Col>
          <br />
          <h1>Aprobar Solicitudes Pendientes</h1>
          <br />
          <Table striped="columns">
            <thead>
              <tr>
                <th>Solicitud</th>
                <th>Usuario</th>
                <th>Fecha de Orden Revision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jose Maria</td>
                <td>Jose Maria Suero Cuevas</td>
                <td>09-04-2024</td>
                <td>
                  <Button variant="success" onClick={handleShow}>
                    Aprobar Solicitud
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aprobar Solicitudes Pendientes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Revision;
