import { model, Schema } from "mongoose";

const SolicitudPersonaSchema = new Schema(
  {
    nombre: {
      type: String,
      max: 40,
      require: true,
    },
    apellido: {
      type: String,
      max: 40,
      require: true,
    },
    apodo: {
      type: String,
      max: 30,
    },
    nacionalidad: {
      type: String,
      max: 30,
      require: true,
    },
    sexo: {
      type: String,
      max: 20,
      require: true,
    },
    tipodocumento: {
      type: String,
      max: 20,
      require: true,
    },
    documento: {
      type: String,
      max: 30,
      require: true,
      unique: true,
    },
    ocupacion: {
      type: String,
      max: 40,
      require: true,
    },
    telefonoresidencial: {
      type: String,
      max: 20,
    },
    celular: {
      type: String,
      max: 20,
      require: true,
    },
    correo: {
      type: String,
      max: 50,
      unique: true,
    },
    direccion: {
      type: String,
      max: 30,
      require: true,
    },
    noresidencia: {
      type: String,
      max: 8,
    },
    sector: {
      type: String,
      max: 30,
    },
    municipio: {
      type: String,
      max: 30,
      require: true,
    },
    provincia: {
      type: String,
      max: 30,
      require: true,
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
    ingreso: {
      type: Schema.Types.Decimal128,
      require: true,
    },
    otrosingresos: {
      type: Boolean,
      require: true,
    },
    poseeinmueble: {
      type: Boolean,
      require: true,
    },
    valorinmueble: {
      type: Schema.Types.Decimal128,
    },
    poseevehiculo: {
      type: Boolean,
      require: true,
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
