import SolicitudPersonaModel from "../Model/solicitudpersona-model.js";

//mostrar todo
export const getSolicitudPersona = async (req, res) => {
  const SolicitudPersona = await SolicitudPersonaModel.find().populate({
    path: "usuario",
    select: "username",
  });
  res.json(SolicitudPersona);
};

//agregar
export const saveSolicitudPersona = async (req, res) => {
  const { usuario, monto } = req.body;

  const sPersona = {
    usuario: usuario,
    monto: parseFloat(monto),
  };
  req.files;

  await SolicitudPersonaModel.create(sPersona);
  res.send(sPersona);
};

//editar
export const editSolicitudPersona = async (req, res, next) => {
  const { usuario, fecha, monto } = req.body;

  const { _id } = req.params;

  const sPersona = {
    usuario: usuario,
    fecha: fecha,
    monto: parseFloat(monto),
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
