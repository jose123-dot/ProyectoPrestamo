import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SolicitupPCreate = () => {
  const [inputData, setInputData] = useState({
    nombre: "",
    apellido: "",
    apodo: "",
    nacionalidad: "",
    sexo: "",
    tipodocumento: "",
    documento: "",
    ocupacion: "",
    telefonoresidencial: "",
    celular: "",
    correo: "",
    direccion: "",
    noedificio: "",
    nocasa: "",
    sector: "",
    municipio: "",
    provincia: "",
    direccionfamiliar: "",
    cargotrabajo: "",
    direcciontrabajo: "",
    fuenteingreso: 0.0,
    otrosingresos: false,
    poseeinmueble: false,
    valorinmueble: 0.0,
    poseevehiculo: false,
    valorvehiculo: 0.0,
    monto: 0.0,
  });
  const navegate = useNavigate();

  //evento para el submit
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/solicitudpersona/agregar", inputData)
      .then((res) => {
        alert("se ha Insertado Correctamente!");
        navegate("/solicitudp");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <span>
          <i className="mdi mdi-account-multiple-outline"></i>
        </span>{" "}
        Nueva Solicitud
      </button>

      {/* boton para activar el modal para agregar */}
      <div
        className="modal fade"
        id="exampleModalLong"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5
                className="modal-title display-3 text-center"
                id="exampleModalLongTitle"
              >
                Solicitar Nuevo Prestamo
              </h5>
              <button
                type="button"
                className="close bg-danger text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="forms-sample" onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputUsername2"
                    className="col-sm-3 col-form-label"
                  >
                    Nombre
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername2"
                      placeholder="Nombre"
                      onChange={(e) =>
                        setInputData({ ...inputData, nombre: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputEmail2"
                    className="col-sm-3 col-form-label"
                  >
                    Apellido
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Apellido"
                      onChange={(e) =>
                        setInputData({ ...inputData, apellido: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleInputEmail2"
                    className="col-sm-3 col-form-label"
                  >
                    Apodo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail2"
                      placeholder="Apodo"
                      onChange={(e) =>
                        setInputData({ ...inputData, apodo: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Nacionalidad
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Nacionalidad"
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
                  <label
                    htmlFor="exampleFormControlSelect2"
                    className="col-sm-3 col-form-label"
                  >
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
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect2"
                    className="col-sm-3 col-form-label"
                  >
                    Tipo de Documento
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          tipodocumentodocumento: e.target.value,
                        })
                      }
                    >
                      <option>Cedula</option>
                      <option>Pasaporte</option>
                      <option>DNI</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputMobile"
                    className="col-sm-3 col-form-label"
                  >
                    Documento
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputMobile"
                      placeholder="Cedula o Pasaporte"
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
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Profesion
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Profesion"
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
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Telefono Residencial
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Telefono Residencial"
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
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Celular
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Celular"
                      onChange={(e) =>
                        setInputData({ ...inputData, celular: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Correo Electronico
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Correo Electronico"
                      onChange={(e) =>
                        setInputData({ ...inputData, correo: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Direccion
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
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
                  <label
                    htmlFor="exampleInputNoEdificio"
                    className="col-sm-3 col-form-label"
                  >
                    No. Edificio
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputNoEdificio"
                      placeholder="No. Edificio"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          noedificio: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputNoCasa"
                    className="col-sm-3 col-form-label"
                  >
                    No. Casa
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputNoCasa"
                      placeholder="No. Casa"
                      onChange={(e) =>
                        setInputData({ ...inputData, nocasa: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputSector"
                    className="col-sm-3 col-form-label"
                  >
                    Sector
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputSector"
                      placeholder="Sector"
                      onChange={(e) =>
                        setInputData({ ...inputData, sector: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputMunicipio"
                    className="col-sm-3 col-form-label"
                  >
                    Municipio
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputMunicipio"
                      placeholder="Municipio"
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
                  <label
                    htmlFor="exampleInputProvincia"
                    className="col-sm-3 col-form-label"
                  >
                    Provincia
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputProvincia"
                      placeholder="Provincia"
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
                  <label
                    htmlFor="exampleInputDireccionFamiliar"
                    className="col-sm-3 col-form-label"
                  >
                    Dirección Familiar
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDireccionFamiliar"
                      placeholder="Dirección Familiar"
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
                  <label
                    htmlFor="exampleInputCargoTrabajo"
                    className="col-sm-3 col-form-label"
                  >
                    Cargo de Trabajo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCargoTrabajo"
                      placeholder="Cargo de Trabajo"
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
                  <label
                    htmlFor="exampleInputDireccionTrabajo"
                    className="col-sm-3 col-form-label"
                  >
                    Dirección de Trabajo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDireccionTrabajo"
                      placeholder="Dirección de Trabajo"
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
                  <label
                    htmlFor="exampleInputFuenteIngreso"
                    className="col-sm-3 col-form-label"
                  >
                    Fuente de Ingreso
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputFuenteIngreso"
                      placeholder="Fuente de Ingreso"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          fuenteingreso: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleInputOtrosIngresos"
                    className="col-sm-3 col-form-label"
                  >
                    Otros Ingresos
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="exampleInputOtrosIngresos"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          otrosingresos: e.target.value === "true",
                        })
                      }
                    >
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputPoseeInmueble"
                    className="col-sm-3 col-form-label"
                  >
                    Posee Inmueble
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="exampleInputPoseeInmueble"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          poseeinmueble: e.target.value === "true",
                        })
                      }
                    >
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputValorInmueble"
                    className="col-sm-3 col-form-label"
                  >
                    Valor del Inmueble
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputValorInmueble"
                      placeholder="Valor del Inmueble"
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
                  <label
                    htmlFor="exampleInputPoseeVehiculo"
                    className="col-sm-3 col-form-label"
                  >
                    Posee Vehículo
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="exampleInputPoseeVehiculo"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          poseevehiculo: e.target.value === "true",
                        })
                      }
                    >
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputValorVehiculo"
                    className="col-sm-3 col-form-label"
                  >
                    Valor del Vehículo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputValorVehiculo"
                      placeholder="Valor del Vehículo"
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
                  <label
                    htmlFor="exampleInputMonto"
                    className="col-sm-3 col-form-label"
                  >
                    Monto
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputMonto"
                      placeholder="Monto"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          monto: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mr-2">
                  <span className="mdi mdi-send"></span> Enviar Solicitud
                </button>
                <button
                  className="btn btn-danger text-white "
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Cancelar Orden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SolicitupPCreate;
