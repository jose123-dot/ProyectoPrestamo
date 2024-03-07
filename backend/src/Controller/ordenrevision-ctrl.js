import OrdenRevisionModel from "../Model/ordenrevision-model.js";

export const getOrdenRevision = async (req, res) => {
  const OrdenRevision = await OrdenRevisionModel.find();
  res.json(OrdenRevision);
}

export const saveOrdenRevision = async (req, res) => {
  const {
    estatus,
    usuario,
    solicitudpersona,
    solicitudempresa,
  } = req.body;

  const ordenRevision = {
    estatus: estatus,
    usuario: usuario,
    solicitudpersona: solicitudpersona,
    solicitudempresa: solicitudempresa,
  };

  await OrdenRevisionModel.create(ordenRevision);
  res.send(ordenRevision);
};

export const editOrdenRevision = async (req, res) => {
  const {
    estatus,
    usuario,
    solicitudpersona,
    solicitudempresa,
  } = req.body;

  const { _id } = req.params;

  const ordenRevision = {
    estatus: estatus,
    usuario: usuario,
    solicitudpersona: solicitudpersona,
    solicitudempresa: solicitudempresa,
  };

  await OrdenRevisionModel.findByIdAndUpdate(_id, ordenRevision);
  res.json(req.body);
};

export const deleteOrdenRevision = async (req, res) => {
  const { _id } = req.params;

  await OrdenRevisionModel.findByIdAndDelete({ _id: _id});
  res.json(req.body);
};