import React, { useEffect, useState } from "react";
import SolicitupPCreate from "../solicitudP/SolicitupPCreate";
import axios from "axios";
const SolicitudPTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/solicitudpersona")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title display-2 text-center">
              {" "}
              Solicitudes Enviadas
            </h4>
            <SolicitupPCreate></SolicitupPCreate>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> Nombre </th>
                    <th> Apellido </th>
                    <th> Documento </th>
                    <th> Apodo </th>
                    <th> Nacionalidad </th>
                    <th> Sexo </th>
                    <th> Ocupacion </th>
                    <th> Lugar de Trabajo </th>
                    <th> Celular </th>
                    <th> Telefono Residencial</th>
                    <th> Email</th>
                    <th> Direccion Personal </th>
                    <th> Direccion Familiar </th>
                    <th> Estatus </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.nombre}</td>
                      <td>{d.apellido}</td>
                      <td>{d.documento}</td>
                      <td>{d.apodo}</td>
                      <td>{d.nacionalidad}</td>
                      <td>{d.sexo}</td>
                      <td>{d.ocupacion}</td>
                      <td>{d.lugartrabajo}</td>
                      <td>{d.celular}</td>
                      <td>{d.telefonoResidencial}</td>
                      <td>{d.email}</td>
                      <td>{d.direccionpersonal}</td>
                      <td>{d.direccionfamiliar}</td>
                      <td>{d.estatus}</td>
                      <td>
                        <button className="btn btn-success mr-2">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudPTable;
