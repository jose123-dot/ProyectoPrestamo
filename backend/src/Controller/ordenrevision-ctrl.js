import OrdenRevisionModel from "../Model/ordenrevision-model.js";

export const getOrdenRevision = async (req, res) => {
  try {
    const OrdenRevision = await OrdenRevisionModel.find();
    res.json(OrdenRevision);
  } catch (error) {
    res.send(error);
  }
};

export const saveOrdenRevision = async (req, res) => {
  const { estatus, usuario, solicitudpersona, solicitudempresa } = req.body;

  const ordenRevision = {
    estatus: estatus,
    usuario: usuario,
    solicitudpersona: solicitudpersona,
    solicitudempresa: solicitudempresa,
  };

  try {
    await OrdenRevisionModel.create(ordenRevision);
    res.send(ordenRevision);
  } catch (error) {
    res.send(error);
  }
};

export const editOrdenRevision = async (req, res) => {
  const { estatus, usuario, solicitudpersona, solicitudempresa } = req.body;

  const { _id } = req.params;
  const ordenRevision = {
    estatus: estatus,
    usuario: usuario,
    solicitudpersona: solicitudpersona,
    solicitudempresa: solicitudempresa,
  };
  try {
    await OrdenRevisionModel.findByIdAndUpdate(_id, ordenRevision);
    res.json(req.body);
  } catch (error) {
    res.send(error);
  }
};

export const deleteOrdenRevision = async (req, res) => {
  const { _id } = req.params;

  try {
    await OrdenRevisionModel.findByIdAndDelete({ _id: _id });
    res.json(req.body);
  } catch (error) {
    res.send(error);
  }
};
