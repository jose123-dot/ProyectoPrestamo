import React, { useEffect, useState } from "react";
import OrdenRevisionCreate from "../ordenrevision/OrdenRevisionCreate";
import axios from "axios";
const OrdenRevisionTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/ordenrevision")
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
              Orden Solicitudes
            </h4>
            <OrdenRevisionCreate></OrdenRevisionCreate>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Solicitud Prestamo Persona</th>
                    <th>Solicitud Prestamo Empresa</th>
                    <th>Usuario</th>
                    <th>Estatus</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.solicitudpersona}</td>
                      <td>{d.solicitudempresa}</td>
                      <td>{d.usuario}</td>
                      <td>{d.estatus}</td>
                      <td>{d.fecha}</td>
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

export default OrdenRevisionTable;
