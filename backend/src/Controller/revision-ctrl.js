import RevisionModel from "../Model/revision-model.js";

export const getRevision = async (req, res) => {
  const Revision = await RevisionModel.find();
  res.json(Revision);
};

export const saveRevision = async (req, res) => {
  const {
    estatusaprobacion,
    usuario,
  } = req.body;

  const revision =  {
    estatusaprobacion: estatusaprobacion,
    usuario: usuario,
  };

  await RevisionModel.create(revision);
  res.send(revision);
};

export const editRevision = async (req, res) => {
  const {
    estatusaprobacion,
    usuario,
  } = req.body;

  const { _id } = req.params;

  const revision =  {
    estatusaprobacion: estatusaprobacion,
    usuario: usuario,
  };

  await RevisionModel.findByIdAndUpdate(_id, revision)
  res.json(req.body);
};

export const deleteRevision = async (req, res) => {
  const { _id } = req.params;

  await RevisionModel.findByIdAndDelete({ _id: _id});
  res.json(req.body);
}