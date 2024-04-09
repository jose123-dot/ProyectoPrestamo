import { useState } from "react";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../componentes/header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OrdenRevision = () => {
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
          <h1>Orden de Revision de Solicitudes Pendientes</h1>
          <br />
          <Table striped="columns">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Fecha de la Solicitud</th>
                <th>Monto Solicitado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jose Maria Suero Cuevas</td>
                <td>09-04-2024</td>
                <td>45,66767</td>
                <td>
                  <Button variant="success" onClick={handleShow}>
                    Ordenar Revision
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
          <Modal.Title>Ordenar Revision</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ordenando Orden Revision</Modal.Body>
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

export default OrdenRevision;
