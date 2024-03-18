import React, { useEffect, useState } from "react";
import SolicitudECreate from "../solicitudE/SolicitudECreate";
import axios from "axios";
const SolicitudETable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/solicitudempresa")
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
            <SolicitudECreate></SolicitudECreate>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Rnc</th>
                    <th>Fax</th>
                    <th>Actividad</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Sitio Web</th>
                    <th>Ingresos Anuales</th>
                    <th>Pais Fundacion</th>
                    <th>Fecha Fundacion</th>
                    <th>Total Activos</th>
                    <th>Codigo</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.nombre}</td>
                      <td>{d.rnc}</td>
                      <td>{d.fax}</td>
                      <td>{d.actividad}</td>
                      <td>{d.telefono}</td>
                      <td>{d.email}</td>
                      <td>{d.sitioweb}</td>
                      <td>{d.ingresosanuales}</td>
                      <td>{d.paisfundacion}</td>
                      <td>{d.fechafundacion}</td>
                      <td>{d.totalactivos}</td>
                      <td>{d.direccion}</td>
                      <td>{d.sector}</td>
                      <td>{d.municipio}</td>
                      <td>{d.provincia}</td>
                      <td>{d.codigo}</td>
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

export default SolicitudETable;
