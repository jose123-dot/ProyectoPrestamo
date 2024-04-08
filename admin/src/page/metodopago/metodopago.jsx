import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Header from "../../componentes/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
const MetodoPago = () => {
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
          <h1>Metodos de Pago</h1>
          <br />

          <Button variant="primary" onClick={handleShow}>
            Agregar Nuevo Metodo de Pago
          </Button>

          <br />

          <Table striped="columns">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>@mdo</td>
                <td>
                  <Button variant="success">Editar</Button>
                </td>
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

export default MetodoPago;
