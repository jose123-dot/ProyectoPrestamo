import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
const SolicitupPCreate = () => {
  const [inputData, setInputData] = useState({
    nombre: '',
    apellido: '',
    apodo: '',
    nacionalidad: '',
    sexo: '',
    tipodocumento: '',
    documento: '',
    ocupacion: '',
    telefonoresidencial: '',
    celular: '',
    correo: '',
    direccion: '',
    noresidencia: '',
    sector: '',
    municipio: '',
    provincia: '',
    direccionfamiliar: '',
    cargotrabajo: '',
    direcciontrabajo: '',
    ingreso: 0.0,
    otrosingresos: false,
    poseeinmueble: false,
    valorinmueble: 0.0,
    poseevehiculo: false,
    valorvehiculo: 0.0,
    monto: 0.0,
    archivos: [],
  });
  const [archivos, setarchivos] = useState([]);

  const formData = new FormData();
  for (const key in inputData) {
    formData.append(key, inputData[key]);
  }
  archivos.forEach((file) => formData.append('documentos', file));
  const navegate = useNavigate();

  //arrastrar elemento
  const onDrop = (acceptedFiles) => {
    setarchivos([...archivos, ...acceptedFiles]);
  };

  //evento para el submit
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/solicitudpersona/agregar', formData)
      .then((res) => {
        alert('se ha Insertado Correctamente!');
        navegate('/solicitudp');
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
            Apellido
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Apellido"
              value={inputData.apellido}
              onChange={(e) => setInputData({ ...inputData, apellido: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">
            Apodo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              placeholder="Apodo"
              value={inputData.apodo}
              onChange={(e) => setInputData({ ...inputData, apodo: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Nacionalidad
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Nacionalidad"
              value={inputData.nacionalidad}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  nacionalidad: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleFormControlSelect2" className="col-sm-3 col-form-label">
            Sexo
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  sexo: e.target.value,
                })
              }
            >
              <option value={inputData.sexo}>Masculino</option>
              <option value={inputData.sexo}>Femenino</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleFormControlSelect2" className="col-sm-3 col-form-label">
            Tipo de Documento
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              value={inputData.tipodocumento}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  tipodocumentodocumento: e.target.value,
                })
              }
            >
              <option value="Cedula">Cedula</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="DNI">DNI</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">
            Documento
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputMobile"
              placeholder="Cedula o Pasaporte"
              value={inputData.documento}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  documento: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Profesion
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Profesion"
              value={inputData.ocupacion}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  ocupacion: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Telefono Residencial
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Telefono Residencial"
              value={inputData.telefonoresidencial}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  telefonoresidencial: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">
            Celular
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputConfirmPassword2"
              placeholder="Celular"
              value={inputData.celular}
              onChange={(e) => setInputData({ ...inputData, celular: e.target.value })}
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
              placeholder="Correo Electronico"
              value={inputData.correo}
              onChange={(e) => setInputData({ ...inputData, correo: e.target.value })}
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
              placeholder="Direccion"
              value={inputData.direccion}
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
          <label htmlFor="exampleInputNoCasa" className="col-sm-3 col-form-label">
            No. Residencia
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputNoCasa"
              value={inputData.noresidencia}
              placeholder="Edificio No."
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  noresidencia: e.target.value,
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
            Dirección Familiar
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputDireccionFamiliar"
              placeholder="Dirección Familiar"
              value={inputData.direccionfamiliar}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direccionfamiliar: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputCargoTrabajo" className="col-sm-3 col-form-label">
            Cargo de Trabajo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputCargoTrabajo"
              placeholder="Cargo de Trabajo"
              value={inputData.cargotrabajo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  cargotrabajo: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputDireccionTrabajo" className="col-sm-3 col-form-label">
            Dirección de Trabajo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputDireccionTrabajo"
              placeholder="Dirección de Trabajo"
              value={inputData.direcciontrabajo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direcciontrabajo: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputDireccionTrabajo" className="col-sm-3 col-form-label">
            Valor de Ingreso
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="exampleInputDireccionTrabajo"
              placeholder="DOP$"
              value={inputData.ingreso}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  ingreso: parseFloat(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleInputOtrosIngresos" className="col-sm-3 col-form-label">
            Otros Ingresos
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="exampleInputOtrosIngresos"
              value={inputData.otrosingresos}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  otrosingresos: e.target.value === 'true',
                })
              }
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputPoseeInmueble" className="col-sm-3 col-form-label">
            Posee Inmueble
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="exampleInputPoseeInmueble"
              value={inputData.tipodocumento}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  poseeinmueble: e.target.value === 'true',
                })
              }
            >
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputValorInmueble" className="col-sm-3 col-form-label">
            Valor del Inmueble
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="exampleInputValorInmueble"
              placeholder="Valor del Inmueble"
              value={inputData.valorinmueble}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  valorinmueble: parseFloat(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputPoseeVehiculo" className="col-sm-3 col-form-label">
            Posee Vehículo
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              id="exampleInputPoseeVehiculo"
              value={inputData.poseevehiculo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  poseevehiculo: e.target.value === 'true',
                })
              }
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputValorVehiculo" className="col-sm-3 col-form-label">
            Valor del Vehículo
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="exampleInputValorVehiculo"
              placeholder="Valor del Vehículo"
              value={inputData.valorvehiculo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  valorvehiculo: parseFloat(e.target.value),
                })
              }
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="exampleInputMonto" className="col-sm-3 col-form-label">
            Monto
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="exampleInputMonto"
              placeholder="Monto"
              value={inputData.monto}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  monto: parseFloat(e.target.value),
                })
              }
            />
          </div>
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
export default SolicitupPCreate;
