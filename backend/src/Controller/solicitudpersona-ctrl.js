import SolicitudPersonaModel from "../Model/solicitudpersona-model.js";
import multer from "multer";
import path from "path";

//multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

export const upload = multer({ storage: storage });
//fin de configuracion de multer

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
    noresidencia,
    sector,
    municipio,
    provincia,
    direccionfamiliar,
    cargotrabajo,
    direcciontrabajo,
    ingreso,
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
    noresidencia: parseInt(noresidencia),
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    direccionfamiliar: direccionfamiliar,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    ingreso: parseFloat(ingreso),
    otrosingresos: otrosingresos,
    poseeinmueble: poseeinmueble,
    valorinmueble: parseFloat(valorinmueble),
    poseevehiculo: poseevehiculo,
    valorvehiculo: parseFloat(valorvehiculo),
    monto: parseFloat(monto),
  };
  req.files;

  await SolicitudPersonaModel.create(sPersona);
  res.send(sPersona);
};

//editar
export const editSolicitudPersona = async (req, res, next) => {
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
    noresidencia,
    sector,
    municipio,
    provincia,
    direccionfamiliar,
    cargotrabajo,
    direcciontrabajo,
    ingreso,
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
    noresidencia: noresidencia,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    direccionfamiliar: direccionfamiliar,
    cargotrabajo: cargotrabajo,
    direcciontrabajo: direcciontrabajo,
    ingreso: ingreso,
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
