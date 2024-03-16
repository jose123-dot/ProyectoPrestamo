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
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Apodo</th>
                    <th>Nacionalidad</th>
                    <th>Sexo</th>
                    <th>Tipo Documento</th>
                    <th>Documento</th>
                    <th>Ocupación</th>
                    <th>Teléfono Residencial</th>
                    <th>Celular</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Número de Edificio</th>
                    <th>Número de Casa</th>
                    <th>Sector</th>
                    <th>Municipio</th>
                    <th>Provincia</th>
                    <th>Dirección Familiar</th>
                    <th>Cargo Trabajo</th>
                    <th>Dirección Trabajo</th>
                    <th>Fuente Ingreso</th>
                    <th>Otros Ingresos</th>
                    <th>Posee Inmueble</th>
                    <th>Valor Inmueble</th>
                    <th>Posee Vehículo</th>
                    <th>Valor Vehículo</th>
                    <th>Monto</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr key={i}>
                      <td>{d.nombre}</td>
                      <td>{d.apellido}</td>
                      <td>{d.apodo}</td>
                      <td>{d.nacionalidad}</td>
                      <td>{d.sexo}</td>
                      <td>{d.tipodocumento}</td>
                      <td>{d.documento}</td>
                      <td>{d.ocupacion}</td>
                      <td>{d.telefonoresidencial}</td>
                      <td>{d.celular}</td>
                      <td>{d.correo}</td>
                      <td>{d.direccion}</td>
                      <td>{d.noedificio}</td>
                      <td>{d.nocasa}</td>
                      <td>{d.sector}</td>
                      <td>{d.municipio}</td>
                      <td>{d.provincia}</td>
                      <td>{d.direccionfamiliar}</td>
                      <td>{d.cargotrabajo}</td>
                      <td>{d.direcciontrabajo}</td>
                      <td>{d.fuenteingreso}</td>
                      <td>{d.otrosingresos}</td>
                      <td>{d.poseeinmueble}</td>
                      <td>{d.valorinmueble}</td>
                      <td>{d.poseevehiculo}</td>
                      <td>{d.valorvehiculo}</td>
                      <td>{d.monto}</td>
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
