import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Header from "../../componentes/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
const Contrato = () => {
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
          <h1> Lista de Contratos</h1>

          <br />

          <br />

          <Table striped="columns">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Revision de Solicitud</th>
                <th>Metodo de Pago</th>
                <th>Monto</th>
                <th>Tasa de Interes</th>
                <th>Fecha de Inicio</th>
                <th>Duracion Meses</th>
                <th>Dia Pago</th>
                <th>Estado del Contrato</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jose Maria Suero Cuevas</td>
                <td>No de Revision</td>
                <td>Deposito</td>
                <td>45,000</td>
                <td>19.00%</td>
                <td>09-04-2024</td>
                <td>18</td>
                <td>09</td>
                <td>activo</td>
              </tr>
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nuevo Metodo de Pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label htmlFor="inputPassword5">Tipo </Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Agregar Nuevo Metodo
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Contrato;
