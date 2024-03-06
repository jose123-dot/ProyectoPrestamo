import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SolicitupPCreate = () => {
  const [inputData, setInputData] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    apodo: "",
    nacionalidad: "",
    sexo: "",
    ocupacion: "",
    lugartrabajo: "",
    celular: "",
    telefonoResidencial: "",
    email: "",
    direccionpersonal: "",
    direccionfamiliar: "",
    direcciontrabajo: "",
    estatus: "Pendiente",
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
                    htmlFor="exampleInputPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Apodo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword2"
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
                        setInputData({ ...inputData, sexo: e.target.value })
                      }
                    >
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>otro</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Ocupacion
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Ocupacion"
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
                    Lugar de Trabajo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Lugar de Trabajo"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          lugartrabajo: e.target.value,
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
                          telefonoResidencial: e.target.value,
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
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Email"
                      onChange={(e) =>
                        setInputData({ ...inputData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Direccion Personal
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Direccion Personal"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          direccionpersonal: e.target.value,
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
                    Direccion Familiar
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Direccion Familiar"
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
                    htmlFor="exampleInputConfirmPassword2"
                    className="col-sm-3 col-form-label"
                  >
                    Direccion de Trabajo
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputConfirmPassword2"
                      placeholder="Direccion de Trabajo"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          direcciontrabajo: e.target.value,
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
