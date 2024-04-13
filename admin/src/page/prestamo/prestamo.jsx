import { useState } from "react";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../componentes/header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Prestamo = () => {
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
          <h1>Prestamos</h1>
          <br />
          <Table striped="columns">
            <thead>
              <tr>
                <th>Contrato</th>
                <th>Cliente</th>
                <th>Monto Prestamo</th>
                <th>Monto Pagado</th>
                <th>Monto Restante</th>
                <th>Mes No Pagado</th>
                <th>Mora</th>
                <th>Fecha</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>005</td>
                <td>Luis Enrique</td>
                <td>20,000</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>febrero</td>     
                <td>0.00</td>
                <td>20/10/2023</td>
                      
                <td>
                  <Button variant="success" onClick={handleShow}>
                   Editar
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
          <Modal.Title>Prestamo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Procesando Cambios</Modal.Body>
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

export default Prestamo;
