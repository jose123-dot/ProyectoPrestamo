import { useState } from "react";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../componentes/header";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PagoPrestamo = () => {
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
          <h1>Pago Prestamos</h1>
          <br />
          <Table striped="columns">
            <thead>
              <tr>
                <th>Prestamo</th>
                <th>Cliente</th>
                <th>Usuario</th>
                <th>Metodo Pago</th>
                <th>Monto Pagado</th>
                <th>Fecha Pago</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Jose Orlando</td>
                <td>Jose Maria</td>
                <td>Tarjeta</td>
                <td>10,000</td>
                <td>20/03/2024</td>               
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
          <Modal.Title>Pago Prestamo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pagar Prestamo</Modal.Body>
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

export default PagoPrestamo;
