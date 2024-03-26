import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
const OrdenRevisionCreate = () => {
  const [inputData, setInputData] = useState({
    solicitudpersona: '',
    solicitudempresa: '',
    usuario: '',
    estatus: 'Pendiente',
    fecha: '',

  });
 
  //evento para el submit
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/ordenrevision/agregar', formData)
      .then((res) => {
        alert('se ha Insertado Correctamente!');
        navegate('/ordenrevision');
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form className="forms-sample" onSubmit={handleSubmit}>
        <h1 className="text-center">Llenar Formulario para enviar la Solicitud</h1>
        <br></br>
        <div className="form-group row">
          <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">
            Nombre
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername2"
              placeholder="Nombre"
              value={inputData.nombre}
              onChange={(e) => setInputData({ ...inputData, nombre: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">
            Rnc
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Rnc"
              value={inputData.rnc}
              onChange={(e) => setInputData({ ...inputData, rnc: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">
            Fax
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Fax"
              value={inputData.fax}
              onChange={(e) => setInputData({ ...inputData, fax: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Actividad
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Actividad"
              value={inputData.actividad}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  actividad: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">
            Telefono
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputMobile"
              placeholder="Telefono"
              value={inputData.telefono}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                 telefono: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
           Correo Electronico
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Sitio Web
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Sitio Web"
              value={inputData.sitioweb}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  sitioweb: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Ingresos Anuales
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Ingresos Anuales"
              value={inputData.ingresosanuales}
              onChange={(e) => setInputData({ ...inputData, ingresosanuales: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
           Pais Fundacion
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Pais Fundacion"
              value={inputData.paisfundacion}
              onChange={(e) => setInputData({ ...inputData, paisfundacion: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Fecha Fundacion
          </label>
          <div className="col-sm-9">
            <input
              type="date"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Fecha Fundacion"
              value={inputData.fechafundacion}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  fechafundacion: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
           Total Activos
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              value={inputData.noresidencia}
              placeholder="Total Activos"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  totalactivos: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
           Direccion
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              value={inputData.direccion}
              placeholder="Direccion"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direccion: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputSector" className="col-sm-3 col-form-label">
            Sector
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputSector"
              placeholder="Sector"
              value={inputData.sector}
              onChange={(e) => setInputData({ ...inputData, sector: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMunicipio" className="col-sm-3 col-form-label">
            Municipio
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputMunicipio"
              placeholder="Municipio"
              value={inputData.municipio}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  municipio: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputProvincia" className="col-sm-3 col-form-label">
            Provincia
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputProvincia"
              placeholder="Provincia"
              value={inputData.provincia}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  provincia: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputDireccionFamiliar" className="col-sm-3 col-form-label">
            Codigo
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="exampleInputDireccionFamiliar"
              placeholder="Codigo"
              value={inputData.codigo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  codigo: e.target.value,
                })
              }
            />
          </div>
        </div>
       
        <div className="form-group row">
          <label htmlFor="exampleInputValorVehiculo" className="col-sm-3 col-form-label">
            Archivos
          </label>
   
          <br></br>
          <br></br>
          <br></br>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{
                  border: '1px dashed #ccc',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <input {...getInputProps()} />
                Arrastra y suelta tus archivos aquí, o haz click para seleccionarlos.
              </div>
            )}
          </Dropzone>
        </div>

        <button type="submit" className="btn btn-primary mr-2">
          <span className="mdi mdi-send"></span> Enviar Solicitud
        </button>
        <button className="btn btn-danger text-white " data-dismiss="modal" aria-label="Close">
          Cancelar Orden
        </button>
      </form>
    </>
  );
};
export default OrdenRevisionCreate;
