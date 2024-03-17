import { model, Schema } from "mongoose";

const SolicitudPersonaSchema = new Schema(
  {
    nombre: {
      type: String,
      max: 40,
      required: true,
    },
    apellido: {
      type: String,
      max: 40,
      required: true,
    },
    apodo: {
      type: String,
      max: 30,
    },
    nacionalidad: {
      type: String,
      max: 30,
      required: true,
    },
    sexo: {
      type: String,
      max: 20,
      required: true,
    },
    tipodocumento: {
      type: String,
      max: 20,
      required: true,
    },
    documento: {
      type: String,
      max: 30,
      required: true,
      unique: true,
    },
    ocupacion: {
      type: String,
      max: 40,
      required: true,
    },
    telefonoresidencial: {
      type: String,
      max: 20,
    },
    celular: {
      type: String,
      max: 20,
      required: true,
    },
    correo: {
      type: String,
      max: 50,
      unique: true,
    },
    direccion: {
      type: String,
      max: 30,
      required: true,
    },
    noedificio: {
      type: String,
      max: 15,
    },
    nocasa: {
      type: String,
      max: 15,
    },
    sector: {
      type: String,
      max: 30,
    },
    municipio: {
      type: String,
      max: 30,
      required: true,
    },
    provincia: {
      type: String,
      max: 30,
      required: true,
    },
    direccionfamiliar: {
      type: String,
      max: 70,
    },
    cargotrabajo: {
      type: String,
      max: 40,
    },
    direcciontrabajo: {
      type: String,
      max: 70,
    },
    fuenteingreso: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    otrosingresos: {
      type: Boolean,
      required: true,
    },
    poseeinmueble: {
      type: Boolean,
      required: true,
    },
    valorinmueble: {
      type: Schema.Types.Decimal128,
    },
    poseevehiculo: {
      type: Boolean,
      required: true,
    },
    valorvehiculo: {
      type: Schema.Types.Decimal128,
    },

    monto: {
      type: Schema.Types.Decimal128,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("solicitudpersona", SolicitudPersonaSchema);
