import EmpresaModel from "../Model/empresa-model";

export const getEmpresa = async (req, res) => {
  const Empresa = await EmpresaModel.find();
  res.json(Empresa);
};

export const saveEmpresa = async (req, res) => {
  const {
    usuario,
    nombre,
    ubicacion,
    direccion,
    rnc,
    telefono,
    correo,
    fax,
    actividad,
    sitioweb,
    fechafundacion,
    paisfundacion,
    ingresosanuales,
    totalactivos,
  } = req.body;

  const empresa = {
    usuario: usuario,
    nombre: nombre,
    ubicacion: ubicacion,
    direccion: direccion,
    rnc: rnc,
    telefono: telefono,
    correo: correo,
    fax: fax,
    actividad: actividad,
    sitioweb: sitioweb,
    fechafundacion: fechafundacion,
    paisfundacion: paisfundacion,
    ingresosanuales: ingresosanuales,
    totalactivos: totalactivos,
  };

  await EmpresaModel.create(empresa);
  res.send(empresa);
};

export const editEmpresa = async (req, res) => {
  const {
    usuario,
    nombre,
    ubicacion,
    direccion,
    rnc,
    telefono,
    correo,
    fax,
    actividad,
    sitioweb,
    fechafundacion,
    paisfundacion,
    ingresosanuales,
    totalactivos,
  } = req.body;

  const { _id } = req.params;

  const empresa = {
    usuario: usuario,
    nombre: nombre,
    ubicacion: ubicacion,
    direccion: direccion,
    rnc: rnc,
    telefono: telefono,
    correo: correo,
    fax: fax,
    actividad: actividad,
    sitioweb: sitioweb,
    fechafundacion: fechafundacion,
    paisfundacion: paisfundacion,
    ingresosanuales: ingresosanuales,
    totalactivos: totalactivos,
  };

  await EmpresaModel.findByIdAndUpdate(_id, empresa);
  res.json(req.body);
};

export const deleteEmpresa = async (req, res) => {
  const { _id } = req.params;

  await EmpresaModell.findByIdAndDelete({ _id: _id});
  res.json(req.body);
};