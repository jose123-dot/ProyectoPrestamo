import { model, Schema } from "mongoose";

const SolicitudPersonaSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    max: 40,
  },

  apellido: {
    type: String,
    require: true,
    max: 40,
  },
  documento: {
    type: String,
    require: true,
    max: 30,
  },
  nacionalidad: {
    type: String,
    require: true,
    max: 30,
  },
  sexo: {
    type: String,
    require: true,
    max: 10,
  },
  apodo: {
    type: String,
    max: 30,
  },

  ocupacion: {
    type: String,
    max: 30,
    require: true,
  },

  lugartrabajo: {
    type: String,
    max: 70,
    require: true,
  },

  telefonoResidencial: {
    type: String,
    max: 20,
  },

  celular: {
    type: String,
    max: 70,
    require: true,
  },

  email: {
    type: String,
    max: 50,
    require: true,
  },

  direccionpersonal: {
    type: String,
    max: 70,
    require: true,
  },
  direccionfamiliar: {
    type: String,
    max: 70,
    require: true,
  },

  direcciontrabajo: {
    type: String,
    max: 70,
    require: true,
  },

  estatus: {
    type: String,
    max: 10,
    require: true,
  },
});

export default model("solicitudpersona", SolicitudPersonaSchema);
