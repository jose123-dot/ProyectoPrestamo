import SolicitudEmpresaModel from "../Model/solicitudempresa-model.js";
//mostrar todo
export const getSolicitudEmpresa = async (req, res) => {
  const SolicitudEmpresa = await SolicitudEmpresaModel.find().populate({
    path: "usuario",
    select: "username",
  });

  try {
    res.json(SolicitudEmpresa);
  } catch (error) {
    res.send(error);
  }
};

//agregar
export const saveSolicitudEmpreesa = async (req, res) => {
  const { usuario, monto, tasainteres, duracionMeses } = req.body;

  const sEmpresa = {
    usuario: usuario,
    monto: parseFloat(monto),
    tasainteres: tasainteres, // Puedes utilizar el tipo de dato adecuado para Decimal128 si Zod lo soporta
    duracionMeses: duracionMeses,
  };
  req.files;

  try {
    await SolicitudEmpresaModel.create(sEmpresa);
    res.send(sEmpresa);
  } catch (error) {
    res.send(error);
  }
};

//editar
export const editSolicitudEmpresa = async (req, res, next) => {
  const { usuario, fecha, monto } = req.body;

  const { _id } = req.params;
  const sEmpresa = {
    usuario: usuario,
    fecha: fecha,
    monto: parseFloat(monto),
  };
  try {
    await SolicitudEmpresaModel.findByIdAndUpdate(_id, sEmpresa);
    res.json(req.body);
  } catch (error) {
    res.send(error);
  }
};

//eliminar
export const deleteSolicitudEmpresa = async (req, res) => {
  const { _id } = req.params;
  await SolicitudEmpresaModel.findByIdAndDelete({ _id: _id });
  res.json(req.body);
};
