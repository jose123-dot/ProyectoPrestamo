import React from "react";

const SolicitudPform = () => {
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
        Solicitar Nuevo Prestamo Personal
      </button>

      {/* boton para activar el modal para agregar */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Solicitar Nuevo Prestamo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="forms-sample">
                <div className="form-group row">
                  <label
                    for="exampleInputUsername2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputEmail2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputMobile"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputPassword2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleFormControlSelect2"
                    className="col-sm-3 col-form-label"
                  >
                    Sexo
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>otro</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="exampleInputConfirmPassword2"
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
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  <span className="mdi mdi-send"></span> Enviar Solicitud
                </button>
                <button className="btn btn-danger">Cancelar Orden</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SolicitudPform;
