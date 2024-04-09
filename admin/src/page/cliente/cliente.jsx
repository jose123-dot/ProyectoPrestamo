import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Header from "../../componentes/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
const Cliente = () => {
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
          <h1> Listado de Clientes Activos</h1>

          <br />

          <br />

          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Apodo</th>
                <th>Nacionalidad</th>
                <th>Sexo</th>
                <th>Tipo de Documento</th>
                <th>Documento</th>
                <th>Ocupación</th>
                <th>Teléfono Residencial</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>No. Residencia</th>
                <th>Sector</th>
                <th>Municipio</th>
                <th>Provincia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jose Maria </td>
                <td>Suero Cuevas</td>
                <td>Joselo</td>
                <td>Dominicana</td>
                <td>Masculino</td>
                <td>Cedula</td>
                <td>40232170627</td>
                <td>Maestro</td>
                <td>8095245011</td>
                <td>8095245011</td>
                <td>Savica</td>
                <td>809</td>
                <td>Camboya</td>
                <td>Barahona</td>
                <td>Barahona</td>
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

export default Cliente;
