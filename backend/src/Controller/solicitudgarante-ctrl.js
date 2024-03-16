import SolicitudGaranteModel from "../Model/solicitudgarante-model.js";

export const getSolicitudGarante = async (req, res) => {
  const SolicitudGarante = await SolicitudGaranteModel.find();
  res.json(SolicitudGarante);
};

export const saveSolicitudGarante = async (req, res) => {
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
    trabajaactualmente,
    nombrelugartrabajo,
    cargotrabajo,
    direcciontrabajo,
    ingresoprincipal,
    poseeotrosingresos,
    otrosingresos,
    poseeinmueble,
    tipoinmueble,
    valorinmueble,
    poseevehiculo,
    tipovehiculo,
    valorvehiculo,
  } = req.body;

  const solicitudGarante = {
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
    trabajaactualmente: trabajaactualmente,
    nombrelugartrabajo: nombrelugartrabajo,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    ingresoprincipal: ingresoprincipal,
    poseeotrosingresos: poseeotrosingresos,
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    tipoinmueble: tipoinmueble,
    valorinmueble: valorinmueble,
    poseevehiculo: poseevehiculo,
    tipovehiculo: tipovehiculo,
    valorvehiculo: valorvehiculo,
  };

  await SolicitudGaranteModel.create(solicitudGarante);
  res.send(solicitudGarante);
};

export const editSolicitudGarante = async (req, res) => {
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
    trabajaactualmente,
    nombrelugartrabajo,
    cargotrabajo,
    direcciontrabajo,
    ingresoprincipal,
    poseeotrosingresos,
    otrosingresos,
    poseeinmueble,
    tipoinmueble,
    valorinmueble,
    poseevehiculo,
    tipovehiculo,
    valorvehiculo,
  } = req.body;

  const { _id } = req.params;

  const solicitudGarante = {
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
    trabajaactualmente: trabajaactualmente,
    nombrelugartrabajo: nombrelugartrabajo,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    ingresoprincipal: ingresoprincipal,
    poseeotrosingresos: poseeotrosingresos,
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    tipoinmueble: tipoinmueble,
    valorinmueble: valorinmueble,
    poseevehiculo: poseevehiculo,
    tipovehiculo: tipovehiculo,
    valorvehiculo: valorvehiculo,
  };

  await SolicitudGaranteModel.findByIdAndUpdate(_id, solicitudGarante);
  res.json(req.body);
};

export const deleteSolicitudGarante = async (req, res) => {
  const { _id } = req.params;

  await SolicitudGaranteModel.findByIdAndDelete({ _id: _id});
  res.json(req.body);
};