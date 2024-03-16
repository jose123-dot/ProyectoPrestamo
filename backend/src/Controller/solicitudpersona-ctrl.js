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
    apodo,
    nacionalidad,
    sexo,
    tipodocumento,
    documento,
    ocupacion,
    telefonoresidencial,
    celular,
    correo,
    direccion,
    noedificio,
    nocasa,
    sector,
    municipio,
    provincia,
    direccionfamiliar,
    cargotrabajo,
    direcciontrabajo,
    fuenteingreso,
    otrosingresos,
    poseeinmueble,
    valorinmueble,
    poseevehiculo,
    valorvehiculo,
    monto,
  } = req.body;

  const sPersona = {
    nombre: nombre,
    apellido: apellido,
    apodo: apodo,
    nacionalidad: nacionalidad,
    sexo: sexo,
    tipodocumento: tipodocumento,
    documento: documento,
    ocupacion: ocupacion,
    telefonoresidencial: telefonoresidencial,
    celular: celular,
    correo: correo,
    direccion: direccion,
    noedificio: noedificio,
    nocasa: nocasa,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    direccionfamiliar: direccionfamiliar,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    fuenteingreso: fuenteingreso,
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    valorinmueble: valorinmueble,
    poseevehiculo: poseevehiculo,
    valorvehiculo: valorvehiculo,
    monto: monto,
  };

  await SolicitudPersonaModel.create(sPersona);
  res.send(sPersona);
};

//editar
export const editSolicitudPersona = async (req, res) => {
  const {
    nombre,
    apellido,
    apodo,
    nacionalidad,
    sexo,
    tipodocumento,
    documento,
    ocupacion,
    telefonoresidencial,
    celular,
    correo,
    direccion,
    noedificio,
    nocasa,
    sector,
    municipio,
    provincia,
    direccionfamiliar,
    cargotrabajo,
    direcciontrabajo,
    fuenteingreso,
    otrosingresos,
    poseeinmueble,
    valorinmueble,
    poseevehiculo,
    valorvehiculo,
    monto,
  } = req.body;

  const { _id } = req.params;

  const sPersona = {
    nombre: nombre,
    apellido: apellido,
    apodo: apodo,
    nacionalidad: nacionalidad,
    sexo: sexo,
    tipodocumento: tipodocumento,
    documento: documento,
    ocupacion: ocupacion,
    telefonoresidencial: telefonoresidencial,
    celular: celular,
    correo: correo,
    direccion: direccion,
    noedificio: noedificio,
    nocasa: nocasa,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    direccionfamiliar: direccionfamiliar,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    fuenteingreso: fuenteingreso,
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    valorinmueble: valorinmueble,
    poseevehiculo: poseevehiculo,
    valorvehiculo: valorvehiculo,
    monto: monto,
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
