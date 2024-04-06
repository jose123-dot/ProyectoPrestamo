import { useState, useEffect } from 'react';
import Menu from '../menu/menu.jsx';
import Header from '../header/header.jsx';
import axios from 'axios';

const ListOrdenRevision = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/solicitudpersona')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel ">
            <div className="content-wrapper bg-dark">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title display-2 text-center">SOLICITUDES ENVIADAS</h4>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>USUARIO</th>
                            <th>FECHA DE SOLICITUD</th>
                            <th>MONTO</th>
                            <th>ESTATUS</th>
                            <th>ACCION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((d, i) => (
                            <tr key={i}>
                              <td>{d.usuario.username}</td>
                              <td>{d.fecha}</td>
                              <td>{d.monto}</td>

                              <td>
                                <div className="btn btn-outline-warning mr-2">{d.estatus}</div>
                              </td>
                              <td>
                                <button className="btn btn-primary mr-2">Enviar Orden de Revision</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOrdenRevision;
