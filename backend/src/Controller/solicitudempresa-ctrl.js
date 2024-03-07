import SolicitudEmpresaModel from "../Model/solicitudempresa-model.js";

//mostrar todo

export const getSolicitudEmpresa = async (req, res) => {
  const SolicitudEmpresa = await SolicitudEmpresaModel.find();
  res.json(SolicitudEmpresa);
};

//agregar
export const saveSolicitudEmpresa = async (req, res) => {
  const {
    nombre,
    rnc,
    fax,
    actividad,
    telefono,
    email,
    sitioweb,
    ingresosanuales,
    paisfundacion,
    fechafundacion,
    totalactivos,
    direccion,
    sector,
    municipio,
    provincia,
    codigo,
    estatus,
  } = req.body;
  const sEmpresa = {
    nombre: nombre,
    rnc: rnc,
    fax: fax,
    actividad: actividad,
    telefono: telefono,
    email: email,
    sitioweb: sitioweb,
    ingresosanuales: ingresosanuales,
    paisfundacion: paisfundacion,
    fechafundacion: fechafundacion,
    totalactivos: totalactivos,
    direccion: direccion,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    codigo: codigo,
    estatus: estatus,
  };

  await SolicitudEmpresaModel.create(sEmpresa);
  res.send(sEmpresa);
};

//editar
export const editSolicitudEmpresa = async (req, res) => {
  const {
    _id,
    rnc,
    fax,
    actividad,
    telefono,
    email,
    sitioweb,
    ingresosanuales,
    paisfundacion,
    fechafundacion,
    totalactivos,
    direccion,
    sector,
    municipio,
    provincia,
    codigo,
    estatus,
  } = req.body;

  const sEmpresa = {
    nombre: nombre,
    rnc: rnc,
    fax: fax,
    actividad: actividad,
    telefono: telefono,
    email: email,
    sitioweb: sitioweb,
    ingresosanuales: ingresosanuales,
    paisfundacion: paisfundacion,
    fechafundacion: fechafundacion,
    totalactivos: totalactivos,
    direccion: direccion,
    sector: sector,
    municipio: municipio,
    provincia: provincia,
    codigo: codigo,
    estatus: estatus,
  };
  await SolicitudEmpresaModel.findByIdAndUpdate(_id, sEmpresa);
  res.json(req.body);
};

//eliminar
export const deleteSolicitudEmpresa = async (req, res) => {
  const { _id } = req.body;
  await SolicitudEmpresaModel.findByIdAndDelete({ _id: _id });
  res.json(req.body);
};
