import SolicitudPersonaModel from "../Model/solicitudpersona-model.js";

//mostrar todo

export const getSolicitudPersona = async (req, res) => {
  const SolicitudPersona = await SolicitudPersonaModel.find();
  res.json(SolicitudPersona);
};

//agregar
export const saveSolicitudPersona = async (req, res) => {
  const {
    nombre,
    apellido,
    documento,
    nacionalidad,
    sexo,
    apodo,
    ocupacion,
    lugartrabajo,
    telefonoResidencial,
    celular,
    email,
    direccionpersonal,
    direccionfamiliar,
    direcciontrabajo,
    estatus,
  } = req.body;
  const sPersona = {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    nacionalidad: nacionalidad,
    sexo: sexo,
    apodo: apodo,
    ocupacion: ocupacion,
    lugartrabajo: lugartrabajo,
    telefonoResidencial: telefonoResidencial,
    celular: celular,
    email: email,
    direccionpersonal: direccionpersonal,
    direccionfamiliar: direccionfamiliar,
    direcciontrabajo: direcciontrabajo,
    estatus: estatus,
  };

  await SolicitudPersonaModel.create(sPersona);
  res.send(sPersona);
};

//editar
export const editSolicitudPersona = async (req, res) => {
  const {
    nombre,
    apellido,
    documento,
    nacionalidad,
    sexo,
    apodo,
    ocupacion,
    lugartrabajo,
    telefonoResidencial,
    celular,
    email,
    direccionpersonal,
    direccionfamiliar,
    direcciontrabajo,
    estatus,
  } = req.body;

  const { _id } = req.params;

  const sPersona = {
    nombre: nombre,
    apellido: apellido,
    documento: documento,
    nacionalidad: nacionalidad,
    sexo: sexo,
    apodo: apodo,
    ocupacion: ocupacion,
    lugartrabajo: lugartrabajo,
    telefonoResidencial: telefonoResidencial,
    celular: celular,
    email: email,
    direccionpersonal: direccionpersonal,
    direccionfamiliar: direccionfamiliar,
    direcciontrabajo: direcciontrabajo,
    estatus: estatus,
  };
  await SolicitudPersonaModel.findByIdAndUpdate(_id, sPersona);
  res.json(req.body);
};

//eliminar
export const deleteSolicitudPersona = async (req, res) => {
  const { _id } = req.params;
  await SolicitudPersonaModel.findByIdAndDelete({ _id: _id });
  res.json(req.body);
};
